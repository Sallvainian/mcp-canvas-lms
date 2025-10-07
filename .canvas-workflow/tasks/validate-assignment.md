# Task: Validate Assignment

**Purpose**: Run comprehensive validation checklist on assignment before publishing

**Elicit**: false (automated validation, no user input required)

## Validation Checklist

### Required Fields
- [ ] Assignment has a name (not empty or default)
- [ ] Assignment has a description (not empty)
- [ ] Due date is set and in future
- [ ] Points possible is set (even if 0 for completion-based)
- [ ] Submission types are configured

### Pedagogical Checks
- [ ] Assignment name follows consistent naming pattern
- [ ] Description is clear and specific (not generic)
- [ ] Points value makes sense for assignment type:
  - Notebook checks: 0 points (completion-based)
  - Handouts: 0 points (completion-based)
  - Quizzes: Positive points (typically 25 for 5 questions)
- [ ] Due date allows reasonable time for completion

### Technical Checks
- [ ] Assignment is in correct course
- [ ] No duplicate assignment names in same course
- [ ] Submission types match assignment requirements
- [ ] Assignment is not published (if still in draft mode)

### Consistency Checks
- [ ] Assignment fits lesson structure
- [ ] Due date aligns with other lesson assignments
- [ ] Naming convention matches other assignments in course

## Workflow Steps

### 1. Load Assignment
- Accept assignment identifier (ID or name)
- Fetch assignment details from Canvas
- Load course context

### 2. Run Validation
- Execute all checklist items
- Track passes and failures
- Collect warnings (non-critical issues)

### 3. Report Results
Present validation results:
```
Validation Results for "Lesson 1 Quiz":

✓ PASSED (8/10)
- Name: "Lesson 1 Quiz" ✓
- Description: Clear and specific ✓
- Due date: 2025-10-03 (future) ✓
- Points: 25 (appropriate for quiz) ✓
- Submission types: Configured ✓
- No duplicates ✓
- Consistent naming ✓
- Reasonable timeline ✓

⚠ WARNINGS (2)
- Due date is before some handouts (intentional?)
- Assignment not yet published

Status: READY FOR PUBLISHING
```

### 4. Provide Recommendations
- If validation fails: List fixes needed, offer to apply automatically
- If validation passes with warnings: Explain warnings, ask if acceptable
- If validation passes fully: Suggest publishing

## Auto-Fix Capabilities
For common issues, offer automatic fixes:
- Empty description → Generate from template
- Generic name → Suggest specific name from pattern
- Past due date → Suggest next logical date
- Missing submission types → Set based on assignment type

## Severity Levels
- **Critical**: Must be fixed before publishing (blocks publication)
- **Warning**: Should be reviewed but not blocking
- **Info**: Suggestions for improvement

## Output
- Pass/fail status
- Detailed checklist results
- List of issues by severity
- Recommended actions
- Auto-fix offers if applicable

## Dependencies
- Canvas MCP: `canvas_get_assignment`
- Templates: For validating against patterns
- Course mapping: For context checks
