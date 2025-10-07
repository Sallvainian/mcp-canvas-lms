#!/usr/bin/env node

// src/index.ts

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import { CanvasClient } from "./client.js";
import * as dotenv from "dotenv";
import {
  CreateCourseArgs,
  UpdateCourseArgs,
  CreateAssignmentArgs,
  UpdateAssignmentArgs,
  SubmitGradeArgs,
  EnrollUserArgs,
  CanvasCourse,
  CanvasAssignmentSubmission,
  SubmitAssignmentArgs,
  FileUploadArgs,
  MCPServerConfig,
  CreateUserArgs,
  ListAccountCoursesArgs,
  ListAccountUsersArgs,
  CreateReportArgs,
  ListStudentsArgs,
  ListSubmissionsArgs,
  UpdateSubmissionGradeArgs,
  BulkUpdateGradesArgs,
  DuplicateAssignmentArgs,
  ListSectionsArgs,
  CrossListSectionArgs,
  CreateAssignmentOverrideArgs,
  UpdateAssignmentOverrideArgs,
  GradeWithRubricArgs,
  AddSubmissionCommentArgs,
  CreatePageArgs,
  UpdatePageArgs,
  CreateAnnouncementArgs,
  UpdateAnnouncementArgs,
  CreateDiscussionTopicArgs,
  UpdateDiscussionTopicArgs,
  CreateModuleArgs,
  UpdateModuleArgs,
  CreateModuleItemArgs,
  UpdateModuleItemArgs,
  PostGradesArgs,
  HideGradesArgs,
  CreateQuizQuestionArgs,
  UpdateQuizQuestionArgs,
  GradebookExportArgs,
  CreateLatePolicyArgs,
  UpdateLatePolicyArgs,
  SpeedGraderURLArgs,
  CreateOutcomeArgs,
  UpdateOutcomeArgs,
  OutcomeResultsArgs,
  CreateAssignmentGroupArgs,
  UpdateAssignmentGroupArgs,
  CreateGroupCategoryArgs,
  CreateGroupArgs,
  AssignGroupMembersArgs,
  CreateRubricArgs,
  UpdateRubricArgs,
  GradeWithRubricArgsNew,
} from "./types.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Enhanced tools list with all student-focused endpoints
const TOOLS: Tool[] = [
  // Health and system tools
  {
    name: "canvas_health_check",
    description: "Check the health and connectivity of the Canvas API",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },

  // Course management
  {
    name: "canvas_list_courses",
    description: "List all courses for the current user",
    inputSchema: {
      type: "object",
      properties: {
        include_ended: { type: "boolean", description: "Include ended courses" }
      },
      required: []
    }
  },
  {
    name: "canvas_get_course",
    description: "Get detailed information about a specific course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_create_course",
    description: "Create a new course in Canvas",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account to create the course in" },
        name: { type: "string", description: "Name of the course" },
        course_code: { type: "string", description: "Course code (e.g., CS101)" },
        start_at: { type: "string", description: "Course start date (ISO format)" },
        end_at: { type: "string", description: "Course end date (ISO format)" },
        license: { type: "string", description: "Course license" },
        is_public: { type: "boolean", description: "Whether the course is public" },
        is_public_to_auth_users: { type: "boolean", description: "Whether the course is public to authenticated users" },
        public_syllabus: { type: "boolean", description: "Whether the syllabus is public" },
        public_syllabus_to_auth: { type: "boolean", description: "Whether the syllabus is public to authenticated users" },
        public_description: { type: "string", description: "Public description of the course" },
        allow_student_wiki_edits: { type: "boolean", description: "Whether students can edit the wiki" },
        allow_wiki_comments: { type: "boolean", description: "Whether wiki comments are allowed" },
        allow_student_forum_attachments: { type: "boolean", description: "Whether students can add forum attachments" },
        open_enrollment: { type: "boolean", description: "Whether the course has open enrollment" },
        self_enrollment: { type: "boolean", description: "Whether the course allows self enrollment" },
        restrict_enrollments_to_course_dates: { type: "boolean", description: "Whether to restrict enrollments to course start/end dates" },
        term_id: { type: "number", description: "ID of the enrollment term" },
        sis_course_id: { type: "string", description: "SIS course ID" },
        integration_id: { type: "string", description: "Integration ID for the course" },
        hide_final_grades: { type: "boolean", description: "Whether to hide final grades" },
        apply_assignment_group_weights: { type: "boolean", description: "Whether to apply assignment group weights" },
        time_zone: { type: "string", description: "Course time zone" },
        syllabus_body: { type: "string", description: "Course syllabus content" }
      },
      required: ["account_id", "name"]
    }
  },
  {
    name: "canvas_update_course",
    description: "Update an existing course in Canvas",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course to update" },
        name: { type: "string", description: "New name for the course" },
        course_code: { type: "string", description: "New course code" },
        start_at: { type: "string", description: "New start date (ISO format)" },
        end_at: { type: "string", description: "New end date (ISO format)" },
        license: { type: "string", description: "Course license" },
        is_public: { type: "boolean", description: "Whether the course is public" },
        is_public_to_auth_users: { type: "boolean", description: "Whether the course is public to authenticated users" },
        public_syllabus: { type: "boolean", description: "Whether the syllabus is public" },
        public_syllabus_to_auth: { type: "boolean", description: "Whether the syllabus is public to authenticated users" },
        public_description: { type: "string", description: "Public description of the course" },
        allow_student_wiki_edits: { type: "boolean", description: "Whether students can edit the wiki" },
        allow_wiki_comments: { type: "boolean", description: "Whether wiki comments are allowed" },
        allow_student_forum_attachments: { type: "boolean", description: "Whether students can add forum attachments" },
        open_enrollment: { type: "boolean", description: "Whether the course has open enrollment" },
        self_enrollment: { type: "boolean", description: "Whether the course allows self enrollment" },
        restrict_enrollments_to_course_dates: { type: "boolean", description: "Whether to restrict enrollments to course start/end dates" },
        hide_final_grades: { type: "boolean", description: "Whether to hide final grades" },
        apply_assignment_group_weights: { type: "boolean", description: "Whether to apply assignment group weights" },
        published: { type: "boolean", description: "Whether the course is published" },
        time_zone: { type: "string", description: "Course time zone" },
        syllabus_body: { type: "string", description: "Updated syllabus content" }
      },
      required: ["course_id"]
    }
  },

  // Assignment management
  {
    name: "canvas_list_assignments",
    description: "List assignments for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        include_submissions: { type: "boolean", description: "Include submission data" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_assignment",
    description: "Get detailed information about a specific assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        include_submission: { type: "boolean", description: "Include user's submission data" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_create_assignment",
    description: "Create a new assignment in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        name: { type: "string", description: "Name of the assignment" },
        description: { type: "string", description: "Assignment description/instructions" },
        due_at: { type: "string", description: "Due date (ISO format)" },
        points_possible: { type: "number", description: "Maximum points possible" },
        submission_types: { 
          type: "array", 
          items: { type: "string" },
          description: "Allowed submission types"
        },
        allowed_extensions: {
          type: "array",
          items: { type: "string" },
          description: "Allowed file extensions for submissions"
        },
        published: { type: "boolean", description: "Whether the assignment is published" }
      },
      required: ["course_id", "name"]
    }
  },
  {
    name: "canvas_update_assignment",
    description: "Update an existing assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment to update" },
        name: { type: "string", description: "New name for the assignment" },
        description: { type: "string", description: "New assignment description" },
        due_at: { type: "string", description: "New due date (ISO format)" },
        points_possible: { type: "number", description: "New maximum points" },
        published: { type: "boolean", description: "Whether the assignment is published" }
      },
      required: ["course_id", "assignment_id"]
    }
  },

  // Assignment groups
  {
    name: "canvas_list_assignment_groups",
    description: "List assignment groups for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_create_assignment_group",
    description: "Create gradebook category (e.g., 'Homework', 'Exams') to organize gradebook and set category weights. Teachers use this monthly for gradebook setup.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        name: { type: "string", description: "Group name (e.g., 'Exams', 'Homework')" },
        position: { type: "number", description: "Display order" },
        group_weight: { type: "number", description: "Weight percentage (0-100)" }
      },
      required: ["course_id", "name"]
    }
  },
  {
    name: "canvas_update_assignment_group",
    description: "Edit assignment group name, weight, or drop rules to adjust grading weights and set drop lowest scores.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_group_id: { type: "number", description: "ID of the assignment group" },
        name: { type: "string", description: "New group name" },
        position: { type: "number", description: "New display order" },
        group_weight: { type: "number", description: "New weight percentage (0-100)" },
        rules: {
          type: "object",
          properties: {
            drop_lowest: { type: "number", description: "Number of lowest scores to drop" },
            drop_highest: { type: "number", description: "Number of highest scores to drop" },
            never_drop: { type: "array", items: { type: "number" }, description: "Assignment IDs to never drop" }
          }
        }
      },
      required: ["course_id", "assignment_group_id"]
    }
  },

  // Submissions and grading
  {
    name: "canvas_get_submission",
    description: "Get submission details for an assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_id: { type: "number", description: "ID of the user (optional, defaults to self)" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_submit_assignment",
    description: "Submit work for an assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        submission_type: { 
          type: "string", 
          enum: ["online_text_entry", "online_url", "online_upload"],
          description: "Type of submission" 
        },
        body: { type: "string", description: "Text content for text submissions" },
        url: { type: "string", description: "URL for URL submissions" },
        file_ids: { 
          type: "array", 
          items: { type: "number" },
          description: "File IDs for file submissions" 
        }
      },
      required: ["course_id", "assignment_id", "submission_type"]
    }
  },
  {
    name: "canvas_submit_grade",
    description: "Submit a grade for a student's assignment (teacher only)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_id: { type: "number", description: "ID of the student" },
        grade: { 
          oneOf: [
            { type: "number" },
            { type: "string" }
          ],
          description: "Grade to submit (number or letter grade)"
        },
        comment: { type: "string", description: "Optional comment on the submission" }
      },
      required: ["course_id", "assignment_id", "user_id", "grade"]
    }
  },

  // Files and uploads
  {
    name: "canvas_list_files",
    description: "List files in a course or folder",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        folder_id: { type: "number", description: "ID of the folder (optional)" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_file",
    description: "Get information about a specific file",
    inputSchema: {
      type: "object",
      properties: {
        file_id: { type: "number", description: "ID of the file" }
      },
      required: ["file_id"]
    }
  },
  {
    name: "canvas_list_folders",
    description: "List folders in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },

  // Pages
  {
    name: "canvas_list_pages",
    description: "List pages in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_page",
    description: "Get content of a specific page",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        page_url: { type: "string", description: "URL slug of the page" }
      },
      required: ["course_id", "page_url"]
    }
  },

  // Calendar and due dates
  {
    name: "canvas_list_calendar_events",
    description: "List calendar events",
    inputSchema: {
      type: "object",
      properties: {
        start_date: { type: "string", description: "Start date (ISO format)" },
        end_date: { type: "string", description: "End date (ISO format)" }
      },
      required: []
    }
  },
  {
    name: "canvas_get_upcoming_assignments",
    description: "Get upcoming assignment due dates",
    inputSchema: {
      type: "object",
      properties: {
        limit: { type: "number", description: "Maximum number of assignments to return" }
      },
      required: []
    }
  },

  // Dashboard
  {
    name: "canvas_get_dashboard",
    description: "Get user's dashboard information",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "canvas_get_dashboard_cards",
    description: "Get dashboard course cards",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },

  // Grades
  {
    name: "canvas_get_course_grades",
    description: "Get grades for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_user_grades",
    description: "Get all grades for the current user",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },

  // User management
  {
    name: "canvas_get_user_profile",
    description: "Get current user's profile",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "canvas_update_user_profile",
    description: "Update current user's profile",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "User's name" },
        short_name: { type: "string", description: "User's short name" },
        bio: { type: "string", description: "User's bio" },
        title: { type: "string", description: "User's title" },
        time_zone: { type: "string", description: "User's time zone" }
      },
      required: []
    }
  },
  {
    name: "canvas_enroll_user",
    description: "Enroll a user in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        user_id: { type: "number", description: "ID of the user to enroll" },
        role: { 
          type: "string", 
          description: "Role for the enrollment (StudentEnrollment, TeacherEnrollment, etc.)" 
        },
        enrollment_state: { 
          type: "string",
          description: "State of the enrollment (active, invited, etc.)"
        }
      },
      required: ["course_id", "user_id"]
    }
  },

  // Modules
  {
    name: "canvas_list_modules",
    description: "List all modules in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_module",
    description: "Get details of a specific module",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" }
      },
      required: ["course_id", "module_id"]
    }
  },
  {
    name: "canvas_list_module_items",
    description: "List all items in a module",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" }
      },
      required: ["course_id", "module_id"]
    }
  },
  {
    name: "canvas_get_module_item",
    description: "Get details of a specific module item",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        item_id: { type: "number", description: "ID of the module item" }
      },
      required: ["course_id", "module_id", "item_id"]
    }
  },
  {
    name: "canvas_mark_module_item_complete",
    description: "Mark a module item as complete",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        item_id: { type: "number", description: "ID of the module item" }
      },
      required: ["course_id", "module_id", "item_id"]
    }
  },

  // Discussions
  {
    name: "canvas_list_discussion_topics",
    description: "List all discussion topics in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_discussion_topic",
    description: "Get details of a specific discussion topic",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        topic_id: { type: "number", description: "ID of the discussion topic" }
      },
      required: ["course_id", "topic_id"]
    }
  },
  {
    name: "canvas_post_to_discussion",
    description: "Post a message to a discussion topic",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        topic_id: { type: "number", description: "ID of the discussion topic" },
        message: { type: "string", description: "Message content" }
      },
      required: ["course_id", "topic_id", "message"]
    }
  },

  // Announcements
  {
    name: "canvas_list_announcements",
    description: "List all announcements in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },

  // Quizzes
  {
    name: "canvas_list_quizzes",
    description: "List all quizzes in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_quiz",
    description: "Get details of a specific quiz",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" }
      },
      required: ["course_id", "quiz_id"]
    }
  },
  {
    name: "canvas_create_quiz",
    description: "Create a new quiz in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Title of the quiz" },
        quiz_type: { type: "string", description: "Type of the quiz (e.g., graded)" },
        time_limit: { type: "number", description: "Time limit in minutes" },
        published: { type: "boolean", description: "Is the quiz published" },
        description: { type: "string", description: "Description of the quiz" },
        due_at: { type: "string", description: "Due date (ISO format)" }
      },
      required: ["course_id", "title"]
    }
  },
  {
    name: "canvas_start_quiz_attempt",
    description: "Start a new quiz attempt",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" }
      },
      required: ["course_id", "quiz_id"]
    }
  },

  // Rubrics
  {
    name: "canvas_list_rubrics",
    description: "List rubrics for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_rubric",
    description: "Get details of a specific rubric",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        rubric_id: { type: "number", description: "ID of the rubric" }
      },
      required: ["course_id", "rubric_id"]
    }
  },
  {
    name: "canvas_create_rubric",
    description: "Create a custom grading rubric with criteria and ratings for consistent, criteria-based assessment. Teachers use this daily when setting up assignments requiring detailed evaluation criteria.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Rubric title" },
        description: { type: "string", description: "Rubric description" },
        criteria: {
          type: "array",
          description: "Array of rubric criteria with ratings",
          items: {
            type: "object",
            properties: {
              description: { type: "string", description: "Criterion name" },
              points: { type: "number", description: "Maximum points" },
              long_description: { type: "string", description: "Detailed description" },
              ratings: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    description: { type: "string" },
                    points: { type: "number" }
                  }
                }
              }
            }
          }
        },
        free_form_criterion_comments: { type: "boolean", description: "Allow free-form comments" }
      },
      required: ["course_id", "title", "criteria"]
    }
  },
  {
    name: "canvas_update_rubric",
    description: "Modify existing rubric criteria, points, or descriptions. Teachers use this weekly to refine rubrics based on student performance.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        rubric_id: { type: "number", description: "ID of the rubric to update" },
        title: { type: "string", description: "New rubric title" },
        description: { type: "string", description: "New description" },
        criteria: { type: "array", description: "Updated criteria array" },
        free_form_criterion_comments: { type: "boolean" }
      },
      required: ["course_id", "rubric_id"]
    }
  },

  // Conversations
  {
    name: "canvas_list_conversations",
    description: "List user's conversations",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "canvas_get_conversation",
    description: "Get details of a specific conversation",
    inputSchema: {
      type: "object",
      properties: {
        conversation_id: { type: "number", description: "ID of the conversation" }
      },
      required: ["conversation_id"]
    }
  },
  {
    name: "canvas_create_conversation",
    description: "Create a new conversation",
    inputSchema: {
      type: "object",
      properties: {
        recipients: { 
          type: "array", 
          items: { type: "string" },
          description: "Recipient user IDs or email addresses" 
        },
        body: { type: "string", description: "Message body" },
        subject: { type: "string", description: "Message subject" }
      },
      required: ["recipients", "body"]
    }
  },

  // Notifications
  {
    name: "canvas_list_notifications",
    description: "List user's notifications",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  },

  // Syllabus
  {
    name: "canvas_get_syllabus",
    description: "Get course syllabus",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },

  // Account Management
  {
    name: "canvas_get_account",
    description: "Get account details",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" }
      },
      required: ["account_id"]
    }
  },
  {
    name: "canvas_list_account_courses",
    description: "List courses for an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" },
        with_enrollments: { type: "boolean", description: "Include enrollment data" },
        published: { type: "boolean", description: "Only include published courses" },
        completed: { type: "boolean", description: "Include completed courses" },
        search_term: { type: "string", description: "Search term to filter courses" },
        sort: { type: "string", enum: ["course_name", "sis_course_id", "teacher", "account_name"], description: "Sort order" },
        order: { type: "string", enum: ["asc", "desc"], description: "Sort direction" }
      },
      required: ["account_id"]
    }
  },
  {
    name: "canvas_list_account_users",
    description: "List users for an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" },
        search_term: { type: "string", description: "Search term to filter users" },
        sort: { type: "string", enum: ["username", "email", "sis_id", "last_login"], description: "Sort order" },
        order: { type: "string", enum: ["asc", "desc"], description: "Sort direction" }
      },
      required: ["account_id"]
    }
  },
  {
    name: "canvas_create_user",
    description: "Create a new user in an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" },
        user: {
          type: "object",
          properties: {
            name: { type: "string", description: "Full name of the user" },
            short_name: { type: "string", description: "Short name of the user" },
            sortable_name: { type: "string", description: "Sortable name (Last, First)" },
            time_zone: { type: "string", description: "User's time zone" }
          },
          required: ["name"]
        },
        pseudonym: {
          type: "object",
          properties: {
            unique_id: { type: "string", description: "Unique login ID (email or username)" },
            password: { type: "string", description: "User's password" },
            sis_user_id: { type: "string", description: "SIS ID for the user" },
            send_confirmation: { type: "boolean", description: "Send confirmation email" }
          },
          required: ["unique_id"]
        }
      },
      required: ["account_id", "user", "pseudonym"]
    }
  },
  {
    name: "canvas_list_sub_accounts",
    description: "List sub-accounts for an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the parent account" }
      },
      required: ["account_id"]
    }
  },
  {
    name: "canvas_get_account_reports",
    description: "List available reports for an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" }
      },
      required: ["account_id"]
    }
  },
  {
    name: "canvas_create_account_report",
    description: "Generate a report for an account",
    inputSchema: {
      type: "object",
      properties: {
        account_id: { type: "number", description: "ID of the account" },
        report: { type: "string", description: "Type of report to generate" },
        parameters: { type: "object", description: "Report parameters" }
      },
      required: ["account_id", "report"]
    }
  },

  // ---------------------
  // TEACHER TOOLS - Students/Roster
  // ---------------------
  {
    name: "canvas_list_students",
    description: "List all students enrolled in a course with optional profile data (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        include: {
          type: "array",
          items: {
            type: "string",
            enum: ["avatar_url", "enrollments", "email", "bio"]
          },
          description: "Additional user data to include (avatar_url, enrollments, email, bio)"
        }
      },
      required: ["course_id"]
    }
  },

  // ---------------------
  // TEACHER TOOLS - Grading
  // ---------------------
  {
    name: "canvas_list_submissions",
    description: "List submissions for multiple assignments/students with filtering options (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        student_ids: {
          type: "array",
          items: { type: "string" },
          description: "Filter by specific student IDs"
        },
        assignment_ids: {
          type: "array",
          items: { type: "string" },
          description: "Filter by specific assignment IDs"
        },
        grouped: { type: "boolean", description: "Group submissions by student" },
        workflow_state: {
          type: "string",
          enum: ["submitted", "unsubmitted", "graded", "pending_review"],
          description: "Filter by submission state"
        }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_update_submission_grade",
    description: "Grade a single submission with optional comments (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_id: { type: "number", description: "ID of the student" },
        posted_grade: {
          oneOf: [
            { type: "number" },
            { type: "string" }
          ],
          description: "Grade to assign (number or letter grade)"
        },
        excuse: { type: "boolean", description: "Excuse the submission" },
        text_comment: { type: "string", description: "Comment for the student" }
      },
      required: ["course_id", "assignment_id", "user_id"]
    }
  },
  {
    name: "canvas_bulk_update_grades",
    description: "Update grades for multiple submissions at once (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        grade_data: {
          type: "object",
          description: "Object with student IDs as keys, grade data as values",
          additionalProperties: {
            type: "object",
            properties: {
              posted_grade: {
                oneOf: [
                  { type: "number" },
                  { type: "string" }
                ],
                description: "Grade to assign"
              },
              excuse: { type: "boolean", description: "Excuse the submission" },
              text_comment: { type: "string", description: "Comment for the student" }
            }
          }
        }
      },
      required: ["course_id", "grade_data"]
    }
  },

  // ---------------------
  // TEACHER TOOLS - Assignment Management
  // ---------------------
  {
    name: "canvas_duplicate_assignment",
    description: "Duplicate an existing assignment (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment to duplicate" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_delete_assignment",
    description: "Delete an assignment from a course (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment to delete" }
      },
      required: ["course_id", "assignment_id"]
    }
  },

  // ---------------------
  // TEACHER TOOLS - Sections/Cross-listing
  // ---------------------
  {
    name: "canvas_list_sections",
    description: "List all sections in a course with optional enrollment data (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        include: {
          type: "array",
          items: {
            type: "string",
            enum: ["students", "enrollments", "total_students"]
          },
          description: "Additional section data to include"
        }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_section",
    description: "Get detailed information about a specific section (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        section_id: { type: "number", description: "ID of the section" },
        include: {
          type: "array",
          items: {
            type: "string",
            enum: ["students", "enrollments", "total_students"]
          },
          description: "Additional section data to include"
        }
      },
      required: ["course_id", "section_id"]
    }
  },
  {
    name: "canvas_cross_list_section",
    description: "Move a section into another course (merge courses) (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        section_id: { type: "number", description: "ID of the section to move" },
        new_course_id: { type: "number", description: "ID of the destination course" }
      },
      required: ["section_id", "new_course_id"]
    }
  },
  {
    name: "canvas_uncross_list_section",
    description: "Remove cross-listing from a section (unmerge) (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        section_id: { type: "number", description: "ID of the section to uncross-list" }
      },
      required: ["section_id"]
    }
  },

  // ---------------------
  // PHASE 1 TEACHER TOOLS - Assignment Overrides
  // ---------------------
  {
    name: "canvas_create_assignment_override",
    description: "Create an assignment override to provide extensions or different due dates for students, sections, or groups (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        student_ids: {
          type: "array",
          items: { type: "number" },
          description: "Student IDs to override for (for individual student extensions)"
        },
        group_id: { type: "number", description: "Group ID to override for" },
        course_section_id: { type: "number", description: "Section ID to override for" },
        title: { type: "string", description: "Title for the override" },
        due_at: { type: "string", description: "Override due date (ISO 8601 format)" },
        unlock_at: { type: "string", description: "Override unlock date (ISO 8601 format)" },
        lock_at: { type: "string", description: "Override lock date (ISO 8601 format)" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_list_assignment_overrides",
    description: "List all overrides for an assignment to see who has extensions or special due dates (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_get_assignment_override",
    description: "Get details of a specific assignment override (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        override_id: { type: "number", description: "ID of the override" }
      },
      required: ["course_id", "assignment_id", "override_id"]
    }
  },
  {
    name: "canvas_update_assignment_override",
    description: "Update an existing assignment override to change extension dates or settings (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        override_id: { type: "number", description: "ID of the override to update" },
        student_ids: {
          type: "array",
          items: { type: "number" },
          description: "Updated student IDs"
        },
        group_id: { type: "number", description: "Updated group ID" },
        course_section_id: { type: "number", description: "Updated section ID" },
        title: { type: "string", description: "Updated title" },
        due_at: { type: "string", description: "Updated due date (ISO 8601 format)" },
        unlock_at: { type: "string", description: "Updated unlock date (ISO 8601 format)" },
        lock_at: { type: "string", description: "Updated lock date (ISO 8601 format)" }
      },
      required: ["course_id", "assignment_id", "override_id"]
    }
  },
  {
    name: "canvas_delete_assignment_override",
    description: "Remove an assignment override (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        override_id: { type: "number", description: "ID of the override to delete" }
      },
      required: ["course_id", "assignment_id", "override_id"]
    }
  },

  // ---------------------
  // PHASE 1 TEACHER TOOLS - Rubric Grading
  // ---------------------
  {
    name: "canvas_grade_with_rubric",
    description: "Grade a student submission using a rubric with criterion-specific points and comments (teacher tool)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_id: { type: "number", description: "ID of the student" },
        rubric_assessment: {
          type: "object",
          description: "Rubric assessment with criterion IDs as keys",
          additionalProperties: {
            type: "object",
            properties: {
              points: { type: "number", description: "Points awarded for this criterion" },
              rating_id: { type: "string", description: "ID of the rating selected" },
              comments: { type: "string", description: "Comments for this criterion" }
            }
          }
        },
        posted_grade: {
          oneOf: [
            { type: "number" },
            { type: "string" }
          ],
          description: "Overall grade (optional, will be calculated from rubric if not provided)"
        },
        text_comment: { type: "string", description: "General comment for the submission" }
      },
      required: ["course_id", "assignment_id", "user_id", "rubric_assessment"]
    }
  },

  // ---------------------
  // PHASE 1 TEACHER TOOLS - Submission Comments
  // ---------------------
  {
    name: "canvas_add_submission_comment",
    description: "Add text, audio, or video comments to student submissions for detailed feedback. Teachers use this daily during grading.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number" },
        assignment_id: { type: "number" },
        user_id: { type: "number", description: "Student user ID" },
        comment: { type: "string", description: "Feedback text" },
        media_comment_id: { type: "string", description: "Canvas media ID for audio/video comment" },
        media_comment_type: { type: "string", enum: ["audio", "video"], description: "Type of media comment" }
      },
      required: ["course_id", "assignment_id", "user_id", "comment"]
    }
  },
  // Phase 2: Content Creation Tools

  // Page Management
  {
    name: "canvas_create_page",
    description: "Create a new page in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Title of the page" },
        body: { type: "string", description: "HTML content of the page" },
        published: { type: "boolean", description: "Whether to publish immediately" },
        front_page: { type: "boolean", description: "Set as course front page" },
        editing_roles: {
          type: "string",
          enum: ["teachers", "students", "members", "public"],
          description: "Who can edit this page"
        },
        notify_of_update: { type: "boolean", description: "Send notification to students" }
      },
      required: ["course_id", "title", "body"]
    }
  },
  {
    name: "canvas_update_page",
    description: "Update an existing page in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        page_url: { type: "string", description: "URL identifier of the page" },
        title: { type: "string", description: "New title" },
        body: { type: "string", description: "New HTML content" },
        published: { type: "boolean", description: "Publication status" },
        front_page: { type: "boolean", description: "Set as front page" },
        notify_of_update: { type: "boolean", description: "Send notification to students" }
      },
      required: ["course_id", "page_url"]
    }
  },
  {
    name: "canvas_delete_page",
    description: "Delete a page from a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        page_url: { type: "string", description: "URL identifier of the page to delete" }
      },
      required: ["course_id", "page_url"]
    }
  },

  // Announcements
  {
    name: "canvas_create_announcement",
    description: "Create a new announcement in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Title of the announcement" },
        message: { type: "string", description: "HTML content of the announcement" },
        published: { type: "boolean", description: "Whether to publish immediately" },
        delayed_post_at: { type: "string", description: "ISO 8601 datetime to post announcement" },
        lock_at: { type: "string", description: "ISO 8601 datetime to lock comments" }
      },
      required: ["course_id", "title", "message"]
    }
  },
  {
    name: "canvas_update_announcement",
    description: "Update an existing announcement",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        topic_id: { type: "number", description: "ID of the announcement" },
        title: { type: "string", description: "New title" },
        message: { type: "string", description: "New HTML content" },
        published: { type: "boolean", description: "Publication status" },
        delayed_post_at: { type: "string", description: "ISO 8601 datetime to post" },
        lock_at: { type: "string", description: "ISO 8601 datetime to lock comments" }
      },
      required: ["course_id", "topic_id"]
    }
  },

  // Discussion Topics
  {
    name: "canvas_create_discussion_topic",
    description: "Create a new discussion topic in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Title of the discussion" },
        message: { type: "string", description: "HTML content of the discussion" },
        discussion_type: {
          type: "string",
          enum: ["side_comment", "threaded"],
          description: "Type of discussion threading"
        },
        published: { type: "boolean", description: "Whether to publish immediately" },
        delayed_post_at: { type: "string", description: "ISO 8601 datetime to post" },
        lock_at: { type: "string", description: "ISO 8601 datetime to lock discussion" },
        assignment: {
          type: "object",
          description: "Assignment settings if this is a graded discussion",
          properties: {
            points_possible: { type: "number" },
            grading_type: { type: "string" },
            due_at: { type: "string" }
          }
        }
      },
      required: ["course_id", "title", "message"]
    }
  },
  {
    name: "canvas_update_discussion_topic",
    description: "Update an existing discussion topic",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        topic_id: { type: "number", description: "ID of the discussion topic" },
        title: { type: "string", description: "New title" },
        message: { type: "string", description: "New HTML content" },
        discussion_type: {
          type: "string",
          enum: ["side_comment", "threaded"],
          description: "Type of discussion threading"
        },
        published: { type: "boolean", description: "Publication status" },
        delayed_post_at: { type: "string", description: "ISO 8601 datetime to post" },
        lock_at: { type: "string", description: "ISO 8601 datetime to lock" }
      },
      required: ["course_id", "topic_id"]
    }
  },
  {
    name: "canvas_delete_discussion_topic",
    description: "Delete a discussion topic from a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        topic_id: { type: "number", description: "ID of the discussion topic to delete" }
      },
      required: ["course_id", "topic_id"]
    }
  },

  // Module Management
  {
    name: "canvas_create_module",
    description: "Create a new module in a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        name: { type: "string", description: "Name of the module" },
        unlock_at: { type: "string", description: "ISO 8601 datetime to unlock module" },
        position: { type: "number", description: "Position in module list" },
        require_sequential_progress: {
          type: "boolean",
          description: "Students must complete items in order"
        },
        prerequisite_module_ids: {
          type: "array",
          items: { type: "number" },
          description: "Modules that must be completed first"
        },
        publish_final_grade: {
          type: "boolean",
          description: "Publish final grade when module completed"
        }
      },
      required: ["course_id", "name"]
    }
  },
  {
    name: "canvas_update_module",
    description: "Update an existing module",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        name: { type: "string", description: "New name" },
        unlock_at: { type: "string", description: "ISO 8601 datetime to unlock" },
        position: { type: "number", description: "New position" },
        require_sequential_progress: { type: "boolean" },
        prerequisite_module_ids: {
          type: "array",
          items: { type: "number" }
        },
        publish_final_grade: { type: "boolean" },
        published: { type: "boolean", description: "Publication status" }
      },
      required: ["course_id", "module_id"]
    }
  },
  {
    name: "canvas_delete_module",
    description: "Delete a module from a Canvas course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module to delete" }
      },
      required: ["course_id", "module_id"]
    }
  },
  {
    name: "canvas_publish_module",
    description: "Publish a module and all its items",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module to publish" }
      },
      required: ["course_id", "module_id"]
    }
  },
  {
    name: "canvas_unpublish_module",
    description: "Unpublish a module and all its items",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module to unpublish" }
      },
      required: ["course_id", "module_id"]
    }
  },

  // Module Items
  {
    name: "canvas_create_module_item",
    description: "Add an item to a module (assignment, page, file, quiz, etc.)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        title: { type: "string", description: "Title of the module item" },
        type: {
          type: "string",
          enum: ["Assignment", "Quiz", "File", "Page", "Discussion", "SubHeader", "ExternalUrl", "ExternalTool"],
          description: "Type of content"
        },
        content_id: { type: "number", description: "ID of the content (assignment_id, page_id, etc.)" },
        external_url: { type: "string", description: "URL for ExternalUrl type" },
        position: { type: "number", description: "Position in module" },
        indent: { type: "number", description: "Indentation level (0-3)" },
        page_url: { type: "string", description: "URL for Page type" },
        new_tab: { type: "boolean", description: "Open in new tab for ExternalUrl" }
      },
      required: ["course_id", "module_id", "title", "type"]
    }
  },
  {
    name: "canvas_update_module_item",
    description: "Update a module item",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        item_id: { type: "number", description: "ID of the module item" },
        title: { type: "string", description: "New title" },
        position: { type: "number", description: "New position" },
        indent: { type: "number", description: "New indentation (0-3)" },
        published: { type: "boolean", description: "Publication status" }
      },
      required: ["course_id", "module_id", "item_id"]
    }
  },
  {
    name: "canvas_delete_module_item",
    description: "Remove an item from a module",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        module_id: { type: "number", description: "ID of the module" },
        item_id: { type: "number", description: "ID of the module item to delete" }
      },
      required: ["course_id", "module_id", "item_id"]
    }
  },

  // Grade Posting/Hiding
  // Grade Posting/Hiding
  {
    name: "canvas_post_grades",
    description: "Release hidden grades to students for review. Teachers use this daily to control when students see grades, allowing review before release.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "Course ID" },
        assignment_id: { type: "number", description: "Assignment ID" },
        student_ids: { type: "array", items: { type: "number" }, description: "Specific students (omit for all)" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_hide_grades",
    description: "Hide grades from student view after posting, for corrections or privacy.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "Course ID" },
        assignment_id: { type: "number", description: "Assignment ID" },
        student_ids: { type: "array", items: { type: "number" }, description: "Specific students (omit for all)" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_post_assignment_grades",
    description: "Post grades to make them visible to students for a specific assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_ids: { type: "array", items: { type: "number" }, description: "Optional: specific student IDs to post grades for" },
        graded_only: { type: "boolean", description: "Only post grades for students who have been graded" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_hide_assignment_grades",
    description: "Hide grades from students for a specific assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        user_ids: { type: "array", items: { type: "number" }, description: "Optional: specific student IDs to hide grades for" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_get_posting_policy",
    description: "Get the current posting policy for an assignment",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" }
      },
      required: ["course_id", "assignment_id"]
    }
  },
  {
    name: "canvas_set_posting_policy",
    description: "Set posting policy for an assignment (manual or automatic grade posting)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        post_manually: { type: "boolean", description: "If true, grades must be manually posted. If false, grades post automatically" }
      },
      required: ["course_id", "assignment_id", "post_manually"]
    }
  },

  // Quiz Questions
  {
    name: "canvas_list_quiz_questions",
    description: "List all questions for a quiz",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" }
      },
      required: ["course_id", "quiz_id"]
    }
  },
  {
    name: "canvas_create_quiz_question",
    description: "Create a new question in a quiz. Supports multiple question types including multiple_choice, true_false, short_answer_question, fill_in_multiple_blanks_question, multiple_answers_question, matching_question, numerical_question, calculated_question, essay_question, file_upload_question, text_only_question, and multiple_dropdowns_question",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" },
        question_name: { type: "string", description: "Name/title of the question" },
        question_text: { type: "string", description: "The question text (HTML allowed)" },
        question_type: {
          type: "string",
          enum: ["multiple_choice", "true_false", "short_answer_question", "fill_in_multiple_blanks_question", "multiple_answers_question", "matching_question", "numerical_question", "calculated_question", "essay_question", "file_upload_question", "text_only_question", "multiple_dropdowns_question"],
          description: "Type of question"
        },
        points_possible: { type: "number", description: "Points this question is worth" },
        answers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string" },
              weight: { type: "number" },
              comments: { type: "string" }
            }
          },
          description: "Answer options (for multiple choice, matching, etc.)"
        },
        correct_comments: { type: "string", description: "Comment shown when answer is correct" },
        incorrect_comments: { type: "string", description: "Comment shown when answer is incorrect" },
        neutral_comments: { type: "string", description: "General comments shown regardless of correctness" }
      },
      required: ["course_id", "quiz_id", "question_text", "question_type"]
    }
  },
  {
    name: "canvas_update_quiz_question",
    description: "Update an existing quiz question",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" },
        question_id: { type: "number", description: "ID of the question to update" },
        question_name: { type: "string", description: "Name/title of the question" },
        question_text: { type: "string", description: "The question text (HTML allowed)" },
        question_type: {
          type: "string",
          enum: ["multiple_choice", "true_false", "short_answer_question", "fill_in_multiple_blanks_question", "multiple_answers_question", "matching_question", "numerical_question", "calculated_question", "essay_question", "file_upload_question", "text_only_question", "multiple_dropdowns_question"],
          description: "Type of question"
        },
        points_possible: { type: "number", description: "Points this question is worth" },
        answers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: { type: "string" },
              weight: { type: "number" },
              comments: { type: "string" }
            }
          },
          description: "Answer options"
        }
      },
      required: ["course_id", "quiz_id", "question_id"]
    }
  },
  {
    name: "canvas_delete_quiz_question",
    description: "Delete a question from a quiz",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" },
        question_id: { type: "number", description: "ID of the question to delete" }
      },
      required: ["course_id", "quiz_id", "question_id"]
    }
  },
  {
    name: "canvas_get_quiz_question",
    description: "Get details of a specific quiz question",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        quiz_id: { type: "number", description: "ID of the quiz" },
        question_id: { type: "number", description: "ID of the question" }
      },
      required: ["course_id", "quiz_id", "question_id"]
    }
  },

  // Analytics
  {
    name: "canvas_get_course_activity",
    description: "Get analytics data for a course including page views and participations over time",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_student_summaries",
    description: "Get summary analytics for all students in a course (page views, participation level, tardiness)",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_student_activity",
    description: "Get detailed activity analytics for a specific student",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        user_id: { type: "number", description: "ID of the student" }
      },
      required: ["course_id", "user_id"]
    }
  },
  {
    name: "canvas_get_student_assignments",
    description: "Get assignment-level analytics for a specific student including submission status and scores",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        user_id: { type: "number", description: "ID of the student" }
      },
      required: ["course_id", "user_id"]
    }
  },

  // Grade Export
  {
    name: "canvas_export_gradebook_csv",
    description: "Export gradebook data as CSV format for all students and assignments in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        include_comments: { type: "boolean", description: "Include grader comments in export" },
        include_missing: { type: "boolean", description: "Include assignments with missing submissions" }
      },
      required: ["course_id"]
    }
  },

  // Late Policy
  {
    name: "canvas_get_late_policy",
    description: "Get the late submission policy for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_create_late_policy",
    description: "Create a late submission policy for a course with automatic deductions",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        late_submission_deduction: { type: "number", description: "Percentage to deduct per interval (0-100)" },
        late_submission_interval: { type: "string", enum: ["day", "hour"], description: "Time interval for deductions" },
        late_submission_minimum_percent: { type: "number", description: "Minimum grade percentage after deductions (0-100)" },
        missing_submission_deduction: { type: "number", description: "Percentage deduction for missing submissions (0-100)" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_update_late_policy",
    description: "Update the late submission policy for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        late_submission_deduction: { type: "number", description: "Percentage to deduct per interval (0-100)" },
        late_submission_interval: { type: "string", enum: ["day", "hour"], description: "Time interval for deductions" },
        late_submission_minimum_percent: { type: "number", description: "Minimum grade percentage after deductions (0-100)" },
        missing_submission_deduction: { type: "number", description: "Percentage deduction for missing submissions (0-100)" }
      },
      required: ["course_id"]
    }
  },

  // SpeedGrader Navigation
  {
    name: "canvas_get_speedgrader_url",
    description: "Generate a SpeedGrader URL for quick navigation to grade an assignment, optionally for a specific student",
    inputSchema: {
      type: "object",
      properties: {
        domain: { type: "string", description: "Canvas domain (e.g., 'school.instructure.com')" },
        course_id: { type: "number", description: "ID of the course" },
        assignment_id: { type: "number", description: "ID of the assignment" },
        student_id: { type: "number", description: "Optional: ID of the student to navigate to directly" },
        anonymous_id: { type: "string", description: "Optional: Anonymous ID for anonymous grading" }
      },
      required: ["domain", "course_id", "assignment_id"]
    }
  },

  // Outcomes/Standards
  {
    name: "canvas_list_outcomes",
    description: "List learning outcomes/standards for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_create_outcome",
    description: "Create a new learning outcome/standard for a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        title: { type: "string", description: "Title of the outcome" },
        display_name: { type: "string", description: "Display name (optional, defaults to title)" },
        description: { type: "string", description: "Description of what students should achieve" },
        vendor_guid: { type: "string", description: "External learning standard identifier (e.g., Common Core)" },
        mastery_points: { type: "number", description: "Points needed to achieve mastery" },
        calculation_method: {
          type: "string",
          enum: ["decaying_average", "n_mastery", "latest", "highest", "average"],
          description: "How to calculate mastery from multiple attempts"
        },
        calculation_int: { type: "number", description: "Parameter for calculation_method (e.g., number for n_mastery)" }
      },
      required: ["course_id", "title"]
    }
  },
  {
    name: "canvas_update_outcome",
    description: "Update an existing learning outcome/standard",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        outcome_id: { type: "number", description: "ID of the outcome to update" },
        title: { type: "string", description: "Title of the outcome" },
        display_name: { type: "string", description: "Display name" },
        description: { type: "string", description: "Description" },
        mastery_points: { type: "number", description: "Points needed to achieve mastery" },
        calculation_method: {
          type: "string",
          enum: ["decaying_average", "n_mastery", "latest", "highest", "average"],
          description: "How to calculate mastery"
        }
      },
      required: ["course_id", "outcome_id"]
    }
  },
  {
    name: "canvas_delete_outcome",
    description: "Delete a learning outcome/standard from a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        outcome_id: { type: "number", description: "ID of the outcome to delete" }
      },
      required: ["course_id", "outcome_id"]
    }
  },
  {
    name: "canvas_get_outcome",
    description: "Get details of a specific learning outcome/standard",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        outcome_id: { type: "number", description: "ID of the outcome" }
      },
      required: ["course_id", "outcome_id"]
    }
  },
  {
    name: "canvas_get_outcome_alignments",
    description: "Get all assignments/quizzes aligned to learning outcomes in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" }
      },
      required: ["course_id"]
    }
  },
  {
    name: "canvas_get_outcome_results",
    description: "Get student results/scores for learning outcomes in a course",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "ID of the course" },
        user_ids: { type: "array", items: { type: "number" }, description: "Filter by specific student IDs" },
        outcome_ids: { type: "array", items: { type: "number" }, description: "Filter by specific outcome IDs" },
        include_hidden: { type: "boolean", description: "Include results for muted assignments" }
      },
      required: ["course_id"]
    }
  },

  // Attendance
  {
    name: "canvas_get_attendance_info",
    description: "Get information about attendance tracking in Canvas. Canvas uses third-party LTI tools for attendance - this tool provides setup documentation and workflow guidance",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    }
  }
,

  // Group Management (Collaboration Groups)
  {
    name: "canvas_create_group_category",
    description: "Create a group set (e.g., 'Project Teams', 'Lab Partners') to organize different types of student groupings.",
    inputSchema: {
      type: "object",
      properties: {
        course_id: { type: "number", description: "Course ID" },
        name: { type: "string", description: "Category name" },
        self_signup: {
          type: "string",
          enum: ["enabled", "restricted"],
          description: "Allow student self-signup"
        },
        auto_leader: {
          type: "string",
          enum: ["first", "random"],
          description: "Auto-assign group leader"
        },
        group_limit: { type: "number", description: "Max students per group" },
        create_group_count: { type: "number", description: "Auto-create N empty groups" }
      },
      required: ["course_id", "name"]
    }
  },
  {
    name: "canvas_create_group",
    description: "Create a student collaboration group within a group category for project teams, study groups, or peer review pairs. Teachers use this weekly.",
    inputSchema: {
      type: "object",
      properties: {
        group_category_id: { type: "number", description: "Group category ID" },
        name: { type: "string", description: "Group name" },
        description: { type: "string", description: "Group description" },
        is_public: { type: "boolean", description: "Is group public" },
        max_membership: { type: "number", description: "Maximum members" }
      },
      required: ["group_category_id", "name"]
    }
  },
  {
    name: "canvas_assign_group_members",
    description: "Add students to a specific group to organize collaborative teams.",
    inputSchema: {
      type: "object",
      properties: {
        group_id: { type: "number", description: "Group ID" },
        user_ids: {
          type: "array",
          items: { type: "number" },
          description: "Array of student user IDs"
        }
      },
      required: ["group_id", "user_ids"]
    }
  }
];

class CanvasMCPServer {
  private server: Server;
  private client: CanvasClient;
  private config: MCPServerConfig;

  constructor(config: MCPServerConfig) {
    this.config = config;
    this.client = new CanvasClient(
      config.canvas.token, 
      config.canvas.domain,
      {
        maxRetries: config.canvas.maxRetries,
        retryDelay: config.canvas.retryDelay
      }
    );

    this.server = new Server(
      {
        name: config.name,
        version: config.version
      },
      {
        capabilities: {
          resources: {},
          tools: {}
        }
      }
    );

    this.setupHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    this.server.onerror = (error) => {
      console.error(`[${this.config.name} Error]`, error);
    };

    process.on('SIGINT', async () => {
      console.log('\nReceived SIGINT, shutting down gracefully...');
      await this.server.close();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      console.log('\nReceived SIGTERM, shutting down gracefully...');
      await this.server.close();
      process.exit(0);
    });

    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      process.exit(1);
    });
  }

  private setupHandlers(): void {
    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      try {
        const courses = await this.client.listCourses();
        
        return {
          resources: [
            {
              uri: "canvas://health",
              name: "Canvas Health Status",
              description: "Health check and API connectivity status",
              mimeType: "application/json"
            },
            {
              uri: "courses://list",
              name: "All Courses",
              description: "List of all available Canvas courses",
              mimeType: "application/json"
            },
            ...courses.map((course: CanvasCourse) => ({
              uri: `course://${course.id}`,
              name: `Course: ${course.name}`,
              description: `${course.course_code} - ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `assignments://${course.id}`,
              name: `Assignments: ${course.name}`,
              description: `Assignments for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `modules://${course.id}`,
              name: `Modules: ${course.name}`,
              description: `Modules for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `discussions://${course.id}`,
              name: `Discussions: ${course.name}`,
              description: `Discussion topics for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `announcements://${course.id}`,
              name: `Announcements: ${course.name}`,
              description: `Announcements for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `quizzes://${course.id}`,
              name: `Quizzes: ${course.name}`,
              description: `Quizzes for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `pages://${course.id}`,
              name: `Pages: ${course.name}`,
              description: `Pages for ${course.name}`,
              mimeType: "application/json"
            })),
            ...courses.map((course: CanvasCourse) => ({
              uri: `files://${course.id}`,
              name: `Files: ${course.name}`,
              description: `Files for ${course.name}`,
              mimeType: "application/json"
            })),
            {
              uri: "dashboard://user",
              name: "User Dashboard",
              description: "User's Canvas dashboard information",
              mimeType: "application/json"
            },
            {
              uri: "profile://user",
              name: "User Profile",
              description: "Current user's profile information",
              mimeType: "application/json"
            },
            {
              uri: "calendar://upcoming",
              name: "Upcoming Events",
              description: "Upcoming assignments and events",
              mimeType: "application/json"
            }
          ]
        };
      } catch (error) {
        console.error('Error listing resources:', error);
        return { resources: [] };
      }
    });

    // Read resource content
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;
      const [type, id] = uri.split("://");
      
      try {
        let content;
        
        switch (type) {
          case "canvas":
            if (id === "health") {
              content = await this.client.healthCheck();
            }
            break;
            
          case "courses":
            content = await this.client.listCourses();
            break;
            
          case "course":
            content = await this.client.getCourse(parseInt(id));
            break;
          
          case "assignments":
            content = await this.client.listAssignments(parseInt(id), true);
            break;
          
          case "modules":
            content = await this.client.listModules(parseInt(id));
            break;

          case "discussions":
            content = await this.client.listDiscussionTopics(parseInt(id));
            break;

          case "announcements":
            content = await this.client.listAnnouncements(id);
            break;
          
          case "quizzes":
            content = await this.client.listQuizzes(id);
            break;

          case "pages":
            content = await this.client.listPages(parseInt(id));
            break;

          case "files":
            content = await this.client.listFiles(parseInt(id));
            break;

          case "dashboard":
            if (id === "user") {
              content = await this.client.getDashboard();
            }
            break;

          case "profile":
            if (id === "user") {
              content = await this.client.getUserProfile();
            }
            break;

          case "calendar":
            if (id === "upcoming") {
              content = await this.client.getUpcomingAssignments();
            }
            break;
          
          default:
            throw new Error(`Unknown resource type: ${type}`);
        }

        return {
          contents: [{
            uri: request.params.uri,
            mimeType: "application/json",
            text: JSON.stringify(content, null, 2)
          }]
        };
      } catch (error) {
        console.error(`Error reading resource ${uri}:`, error);
        return {
          contents: [{
            uri: request.params.uri,
            mimeType: "application/json",
            text: JSON.stringify({ error: error instanceof Error ? error.message : String(error) }, null, 2)
          }]
        };
      }
    });

    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: TOOLS
    }));

    // Handle tool calls with comprehensive error handling
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const args = request.params.arguments || {};
        const toolName = request.params.name;
        
        console.error(`[Canvas MCP] Executing tool: ${toolName}`);
        
        switch (toolName) {
          // Health check
          case "canvas_health_check": {
            const health = await this.client.healthCheck();
            return {
              content: [{ type: "text", text: JSON.stringify(health, null, 2) }]
            };
          }

          // Course management
          case "canvas_list_courses": {
            const { include_ended = false } = args as { include_ended?: boolean };
            const courses = await this.client.listCourses(include_ended);
            return {
              content: [{ type: "text", text: JSON.stringify(courses, null, 2) }]
            };
          }

          case "canvas_get_course": {
            const { course_id } = args as { course_id: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const course = await this.client.getCourse(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(course, null, 2) }]
            };
          }
          
          case "canvas_create_course": {
            const courseArgs = args as unknown as CreateCourseArgs;
            if (!courseArgs.account_id || !courseArgs.name) {
              throw new Error("Missing required fields: account_id and name");
            }
            const course = await this.client.createCourse(courseArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(course, null, 2) }]
            };
          }
          
          case "canvas_update_course": {
            const updateArgs = args as unknown as UpdateCourseArgs;
            if (!updateArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }
            const updatedCourse = await this.client.updateCourse(updateArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(updatedCourse, null, 2) }]
            };
          }

          // Assignment management
          case "canvas_list_assignments": {
            const { course_id, include_submissions = false } = args as { 
              course_id: number; 
              include_submissions?: boolean 
            };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const assignments = await this.client.listAssignments(course_id, include_submissions);
            return {
              content: [{ type: "text", text: JSON.stringify(assignments, null, 2) }]
            };
          }

          case "canvas_get_assignment": {
            const { course_id, assignment_id, include_submission = false } = args as { 
              course_id: number; 
              assignment_id: number;
              include_submission?: boolean;
            };
            if (!course_id || !assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            
            const assignment = await this.client.getAssignment(course_id, assignment_id, include_submission);
            return {
              content: [{ type: "text", text: JSON.stringify(assignment, null, 2) }]
            };
          }
          
          case "canvas_create_assignment": {
            const assignmentArgs = args as unknown as CreateAssignmentArgs;
            if (!assignmentArgs.course_id || !assignmentArgs.name) {
              throw new Error("Missing required fields: course_id and name");
            }
            const assignment = await this.client.createAssignment(assignmentArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(assignment, null, 2) }]
            };
          }
          
          case "canvas_update_assignment": {
            const updateAssignmentArgs = args as unknown as UpdateAssignmentArgs;
            if (!updateAssignmentArgs.course_id || !updateAssignmentArgs.assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            const updatedAssignment = await this.client.updateAssignment(updateAssignmentArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(updatedAssignment, null, 2) }]
            };
          }

          case "canvas_list_assignment_groups": {
            const { course_id } = args as { course_id: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const groups = await this.client.listAssignmentGroups(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(groups, null, 2) }]
            };
          }

          case "canvas_create_assignment_group": {
            const createArgs = args as unknown as CreateAssignmentGroupArgs;
            if (!createArgs.course_id || !createArgs.name) {
              throw new Error("Missing required fields: course_id and name");
            }
            if (createArgs.name.trim() === "") {
              throw new Error("Validation error: name must be non-empty");
            }
            if (createArgs.group_weight !== undefined && (createArgs.group_weight < 0 || createArgs.group_weight > 100)) {
              throw new Error("Validation error: group_weight must be between 0 and 100");
            }

            const result = await this.client.createAssignmentGroup(createArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
            };
          }

          case "canvas_update_assignment_group": {
            const updateArgs = args as unknown as UpdateAssignmentGroupArgs;
            if (!updateArgs.course_id || !updateArgs.assignment_group_id) {
              throw new Error("Missing required fields: course_id and assignment_group_id");
            }
            if (updateArgs.name !== undefined && updateArgs.name.trim() === "") {
              throw new Error("Validation error: name must be non-empty");
            }
            if (updateArgs.group_weight !== undefined && (updateArgs.group_weight < 0 || updateArgs.group_weight > 100)) {
              throw new Error("Validation error: group_weight must be between 0 and 100");
            }
            if (updateArgs.rules) {
              if (updateArgs.rules.drop_lowest !== undefined && updateArgs.rules.drop_lowest < 0) {
                throw new Error("Validation error: drop_lowest must be non-negative");
              }
              if (updateArgs.rules.drop_highest !== undefined && updateArgs.rules.drop_highest < 0) {
                throw new Error("Validation error: drop_highest must be non-negative");
              }
            }

            const result = await this.client.updateAssignmentGroup(updateArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
            };
          }

          // Submissions
          case "canvas_get_submission": {
            const { course_id, assignment_id, user_id } = args as { 
              course_id: number; 
              assignment_id: number;
              user_id?: number;
            };
            if (!course_id || !assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            
            const submission = await this.client.getSubmission(course_id, assignment_id, user_id || 'self');
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }

          case "canvas_submit_assignment": {
            const submitArgs = args as unknown as SubmitAssignmentArgs;
            const { course_id, assignment_id, submission_type } = submitArgs;

            if (!course_id || !assignment_id || !submission_type) {
              throw new Error("Missing required fields: course_id, assignment_id, and submission_type");
            }

            const submission = await this.client.submitAssignment(submitArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }
          
          case "canvas_submit_grade": {
            const gradeArgs = args as unknown as SubmitGradeArgs;
            if (!gradeArgs.course_id || !gradeArgs.assignment_id || 
                !gradeArgs.user_id || gradeArgs.grade === undefined) {
              throw new Error("Missing required fields for grade submission");
            }
            const submission = await this.client.submitGrade(gradeArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }

          // Files
          case "canvas_list_files": {
            const { course_id, folder_id } = args as { course_id: number; folder_id?: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const files = await this.client.listFiles(course_id, folder_id);
            return {
              content: [{ type: "text", text: JSON.stringify(files, null, 2) }]
            };
          }

          case "canvas_get_file": {
            const { file_id } = args as { file_id: number };
            if (!file_id) throw new Error("Missing required field: file_id");
            
            const file = await this.client.getFile(file_id);
            return {
              content: [{ type: "text", text: JSON.stringify(file, null, 2) }]
            };
          }

          case "canvas_list_folders": {
            const { course_id } = args as { course_id: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const folders = await this.client.listFolders(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(folders, null, 2) }]
            };
          }

          // Pages
          case "canvas_list_pages": {
            const { course_id } = args as { course_id: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const pages = await this.client.listPages(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(pages, null, 2) }]
            };
          }

          case "canvas_get_page": {
            const { course_id, page_url } = args as { course_id: number; page_url: string };
            if (!course_id || !page_url) {
              throw new Error("Missing required fields: course_id and page_url");
            }
            
            const page = await this.client.getPage(course_id, page_url);
            return {
              content: [{ type: "text", text: JSON.stringify(page, null, 2) }]
            };
          }

          // Calendar
          case "canvas_list_calendar_events": {
            const { start_date, end_date } = args as { start_date?: string; end_date?: string };
            const events = await this.client.listCalendarEvents(start_date, end_date);
            return {
              content: [{ type: "text", text: JSON.stringify(events, null, 2) }]
            };
          }

          case "canvas_get_upcoming_assignments": {
            const { limit = 10 } = args as { limit?: number };
            const assignments = await this.client.getUpcomingAssignments(limit);
            return {
              content: [{ type: "text", text: JSON.stringify(assignments, null, 2) }]
            };
          }

          // Dashboard
          case "canvas_get_dashboard": {
            const dashboard = await this.client.getDashboard();
            return {
              content: [{ type: "text", text: JSON.stringify(dashboard, null, 2) }]
            };
          }

          case "canvas_get_dashboard_cards": {
            const cards = await this.client.getDashboardCards();
            return {
              content: [{ type: "text", text: JSON.stringify(cards, null, 2) }]
            };
          }

          // User management
          case "canvas_get_user_profile": {
            const profile = await this.client.getUserProfile();
            return {
              content: [{ type: "text", text: JSON.stringify(profile, null, 2) }]
            };
          }

          case "canvas_update_user_profile": {
            const profileData = args as Partial<{ name: string; short_name: string; bio: string; title: string; time_zone: string }>;
            const updatedProfile = await this.client.updateUserProfile(profileData);
            return {
              content: [{ type: "text", text: JSON.stringify(updatedProfile, null, 2) }]
            };
          }

          case "canvas_enroll_user": {
            const enrollArgs = args as unknown as EnrollUserArgs;
            if (!enrollArgs.course_id || !enrollArgs.user_id) {
              throw new Error("Missing required fields: course_id and user_id");
            }
            const enrollment = await this.client.enrollUser(enrollArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(enrollment, null, 2) }]
            };
          }

          // Grades
          case "canvas_get_course_grades": {
            const { course_id } = args as { course_id: number };
            if (!course_id) throw new Error("Missing required field: course_id");
            
            const grades = await this.client.getCourseGrades(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(grades, null, 2) }]
            };
          }

          case "canvas_get_user_grades": {
            const grades = await this.client.getUserGrades();
            return {
              content: [{ type: "text", text: JSON.stringify(grades, null, 2) }]
            };
          }

          // Continue with all other tools...
          // [I'll include the rest in the same pattern]
          
          // Account Management
          case "canvas_get_account": {
            const { account_id } = args as { account_id: number };
            if (!account_id) throw new Error("Missing required field: account_id");
            
            const account = await this.client.getAccount(account_id);
            return {
              content: [{ type: "text", text: JSON.stringify(account, null, 2) }]
            };
          }

          case "canvas_list_account_courses": {
            const accountCoursesArgs = args as unknown as ListAccountCoursesArgs;
            if (!accountCoursesArgs.account_id) {
              throw new Error("Missing required field: account_id");
            }
            
            const courses = await this.client.listAccountCourses(accountCoursesArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(courses, null, 2) }]
            };
          }

          case "canvas_list_account_users": {
            const accountUsersArgs = args as unknown as ListAccountUsersArgs;
            if (!accountUsersArgs.account_id) {
              throw new Error("Missing required field: account_id");
            }
            
            const users = await this.client.listAccountUsers(accountUsersArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(users, null, 2) }]
            };
          }

          case "canvas_create_user": {
            const createUserArgs = args as unknown as CreateUserArgs;
            if (!createUserArgs.account_id || !createUserArgs.user || !createUserArgs.pseudonym) {
              throw new Error("Missing required fields: account_id, user, and pseudonym");
            }
            
            const user = await this.client.createUser(createUserArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(user, null, 2) }]
            };
          }

          case "canvas_list_sub_accounts": {
            const { account_id } = args as { account_id: number };
            if (!account_id) throw new Error("Missing required field: account_id");
            
            const subAccounts = await this.client.listSubAccounts(account_id);
            return {
              content: [{ type: "text", text: JSON.stringify(subAccounts, null, 2) }]
            };
          }

          case "canvas_get_account_reports": {
            const { account_id } = args as { account_id: number };
            if (!account_id) throw new Error("Missing required field: account_id");
            
            const reports = await this.client.getAccountReports(account_id);
            return {
              content: [{ type: "text", text: JSON.stringify(reports, null, 2) }]
            };
          }

          case "canvas_create_account_report": {
            const createReportArgs = args as unknown as CreateReportArgs;
            if (!createReportArgs.account_id || !createReportArgs.report) {
              throw new Error("Missing required fields: account_id and report");
            }

            const report = await this.client.createAccountReport(createReportArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(report, null, 2) }]
            };
          }

          // ---------------------
          // TEACHER TOOLS - Students/Roster
          // ---------------------
          case "canvas_list_students": {
            const { course_id, include } = args as {
              course_id: number;
              include?: ('avatar_url' | 'enrollments' | 'email' | 'bio')[]
            };
            if (!course_id) throw new Error("Missing required field: course_id");

            const students = await this.client.listStudents({ course_id, include });
            return {
              content: [{ type: "text", text: JSON.stringify(students, null, 2) }]
            };
          }

          // ---------------------
          // TEACHER TOOLS - Grading
          // ---------------------
          case "canvas_list_submissions": {
            const submissionsArgs = args as unknown as ListSubmissionsArgs;
            if (!submissionsArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }

            const submissions = await this.client.listSubmissions(submissionsArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submissions, null, 2) }]
            };
          }

          case "canvas_update_submission_grade": {
            const updateGradeArgs = args as unknown as UpdateSubmissionGradeArgs;
            if (!updateGradeArgs.course_id || !updateGradeArgs.assignment_id || !updateGradeArgs.user_id) {
              throw new Error("Missing required fields: course_id, assignment_id, and user_id");
            }

            const submission = await this.client.updateSubmissionGrade(updateGradeArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }

          case "canvas_bulk_update_grades": {
            const bulkGradeArgs = args as unknown as BulkUpdateGradesArgs;
            if (!bulkGradeArgs.course_id || !bulkGradeArgs.grade_data) {
              throw new Error("Missing required fields: course_id and grade_data");
            }

            const result = await this.client.bulkUpdateGrades(bulkGradeArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
            };
          }

          // ---------------------
          // TEACHER TOOLS - Assignment Management
          // ---------------------
          case "canvas_duplicate_assignment": {
            const duplicateArgs = args as unknown as DuplicateAssignmentArgs;
            if (!duplicateArgs.course_id || !duplicateArgs.assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }

            const duplicatedAssignment = await this.client.duplicateAssignment(duplicateArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(duplicatedAssignment, null, 2) }]
            };
          }

          case "canvas_delete_assignment": {
            const { course_id, assignment_id } = args as {
              course_id: number;
              assignment_id: number
            };
            if (!course_id || !assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }

            await this.client.deleteAssignment(course_id, assignment_id);
            return {
              content: [{ type: "text", text: JSON.stringify({ success: true, message: "Assignment deleted successfully" }, null, 2) }]
            };
          }

          // ---------------------
          // TEACHER TOOLS - Sections/Cross-listing
          // ---------------------
          case "canvas_list_sections": {
            const listSectionsArgs = args as unknown as ListSectionsArgs;
            if (!listSectionsArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }

            const sections = await this.client.listSections(listSectionsArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(sections, null, 2) }]
            };
          }

          case "canvas_get_section": {
            const { course_id, section_id, include } = args as {
              course_id: number;
              section_id: number;
              include?: ('students' | 'enrollments' | 'total_students')[]
            };
            if (!course_id || !section_id) {
              throw new Error("Missing required fields: course_id and section_id");
            }

            const section = await this.client.getSection(course_id, section_id, include);
            return {
              content: [{ type: "text", text: JSON.stringify(section, null, 2) }]
            };
          }

          case "canvas_cross_list_section": {
            const crossListArgs = args as unknown as CrossListSectionArgs;
            if (!crossListArgs.section_id || !crossListArgs.new_course_id) {
              throw new Error("Missing required fields: section_id and new_course_id");
            }

            const crossListedSection = await this.client.crossListSection(crossListArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(crossListedSection, null, 2) }]
            };
          }

          case "canvas_uncross_list_section": {
            const { section_id } = args as { section_id: number };
            if (!section_id) throw new Error("Missing required field: section_id");

            const uncrossListedSection = await this.client.uncrossListSection(section_id);
            return {
              content: [{ type: "text", text: JSON.stringify(uncrossListedSection, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 1 TOOLS - Assignment Overrides
          // ---------------------
          case "canvas_create_assignment_override": {
            const overrideArgs = args as unknown as CreateAssignmentOverrideArgs;
            if (!overrideArgs.course_id || !overrideArgs.assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }

            const override = await this.client.createAssignmentOverride(overrideArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(override, null, 2) }]
            };
          }

          case "canvas_list_assignment_overrides": {
            const { course_id, assignment_id } = args as {
              course_id: number;
              assignment_id: number;
            };
            if (!course_id || !assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }

            const overrides = await this.client.listAssignmentOverrides(course_id, assignment_id);
            return {
              content: [{ type: "text", text: JSON.stringify(overrides, null, 2) }]
            };
          }

          case "canvas_get_assignment_override": {
            const { course_id, assignment_id, override_id } = args as {
              course_id: number;
              assignment_id: number;
              override_id: number;
            };
            if (!course_id || !assignment_id || !override_id) {
              throw new Error("Missing required fields: course_id, assignment_id, and override_id");
            }

            const override = await this.client.getAssignmentOverride(course_id, assignment_id, override_id);
            return {
              content: [{ type: "text", text: JSON.stringify(override, null, 2) }]
            };
          }

          case "canvas_update_assignment_override": {
            const updateOverrideArgs = args as unknown as UpdateAssignmentOverrideArgs;
            if (!updateOverrideArgs.course_id || !updateOverrideArgs.assignment_id || !updateOverrideArgs.override_id) {
              throw new Error("Missing required fields: course_id, assignment_id, and override_id");
            }

            const updatedOverride = await this.client.updateAssignmentOverride(updateOverrideArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(updatedOverride, null, 2) }]
            };
          }

          case "canvas_delete_assignment_override": {
            const { course_id, assignment_id, override_id } = args as {
              course_id: number;
              assignment_id: number;
              override_id: number;
            };
            if (!course_id || !assignment_id || !override_id) {
              throw new Error("Missing required fields: course_id, assignment_id, and override_id");
            }

            await this.client.deleteAssignmentOverride(course_id, assignment_id, override_id);
            return {
              content: [{ type: "text", text: JSON.stringify({ success: true, message: "Assignment override deleted successfully" }, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 1 TOOLS - Rubric Grading
          // ---------------------
          case "canvas_create_rubric": {
            const createRubricArgs = args as unknown as CreateRubricArgs;
            if (!createRubricArgs.course_id || !createRubricArgs.title || !createRubricArgs.criteria) {
              throw new Error("Missing required fields: course_id, title, and criteria");
            }
            const rubric = await this.client.createRubric(createRubricArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(rubric, null, 2) }]
            };
          }

          case "canvas_update_rubric": {
            const updateRubricArgs = args as unknown as UpdateRubricArgs;
            if (!updateRubricArgs.course_id || !updateRubricArgs.rubric_id) {
              throw new Error("Missing required fields: course_id and rubric_id");
            }
            const rubric = await this.client.updateRubric(updateRubricArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(rubric, null, 2) }]
            };
          }

          case "canvas_grade_with_rubric": {
            const gradeRubricArgs = args as unknown as GradeWithRubricArgsNew;
            if (!gradeRubricArgs.course_id || !gradeRubricArgs.assignment_id ||
                !gradeRubricArgs.user_id || !gradeRubricArgs.rubric_assessment) {
              throw new Error("Missing required fields: course_id, assignment_id, user_id, and rubric_assessment");
            }

            const submission = await this.client.gradeWithRubric(gradeRubricArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 1 TOOLS - Submission Comments
          // ---------------------
          case "canvas_add_submission_comment": {
            const commentArgs = args as unknown as AddSubmissionCommentArgs;
            if (!commentArgs.course_id || !commentArgs.assignment_id || !commentArgs.user_id) {
              throw new Error("Missing required fields: course_id, assignment_id, and user_id");
            }

            const submission = await this.client.addSubmissionComment(commentArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(submission, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 2 TOOLS - Page Management
          // ---------------------
          case "canvas_create_page": {
            const pageArgs = args as unknown as CreatePageArgs;
            if (!pageArgs.course_id || !pageArgs.title || !pageArgs.body) {
              throw new Error("Missing required fields: course_id, title, and body");
            }
            const page = await this.client.createPage(pageArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(page, null, 2) }]
            };
          }

          case "canvas_update_page": {
            const updatePageArgs = args as unknown as UpdatePageArgs;
            if (!updatePageArgs.course_id || !updatePageArgs.page_url) {
              throw new Error("Missing required fields: course_id and page_url");
            }
            const page = await this.client.updatePage(updatePageArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(page, null, 2) }]
            };
          }

          case "canvas_delete_page": {
            const { course_id, url } = args as { course_id: number; url: string };
            if (!course_id || !url) {
              throw new Error("Missing required fields: course_id and url");
            }
            const page = await this.client.deletePage(course_id, url);
            return {
              content: [{ type: "text", text: JSON.stringify(page, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 2 TOOLS - Announcements
          // ---------------------
          case "canvas_create_announcement": {
            const announcementArgs = args as unknown as CreateAnnouncementArgs;
            if (!announcementArgs.course_id || !announcementArgs.title || !announcementArgs.message) {
              throw new Error("Missing required fields: course_id, title, and message");
            }
            const announcement = await this.client.createAnnouncement(announcementArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(announcement, null, 2) }]
            };
          }

          case "canvas_update_announcement": {
            const updateAnnouncementArgs = args as unknown as UpdateAnnouncementArgs;
            if (!updateAnnouncementArgs.course_id || !updateAnnouncementArgs.topic_id) {
              throw new Error("Missing required fields: course_id and topic_id");
            }
            const announcement = await this.client.updateAnnouncement(updateAnnouncementArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(announcement, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 2 TOOLS - Discussion Topics
          // ---------------------
          case "canvas_create_discussion_topic": {
            const discussionArgs = args as unknown as CreateDiscussionTopicArgs;
            if (!discussionArgs.course_id || !discussionArgs.title || !discussionArgs.message) {
              throw new Error("Missing required fields: course_id, title, and message");
            }
            const topic = await this.client.createDiscussionTopic(discussionArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(topic, null, 2) }]
            };
          }

          case "canvas_update_discussion_topic": {
            const updateDiscussionArgs = args as unknown as UpdateDiscussionTopicArgs;
            if (!updateDiscussionArgs.course_id || !updateDiscussionArgs.topic_id) {
              throw new Error("Missing required fields: course_id and topic_id");
            }
            const topic = await this.client.updateDiscussionTopic(updateDiscussionArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(topic, null, 2) }]
            };
          }

          case "canvas_delete_discussion_topic": {
            const { course_id, topic_id } = args as { course_id: number; topic_id: number };
            if (!course_id || !topic_id) {
              throw new Error("Missing required fields: course_id and topic_id");
            }
            const topic = await this.client.deleteDiscussionTopic(course_id, topic_id);
            return {
              content: [{ type: "text", text: JSON.stringify(topic, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 2 TOOLS - Module Management
          // ---------------------
          case "canvas_create_module": {
            const moduleArgs = args as unknown as CreateModuleArgs;
            if (!moduleArgs.course_id || !moduleArgs.name) {
              throw new Error("Missing required fields: course_id and name");
            }
            const module = await this.client.createModule(moduleArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(module, null, 2) }]
            };
          }

          case "canvas_update_module": {
            const updateModuleArgs = args as unknown as UpdateModuleArgs;
            if (!updateModuleArgs.course_id || !updateModuleArgs.module_id) {
              throw new Error("Missing required fields: course_id and module_id");
            }
            const module = await this.client.updateModule(updateModuleArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(module, null, 2) }]
            };
          }

          case "canvas_delete_module": {
            const { course_id, module_id } = args as { course_id: number; module_id: number };
            if (!course_id || !module_id) {
              throw new Error("Missing required fields: course_id and module_id");
            }
            const module = await this.client.deleteModule(course_id, module_id);
            return {
              content: [{ type: "text", text: JSON.stringify(module, null, 2) }]
            };
          }

          case "canvas_publish_module": {
            const { course_id, module_id } = args as { course_id: number; module_id: number };
            if (!course_id || !module_id) {
              throw new Error("Missing required fields: course_id and module_id");
            }
            const module = await this.client.publishModule(course_id, module_id);
            return {
              content: [{ type: "text", text: JSON.stringify(module, null, 2) }]
            };
          }

          case "canvas_unpublish_module": {
            const { course_id, module_id } = args as { course_id: number; module_id: number };
            if (!course_id || !module_id) {
              throw new Error("Missing required fields: course_id and module_id");
            }
            const module = await this.client.unpublishModule(course_id, module_id);
            return {
              content: [{ type: "text", text: JSON.stringify(module, null, 2) }]
            };
          }

          // ---------------------
          // PHASE 2 TOOLS - Module Items
          // ---------------------
          case "canvas_create_module_item": {
            const itemArgs = args as unknown as CreateModuleItemArgs;
            if (!itemArgs.course_id || !itemArgs.module_id || !itemArgs.title || !itemArgs.type) {
              throw new Error("Missing required fields: course_id, module_id, title, and type");
            }
            const item = await this.client.createModuleItem(itemArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(item, null, 2) }]
            };
          }

          case "canvas_update_module_item": {
            const updateItemArgs = args as unknown as UpdateModuleItemArgs;
            if (!updateItemArgs.course_id || !updateItemArgs.module_id || !updateItemArgs.item_id) {
              throw new Error("Missing required fields: course_id, module_id, and item_id");
            }
            const item = await this.client.updateModuleItem(updateItemArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(item, null, 2) }]
            };
          }

          case "canvas_delete_module_item": {
            const { course_id, module_id, item_id } = args as { course_id: number; module_id: number; item_id: number };
            if (!course_id || !module_id || !item_id) {
              throw new Error("Missing required fields: course_id, module_id, and item_id");
            }
            const item = await this.client.deleteModuleItem(course_id, module_id, item_id);
            return {
              content: [{ type: "text", text: JSON.stringify(item, null, 2) }]
            };
          }

          // Grade Posting/Hiding handlers
          case "canvas_post_grades": {
            const postGradesArgs = request.params.arguments as unknown as PostGradesArgs;
            await this.client.postGrades(postGradesArgs);
            return { content: [{ type: "text", text: "Grades posted successfully" }] };
          }

          case "canvas_hide_grades": {
            const hideGradesArgs = request.params.arguments as unknown as HideGradesArgs;
            await this.client.hideGrades(hideGradesArgs);
            return { content: [{ type: "text", text: "Grades hidden successfully" }] };
          }

          case "canvas_post_assignment_grades": {
            const postArgs = args as unknown as PostGradesArgs;
            if (!postArgs.course_id || !postArgs.assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            await this.client.postGrades(postArgs);
            return {
              content: [{ type: "text", text: "Grades posted successfully" }]
            };
          }

          case "canvas_hide_assignment_grades": {
            const hideArgs = args as unknown as HideGradesArgs;
            if (!hideArgs.course_id || !hideArgs.assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            await this.client.hideGrades(hideArgs);
            return {
              content: [{ type: "text", text: "Grades hidden successfully" }]
            };
          }

          case "canvas_get_posting_policy": {
            const { course_id, assignment_id } = args as { course_id: number; assignment_id: number };
            if (!course_id || !assignment_id) {
              throw new Error("Missing required fields: course_id and assignment_id");
            }
            const policy = await this.client.getPostingPolicy(course_id, assignment_id);
            return {
              content: [{ type: "text", text: JSON.stringify(policy, null, 2) }]
            };
          }

          case "canvas_set_posting_policy": {
            const { course_id, assignment_id, post_manually } = args as { course_id: number; assignment_id: number; post_manually: boolean };
            if (!course_id || !assignment_id || post_manually === undefined) {
              throw new Error("Missing required fields: course_id, assignment_id, and post_manually");
            }
            const policy = await this.client.setPostingPolicy(course_id, assignment_id, { post_manually });
            return {
              content: [{ type: "text", text: JSON.stringify(policy, null, 2) }]
            };
          }

          // Quiz Questions handlers
          case "canvas_list_quiz_questions": {
            const { course_id, quiz_id } = args as { course_id: number; quiz_id: number };
            if (!course_id || !quiz_id) {
              throw new Error("Missing required fields: course_id and quiz_id");
            }
            const questions = await this.client.listQuizQuestions(course_id, quiz_id);
            return {
              content: [{ type: "text", text: JSON.stringify(questions, null, 2) }]
            };
          }

          case "canvas_create_quiz_question": {
            const createQuestionArgs = args as unknown as CreateQuizQuestionArgs;
            if (!createQuestionArgs.course_id || !createQuestionArgs.quiz_id || !createQuestionArgs.question_text || !createQuestionArgs.question_type) {
              throw new Error("Missing required fields: course_id, quiz_id, question_text, and question_type");
            }
            const question = await this.client.createQuizQuestion(createQuestionArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(question, null, 2) }]
            };
          }

          case "canvas_update_quiz_question": {
            const updateQuestionArgs = args as unknown as UpdateQuizQuestionArgs;
            if (!updateQuestionArgs.course_id || !updateQuestionArgs.quiz_id || !updateQuestionArgs.question_id) {
              throw new Error("Missing required fields: course_id, quiz_id, and question_id");
            }
            const question = await this.client.updateQuizQuestion(updateQuestionArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(question, null, 2) }]
            };
          }

          case "canvas_delete_quiz_question": {
            const { course_id, quiz_id, question_id } = args as { course_id: number; quiz_id: number; question_id: number };
            if (!course_id || !quiz_id || !question_id) {
              throw new Error("Missing required fields: course_id, quiz_id, and question_id");
            }
            await this.client.deleteQuizQuestion(course_id, quiz_id, question_id);
            return {
              content: [{ type: "text", text: "Quiz question deleted successfully" }]
            };
          }

          case "canvas_get_quiz_question": {
            const { course_id, quiz_id, question_id } = args as { course_id: number; quiz_id: number; question_id: number };
            if (!course_id || !quiz_id || !question_id) {
              throw new Error("Missing required fields: course_id, quiz_id, and question_id");
            }
            const question = await this.client.getQuizQuestion(course_id, quiz_id, question_id);
            return {
              content: [{ type: "text", text: JSON.stringify(question, null, 2) }]
            };
          }

          // Analytics handlers
          case "canvas_get_course_activity": {
            const { course_id } = args as { course_id: number };
            if (!course_id) {
              throw new Error("Missing required field: course_id");
            }
            const activity = await this.client.getCourseActivity(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(activity, null, 2) }]
            };
          }

          case "canvas_get_student_summaries": {
            const { course_id } = args as { course_id: number };
            if (!course_id) {
              throw new Error("Missing required field: course_id");
            }
            const summaries = await this.client.getStudentSummaries(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(summaries, null, 2) }]
            };
          }

          case "canvas_get_student_activity": {
            const { course_id, user_id } = args as { course_id: number; user_id: number };
            if (!course_id || !user_id) {
              throw new Error("Missing required fields: course_id and user_id");
            }
            const activity = await this.client.getStudentActivity(course_id, user_id);
            return {
              content: [{ type: "text", text: JSON.stringify(activity, null, 2) }]
            };
          }

          case "canvas_get_student_assignments": {
            const { course_id, user_id } = args as { course_id: number; user_id: number };
            if (!course_id || !user_id) {
              throw new Error("Missing required fields: course_id and user_id");
            }
            const assignments = await this.client.getStudentAssignments(course_id, user_id);
            return {
              content: [{ type: "text", text: JSON.stringify(assignments, null, 2) }]
            };
          }

          // Grade Export handler
          case "canvas_export_gradebook_csv": {
            const exportArgs = args as unknown as GradebookExportArgs;
            if (!exportArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }
            const csv = await this.client.exportGradebookCSV(exportArgs);
            return {
              content: [{ type: "text", text: csv }]
            };
          }

          // Late Policy handlers
          case "canvas_get_late_policy": {
            const { course_id } = args as { course_id: number };
            if (!course_id) {
              throw new Error("Missing required field: course_id");
            }
            const policy = await this.client.getLatePolicy(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(policy, null, 2) }]
            };
          }

          case "canvas_create_late_policy": {
            const createPolicyArgs = args as unknown as CreateLatePolicyArgs;
            if (!createPolicyArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }
            const policy = await this.client.createLatePolicy(createPolicyArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(policy, null, 2) }]
            };
          }

          case "canvas_update_late_policy": {
            const updatePolicyArgs = args as unknown as UpdateLatePolicyArgs;
            if (!updatePolicyArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }
            const policy = await this.client.updateLatePolicy(updatePolicyArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(policy, null, 2) }]
            };
          }

          // SpeedGrader handler
          case "canvas_get_speedgrader_url": {
            const urlArgs = args as unknown as SpeedGraderURLArgs;
            if (!urlArgs.domain || !urlArgs.course_id || !urlArgs.assignment_id) {
              throw new Error("Missing required fields: domain, course_id, and assignment_id");
            }
            const url = this.client.getSpeedGraderURL(urlArgs);
            return {
              content: [{ type: "text", text: url }]
            };
          }

          // Outcomes/Standards handlers
          case "canvas_list_outcomes": {
            const { course_id } = args as { course_id: number };
            if (!course_id) {
              throw new Error("Missing required field: course_id");
            }
            const outcomes = await this.client.listOutcomes(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(outcomes, null, 2) }]
            };
          }

          case "canvas_create_outcome": {
            const createOutcomeArgs = args as unknown as CreateOutcomeArgs;
            if (!createOutcomeArgs.course_id || !createOutcomeArgs.title) {
              throw new Error("Missing required fields: course_id and title");
            }
            const outcome = await this.client.createOutcome(createOutcomeArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(outcome, null, 2) }]
            };
          }

          case "canvas_update_outcome": {
            const updateOutcomeArgs = args as unknown as UpdateOutcomeArgs;
            if (!updateOutcomeArgs.course_id || !updateOutcomeArgs.outcome_id) {
              throw new Error("Missing required fields: course_id and outcome_id");
            }
            const outcome = await this.client.updateOutcome(updateOutcomeArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(outcome, null, 2) }]
            };
          }

          case "canvas_delete_outcome": {
            const { course_id, outcome_id } = args as { course_id: number; outcome_id: number };
            if (!course_id || !outcome_id) {
              throw new Error("Missing required fields: course_id and outcome_id");
            }
            await this.client.deleteOutcome(course_id, outcome_id);
            return {
              content: [{ type: "text", text: "Outcome deleted successfully" }]
            };
          }

          case "canvas_get_outcome": {
            const { course_id, outcome_id } = args as { course_id: number; outcome_id: number };
            if (!course_id || !outcome_id) {
              throw new Error("Missing required fields: course_id and outcome_id");
            }
            const outcome = await this.client.getOutcome(course_id, outcome_id);
            return {
              content: [{ type: "text", text: JSON.stringify(outcome, null, 2) }]
            };
          }

          case "canvas_get_outcome_alignments": {
            const { course_id } = args as { course_id: number };
            if (!course_id) {
              throw new Error("Missing required field: course_id");
            }
            const alignments = await this.client.getOutcomeAlignments(course_id);
            return {
              content: [{ type: "text", text: JSON.stringify(alignments, null, 2) }]
            };
          }

          case "canvas_get_outcome_results": {
            const resultsArgs = args as unknown as OutcomeResultsArgs;
            if (!resultsArgs.course_id) {
              throw new Error("Missing required field: course_id");
            }
            const results = await this.client.getOutcomeResults(resultsArgs.course_id, resultsArgs);
            return {
              content: [{ type: "text", text: JSON.stringify(results, null, 2) }]
            };
          }

          // Attendance handler
          case "canvas_get_attendance_info": {
            const info = this.client.getAttendanceInfo();
            return {
              content: [{ type: "text", text: JSON.stringify(info, null, 2) }]
            };
          }


          // Group Management handlers
          case "canvas_create_group_category": {
            const args = request.params.arguments as unknown as CreateGroupCategoryArgs;
            const result = await this.client.createGroupCategory(args);
            return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
          }

          case "canvas_create_group": {
            const args = request.params.arguments as unknown as CreateGroupArgs;
            const result = await this.client.createGroup(args);
            return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
          }

          case "canvas_assign_group_members": {
            const { group_id, user_ids } = request.params.arguments as unknown as AssignGroupMembersArgs;
            const result = await this.client.assignGroupMembers(group_id, user_ids);
            return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
          }
          default:
            throw new Error(`Unknown tool: ${toolName}`);
        }
      } catch (error) {
        console.error(`Error executing tool ${request.params.name}:`, error);
        return {
          content: [{
            type: "text",
            text: `Error: ${error instanceof Error ? error.message : String(error)}`
          }],
          isError: true
        };
      }
    });
  }


  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error(`${this.config.name} running on stdio`);
  }
}

// Main entry point with enhanced configuration
async function main() {
  // Get current file's directory in ES modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Enhanced environment loading
  const envPaths = [
    '.env',
    'src/.env',
    path.join(__dirname, '.env'),
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '..', '.env'), // Parent directory
  ];

  let loaded = false;
  for (const envPath of envPaths) {
    const result = dotenv.config({ path: envPath });
    if (result.parsed) {
      console.error(`Loaded environment from: ${envPath}`);
      loaded = true;
      break;
    }
  }

  if (!loaded) {
    console.error('Warning: No .env file found');
  }

  const token = process.env.CANVAS_API_TOKEN;
  const domain = process.env.CANVAS_DOMAIN;

  if (!token || !domain) {
    console.error("Missing required environment variables:");
    console.error("- CANVAS_API_TOKEN: Your Canvas API token");
    console.error("- CANVAS_DOMAIN: Your Canvas domain (e.g., school.instructure.com)");
    process.exit(1);
  }

  const config: MCPServerConfig = {
    name: "canvas-mcp-server",
    version: "2.2.3",
    canvas: {
      token,
      domain,
      maxRetries: parseInt(process.env.CANVAS_MAX_RETRIES || '3'),
      retryDelay: parseInt(process.env.CANVAS_RETRY_DELAY || '1000'),
      timeout: parseInt(process.env.CANVAS_TIMEOUT || '30000')
    },
    logging: {
      level: (process.env.LOG_LEVEL as any) || 'info'
    }
  };

  try {
    const server = new CanvasMCPServer(config);
    await server.run();
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

main().catch(console.error);
