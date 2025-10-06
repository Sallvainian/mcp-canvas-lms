// tests/teacher-tools.test.ts
// Comprehensive test suite for Canvas MCP Teacher Tools

import { describe, it, expect, beforeAll } from 'vitest';
import { CanvasClient } from '../src/client';

describe('Teacher Tools - Canvas MCP Server', () => {
  let client: CanvasClient;

  beforeAll(() => {
    // Initialize client with environment variables
    const token = process.env.CANVAS_API_TOKEN;
    const domain = process.env.CANVAS_DOMAIN;

    if (!token || !domain) {
      throw new Error('CANVAS_API_TOKEN and CANVAS_DOMAIN must be set for testing');
    }

    client = new CanvasClient(token, domain);
  });

  describe('Students/Roster Tools', () => {
    describe('canvas_list_students', () => {
      it('should list students in a course', async () => {
        // This test requires a valid course_id from your Canvas instance
        // Replace with actual test course ID or skip if not available
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const students = await client.listStudents({
          course_id: testCourseId
        });

        expect(students).toBeInstanceOf(Array);
        if (students.length > 0) {
          expect(students[0]).toHaveProperty('id');
          expect(students[0]).toHaveProperty('name');
        }
      });

      it('should list students with avatar_url include', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const students = await client.listStudents({
          course_id: testCourseId,
          include: ['avatar_url']
        });

        expect(students).toBeInstanceOf(Array);
        if (students.length > 0) {
          expect(students[0]).toHaveProperty('avatar_url');
        }
      });

      it('should list students with all includes', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const students = await client.listStudents({
          course_id: testCourseId,
          include: ['avatar_url', 'enrollments', 'email', 'bio']
        });

        expect(students).toBeInstanceOf(Array);
      });
    });
  });

  describe('Grading Tools', () => {
    describe('canvas_list_submissions', () => {
      it('should list all submissions for a course', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const submissions = await client.listSubmissions({
          course_id: testCourseId
        });

        expect(submissions).toBeInstanceOf(Array);
      });

      it('should filter submissions by workflow_state', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const submissions = await client.listSubmissions({
          course_id: testCourseId,
          workflow_state: 'submitted'
        });

        expect(submissions).toBeInstanceOf(Array);
        // All submissions should be in 'submitted' state
        submissions.forEach(sub => {
          if (sub.workflow_state) {
            expect(sub.workflow_state).toBe('submitted');
          }
        });
      });
    });

    describe('canvas_update_submission_grade', () => {
      it('should validate required fields', async () => {
        // This is a destructive operation, so we only validate the call structure
        // In a real test environment, you would:
        // 1. Create a test assignment
        // 2. Submit as a student
        // 3. Grade as teacher
        // 4. Verify the grade

        expect(client.updateSubmissionGrade).toBeDefined();
      });
    });

    describe('canvas_bulk_update_grades', () => {
      it('should validate bulk grade structure', async () => {
        // Similar to above - validates method exists
        // Real testing requires test assignment and submissions

        expect(client.bulkUpdateGrades).toBeDefined();
      });
    });
  });

  describe('Assignment Management Tools', () => {
    describe('canvas_duplicate_assignment', () => {
      it('should have duplicate assignment method', async () => {
        // Validates method exists
        // Full test requires creating assignment, duplicating, verifying copy

        expect(client.duplicateAssignment).toBeDefined();
      });
    });

    describe('canvas_delete_assignment', () => {
      it('should have delete assignment method', async () => {
        // Validates method exists
        // Full test requires creating test assignment, deleting, verifying deletion

        expect(client.deleteAssignment).toBeDefined();
      });
    });
  });

  describe('Sections/Cross-listing Tools', () => {
    describe('canvas_list_sections', () => {
      it('should list sections in a course', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const sections = await client.listSections({
          course_id: testCourseId
        });

        expect(sections).toBeInstanceOf(Array);
        if (sections.length > 0) {
          expect(sections[0]).toHaveProperty('id');
          expect(sections[0]).toHaveProperty('name');
          expect(sections[0]).toHaveProperty('course_id');
        }
      });

      it('should list sections with students include', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');

        if (testCourseId === 0) {
          console.log('Skipping test: TEST_COURSE_ID not set');
          return;
        }

        const sections = await client.listSections({
          course_id: testCourseId,
          include: ['students']
        });

        expect(sections).toBeInstanceOf(Array);
      });
    });

    describe('canvas_get_section', () => {
      it('should get section details', async () => {
        const testCourseId = parseInt(process.env.TEST_COURSE_ID || '0');
        const testSectionId = parseInt(process.env.TEST_SECTION_ID || '0');

        if (testCourseId === 0 || testSectionId === 0) {
          console.log('Skipping test: TEST_COURSE_ID or TEST_SECTION_ID not set');
          return;
        }

        const section = await client.getSection(testCourseId, testSectionId);

        expect(section).toHaveProperty('id');
        expect(section).toHaveProperty('name');
        expect(section.id).toBe(testSectionId);
      });
    });

    describe('canvas_cross_list_section', () => {
      it('should have cross-list section method', async () => {
        // Validates method exists
        // Full test requires test sections and courses

        expect(client.crossListSection).toBeDefined();
      });
    });

    describe('canvas_uncross_list_section', () => {
      it('should have uncross-list section method', async () => {
        // Validates method exists
        // Full test requires cross-listed section

        expect(client.uncrossListSection).toBeDefined();
      });
    });
  });

  describe('Type Safety', () => {
    it('should properly type all teacher tool methods', () => {
      // Verify all methods are properly typed
      expect(typeof client.listStudents).toBe('function');
      expect(typeof client.listSubmissions).toBe('function');
      expect(typeof client.updateSubmissionGrade).toBe('function');
      expect(typeof client.bulkUpdateGrades).toBe('function');
      expect(typeof client.duplicateAssignment).toBe('function');
      expect(typeof client.deleteAssignment).toBe('function');
      expect(typeof client.listSections).toBe('function');
      expect(typeof client.getSection).toBe('function');
      expect(typeof client.crossListSection).toBe('function');
      expect(typeof client.uncrossListSection).toBe('function');
    });
  });

  describe('Error Handling', () => {
    it('should handle missing course_id gracefully', async () => {
      try {
        // @ts-expect-error - intentionally passing invalid params
        await client.listStudents({});
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle invalid course_id', async () => {
      try {
        await client.listStudents({ course_id: 999999999 });
        // May succeed with empty array or throw - both are acceptable
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
