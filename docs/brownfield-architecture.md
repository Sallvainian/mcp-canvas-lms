# Canvas MCP Server - Brownfield Architecture Document

## Introduction

This document captures the **CURRENT STATE** of the Canvas MCP Server codebase, including technical debt, workarounds, and real-world patterns. It serves as a reference for AI agents and developers working on enhancements, particularly focusing on **teacher-focused tools** for Canvas LMS integration.

### Document Scope

**Primary Focus**: Teacher/Instructor tools and workflows for Canvas LMS
- Student roster management
- Grading and submissions
- Assignment management
- Section administration

**Out of Scope**: Account administration tools (these exist but are not the primary focus)

### Change Log

| Date       | Version | Description                 | Author           |
|------------|---------|----------------------------|------------------|
| 2025-10-06 | 1.0     | Initial brownfield analysis | Winston (AI Architect) |

---

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry Point**: `src/index.ts` (3,347 lines) - MCP server initialization and tool definitions
- **Canvas API Client**: `src/client.ts` (1,760 lines) - HTTP client with retry logic and pagination
- **Type Definitions**: `src/types.ts` (1,384 lines) - TypeScript interfaces for Canvas entities
- **Configuration**: `.env.example` - Environment variables for Canvas domain and API token
- **Build Configuration**: `tsconfig.json` - TypeScript compiler settings
- **Package Dependencies**: `package.json` - Node.js dependencies and scripts

### Teacher Tools (Added in v2.3.0)

Located in `src/index.ts` starting at line ~855:
- `canvas_list_students` (line 859)
- `canvas_list_submissions` (line 882)
- `canvas_update_submission_grade` (line 909)
- `canvas_bulk_update_grades` (line 931)
- `canvas_duplicate_assignment` (line 964)
- `canvas_delete_assignment` (line 976)
- `canvas_list_sections` (line 992)
- `canvas_cross_list_section` (line 1031)

---

## High Level Architecture

### Technical Summary

**Architecture Pattern**: Model Context Protocol (MCP) Server
- Implements MCP SDK v0.6.1 for AI assistant integration
- Provides 72 tools exposing Canvas LMS REST API endpoints
- Runs as stdio-based server (JSON-RPC over stdin/stdout)
- Designed for integration with Claude Desktop and other MCP clients

**Primary Use Case**: Enable AI assistants to interact with Canvas LMS on behalf of teachers/instructors

### Actual Tech Stack

| Category | Technology | Version | Notes |
|----------|-----------|---------|-------|
| Runtime | Node.js | >=18.0.0 | ES2020 modules |
| Language | TypeScript | 5.4.5 | Strict mode enabled |
| MCP SDK | @modelcontextprotocol/sdk | 0.6.1 | Official Anthropic SDK |
| HTTP Client | axios | 1.7.2 | With interceptors for retry/pagination |
| Validation | zod | 4.1.11 | Runtime type validation |
| Environment | dotenv | 16.4.7 | Environment variable management |
| Testing | vitest | 3.2.4 | Unit and integration tests |
| Linting | eslint + typescript-eslint | 8.57.0 / 7.18.0 | Code quality enforcement |

### Repository Structure

- **Type**: Single repository (not monorepo)
- **Package Manager**: npm
- **Module System**: ES Modules (type: "module" in package.json)
- **Build Output**: `build/` directory (transpiled JavaScript)

---

## Source Tree and Module Organization

### Project Structure (Actual)

```
mcp-canvas-lms/
├── src/                          # TypeScript source files (3 files, ~6,500 lines)
│   ├── index.ts                  # Main MCP server + 72 tool definitions
│   ├── client.ts                 # Canvas API HTTP client
│   └── types.ts                  # TypeScript type definitions
├── tests/                        # Test files
│   └── teacher-tools.test.ts     # Teacher tools test suite
├── build/                        # Compiled JavaScript (git-ignored)
├── docs/                         # Documentation
│   └── brownfield-architecture.md  # This file
├── scripts/                      # Deployment and utility scripts
│   ├── deploy.sh
│   └── health-check.sh
├── .env.example                  # Environment template
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── docker-compose.yml            # Docker deployment config
├── Dockerfile                    # Container image definition
└── README.md                     # User-facing documentation
```

### Key Modules and Their Purpose

**`src/index.ts`** - MCP Server Core
- Initializes MCP server with stdio transport
- Defines all 72 Canvas LMS tools
- Implements tool request handlers (CallToolRequestSchema)
- Routes tool calls to appropriate client methods
- **CRITICAL**: All console output MUST use `console.error()` not `console.log()` (stdout is reserved for MCP JSON protocol)

**`src/client.ts`** - Canvas API Client
- CanvasClient class with axios HTTP client
- Automatic pagination handling via Link headers
- Exponential backoff retry logic (3 attempts by default)
- Request/response interceptors for logging and error handling
- 50+ methods covering Canvas REST API endpoints
- **GOTCHA**: Timeout is 30 seconds (line 107), may need adjustment for large data sets

**`src/types.ts`** - Type Definitions
- 100+ TypeScript interfaces for Canvas entities
- Branded types for type-safe IDs (CourseId, AssignmentId, etc.)
- Custom error classes (CanvasAPIError, CanvasValidationError)
- Argument interfaces for all tool inputs

---

## Data Models and API Integration

### Canvas API Data Models

Rather than duplicate all interfaces here, see `src/types.ts` for complete definitions:

**Core Entities** (lines 41-520):
- `CanvasUser` - User accounts and profiles
- `CanvasCourse` - Course objects with enrollments
- `CanvasAssignment` - Assignment configurations
- `CanvasSubmission` - Student submissions with grading
- `CanvasModule` - Course module structure
- `CanvasDiscussionTopic` - Discussion boards
- `CanvasQuiz` - Quiz/exam definitions
- `CanvasSection` - Course sections for cross-listing

**Teacher-Specific Types** (lines 520+):
- `ListStudentsArgs` - Roster retrieval parameters
- `ListSubmissionsArgs` - Submission filtering options
- `UpdateSubmissionGradeArgs` - Individual grading
- `BulkUpdateGradesArgs` - Batch grading operations
- `CrossListSectionArgs` - Section merging parameters

### Canvas REST API Integration

**Base URL Pattern**: `https://{CANVAS_DOMAIN}/api/v1`

**Authentication**: Bearer token via Authorization header
- Token stored in `CANVAS_API_TOKEN` environment variable
- User must generate token from Canvas → Account → Settings → Approved Integrations

**Common Patterns**:
1. **Pagination**: Handled automatically by client interceptor (follows Link headers)
2. **Includes**: Many endpoints support `?include[]=` query params for related data
3. **Error Handling**: Canvas returns structured errors with `{errors: [...]}` or `{message: "..."}`

**Key API Endpoints Used** (see `src/client.ts` methods):
- `GET /api/v1/courses` - List courses
- `GET /api/v1/courses/:id/users?enrollment_type[]=student` - List students (teacher tool)
- `GET /api/v1/courses/:id/students/submissions` - List all submissions (teacher tool)
- `PUT /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id` - Grade submission
- `POST /api/v1/courses/:id/submissions/update_grades` - Bulk grade updates
- `POST /api/v1/sections/:id/crosslist/:new_course_id` - Cross-list sections

---

## MCP Protocol Implementation

### MCP Server Architecture

**Transport**: StdioServerTransport (JSON-RPC over stdin/stdout)

**Tool Definition Pattern** (lines 70-1090 in `src/index.ts`):
```typescript
{
  name: "canvas_list_students",
  description: "List all students enrolled in a course...",
  inputSchema: {
    type: "object",
    properties: {
      course_id: { type: "number", description: "..." },
      include: { type: "array", items: { ... } }
    },
    required: ["course_id"]
  }
}
```

**Tool Handler Pattern** (lines 1651+ in `src/index.ts`):
```typescript
case "canvas_list_students": {
  const args = request.params.arguments as ListStudentsArgs;
  const students = await client.listStudents(
    args.course_id,
    args.include
  );
  return { content: [{ type: "text", text: JSON.stringify(students, null, 2) }] };
}
```

**Request Flow**:
1. MCP client sends CallToolRequest via stdio
2. Server parses request and extracts tool name + arguments
3. Server validates arguments against inputSchema (Zod runtime validation)
4. Server calls corresponding CanvasClient method
5. CanvasClient makes HTTP request to Canvas API
6. Response is formatted as MCP content and returned via stdio

### CRITICAL: Stdio Protocol Rules

**NEVER use `console.log()` in this codebase**
- Stdout is reserved for MCP JSON protocol communication
- Any non-JSON output to stdout breaks the MCP client
- **ALL debug logging must use `console.error()`** (goes to stderr)

**Historical Bug**: In v2.2.2, console.log statements caused constant JSON parsing errors. Fixed by changing all logging to stderr. See CHANGELOG.md lines 64-79.

---

## Technical Debt and Known Issues

### Critical Technical Debt

1. **MCP Protocol Pollution** (FIXED in v2.2.2)
   - **Issue**: console.log statements writing to stdout
   - **Impact**: "Unexpected token 'C', '[Canvas API'... is not valid JSON" errors
   - **Fix**: Changed all logging to console.error() in src/client.ts and src/index.ts
   - **Status**: ✅ Resolved

2. **Course Creation Missing Parameters** (FIXED in v2.2.3)
   - **Issue**: `restrict_enrollments_to_course_dates` and other Canvas course params ignored
   - **Impact**: Course date restrictions not working when creating courses
   - **Fix**: Added all Canvas course parameters to inputSchema definitions
   - **Status**: ✅ Resolved

3. **Limited Test Coverage**
   - **Current**: Only `tests/teacher-tools.test.ts` exists
   - **Missing**: Integration tests for MCP protocol, Canvas API error scenarios
   - **Impact**: Regression risk when modifying tool handlers
   - **Priority**: Medium (add tests when adding new tools)

4. **Error Handling Inconsistency**
   - **Issue**: Some Canvas API errors return HTML instead of JSON
   - **Mitigation**: Client has special handling for non-JSON responses (lines 173-190 in client.ts)
   - **Gotcha**: String errors are truncated to 200 chars to avoid massive error messages

### Workarounds and Gotchas

**Environment Configuration**:
- **CANVAS_API_TOKEN**: Must have appropriate Canvas permissions (teacher role minimum)
- **CANVAS_DOMAIN**: Must be full domain WITHOUT `https://` (e.g., `school.instructure.com`)
- **CANVAS_TIMEOUT**: Default 30 seconds, may need increase for large courses

**Canvas API Quirks**:
- **Pagination**: Some endpoints return 100+ pages of data. Client automatically follows all pages, but this can be slow
- **Rate Limiting**: Canvas has rate limits (not currently handled). May need exponential backoff enhancement
- **Submission States**: Canvas has complex submission workflow states that can be confusing

**TypeScript Type Safety**:
- Branded types (CourseId, AssignmentId) provide compile-time safety but require type assertions at runtime
- Canvas API responses sometimes have optional fields that aren't in official docs

---

## Development and Deployment

### Local Development Setup

**Prerequisites**:
- Node.js >= 18.0.0
- npm >= 8.0.0
- Canvas LMS account with API token

**Setup Steps**:
```bash
# 1. Clone repository
git clone https://github.com/DMontgomery40/mcp-canvas-lms.git
cd mcp-canvas-lms

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your Canvas credentials:
#   CANVAS_API_TOKEN=your_token_here
#   CANVAS_DOMAIN=yourschool.instructure.com

# 4. Build TypeScript
npm run build

# 5. Test the server
npm start
```

**Development Workflow**:
```bash
# Watch mode for development (auto-rebuild on file changes)
npm run dev:watch

# Run tests
npm test

# Type checking without build
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
```

### Build and Deployment Process

**Build Command**: `npm run build`
- Compiles TypeScript from `src/` to `build/`
- Uses tsconfig.json settings (ES2020 target, ES2020 modules)
- Generates type declaration files (.d.ts)

**Deployment Options**:

1. **NPM Package** (Recommended for users):
   ```bash
   npm install -g canvas-mcp-server
   canvas-mcp-server  # Runs from global install
   ```

2. **Claude Desktop Integration**:
   ```json
   {
     "mcpServers": {
       "canvas-mcp-server": {
         "command": "npx",
         "args": ["-y", "canvas-mcp-server"],
         "env": {
           "CANVAS_API_TOKEN": "your_token",
           "CANVAS_DOMAIN": "yourschool.instructure.com"
         }
       }
     }
   }
   ```

3. **Docker** (see Dockerfile and docker-compose.yml):
   ```bash
   docker-compose up -d
   ```

4. **Manual Deployment** (via scripts/deploy.sh):
   - Builds project
   - Runs health checks
   - Deploys to target environment

**Environments**:
- **Development**: Local machine with `.env` file
- **Production**: Docker container or npm global install

---

## Testing Strategy

### Current Test Coverage

**Existing Tests**:
- `tests/teacher-tools.test.ts` - Unit tests for teacher tools added in v2.3.0
- Test framework: Vitest 3.2.4
- Coverage reporting: @vitest/coverage-v8

**Running Tests**:
```bash
npm test              # Run all tests
npm run test:unit     # Run unit tests only
npm run test:watch    # Watch mode
npm run coverage      # Generate coverage report
```

### Testing Gaps and Recommendations

**Missing Coverage**:
1. **MCP Protocol Integration**: No tests for MCP server initialization, tool schemas, request handling
2. **Canvas API Client**: No tests for retry logic, pagination, error handling
3. **Integration Tests**: No end-to-end tests with real Canvas API (or mocked equivalent)
4. **Error Scenarios**: Need tests for Canvas API errors, network failures, invalid tokens

**Recommended Testing Approach for New Tools**:
1. Mock Canvas API responses using vitest mocks
2. Test tool schema validation (Zod schemas)
3. Test tool handler logic with various inputs
4. Test error handling for Canvas API failures
5. Follow pattern in `tests/teacher-tools.test.ts`

---

## Integration Points and External Dependencies

### External Services

| Service | Purpose | Integration Type | Configuration |
|---------|---------|------------------|---------------|
| Canvas LMS REST API | Primary data source | HTTPS REST API | `CANVAS_DOMAIN` + `CANVAS_API_TOKEN` |

**Canvas API Documentation**: https://canvas.instructure.com/doc/api/

**Canvas API Version**: v1 (stable)

**Authentication Method**: Bearer token (Personal Access Token generated by user)

### MCP Client Integration

**Supported MCP Clients**:
- Claude Desktop (primary target)
- Any MCP-compatible AI assistant

**MCP SDK Version**: 0.6.1 (Anthropic official SDK)

**Communication Protocol**: JSON-RPC over stdio

**Tool Discovery**: MCP clients call `tools/list` to discover all 72 available tools

---

## Teacher Tools Deep Dive

### Student Roster Management

**Tool**: `canvas_list_students`
- **Purpose**: List all students enrolled in a course with optional profile data
- **Client Method**: `client.listStudents()` (src/client.ts line ~819)
- **Canvas Endpoint**: `GET /api/v1/courses/:course_id/users?enrollment_type[]=student`
- **Parameters**:
  - `course_id` (required): Course ID
  - `include` (optional): Array of additional data (avatar_url, enrollments, email, bio)
- **Returns**: Array of CanvasUser objects with enrollment details

**Common Use Cases**:
- View complete class roster
- Get student email addresses for communication
- Check enrollment status and dates
- Export student list for record-keeping

### Grading and Submissions

**Tool**: `canvas_list_submissions`
- **Purpose**: List submissions for multiple assignments/students with filtering
- **Client Method**: `client.listSubmissions()` (src/client.ts line ~839)
- **Canvas Endpoint**: `GET /api/v1/courses/:course_id/students/submissions`
- **Parameters**:
  - `course_id` (required)
  - `student_ids` (optional): Filter by specific students
  - `assignment_ids` (optional): Filter by specific assignments
  - `grouped` (optional): Group submissions by student
  - `workflow_state` (optional): Filter by submission state
- **Returns**: Array of CanvasSubmission objects (or grouped by student)

**Tool**: `canvas_update_submission_grade`
- **Purpose**: Grade individual student submission with comments
- **Client Method**: `client.updateSubmissionGrade()` (src/client.ts line ~858)
- **Canvas Endpoint**: `PUT /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id`
- **Parameters**:
  - `course_id`, `assignment_id`, `user_id` (required)
  - `posted_grade` (optional): Numeric or letter grade
  - `excuse` (optional): Boolean to excuse submission
  - `text_comment` (optional): Comment text
- **Returns**: Updated CanvasSubmission object

**Tool**: `canvas_bulk_update_grades`
- **Purpose**: Grade multiple submissions at once (batch operation)
- **Client Method**: `client.bulkUpdateGrades()` (src/client.ts line ~875)
- **Canvas Endpoint**: `POST /api/v1/courses/:course_id/submissions/update_grades`
- **Parameters**:
  - `course_id` (required)
  - `grade_data` (required): Object with student IDs as keys, grade data as values
- **Returns**: Canvas Progress object (async operation)

**Grading Workflow Example**:
1. List all submissions for an assignment (`canvas_list_submissions`)
2. Review submissions and determine grades
3. Use bulk update for efficiency (`canvas_bulk_update_grades`)
4. Or grade individually with comments (`canvas_update_submission_grade`)

### Assignment Management

**Tool**: `canvas_duplicate_assignment`
- **Purpose**: Copy an existing assignment within or across courses
- **Client Method**: `client.duplicateAssignment()` (src/client.ts line ~892)
- **Canvas Endpoint**: `POST /api/v1/courses/:course_id/assignments/:id/duplicate`
- **Use Case**: Reuse assignments from previous terms or sections

**Tool**: `canvas_delete_assignment`
- **Purpose**: Remove an assignment from a course
- **Client Method**: `client.deleteAssignment()` (src/client.ts line ~905)
- **Canvas Endpoint**: `DELETE /api/v1/courses/:course_id/assignments/:id`
- **Warning**: Destructive operation, cannot be easily undone

### Section Administration

**Tool**: `canvas_list_sections`
- **Purpose**: List all sections in a course
- **Client Method**: `client.listSections()` (src/client.ts line ~914)
- **Canvas Endpoint**: `GET /api/v1/courses/:course_id/sections`
- **Returns**: Array of CanvasSection objects with student counts

**Tool**: `canvas_cross_list_section`
- **Purpose**: Move a section into another course (merge courses)
- **Client Method**: `client.crossListSection()` (src/client.ts line ~926)
- **Canvas Endpoint**: `POST /api/v1/sections/:id/crosslist/:new_course_id`
- **Use Case**: Combine multiple sections into single course for teaching

**Tool**: `canvas_uncross_list_section`
- **Purpose**: Remove cross-listing and restore section to original course
- **Client Method**: `client.uncrossListSection()` (client.ts - method exists per IMPLEMENTATION_PLAN.md)
- **Canvas Endpoint**: `DELETE /api/v1/sections/:id/crosslist`

---

## Coding Standards and Patterns

### TypeScript Standards

**Type Safety**:
- Strict mode enabled in tsconfig.json
- No implicit any allowed
- Branded types for ID safety (CourseId, AssignmentId, UserId)
- Runtime validation with Zod for external data

**Code Organization**:
- All types in `src/types.ts`
- All Canvas API methods in `src/client.ts`
- All MCP tool definitions in `src/index.ts`
- Keep files focused on single responsibility

**Naming Conventions**:
- Interfaces: PascalCase with "Canvas" prefix (e.g., CanvasCourse)
- Types: PascalCase (e.g., CanvasCourseState)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- MCP tools: snake_case with "canvas_" prefix (e.g., canvas_list_students)

### Error Handling Patterns

**Canvas API Errors**:
```typescript
try {
  const response = await this.client.get('/api/v1/...');
  return response.data;
} catch (error) {
  throw new CanvasAPIError(
    `Canvas API Error: ${error.message}`,
    error.response?.status,
    error.response?.data
  );
}
```

**MCP Tool Error Responses**:
```typescript
try {
  const result = await client.someMethod(args);
  return {
    content: [{
      type: "text",
      text: JSON.stringify(result, null, 2)
    }]
  };
} catch (error) {
  return {
    content: [{
      type: "text",
      text: `Error: ${error instanceof Error ? error.message : String(error)}`
    }],
    isError: true
  };
}
```

### Logging Standards

**CRITICAL RULE**: Never use `console.log()` - always use `console.error()`

**Logging Patterns**:
```typescript
// Request logging
console.error(`[Canvas API] ${method.toUpperCase()} ${url}`);

// Error logging
console.error('[Canvas API] Request error:', error.message || error);

// Retry logging
console.error(`[Canvas API] Retrying request (${count}/${max}) after ${delay}ms`);
```

**Why stderr?**: MCP protocol uses stdout for JSON-RPC communication. Any stdout pollution breaks the protocol.

---

## Architecture Decision Records

### ADR-001: MCP Protocol Over HTTP REST API

**Decision**: Implement MCP server instead of traditional REST API or CLI tool

**Rationale**:
- MCP provides standardized protocol for AI assistant integration
- Works seamlessly with Claude Desktop and other MCP clients
- Enables natural language interaction with Canvas LMS
- Future-proof as more AI assistants adopt MCP

**Alternatives Considered**:
- REST API wrapper: More complex deployment, requires hosting
- CLI tool: Less flexible, requires command memorization
- Direct API access: No abstraction, harder for non-technical users

### ADR-002: Axios for HTTP Client

**Decision**: Use axios instead of native fetch or other HTTP libraries

**Rationale**:
- Built-in interceptor support for retry logic and pagination
- Better error handling with AxiosError objects
- Widely used and well-documented
- Request/response transformation capabilities

**Implementation Details**:
- Automatic pagination via response interceptor (follows Link headers)
- Exponential backoff retry logic in error interceptor
- 30-second timeout configurable via constructor

### ADR-003: Focus on Teacher Tools

**Decision**: Prioritize teacher/instructor workflow tools over student/admin tools

**Rationale**:
- Primary user is a teacher wanting to manage Canvas courses
- Teacher tools have highest ROI for daily classroom management
- Student tools already well-covered in v2.0-2.2
- Admin tools less frequently needed

**Implementation**: v2.3.0 added 11 teacher tools focusing on:
- Roster management
- Grading workflows
- Assignment administration
- Section cross-listing

---

## Future Enhancements and Roadmap

### Short-term Priorities (Next Release)

1. **Enhanced Grading Tools**:
   - SpeedGrader URL generation
   - Rubric-based grading
   - Assignment override management (already partially implemented)
   - Late policy management

2. **Improved Error Handling**:
   - Better Canvas API rate limit handling
   - More descriptive error messages for common issues
   - Retry with user notification for transient failures

3. **Test Coverage**:
   - MCP protocol integration tests
   - Canvas API client unit tests
   - Error scenario coverage

### Medium-term Goals

1. **Performance Optimization**:
   - Implement Canvas API pagination limits (don't auto-fetch all pages)
   - Add caching for frequently accessed data (courses, assignments)
   - Parallel request batching where possible

2. **Advanced Teacher Features**:
   - Outcome management and standards-based grading
   - Course activity analytics
   - Student progress tracking
   - Attendance management

3. **Developer Experience**:
   - Better documentation for adding new tools
   - Tool generator script (template for new Canvas endpoints)
   - Development mode with Canvas API sandbox

### Long-term Vision

1. **Multi-LMS Support**: Extend to other learning management systems (Moodle, Blackboard)
2. **Advanced AI Features**: Intelligent grading suggestions, pattern detection in submissions
3. **Canvas Plugins**: Direct Canvas LMS integration as a plugin
4. **Mobile Support**: MCP integration with mobile AI assistants

---

## Common Development Tasks

### Adding a New Canvas API Tool

**Step-by-step Process**:

1. **Add TypeScript Types** (src/types.ts):
```typescript
export interface NewToolArgs {
  course_id: number;
  param1: string;
  param2?: boolean;
}

export interface NewToolResponse {
  // Define Canvas API response structure
}
```

2. **Add Client Method** (src/client.ts):
```typescript
async newToolMethod(args: NewToolArgs): Promise<NewToolResponse> {
  const response = await this.client.get(
    `/courses/${args.course_id}/endpoint`,
    { params: { param1: args.param1 } }
  );
  return response.data;
}
```

3. **Add MCP Tool Definition** (src/index.ts ~line 70-1090):
```typescript
{
  name: "canvas_new_tool",
  description: "Clear description of what this tool does",
  inputSchema: {
    type: "object",
    properties: {
      course_id: { type: "number", description: "Course ID" },
      param1: { type: "string", description: "Parameter description" },
      param2: { type: "boolean", description: "Optional parameter" }
    },
    required: ["course_id", "param1"]
  }
}
```

4. **Add Tool Handler** (src/index.ts ~line 1651+):
```typescript
case "canvas_new_tool": {
  const args = request.params.arguments as NewToolArgs;
  const result = await client.newToolMethod(args);
  return {
    content: [{
      type: "text",
      text: JSON.stringify(result, null, 2)
    }]
  };
}
```

5. **Add Tests** (tests/new-tool.test.ts):
```typescript
import { describe, it, expect } from 'vitest';
// Test tool handler, client method, error cases
```

6. **Update Documentation**:
- Add tool to README.md
- Update CHANGELOG.md
- Increment version in package.json

### Debugging MCP Communication Issues

**Common Issue**: "Unexpected token" or JSON parsing errors

**Root Cause**: Something is writing to stdout besides MCP JSON

**Debug Steps**:
1. Check for `console.log()` statements - replace with `console.error()`
2. Check for `process.stdout.write()` - should only be MCP SDK
3. Run with `LOG_LEVEL=debug` to see stderr output
4. Use MCP Inspector: `npm run inspector`

**MCP Inspector** (built-in tool):
```bash
npm run inspector
# Opens interactive MCP testing tool
# Can test individual tools without Claude Desktop
```

### Testing Against Live Canvas

**Setup Test Account**:
1. Get Canvas Free-for-Teacher account or sandbox instance
2. Create test courses, students, assignments
3. Generate API token with appropriate permissions
4. Add to `.env.test` file (git-ignored)

**Integration Testing Pattern**:
```bash
# Set test environment variables
export CANVAS_API_TOKEN="test_token"
export CANVAS_DOMAIN="test.instructure.com"

# Run integration tests
npm run test:integration
```

**IMPORTANT**: Never commit real Canvas tokens or production credentials

---

## Appendix - Useful Commands and Scripts

### Frequently Used Commands

```bash
# Development
npm run dev:watch         # Auto-rebuild on file changes + restart server
npm run build            # Compile TypeScript to build/
npm run type-check       # Type check without build

# Testing
npm test                 # Run all tests
npm run test:watch       # Watch mode for TDD
npm run coverage         # Generate coverage report

# Code Quality
npm run lint             # Check code style
npm run lint:fix         # Auto-fix lint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting without changes

# MCP Tools
npm run inspector        # Open MCP Inspector for testing
npm start                # Start MCP server (production mode)

# Deployment
npm run clean            # Remove build artifacts
npm run docker:build     # Build Docker image
npm run docker:run       # Run in Docker container
npm run health-check     # Verify server health
npm run deploy           # Deploy to production (via script)

# Release
npm run release          # Create new release (version bump + publish)
npm run release:dry-run  # Test release process without publishing
```

### Debugging and Troubleshooting

**Server Logs**:
- All logs go to stderr (visible in terminal or Claude Desktop logs)
- Set `LOG_LEVEL=debug` for verbose logging
- Check Claude Desktop: Help → View Logs

**Common Issues**:

1. **401 Unauthorized**:
   - Check CANVAS_API_TOKEN is valid
   - Verify token has not expired
   - Ensure token has appropriate permissions (teacher role minimum)

2. **404 Not Found**:
   - Verify course_id, assignment_id, etc. are correct
   - Check if user has access to the resource
   - Some resources may be hidden or deleted

3. **Timeout Errors**:
   - Increase CANVAS_TIMEOUT (default 30s)
   - Large courses with many students may take longer
   - Check network connectivity to Canvas domain

4. **MCP JSON Parsing Errors**:
   - Look for any console.log() statements (should be console.error())
   - Check for unhandled exceptions writing to stdout
   - Run MCP Inspector to test in isolation

**Health Check Script**:
```bash
./scripts/health-check.sh
# Verifies:
# - Environment variables are set
# - Canvas API is reachable
# - Authentication works
# - Basic tool execution succeeds
```

**Canvas API Documentation**:
- Official API docs: https://canvas.instructure.com/doc/api/
- Live API explorer: https://canvas.instructure.com/doc/api/live
- Canvas Community: https://community.canvaslms.com/

---

## Document Maintenance

**When to Update This Document**:
- Adding new Canvas API tools or features
- Discovering technical debt or workarounds
- Fixing bugs that reveal architectural issues
- Making architecture decisions (add new ADRs)
- Changing development workflows or tooling

**Update Procedure**:
1. Edit `docs/brownfield-architecture.md`
2. Update Change Log with date, version, description
3. Commit with descriptive message
4. Consider creating architecture shard if document grows too large

**Document Owner**: Project maintainer and AI agents working on enhancements

---

*This document was generated by Winston (AI Architect) based on comprehensive codebase analysis as of October 6, 2025. For the most current code, always refer to the actual source files.*
