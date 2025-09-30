# Canvas MCP Implementation Plan

## New Tools to Implement

### 1. Students/Roster Tools
- **canvas_list_students** - `GET /api/v1/courses/:course_id/users?enrollment_type[]=student`
  - Lists all students enrolled in a course
  - Parameters: course_id, include (avatar_url, enrollments, email, bio)
  - Returns: Array of User objects with enrollment data

### 2. Grading Tools
- **canvas_list_submissions** - `GET /api/v1/courses/:course_id/students/submissions`
  - Lists submissions for multiple assignments/students
  - Parameters: course_id, student_ids[], assignment_ids[], grouped, workflow_state
  - Returns: Array of Submission objects (or grouped by student)

- **canvas_update_submission_grade** - `PUT /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id`
  - Grade a single submission with comments
  - Parameters: course_id, assignment_id, user_id, posted_grade, comment, excuse
  - Returns: Updated Submission object

- **canvas_bulk_update_grades** - `POST /api/v1/courses/:course_id/submissions/update_grades`
  - Bulk grade multiple submissions at once
  - Parameters: course_id, grade_data (object with student_id keys)
  - Returns: Progress object

### 3. Assignment Management Tools
- **canvas_delete_assignment** - `DELETE /api/v1/courses/:course_id/assignments/:id`
  - Delete an assignment
  - Parameters: course_id, assignment_id
  - Returns: Deleted Assignment object

- **canvas_duplicate_assignment** - `POST /api/v1/courses/:course_id/assignments/:id/duplicate`
  - Duplicate an existing assignment
  - Parameters: course_id, assignment_id
  - Returns: New Assignment object

### 4. Sections/Cross-listing Tools
- **canvas_list_sections** - `GET /api/v1/courses/:course_id/sections`
  - List all sections in a course
  - Parameters: course_id, include (students, enrollments, total_students)
  - Returns: Array of Section objects

- **canvas_get_section** - `GET /api/v1/courses/:course_id/sections/:id`
  - Get details of a specific section
  - Parameters: course_id, section_id, include
  - Returns: Section object

- **canvas_cross_list_section** - `POST /api/v1/sections/:id/crosslist/:new_course_id`
  - Move a section into another course (merge courses)
  - Parameters: section_id, new_course_id
  - Returns: Section object

- **canvas_uncross_list_section** - `DELETE /api/v1/sections/:id/crosslist`
  - Remove cross-listing (unmerge section)
  - Parameters: section_id
  - Returns: Section object

## Implementation Steps

1. ✅ Gather Canvas API documentation
2. ⏳ Add new interfaces to types.ts
3. ⏳ Add new client methods to client.ts
4. ⏳ Add new tools to TOOLS array in index.ts
5. ⏳ Add new handlers to CallToolRequestSchema switch in index.ts
6. ⏳ Test with live Canvas data

## Type Interfaces Needed

```typescript
// Students
export interface ListStudentsArgs {
  course_id: number;
  include?: ('avatar_url' | 'enrollments' | 'email' | 'bio')[];
}

// Submissions
export interface ListSubmissionsArgs {
  course_id: number;
  student_ids?: string[];
  assignment_ids?: string[];
  grouped?: boolean;
  workflow_state?: 'submitted' | 'unsubmitted' | 'graded' | 'pending_review';
}

export interface UpdateSubmissionGradeArgs {
  course_id: number;
  assignment_id: number;
  user_id: number;
  posted_grade?: string | number;
  excuse?: boolean;
  text_comment?: string;
}

export interface BulkUpdateGradesArgs {
  course_id: number;
  grade_data: Record<string, {
    posted_grade?: string | number;
    excuse?: boolean;
    text_comment?: string;
  }>;
}

// Sections
export interface ListSectionsArgs {
  course_id: number;
  include?: ('students' | 'enrollments' | 'total_students')[];
}

export interface CrossListSectionArgs {
  section_id: number;
  new_course_id: number;
}
```

## Priority for Teacher Use

1. **High Priority** - Immediate teacher needs:
   - canvas_list_students (roster viewing)
   - canvas_list_submissions (grade overview)
   - canvas_update_submission_grade (grading individual assignments)
   - canvas_list_sections (see all sections)

2. **Medium Priority** - Common operations:
   - canvas_bulk_update_grades (efficient batch grading)
   - canvas_cross_list_section (merge classes)
   - canvas_duplicate_assignment (reuse assignments)

3. **Lower Priority** - Less frequent:
   - canvas_delete_assignment (cleanup)
   - canvas_uncross_list_section (unmerge)
   - canvas_get_section (detailed section info)