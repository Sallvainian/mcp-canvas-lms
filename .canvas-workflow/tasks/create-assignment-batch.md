# Task: Create Assignment Batch

**Purpose**: Create multiple assignments from a lesson specification file in one workflow

**Elicit**: true (requires user confirmation before bulk operations)

## Prerequisites
- Lesson spec file exists in `.canvas-workflow/specs/`
- Sandbox course available (ID: 2500)
- Assignment templates available in `.canvas-workflow/templates/`

## Workflow Steps

### 1. Load Specification
- Accept spec file path from user (e.g., `lesson-1-spec.yaml`)
- Read and parse YAML specification
- Validate spec file structure
- Extract lesson metadata and assignment list

### 2. Validate Assignments
For each assignment in spec:
- Verify template exists for assignment type
- Check all required fields are present
- Validate due dates are in correct format
- Confirm no duplicate assignment names

### 3. Create in Sandbox
For each assignment:
- Load appropriate template
- Merge spec data with template defaults
- Format description using template pattern
- Call Canvas MCP `canvas_create_assignment` with:
  - course_id: 2500 (sandbox)
  - All merged assignment data
- Store created assignment ID for tracking

### 4. Present Results
- Show numbered list of created assignments:
  ```
  Created 4 assignments in SandBox:
  1. Notebook Table of Contents and Table of Progress (0 pts, due Oct 10)
  2. Initial Models Collisions (0 pts, due Oct 10)
  3. Object Interactions (0 pts, due Oct 10)
  4. Lesson 1 Quiz (25 pts, due Oct 3)
  ```

### 5. Elicit Approval
Ask user: "Approve this batch for bulk copy to all courses? (yes/no/modify)"
- If "yes" → Proceed to bulk copy workflow
- If "no" → Stop and return to command prompt
- If "modify" → Ask which assignments to modify, re-create those

## Error Handling
- **Template not found**: List available templates, ask user to select different type
- **Spec file invalid**: Show validation errors, ask user to fix spec file
- **Canvas API error**: Show error, suggest fixes, offer to retry
- **Duplicate names**: Warn user, suggest unique names

## Output
- List of created assignment IDs and names
- Success/failure count
- Next suggested command (*bulk-copy if approved)

## Dependencies
- Templates: All templates in `.canvas-workflow/templates/`
- Canvas MCP: `canvas_create_assignment`
- Sandbox course ID: 2500
