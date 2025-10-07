# Task: Bulk Copy to Courses

**Purpose**: Copy approved assignments from sandbox to multiple production courses

**Elicit**: true (requires confirmation before executing bulk operation)

## Prerequisites
- Assignments exist in sandbox course (ID: 2500)
- Course mapping loaded from `.claude/hooks/course-mapping.json`
- User has reviewed and approved assignments

## Workflow Steps

### 1. List Source Assignments
- Query sandbox course for assignments
- Filter to show only unpublished assignments (candidates for copy)
- Present numbered list:
  ```
  Assignments ready for bulk copy:
  1. Notebook Table of Contents and Table of Progress
  2. Initial Models Collisions
  3. Object Interactions
  4. Lesson 1 Quiz
  ```

### 2. Select Target Courses
- Load course mapping from `.claude/hooks/course-mapping.json`
- Present course selection options:
  ```
  Copy to which courses?
  1. All courses (10 total)
  2. Specific periods (select from list)
  3. Custom selection
  ```
- If user selects option 2 or 3, show numbered list of courses
- Confirm selection: "Copy 4 assignments to 10 courses? (yes/no)"

### 3. Execute Bulk Copy
For each target course:
  For each selected assignment:
    - Call Canvas MCP `canvas_create_assignment` with:
      - course_id: target_course_id
      - Same assignment data (name, description, points, due_date, etc.)
    - Log operation via PostToolUse hook
    - Track success/failure
    - Handle errors gracefully (continue with next if one fails)

### 4. Report Results
- Show completion summary:
  ```
  Bulk Copy Results:
  ✓ Successfully copied to: P1-Science 8-Cottone, P3-Science 8-Cottone... (8/10)
  ✗ Failed: P9-Science 8-Cottone (error: due date in past)

  Total operations: 40 (4 assignments × 10 courses)
  Successful: 38
  Failed: 2
  ```

### 5. Next Steps
Suggest: "Run *publish to publish assignments? (yes/no)"

## Optimization
- Execute copies in parallel for each course (but sequential for assignments within course)
- Use batching if Canvas API supports batch operations
- Implement retry logic for transient failures

## Error Handling
- **Course not found**: Skip that course, log warning, continue with others
- **Due date in past**: Warn user, ask if should adjust dates automatically
- **Duplicate assignment**: Skip that course, log info, continue with others
- **API rate limit**: Implement exponential backoff, resume after delay

## Safety Checks
- NEVER copy to sandbox course (prevent circular copies)
- Confirm if copying more than 50 total operations
- Validate all target course IDs exist before starting
- Stop on first 3 consecutive failures (indicate systemic issue)

## Output
- Success/failure count per course
- List of any errors with explanations
- Updated canvas-operations.md log (via hook)
- Suggested next command

## Dependencies
- Canvas MCP: `canvas_create_assignment`
- Course mapping: `.claude/hooks/course-mapping.json`
- Logging hook: PostToolUse for canvas operations
