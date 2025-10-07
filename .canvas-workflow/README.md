# Canvas Workflow System

A BMAD-inspired workflow system for Canvas LMS operations with zero-prompting automation.

## Overview

This system provides intelligent agents, templates, and workflows for efficient Canvas course management. Create assignments, deploy to multiple courses, and manage content with minimal manual input.

## Quick Start

### 1. Activate an Agent

To start using the Canvas workflow system, activate the Assignment Designer agent:

```
Load the file: .canvas-workflow/agents/assignment-designer.md
```

The agent will activate and show available commands.

### 2. Create Assignments from Lesson Spec

The fastest way to create multiple assignments:

```
*create-batch lesson-1-spec.yaml
```

This will:
- Load lesson specification
- Create all assignments in sandbox
- Show results for approval
- Offer bulk copy to all courses

### 3. Quick Single Assignment

For a single assignment:

```
*create
```

Follow the prompts to select template and provide details.

## System Architecture

```
.canvas-workflow/
├── agents/              # Specialized AI agents
│   ├── assignment-designer.md      # Maya - Creates and manages assignments
│   └── canvas-orchestrator.md      # Routes requests to agents
├── templates/           # Assignment templates with smart defaults
│   ├── notebook-check-tmpl.yaml
│   ├── lesson-handout-tmpl.yaml
│   └── lesson-quiz-tmpl.yaml
├── specs/              # Lesson specifications
│   ├── lesson-1-spec.yaml
│   └── lesson-2-spec.yaml
├── tasks/              # Workflow task definitions
│   ├── create-assignment-batch.md
│   ├── bulk-copy-to-courses.md
│   └── validate-assignment.md
└── workflows/          # Complete workflow definitions
```

## Agents

### Assignment Designer (Maya) 📝
**When to use**: Creating, modifying, or deploying assignments

**Commands**:
- `*help` - Show all commands
- `*create` - Interactive single assignment creation
- `*create-batch <spec-file>` - Create multiple assignments from spec
- `*bulk-copy` - Copy sandbox assignments to production courses
- `*validate <assignment>` - Validate assignment before publishing
- `*publish <assignment>` - Publish validated assignment
- `*list <course>` - List assignments in course
- `*exit` - Exit agent mode

### Canvas Orchestrator 🎯
**When to use**: Entry point, routes natural language requests

**Commands**:
- `*help` - Show system capabilities
- `*status` - Show system status
- `*agents` - List all available agents

### Lesson Planner (Sophia) 📚
**When to use**: Extract lesson details from teacher editions, create lesson specs

**Commands**:
- `*help` - Show all commands
- `*find-lesson grade=X unit=Y lesson=Z` - Locate teacher edition materials
- `*extract-objectives` - Guide through extracting lesson objectives
- `*extract-agenda` - Guide through extracting lesson timeline
- `*extract-materials` - Guide through listing materials and handouts
- `*create-spec lesson=X` - Generate lesson specification file
- `*list-specs` - Show all existing lesson specs
- `*edit-spec <spec-file>` - Modify existing specification
- `*exit` - Exit agent mode

**Workflow**: Semi-automated - automates file discovery, elicits content from user

## Templates

Templates provide smart defaults and patterns for different assignment types:

### Notebook Check Template
- **Points**: Always 0 (completion-based)
- **Pattern**: "Notebook {section}"
- **Use for**: Table of contents, lab safety, procedure notes

### Lesson Handout Template
- **Points**: Always 0 (completion-based)
- **Pattern**: "{concept}"
- **Description**: "Complete the {ordinal} handout from Lesson {number}"
- **Use for**: Worksheets, guided notes, practice problems

### Lesson Quiz Template
- **Points**: Default 25 (5 points per question)
- **Pattern**: "Lesson {number} Quiz"
- **Description**: Auto-generated with question count
- **Use for**: Lesson assessments, comprehension checks

## Lesson Specs

Lesson spec files define all assignments for a lesson in one place:

```yaml
lesson:
  number: 1
  title: "Introduction to Collisions"
  due_date_default: "2025-10-10"

assignments:
  - type: notebook-check
    section: "Table of Contents"
    due_date: "2025-10-10"

  - type: lesson-handout
    concept: "Initial Models Collisions"
    lesson_number: 1
    handout_sequence: 1
    due_date: "2025-10-10"

  - type: lesson-quiz
    lesson_number: 1
    points_possible: 25
    due_date: "2025-10-03"
```

## Workflows

### Complete Lesson Deployment

1. Create assignments in sandbox: `*create-batch lesson-X-spec.yaml`
2. Review created assignments
3. Approve for bulk copy
4. System copies to all courses
5. Validate assignments: `*validate`
6. Publish when ready: `*publish`

### Quick Single Assignment

1. Create assignment: `*create`
2. Select template (numbered options)
3. Provide required info
4. Review in sandbox
5. Approve for bulk copy
6. Done!

## Visual Workflows

For detailed workflow diagrams with mermaid visualizations, see:
**[Workflow Diagrams](docs/workflow-diagrams.md)**

Available diagrams:
- Complete Lesson Deployment (planning → creation → publication)
- Quick Single Assignment
- Lesson Planning with Google Drive Integration
- Batch Assignment Creation from Spec
- Bulk Copy to Courses
- Assignment Validation
- Agent Interaction Map
- System Data Flow

## Integration with Hooks

The system integrates with existing Canvas logging hooks:

- **PostToolUse Hook**: Automatically logs all Canvas operations to `canvas-operations.md`
- **Course Mapping**: Uses `.claude/hooks/course-mapping.json` for readable course names
- All operations are tracked with timestamps and details

## Sandbox-First Philosophy

**Always test in sandbox first!**

- Sandbox Course ID: 2500
- All creation workflows start in sandbox
- Review and approve before deploying to production
- Prevents mistakes in student-facing courses

## Best Practices

1. **Define lesson specs**: Create spec files for each lesson upfront
2. **Use templates**: Leverage templates for consistency
3. **Validate before publishing**: Always run `*validate` before `*publish`
4. **Review logs**: Check `canvas-operations.md` for operation history
5. **Test workflows**: Try new workflows in sandbox first

## Customization

### Adding New Templates

1. Create new template in `.canvas-workflow/templates/`
2. Follow existing template structure (YAML format)
3. Define defaults, patterns, and elicitation fields
4. Add validation rules

### Adding New Lesson Specs

1. Copy existing spec file (e.g., `lesson-1-spec.yaml`)
2. Update lesson metadata
3. Define assignments using template types
4. Set deployment preferences

### Extending Agents

Agents are defined in markdown files with embedded YAML. To customize:

1. Open agent file (e.g., `assignment-designer.md`)
2. Modify YAML block for persona, commands, or workflows
3. Save and reload agent

## Troubleshooting

**Agent not activating**:
- Ensure you loaded the full agent .md file
- Check that YAML block is properly formatted

**Template not found**:
- Verify template exists in `.canvas-workflow/templates/`
- Check spelling of template type in spec file

**Bulk copy failing**:
- Verify course IDs in `course-mapping.json`
- Check that assignments exist in sandbox
- Review error messages for specific issues

**Validation failing**:
- Review validation checklist output
- Fix critical issues first
- Warnings can often be ignored if intentional

**Google Drive files not extracting**:
- Google Drive MCP cannot read PDF/Word content directly
- Use lesson-planner agent for semi-automated workflow
- Agent locates files, user provides content manually
- See `.canvas-workflow/docs/google-drive-mcp-findings.md` for details

## Future Enhancements

- ~~Lesson Planner agent for Google Drive integration~~ ✅ **COMPLETED** (v2.5.0)
- Grading Assistant agent for batch grading workflows
- Course Architect agent for module/structure management
- Analytics Reviewer agent for performance reporting
- Content Publisher agent for visibility management

## Support

For issues or questions:
1. Check this README
2. Review agent help: `*help`
3. Check canvas-operations.md logs
4. Review BMAD method documentation in `.bmad-core/`
