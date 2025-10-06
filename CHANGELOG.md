# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2025-10-06

### Added
- **Teacher Tools Suite**: 11 new instructor-focused tools for comprehensive classroom management
  - `canvas_list_students` - List all students in a course with enrollment details and optional profile data
  - `canvas_list_submissions` - List all assignment submissions for a course with filtering capabilities
  - `canvas_update_submission_grade` - Grade individual student submissions with comments
  - `canvas_bulk_update_grades` - Grade multiple submissions efficiently in batch operations
  - `canvas_duplicate_assignment` - Duplicate assignments within or across courses
  - `canvas_delete_assignment` - Delete assignments from courses
  - `canvas_list_sections` - List all sections in a course with student enrollment data
  - `canvas_get_section` - Get detailed information about a specific section
  - `canvas_cross_list_section` - Cross-list (merge) sections across courses
  - `canvas_uncross_list_section` - Remove cross-listing and restore section to original course

### Technical Details
- Added 11 new tool definitions to MCP server (src/index.ts lines 823-1020)
- Implemented corresponding handlers with proper type assertions (src/index.ts lines 1651-1787)
- All tools leverage existing Canvas API client methods (src/client.ts lines 819-926)
- Full TypeScript type safety with strict interface compliance
- Comprehensive test suite added (tests/teacher-tools.test.ts)
- Zero breaking changes - fully backward compatible with existing 61 tools

### Impact
- Total tool count increased from 61 to 72 tools
- Complete teacher/instructor workflow support alongside existing student functionality
- Enhanced grading capabilities with both individual and bulk operations
- Full section management and cross-listing support for complex course structures
- Production-ready with comprehensive error handling and type safety
- Enables complete Canvas LMS administration through MCP interface

## [2.2.3] - 2025-06-27

### Fixed
- **Course Creation Parameters Issue**: Fixed missing `restrict_enrollments_to_course_dates` and other Canvas course parameters in tool schemas
  - Added `restrict_enrollments_to_course_dates` parameter to `canvas_create_course` and `canvas_update_course` tools
  - Added missing course parameters: `is_public_to_auth_users`, `public_syllabus`, `public_syllabus_to_auth`, `public_description`
  - Added missing course settings: `allow_student_wiki_edits`, `allow_wiki_comments`, `allow_student_forum_attachments`
  - Added missing enrollment options: `open_enrollment`, `self_enrollment`
  - Added missing course metadata: `term_id`, `sis_course_id`, `integration_id`
  - Added missing course preferences: `hide_final_grades`, `apply_assignment_group_weights`, `time_zone`

### Technical Details
- Updated `canvas_create_course` inputSchema to include all parameters from `CreateCourseArgs` interface
- Updated `canvas_update_course` inputSchema to include all parameters from `UpdateCourseArgs` interface
- Fixed parameter filtering issue where MCP server was ignoring parameters not defined in inputSchema
- All course creation/update parameters now properly passed to Canvas API

### Impact
- Course date restrictions now work properly when `restrict_enrollments_to_course_dates: true` is set
- All Canvas course configuration options are now available through the MCP tools
- No breaking changes - fully backward compatible

### GitHub Issue
- Resolves: [#9 restrict_enrollments_to_course_dates not respected when creating Canvas courses](https://github.com/DMontgomery40/mcp-canvas-lms/issues/9)

## [2.2.2] - 2025-06-27

### Fixed
- **Critical MCP JSON Communication Fix**: Fixed console.log statements polluting stdout
  - Changed all debug logging from `console.log` to `console.error` in `src/client.ts`
  - Fixed tool execution logging in `src/index.ts` to use stderr
  - Resolved "Unexpected token 'C', '[Canvas API'... is not valid JSON" errors
  - MCP protocol now receives clean JSON communication over stdio
  - Eliminated the constant stream of JSON parsing errors (10 errors/second)

### Technical Details
- Fixed 4 console.log statements that were writing to stdout instead of stderr
- MCP requires pure JSON communication over stdio - any other output breaks parsing
- Debug logs now properly go to stderr (visible in logs but don't interfere with protocol)
- No functional changes - purely a communication protocol fix

### Impact
- **Complete elimination** of the JSON parsing error spam in Claude Desktop
- Canvas MCP server now works properly without communication errors
- Better debugging experience with clean error logs
- No breaking changes - fully backward compatible

## [2.2.1] - 2025-06-27

### Fixed
- **Critical JSON Parsing Error Fix**: Resolved "Unexpected token 'C', '!Canvas API...' is not valid JSON" error
  - Enhanced error response handling to properly process non-JSON responses from Canvas API
  - Added content-type checking to prevent JSON operations on HTML/text error responses
  - Improved error message formatting and truncation for long responses
  - Added graceful fallback for any JSON parsing failures
  - Enhanced logging for better debugging of Canvas API responses

### Technical Details
- Updated `src/client.ts` response interceptor with robust error handling
- Added type checking for Canvas API error responses (string vs object)
- Implemented proper handling of HTML error pages and plain text responses
- Added network error handling for requests with no response
- Improved debug logging showing status codes, content-types, and data types

### Impact
- Eliminates the "benign but drives people insane" JSON parsing errors
- Better error messages for debugging Canvas API issues
- No breaking changes - fully backward compatible
- Improved overall stability and error reporting

## [2.2.0] - Previous Release

### Added
- Comprehensive Canvas LMS MCP server implementation
- Full student functionality with assignments, courses, and submissions
- Account management capabilities
- Dashboard and calendar integration
- Discussion topics and announcements support
- File management and page access
- Grading and rubric support
- User profile management
- Extensive error handling and retry logic
- Comprehensive type definitions
