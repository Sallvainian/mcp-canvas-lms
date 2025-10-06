// src/client.ts

import axios, { AxiosInstance, AxiosError } from 'axios';
import {
  CanvasCourse,
  CanvasAssignment,
  CanvasSubmission,
  CanvasUser,
  CanvasEnrollment,
  CreateCourseArgs,
  UpdateCourseArgs,
  CreateAssignmentArgs,
  UpdateAssignmentArgs,
  SubmitGradeArgs,
  EnrollUserArgs,
  CanvasAPIError,
  CanvasDiscussionTopic,
  CanvasModule,
  CanvasModuleItem,
  CanvasQuiz,
  CanvasAnnouncement,
  CanvasUserProfile,
  CanvasScope,
  CanvasAssignmentSubmission,
  CanvasPage,
  CanvasCalendarEvent,
  CanvasRubric,
  CanvasAssignmentGroup,
  CanvasConversation,
  CanvasNotification,
  CanvasFile,
  CanvasSyllabus,
  CanvasDashboard,
  SubmitAssignmentArgs,
  FileUploadArgs,
  CanvasAccount,
  CreateUserArgs,
  CanvasAccountReport,
  CreateReportArgs,
  ListAccountCoursesArgs,
  ListAccountUsersArgs,
  ListStudentsArgs,
  ListSubmissionsArgs,
  UpdateSubmissionGradeArgs,
  BulkUpdateGradesArgs,
  DuplicateAssignmentArgs,
  CanvasSection,
  ListSectionsArgs,
  CrossListSectionArgs,
  CanvasAssignmentOverride,
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
  PostingPolicy,
  QuizQuestion,
  CreateQuizQuestionArgs,
  UpdateQuizQuestionArgs,
  CourseActivity,
  StudentSummary,
  StudentActivity,
  StudentAssignmentData,
  GradebookExportArgs,
  GradebookEntry,
  LatePolicy,
  CreateLatePolicyArgs,
  UpdateLatePolicyArgs,
  SpeedGraderURLArgs,
  Outcome,
  OutcomeAlignment,
  OutcomeResult,
  CreateOutcomeArgs,
  UpdateOutcomeArgs,
  OutcomeResultsArgs,
  AttendanceInfo
} from './types.js';

export class CanvasClient {
  private client: AxiosInstance;
  private baseURL: string;
  private maxRetries: number = 3;
  private retryDelay: number = 1000;

  constructor(token: string, domain: string, options?: { maxRetries?: number; retryDelay?: number }) {
    this.baseURL = `https://${domain}/api/v1`;
    this.maxRetries = options?.maxRetries ?? 3;
    this.retryDelay = options?.retryDelay ?? 1000;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor for logging
    this.client.interceptors.request.use(
      (config) => {
        console.error(`[Canvas API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('[Canvas API] Request error:', error.message || error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for pagination and retry logic
    this.client.interceptors.response.use(
      async (response) => {
        const { headers, data } = response;
        const linkHeader = headers.link;
        const contentType = headers['content-type'] || '';

        // Only handle pagination for JSON responses
        if (Array.isArray(data) && linkHeader && contentType.includes('application/json')) {
          let allData = [...data];
          let nextUrl = this.getNextPageUrl(linkHeader);

          while (nextUrl) {
            const nextResponse = await this.client.get(nextUrl);
            allData = [...allData, ...nextResponse.data];
            nextUrl = this.getNextPageUrl(nextResponse.headers.link);
          }

          response.data = allData;
        }

        return response;
      },
      async (error: AxiosError) => {
        const config = error.config as any;
        
        // Retry logic for specific errors
        if (this.shouldRetry(error) && config && config.__retryCount < this.maxRetries) {
          config.__retryCount = config.__retryCount || 0;
          config.__retryCount++;
          
          const delay = this.retryDelay * Math.pow(2, config.__retryCount - 1); // Exponential backoff
          console.error(`[Canvas API] Retrying request (${config.__retryCount}/${this.maxRetries}) after ${delay}ms`);
          
          await this.sleep(delay);
          return this.client.request(config);
        }

        // Transform error with better handling for non-JSON responses
        if (error.response) {
          const { status, data, headers } = error.response;
          const contentType = headers?.['content-type'] || 'unknown';
          console.error(`[Canvas API] Error response: ${status}, Content-Type: ${contentType}, Data type: ${typeof data}`);
          
          let errorMessage: string;
          
          try {
            // Check if data is already a string (HTML error pages, plain text, etc.)
            if (typeof data === 'string') {
              errorMessage = data.length > 200 ? data.substring(0, 200) + '...' : data;
            } else if (data && typeof data === 'object') {
              // Handle structured Canvas API error responses
              if ((data as any)?.message) {
                errorMessage = (data as any).message;
              } else if ((data as any)?.errors && Array.isArray((data as any).errors)) {
                errorMessage = (data as any).errors.map((err: any) => err.message || err).join(', ');
              } else {
                errorMessage = JSON.stringify(data);
              }
            } else {
              errorMessage = String(data);
            }
          } catch (jsonError) {
            // Fallback if JSON operations fail
            errorMessage = String(data);
          }
          
          throw new CanvasAPIError(
            `Canvas API Error (${status}): ${errorMessage}`, 
            status, 
            data
          );
        }
        
        // Handle network errors or other issues
        if (error.request) {
          console.error('[Canvas API] Network error - no response received:', error.message);
          throw new CanvasAPIError(
            `Network error: ${error.message}`,
            0,
            null
          );
        }
        
        console.error('[Canvas API] Unexpected error:', error.message);
        throw error;
      }
    );
  }

  private shouldRetry(error: AxiosError): boolean {
    if (!error.response) return true; // Network errors
    
    const status = error.response.status;
    return status === 429 || status >= 500; // Rate limit or server errors
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getNextPageUrl(linkHeader: string): string | null {
    const links = linkHeader.split(',');
    const nextLink = links.find(link => link.includes('rel="next"'));
    if (!nextLink) return null;

    const match = nextLink.match(/<(.+?)>/);
    return match ? match[1] : null;
  }

  // ---------------------
  // HEALTH CHECK
  // ---------------------
  async healthCheck(): Promise<{ status: 'ok' | 'error'; timestamp: string; user?: any }> {
    try {
      const user = await this.getUserProfile();
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        user: { id: user.id, name: user.name }
      };
    } catch (error) {
      return {
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  // ---------------------
  // COURSES (Enhanced)
  // ---------------------
  async listCourses(includeEnded: boolean = false): Promise<CanvasCourse[]> {
    const params: any = {
      include: ['total_students', 'teachers', 'term', 'course_progress']
    };
    
    if (!includeEnded) {
      params.state = ['available', 'completed'];
    }

    const response = await this.client.get('/courses', { params });
    return response.data;
  }

  async getCourse(courseId: number): Promise<CanvasCourse> {
    const response = await this.client.get(`/courses/${courseId}`, {
      params: {
        include: ['total_students', 'teachers', 'term', 'course_progress', 'sections', 'syllabus_body']
      }
    });
    return response.data;
  }

  async createCourse(args: CreateCourseArgs): Promise<CanvasCourse> {
    const { account_id, ...courseData } = args;
    const response = await this.client.post(`/accounts/${account_id}/courses`, {
      course: courseData
    });
    return response.data;
  }

  async updateCourse(args: UpdateCourseArgs): Promise<CanvasCourse> {
    const { course_id, published, ...courseData } = args;
    const data: any = { course: courseData };

    // Canvas API uses course[event] to publish/unpublish
    if (published !== undefined) {
      data.course.event = published ? 'offer' : 'claim';
    }

    const response = await this.client.put(`/courses/${course_id}`, data);
    return response.data;
  }

  async deleteCourse(courseId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}`);
  }

  // ---------------------
  // ASSIGNMENTS (Enhanced)
  // ---------------------
  async listAssignments(courseId: number, includeSubmissions: boolean = false): Promise<CanvasAssignment[]> {
    const params: any = {
      include: ['assignment_group', 'rubric', 'due_at']
    };
    
    if (includeSubmissions) {
      params.include.push('submission');
    }

    const response = await this.client.get(`/courses/${courseId}/assignments`, { params });
    return response.data;
  }

  async getAssignment(courseId: number, assignmentId: number, includeSubmission: boolean = false): Promise<CanvasAssignment> {
    const params: any = {
      include: ['assignment_group', 'rubric']
    };
    
    if (includeSubmission) {
      params.include.push('submission');
    }

    const response = await this.client.get(`/courses/${courseId}/assignments/${assignmentId}`, { params });
    return response.data;
  }

  async createAssignment(args: CreateAssignmentArgs): Promise<CanvasAssignment> {
    const { course_id, ...assignmentData } = args;
    const response = await this.client.post(`/courses/${course_id}/assignments`, {
      assignment: assignmentData
    });
    return response.data;
  }

  async updateAssignment(args: UpdateAssignmentArgs): Promise<CanvasAssignment> {
    const { course_id, assignment_id, ...assignmentData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}`,
      { assignment: assignmentData }
    );
    return response.data;
  }

  async deleteAssignment(courseId: number, assignmentId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/assignments/${assignmentId}`);
  }

  // ---------------------
  // ASSIGNMENT GROUPS
  // ---------------------
  async listAssignmentGroups(courseId: number): Promise<CanvasAssignmentGroup[]> {
    const response = await this.client.get(`/courses/${courseId}/assignment_groups`, {
      params: {
        include: ['assignments']
      }
    });
    return response.data;
  }

  async getAssignmentGroup(courseId: number, groupId: number): Promise<CanvasAssignmentGroup> {
    const response = await this.client.get(`/courses/${courseId}/assignment_groups/${groupId}`, {
      params: {
        include: ['assignments']
      }
    });
    return response.data;
  }

  // ---------------------
  // SUBMISSIONS (Enhanced for Students)
  // ---------------------
  async getSubmissions(courseId: number, assignmentId: number): Promise<CanvasSubmission[]> {
    const response = await this.client.get(
      `/courses/${courseId}/assignments/${assignmentId}/submissions`,
      {
        params: {
          include: ['submission_comments', 'rubric_assessment', 'assignment']
        }
      }
    );
    return response.data;
  }

  async getSubmission(courseId: number, assignmentId: number, userId: number | 'self' = 'self'): Promise<CanvasSubmission> {
    const response = await this.client.get(
      `/courses/${courseId}/assignments/${assignmentId}/submissions/${userId}`,
      {
        params: {
          include: ['submission_comments', 'rubric_assessment', 'assignment']
        }
      }
    );
    return response.data;
  }

  async submitGrade(args: SubmitGradeArgs): Promise<CanvasSubmission> {
    const { course_id, assignment_id, user_id, grade, comment } = args;
    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`, {
      submission: {
        posted_grade: grade,
        comment: comment ? { text_comment: comment } : undefined
      }
    });
    return response.data;
  }

  // Student submission with file support
  async submitAssignment(args: SubmitAssignmentArgs): Promise<CanvasAssignmentSubmission> {
    const { course_id, assignment_id, submission_type, body, url, file_ids } = args;
    
    const submissionData: any = {
      submission_type
    };

    if (body) submissionData.body = body;
    if (url) submissionData.url = url;
    if (file_ids && file_ids.length > 0) submissionData.file_ids = file_ids;

    const response = await this.client.post(
      `/courses/${course_id}/assignments/${assignment_id}/submissions`,
      { submission: submissionData }
    );
    return response.data;
  }

  // ---------------------
  // FILES (Enhanced)
  // ---------------------
  async listFiles(courseId: number, folderId?: number): Promise<CanvasFile[]> {
    const endpoint = folderId 
      ? `/folders/${folderId}/files`
      : `/courses/${courseId}/files`;
    
    const response = await this.client.get(endpoint);
    return response.data;
  }

  async getFile(fileId: number): Promise<CanvasFile> {
    const response = await this.client.get(`/files/${fileId}`);
    return response.data;
  }

  async uploadFile(args: FileUploadArgs): Promise<CanvasFile> {
    const { course_id, folder_id, name, size } = args;
    
    // Step 1: Get upload URL
    const uploadEndpoint = folder_id 
      ? `/folders/${folder_id}/files`
      : `/courses/${course_id}/files`;
      
    const uploadResponse = await this.client.post(uploadEndpoint, {
      name,
      size,
      content_type: args.content_type || 'application/octet-stream'
    });

    // Note: Actual file upload would require multipart form data handling
    // This is a simplified version - in practice, you'd need to handle the 
    // two-step upload process Canvas uses
    return uploadResponse.data;
  }

  async listFolders(courseId: number): Promise<any[]> {
    const response = await this.client.get(`/courses/${courseId}/folders`);
    return response.data;
  }

  // ---------------------
  // PAGES
  // ---------------------
  async listPages(courseId: number): Promise<CanvasPage[]> {
    const response = await this.client.get(`/courses/${courseId}/pages`);
    return response.data;
  }

  async getPage(courseId: number, pageUrl: string): Promise<CanvasPage> {
    const response = await this.client.get(`/courses/${courseId}/pages/${pageUrl}`);
    return response.data;
  }

  // ---------------------
  // CALENDAR EVENTS
  // ---------------------
  async listCalendarEvents(startDate?: string, endDate?: string): Promise<CanvasCalendarEvent[]> {
    const params: any = {
      type: 'event',
      all_events: true
    };
    
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;

    const response = await this.client.get('/calendar_events', { params });
    return response.data;
  }

  async getUpcomingAssignments(limit: number = 10): Promise<CanvasAssignment[]> {
    const response = await this.client.get('/users/self/upcoming_events', {
      params: { limit }
    });
    return response.data.filter((event: any) => event.assignment);
  }

  // ---------------------
  // RUBRICS
  // ---------------------
  async listRubrics(courseId: number): Promise<CanvasRubric[]> {
    const response = await this.client.get(`/courses/${courseId}/rubrics`);
    return response.data;
  }

  async getRubric(courseId: number, rubricId: number): Promise<CanvasRubric> {
    const response = await this.client.get(`/courses/${courseId}/rubrics/${rubricId}`);
    return response.data;
  }

  // ---------------------
  // DASHBOARD
  // ---------------------
  async getDashboard(): Promise<CanvasDashboard> {
    const response = await this.client.get('/users/self/dashboard');
    return response.data;
  }

  async getDashboardCards(): Promise<any[]> {
    const response = await this.client.get('/dashboard/dashboard_cards');
    return response.data;
  }

  // ---------------------
  // SYLLABUS
  // ---------------------
  async getSyllabus(courseId: number): Promise<CanvasSyllabus> {
    const response = await this.client.get(`/courses/${courseId}`, {
      params: {
        include: ['syllabus_body']
      }
    });
    return {
      course_id: courseId,
      syllabus_body: response.data.syllabus_body
    };
  }

  // ---------------------
  // CONVERSATIONS/MESSAGING
  // ---------------------
  async listConversations(): Promise<CanvasConversation[]> {
    const response = await this.client.get('/conversations');
    return response.data;
  }

  async getConversation(conversationId: number): Promise<CanvasConversation> {
    const response = await this.client.get(`/conversations/${conversationId}`);
    return response.data;
  }

  async createConversation(recipients: string[], body: string, subject?: string): Promise<CanvasConversation> {
    const response = await this.client.post('/conversations', {
      recipients,
      body,
      subject
    });
    return response.data;
  }

  // ---------------------
  // NOTIFICATIONS
  // ---------------------
  async listNotifications(): Promise<CanvasNotification[]> {
    const response = await this.client.get('/users/self/activity_stream');
    return response.data;
  }

  // ---------------------
  // USERS AND ENROLLMENTS (Enhanced)
  // ---------------------
  async listUsers(courseId: number): Promise<CanvasUser[]> {
    const response = await this.client.get(`/courses/${courseId}/users`, {
      params: {
        include: ['email', 'enrollments', 'avatar_url']
      }
    });
    return response.data;
  }

  async getEnrollments(courseId: number): Promise<CanvasEnrollment[]> {
    const response = await this.client.get(`/courses/${courseId}/enrollments`);
    return response.data;
  }

  async enrollUser(args: EnrollUserArgs): Promise<CanvasEnrollment> {
    const { course_id, user_id, role = 'StudentEnrollment', enrollment_state = 'active' } = args;
    const response = await this.client.post(`/courses/${course_id}/enrollments`, {
      enrollment: {
        user_id,
        type: role,
        enrollment_state
      }
    });
    return response.data;
  }

  async unenrollUser(courseId: number, enrollmentId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/enrollments/${enrollmentId}`);
  }

  // ---------------------
  // GRADES (Enhanced)
  // ---------------------
  async getCourseGrades(courseId: number): Promise<CanvasEnrollment[]> {
    const response = await this.client.get(`/courses/${courseId}/enrollments`, {
      params: {
        include: ['grades', 'observed_users']
      }
    });
    return response.data;
  }

  async getUserGrades(): Promise<any> {
    const response = await this.client.get('/users/self/grades');
    return response.data;
  }

  // ---------------------
  // USER PROFILE (Enhanced)
  // ---------------------
  async getUserProfile(): Promise<CanvasUserProfile> {
    const response = await this.client.get('/users/self/profile');
    return response.data;
  }

  async updateUserProfile(profileData: Partial<CanvasUserProfile>): Promise<CanvasUserProfile> {
    const response = await this.client.put('/users/self', {
      user: profileData
    });
    return response.data;
  }

  // ---------------------
  // STUDENT COURSES (Enhanced)
  // ---------------------
  async listStudentCourses(): Promise<CanvasCourse[]> {
    const response = await this.client.get('/courses', {
      params: {
        include: ['enrollments', 'total_students', 'term', 'course_progress'],
        enrollment_state: 'active'
      }
    });
    return response.data;
  }

  // ---------------------
  // MODULES (Enhanced)
  // ---------------------
  async listModules(courseId: number): Promise<CanvasModule[]> {
    const response = await this.client.get(`/courses/${courseId}/modules`, {
      params: {
        include: ['items']
      }
    });
    return response.data;
  }

  async getModule(courseId: number, moduleId: number): Promise<CanvasModule> {
    const response = await this.client.get(`/courses/${courseId}/modules/${moduleId}`, {
      params: {
        include: ['items']
      }
    });
    return response.data;
  }

  async listModuleItems(courseId: number, moduleId: number): Promise<CanvasModuleItem[]> {
    const response = await this.client.get(`/courses/${courseId}/modules/${moduleId}/items`, {
      params: {
        include: ['content_details']
      }
    });
    return response.data;
  }

  async getModuleItem(courseId: number, moduleId: number, itemId: number): Promise<CanvasModuleItem> {
    const response = await this.client.get(`/courses/${courseId}/modules/${moduleId}/items/${itemId}`, {
      params: {
        include: ['content_details']
      }
    });
    return response.data;
  }

  async markModuleItemComplete(courseId: number, moduleId: number, itemId: number): Promise<void> {
    await this.client.put(`/courses/${courseId}/modules/${moduleId}/items/${itemId}/done`);
  }

  // ---------------------
  // DISCUSSION TOPICS (Enhanced)
  // ---------------------
  async listDiscussionTopics(courseId: number): Promise<CanvasDiscussionTopic[]> {
    const response = await this.client.get(`/courses/${courseId}/discussion_topics`, {
      params: {
        include: ['assignment']
      }
    });
    return response.data;
  }

  async getDiscussionTopic(courseId: number, topicId: number): Promise<CanvasDiscussionTopic> {
    const response = await this.client.get(`/courses/${courseId}/discussion_topics/${topicId}`, {
      params: {
        include: ['assignment']
      }
    });
    return response.data;
  }

  async postToDiscussion(courseId: number, topicId: number, message: string): Promise<any> {
    const response = await this.client.post(`/courses/${courseId}/discussion_topics/${topicId}/entries`, {
      message
    });
    return response.data;
  }

  // ---------------------
  // ANNOUNCEMENTS (Enhanced)
  // ---------------------
  async listAnnouncements(courseId: string): Promise<CanvasAnnouncement[]> {
    const response = await this.client.get(`/courses/${courseId}/discussion_topics`, {
      params: {
        type: 'announcement',
        include: ['assignment']
      }
    });
    return response.data;
  }

  // ---------------------
  // QUIZZES (Enhanced)
  // ---------------------
  async listQuizzes(courseId: string): Promise<CanvasQuiz[]> {
    const response = await this.client.get(`/courses/${courseId}/quizzes`);
    return response.data;
  }

  async getQuiz(courseId: string, quizId: number): Promise<CanvasQuiz> {
    const response = await this.client.get(`/courses/${courseId}/quizzes/${quizId}`);
    return response.data;
  }

  async createQuiz(courseId: number, quizData: Partial<CanvasQuiz>): Promise<CanvasQuiz> {
    const response = await this.client.post(`/courses/${courseId}/quizzes`, {
      quiz: quizData
    });
    return response.data;
  }

  async updateQuiz(courseId: number, quizId: number, quizData: Partial<CanvasQuiz>): Promise<CanvasQuiz> {
    const response = await this.client.put(`/courses/${courseId}/quizzes/${quizId}`, {
      quiz: quizData
    });
    return response.data;
  }

  async deleteQuiz(courseId: number, quizId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/quizzes/${quizId}`);
  }

  async startQuizAttempt(courseId: number, quizId: number): Promise<any> {
    const response = await this.client.post(`/courses/${courseId}/quizzes/${quizId}/submissions`);
    return response.data;
  }

  async submitQuizAttempt(courseId: number, quizId: number, submissionId: number, answers: any): Promise<any> {
    const response = await this.client.post(
      `/courses/${courseId}/quizzes/${quizId}/submissions/${submissionId}/complete`,
      { quiz_submissions: [{ attempt: 1, questions: answers }] }
    );
    return response.data;
  }

  // ---------------------
  // SCOPES (Enhanced)
  // ---------------------
  async listTokenScopes(accountId: number, groupBy?: string): Promise<CanvasScope[]> {
    const params: Record<string, string> = {};
    if (groupBy) {
      params.group_by = groupBy;
    }

    const response = await this.client.get(`/accounts/${accountId}/scopes`, { params });
    return response.data;
  }

  // ---------------------
  // ACCOUNT MANAGEMENT (New)
  // ---------------------
  async getAccount(accountId: number): Promise<CanvasAccount> {
    const response = await this.client.get(`/accounts/${accountId}`);
    return response.data;
  }

  async listAccountCourses(args: ListAccountCoursesArgs): Promise<CanvasCourse[]> {
    const { account_id, ...params } = args;
    const response = await this.client.get(`/accounts/${account_id}/courses`, { params });
    return response.data;
  }

  async listAccountUsers(args: ListAccountUsersArgs): Promise<CanvasUser[]> {
    const { account_id, ...params } = args;
    const response = await this.client.get(`/accounts/${account_id}/users`, { params });
    return response.data;
  }

  async createUser(args: CreateUserArgs): Promise<CanvasUser> {
    const { account_id, ...userData } = args;
    const response = await this.client.post(`/accounts/${account_id}/users`, userData);
    return response.data;
  }

  async listSubAccounts(accountId: number): Promise<CanvasAccount[]> {
    const response = await this.client.get(`/accounts/${accountId}/sub_accounts`);
    return response.data;
  }

  // ---------------------
  // ACCOUNT REPORTS (New)
  // ---------------------
  async getAccountReports(accountId: number): Promise<any[]> {
    const response = await this.client.get(`/accounts/${accountId}/reports`);
    return response.data;
  }

  async createAccountReport(args: CreateReportArgs): Promise<CanvasAccountReport> {
    const { account_id, report, parameters } = args;
    const response = await this.client.post(`/accounts/${account_id}/reports/${report}`, {
      parameters: parameters || {}
    });
    return response.data;
  }

  async getAccountReport(accountId: number, reportType: string, reportId: number): Promise<CanvasAccountReport> {
    const response = await this.client.get(`/accounts/${accountId}/reports/${reportType}/${reportId}`);
    return response.data;
  }

  // ---------------------
  // STUDENTS/ROSTER (New)
  // ---------------------
  async listStudents(args: ListStudentsArgs): Promise<CanvasUser[]> {
    const { course_id, include } = args;
    const params: any = {
      enrollment_type: ['student']
    };

    if (include && include.length > 0) {
      params.include = include;
    }

    const response = await this.client.get(`/courses/${course_id}/users`, { params });
    return response.data;
  }

  // ---------------------
  // GRADING TOOLS (New)
  // ---------------------
  async listSubmissions(args: ListSubmissionsArgs): Promise<CanvasSubmission[]> {
    const { course_id, student_ids, assignment_ids, grouped, workflow_state } = args;
    const params: any = {};

    if (student_ids && student_ids.length > 0) {
      params.student_ids = student_ids;
    }
    if (assignment_ids && assignment_ids.length > 0) {
      params.assignment_ids = assignment_ids;
    }
    if (grouped !== undefined) {
      params.grouped = grouped;
    }
    if (workflow_state) {
      params.workflow_state = workflow_state;
    }

    const response = await this.client.get(`/courses/${course_id}/students/submissions`, { params });
    return response.data;
  }

  async updateSubmissionGrade(args: UpdateSubmissionGradeArgs): Promise<CanvasSubmission> {
    const { course_id, assignment_id, user_id, posted_grade, excuse, text_comment } = args;
    const submission: any = {};

    if (posted_grade !== undefined) submission.posted_grade = posted_grade;
    if (excuse !== undefined) submission.excuse = excuse;
    if (text_comment) {
      submission.comment = { text_comment };
    }

    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`,
      { submission }
    );
    return response.data;
  }

  async bulkUpdateGrades(args: BulkUpdateGradesArgs): Promise<any> {
    const { course_id, grade_data } = args;
    const response = await this.client.post(
      `/courses/${course_id}/submissions/update_grades`,
      { grade_data }
    );
    return response.data;
  }

  // ---------------------
  // ASSIGNMENT MANAGEMENT (New)
  // ---------------------
  async duplicateAssignment(args: DuplicateAssignmentArgs): Promise<CanvasAssignment> {
    const { course_id, assignment_id } = args;
    const response = await this.client.post(`/courses/${course_id}/assignments/${assignment_id}/duplicate`);
    return response.data;
  }

  // ---------------------
  // SECTIONS/CROSS-LISTING (New)
  // ---------------------
  async listSections(args: ListSectionsArgs): Promise<CanvasSection[]> {
    const { course_id, include } = args;
    const params: any = {};

    if (include && include.length > 0) {
      params.include = include;
    }

    const response = await this.client.get(`/courses/${course_id}/sections`, { params });
    return response.data;
  }

  async getSection(courseId: number, sectionId: number, include?: string[]): Promise<CanvasSection> {
    const params: any = {};
    if (include && include.length > 0) {
      params.include = include;
    }

    const response = await this.client.get(`/courses/${courseId}/sections/${sectionId}`, { params });
    return response.data;
  }

  async crossListSection(args: CrossListSectionArgs): Promise<CanvasSection> {
    const { section_id, new_course_id } = args;
    const response = await this.client.post(`/sections/${section_id}/crosslist/${new_course_id}`);
    return response.data;
  }

  async uncrossListSection(sectionId: number): Promise<CanvasSection> {
    const response = await this.client.delete(`/sections/${sectionId}/crosslist`);
    return response.data;
  }

  // ---------------------
  // ASSIGNMENT OVERRIDES (Phase 1 - Critical)
  // ---------------------
  async createAssignmentOverride(args: CreateAssignmentOverrideArgs): Promise<CanvasAssignmentOverride> {
    const { course_id, assignment_id, ...overrideData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/assignments/${assignment_id}/overrides`,
      { assignment_override: overrideData }
    );
    return response.data;
  }

  async listAssignmentOverrides(courseId: number, assignmentId: number): Promise<CanvasAssignmentOverride[]> {
    const response = await this.client.get(`/courses/${courseId}/assignments/${assignmentId}/overrides`);
    return response.data;
  }

  async getAssignmentOverride(courseId: number, assignmentId: number, overrideId: number): Promise<CanvasAssignmentOverride> {
    const response = await this.client.get(
      `/courses/${courseId}/assignments/${assignmentId}/overrides/${overrideId}`
    );
    return response.data;
  }

  async updateAssignmentOverride(args: UpdateAssignmentOverrideArgs): Promise<CanvasAssignmentOverride> {
    const { course_id, assignment_id, override_id, ...overrideData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}/overrides/${override_id}`,
      { assignment_override: overrideData }
    );
    return response.data;
  }

  async deleteAssignmentOverride(courseId: number, assignmentId: number, overrideId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/assignments/${assignmentId}/overrides/${overrideId}`);
  }

  // ---------------------
  // RUBRIC GRADING (Phase 1 - Critical)
  // ---------------------
  async gradeSubmissionWithRubric(args: GradeWithRubricArgs): Promise<CanvasSubmission> {
    const { course_id, assignment_id, user_id, rubric_assessment, posted_grade, text_comment } = args;

    const submission: any = {
      rubric_assessment
    };

    if (posted_grade !== undefined) {
      submission.posted_grade = posted_grade;
    }

    if (text_comment) {
      submission.comment = { text_comment };
    }

    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`,
      { submission }
    );
    return response.data;
  }

  // ---------------------
  // SUBMISSION COMMENTS (Phase 1 - High)
  // ---------------------
  async addSubmissionComment(args: AddSubmissionCommentArgs): Promise<CanvasSubmission> {
    const { course_id, assignment_id, user_id, text_comment, file_ids, media_comment_id, media_comment_type } = args;

    const comment: any = {};

    if (text_comment) comment.text_comment = text_comment;
    if (file_ids && file_ids.length > 0) comment.file_ids = file_ids;
    if (media_comment_id) {
      comment.media_comment_id = media_comment_id;
      comment.media_comment_type = media_comment_type || 'audio';
    }

    const response = await this.client.put(
      `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`,
      { comment }
    );
    return response.data;
  }

  // ---------------------
  // PAGE MANAGEMENT (Phase 2 - High Priority)
  // ---------------------
  async createPage(args: CreatePageArgs): Promise<CanvasPage> {
    const { course_id, ...pageData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/pages`,
      { wiki_page: pageData }
    );
    return response.data;
  }

  async updatePage(args: UpdatePageArgs): Promise<CanvasPage> {
    const { course_id, page_url, ...pageData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/pages/${page_url}`,
      { wiki_page: pageData }
    );
    return response.data;
  }

  async deletePage(courseId: number, pageUrl: string): Promise<void> {
    await this.client.delete(`/courses/${courseId}/pages/${pageUrl}`);
  }

  // ---------------------
  // ANNOUNCEMENT MANAGEMENT (Phase 2 - Critical)
  // ---------------------
  async createAnnouncement(args: CreateAnnouncementArgs): Promise<CanvasDiscussionTopic> {
    const { course_id, ...announcementData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/discussion_topics`,
      {
        ...announcementData,
        is_announcement: true
      }
    );
    return response.data;
  }

  async updateAnnouncement(args: UpdateAnnouncementArgs): Promise<CanvasDiscussionTopic> {
    const { course_id, topic_id, ...announcementData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/discussion_topics/${topic_id}`,
      announcementData
    );
    return response.data;
  }

  // ---------------------
  // DISCUSSION TOPIC MANAGEMENT (Phase 2 - High)
  // ---------------------
  async createDiscussionTopic(args: CreateDiscussionTopicArgs): Promise<CanvasDiscussionTopic> {
    const { course_id, ...topicData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/discussion_topics`,
      topicData
    );
    return response.data;
  }

  async updateDiscussionTopic(args: UpdateDiscussionTopicArgs): Promise<CanvasDiscussionTopic> {
    const { course_id, topic_id, ...topicData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/discussion_topics/${topic_id}`,
      topicData
    );
    return response.data;
  }

  async deleteDiscussionTopic(courseId: number, topicId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/discussion_topics/${topicId}`);
  }

  // ---------------------
  // MODULE MANAGEMENT (Phase 2 - High)
  // ---------------------
  async createModule(args: CreateModuleArgs): Promise<CanvasModule> {
    const { course_id, ...moduleData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/modules`,
      { module: moduleData }
    );
    return response.data;
  }

  async updateModule(args: UpdateModuleArgs): Promise<CanvasModule> {
    const { course_id, module_id, published, ...moduleData } = args;

    const data: any = { module: moduleData };

    // Handle published status separately
    if (published !== undefined) {
      data.module.published = published;
    }

    const response = await this.client.put(
      `/courses/${course_id}/modules/${module_id}`,
      data
    );
    return response.data;
  }

  async deleteModule(courseId: number, moduleId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/modules/${moduleId}`);
  }

  async publishModule(courseId: number, moduleId: number): Promise<CanvasModule> {
    const response = await this.client.put(
      `/courses/${courseId}/modules/${moduleId}`,
      { module: { published: true } }
    );
    return response.data;
  }

  async unpublishModule(courseId: number, moduleId: number): Promise<CanvasModule> {
    const response = await this.client.put(
      `/courses/${courseId}/modules/${moduleId}`,
      { module: { published: false } }
    );
    return response.data;
  }

  // ---------------------
  // MODULE ITEM MANAGEMENT (Phase 2 - High)
  // ---------------------
  async createModuleItem(args: CreateModuleItemArgs): Promise<CanvasModuleItem> {
    const { course_id, module_id, ...itemData } = args;
    const response = await this.client.post(
      `/courses/${course_id}/modules/${module_id}/items`,
      { module_item: itemData }
    );
    return response.data;
  }

  async updateModuleItem(args: UpdateModuleItemArgs): Promise<CanvasModuleItem> {
    const { course_id, module_id, item_id, ...itemData } = args;
    const response = await this.client.put(
      `/courses/${course_id}/modules/${module_id}/items/${item_id}`,
      { module_item: itemData }
    );
    return response.data;
  }

  async deleteModuleItem(courseId: number, moduleId: number, itemId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/modules/${moduleId}/items/${itemId}`);
  }

  // ---------------------
  // GRADE POSTING/HIDING (Phase 3 - Teacher Tools)
  // ---------------------

  /**
   * Post assignment grades to make them visible to students
   */
  async postAssignmentGrades(args: PostGradesArgs): Promise<void> {
    const { course_id, assignment_id, user_ids, graded_only = true } = args;

    if (user_ids && user_ids.length > 0) {
      // Post grades for specific users
      await this.client.post(
        `/courses/${course_id}/assignments/${assignment_id}/submissions/update_grades`,
        {
          grade_data: user_ids.reduce((acc, user_id) => {
            acc[user_id] = { posted_at: new Date().toISOString() };
            return acc;
          }, {} as any)
        }
      );
    } else {
      // Post all grades for the assignment
      const endpoint = `/courses/${course_id}/assignments/${assignment_id}/submissions`;
      const params: any = {};

      if (graded_only) {
        params.workflow_state = 'graded';
      }

      // Fetch submissions to post
      const submissions = await this.client.get(endpoint, { params });

      // Post each submission
      const postPromises = submissions.data.map((submission: any) =>
        this.client.put(
          `/courses/${course_id}/assignments/${assignment_id}/submissions/${submission.user_id}`,
          { submission: { posted_at: new Date().toISOString() } }
        )
      );

      await Promise.all(postPromises);
    }
  }

  /**
   * Hide assignment grades from students
   */
  async hideAssignmentGrades(args: HideGradesArgs): Promise<void> {
    const { course_id, assignment_id, user_ids } = args;

    if (user_ids && user_ids.length > 0) {
      // Hide grades for specific users
      const hidePromises = user_ids.map((user_id) =>
        this.client.put(
          `/courses/${course_id}/assignments/${assignment_id}/submissions/${user_id}`,
          { submission: { posted_at: null } }
        )
      );

      await Promise.all(hidePromises);
    } else {
      // Hide all grades by fetching and updating all submissions
      const submissions = await this.client.get(
        `/courses/${course_id}/assignments/${assignment_id}/submissions`
      );

      const hidePromises = submissions.data.map((submission: any) =>
        this.client.put(
          `/courses/${course_id}/assignments/${assignment_id}/submissions/${submission.user_id}`,
          { submission: { posted_at: null } }
        )
      );

      await Promise.all(hidePromises);
    }
  }

  /**
   * Get the posting policy for an assignment
   */
  async getPostingPolicy(courseId: number, assignmentId: number): Promise<PostingPolicy> {
    const response = await this.client.get(
      `/courses/${courseId}/assignments/${assignmentId}`,
      {
        params: {
          include: ['post_policy']
        }
      }
    );

    return {
      post_manually: response.data.post_policy?.post_manually ?? false
    };
  }

  /**
   * Set the posting policy for an assignment
   */
  async setPostingPolicy(
    courseId: number,
    assignmentId: number,
    policy: PostingPolicy
  ): Promise<PostingPolicy> {
    const response = await this.client.post(
      `/courses/${courseId}/assignments/${assignmentId}/post_policy`,
      {
        post_policy: policy
      }
    );

    return {
      post_manually: response.data.post_manually ?? false
    };
  }

  // ---------------------
  // QUIZ QUESTIONS (Phase 3 - Teacher Tools)
  // ---------------------

  async listQuizQuestions(courseId: number, quizId: number): Promise<QuizQuestion[]> {
    const response = await this.client.get(`/courses/${courseId}/quizzes/${quizId}/questions`);
    return response.data;
  }

  async getQuizQuestion(courseId: number, quizId: number, questionId: number): Promise<QuizQuestion> {
    const response = await this.client.get(
      `/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`
    );
    return response.data;
  }

  async createQuizQuestion(args: CreateQuizQuestionArgs): Promise<QuizQuestion> {
    const { course_id, quiz_id, ...questionData } = args;

    const response = await this.client.post(
      `/courses/${course_id}/quizzes/${quiz_id}/questions`,
      { question: questionData }
    );
    return response.data;
  }

  async updateQuizQuestion(args: UpdateQuizQuestionArgs): Promise<QuizQuestion> {
    const { course_id, quiz_id, question_id, ...questionData } = args;

    const response = await this.client.put(
      `/courses/${course_id}/quizzes/${quiz_id}/questions/${question_id}`,
      { question: questionData }
    );
    return response.data;
  }

  async deleteQuizQuestion(courseId: number, quizId: number, questionId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`);
  }

  // ---------------------
  // ANALYTICS (Phase 3 - Teacher Tools)
  // ---------------------

  async getCourseActivity(courseId: number): Promise<CourseActivity> {
    try {
      const response = await this.client.get(`/courses/${courseId}/analytics/activity`);
      return response.data;
    } catch (error) {
      if (error instanceof CanvasAPIError) {
        throw new CanvasAPIError(
          `Failed to retrieve course activity analytics: ${error.message}`,
          error.statusCode,
          error.response
        );
      }
      throw error;
    }
  }

  async getStudentSummaries(courseId: number): Promise<StudentSummary[]> {
    try {
      const response = await this.client.get(`/courses/${courseId}/analytics/student_summaries`);
      return response.data;
    } catch (error) {
      if (error instanceof CanvasAPIError) {
        throw new CanvasAPIError(
          `Failed to retrieve student summaries: ${error.message}`,
          error.statusCode,
          error.response
        );
      }
      throw error;
    }
  }

  async getStudentActivity(courseId: number, userId: number): Promise<StudentActivity> {
    try {
      const response = await this.client.get(
        `/courses/${courseId}/analytics/users/${userId}/activity`
      );
      return response.data;
    } catch (error) {
      if (error instanceof CanvasAPIError) {
        throw new CanvasAPIError(
          `Failed to retrieve student activity for user ${userId}: ${error.message}`,
          error.statusCode,
          error.response
        );
      }
      throw error;
    }
  }

  async getStudentAssignments(courseId: number, userId: number): Promise<StudentAssignmentData[]> {
    try {
      const response = await this.client.get(
        `/courses/${courseId}/analytics/users/${userId}/assignments`
      );
      return response.data;
    } catch (error) {
      if (error instanceof CanvasAPIError) {
        throw new CanvasAPIError(
          `Failed to retrieve student assignment data for user ${userId}: ${error.message}`,
          error.statusCode,
          error.response
        );
      }
      throw error;
    }
  }

  // ---------------------
  // GRADE EXPORT CSV (Phase 3 - Teacher Tools)
  // ---------------------

  async exportGradebookCSV(args: GradebookExportArgs): Promise<string> {
    const { course_id, include_comments = false, include_missing = true } = args;

    // Fetch all required data in parallel
    const [assignments, students, submissions] = await Promise.all([
      this.listAssignments(course_id),
      this.listStudents({ course_id }),
      this.listSubmissions({ course_id })
    ]);

    // Filter out assignments without points_possible
    const gradedAssignments = assignments.filter(a =>
      a.points_possible !== undefined && a.points_possible > 0
    );

    // Build gradebook structure
    const gradebook = new Map<number, GradebookEntry>();

    // Initialize gradebook entries for each student
    students.forEach(student => {
      gradebook.set(student.id, {
        student_id: student.id,
        student_name: student.name || 'Unknown',
        student_email: student.email || '',
        grades: new Map(),
        comments: include_comments ? new Map() : undefined,
        total_points: 0,
        possible_points: 0
      });
    });

    // Process submissions
    submissions.forEach(submission => {
      const entry = gradebook.get(submission.user_id);
      if (!entry) return;

      const assignment = gradedAssignments.find(a => a.id === submission.assignment_id);
      if (!assignment) return;

      // Set grade (null if not graded)
      const grade = submission.score !== undefined && submission.score !== null
        ? submission.score
        : null;

      entry.grades.set(assignment.id, grade);

      // Add comment if requested
      if (include_comments && submission.submission_comments) {
        const comments = submission.submission_comments
          .map(c => c.comment)
          .filter(c => c)
          .join(' | ');
        if (comments) {
          entry.comments?.set(assignment.id, comments);
        }
      }

      // Calculate totals (only graded assignments)
      if (grade !== null) {
        entry.total_points += grade;
        entry.possible_points += assignment.points_possible || 0;
      }
    });

    // Generate CSV
    const csvRows: string[] = [];

    // Build header row
    const headers = [
      'Student Name',
      'Student ID',
      'Email',
      ...gradedAssignments.map(a => this.escapeCSV(a.name || `Assignment ${a.id}`)),
      'Total Points',
      'Possible Points',
      'Percentage'
    ];

    if (include_comments) {
      gradedAssignments.forEach(a => {
        headers.push(this.escapeCSV(`${a.name || `Assignment ${a.id}`} Comments`));
      });
    }

    csvRows.push(headers.join(','));

    // Build data rows
    gradebook.forEach(entry => {
      const row = [
        this.escapeCSV(entry.student_name),
        entry.student_id.toString(),
        this.escapeCSV(entry.student_email),
        ...gradedAssignments.map(a => {
          const grade = entry.grades.get(a.id);
          if (grade === null || grade === undefined) {
            return include_missing ? 'Missing' : '';
          }
          return grade.toString();
        }),
        entry.total_points.toFixed(2),
        entry.possible_points.toFixed(2),
        entry.possible_points > 0
          ? ((entry.total_points / entry.possible_points) * 100).toFixed(2) + '%'
          : '0.00%'
      ];

      if (include_comments) {
        gradedAssignments.forEach(a => {
          const comment = entry.comments?.get(a.id);
          row.push(comment ? this.escapeCSV(comment) : '');
        });
      }

      csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
  }

  private escapeCSV(value: string): string {
    if (!value) return '';

    // Escape double quotes by doubling them
    const escaped = value.replace(/"/g, '""');

    // Wrap in quotes if contains comma, newline, or double quote
    if (escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')) {
      return `"${escaped}"`;
    }

    return escaped;
  }

  // ---------------------
  // LATE POLICY (Phase 3 - Teacher Tools)
  // ---------------------

  async getLatePolicy(courseId: number): Promise<LatePolicy> {
    try {
      const response = await this.client.get(`/courses/${courseId}/late_policy`);
      return response.data;
    } catch (error: any) {
      // Canvas returns 404 if no late policy exists
      if (error.response?.status === 404) {
        throw new CanvasAPIError(
          `No late policy found for course ${courseId}. Create one first.`,
          404,
          null
        );
      }
      throw error;
    }
  }

  async createLatePolicy(args: CreateLatePolicyArgs): Promise<LatePolicy> {
    const { course_id, ...policyData } = args;

    // Build late_policy object with only enabled fields
    const late_policy: any = {};

    if (policyData.late_submission_deduction_enabled !== undefined) {
      late_policy.late_submission_deduction_enabled = policyData.late_submission_deduction_enabled;
    }
    if (policyData.late_submission_deduction !== undefined) {
      late_policy.late_submission_deduction = policyData.late_submission_deduction;
    }
    if (policyData.late_submission_interval !== undefined) {
      late_policy.late_submission_interval = policyData.late_submission_interval;
    }
    if (policyData.missing_submission_deduction_enabled !== undefined) {
      late_policy.missing_submission_deduction_enabled = policyData.missing_submission_deduction_enabled;
    }
    if (policyData.missing_submission_deduction !== undefined) {
      late_policy.missing_submission_deduction = policyData.missing_submission_deduction;
    }
    if (policyData.late_submission_minimum_percent_enabled !== undefined) {
      late_policy.late_submission_minimum_percent_enabled = policyData.late_submission_minimum_percent_enabled;
    }
    if (policyData.late_submission_minimum_percent !== undefined) {
      late_policy.late_submission_minimum_percent = policyData.late_submission_minimum_percent;
    }

    const response = await this.client.post(`/courses/${course_id}/late_policy`, {
      late_policy
    });
    return response.data;
  }

  async updateLatePolicy(args: UpdateLatePolicyArgs): Promise<LatePolicy> {
    const { course_id, ...policyData } = args;

    // Build late_policy object with only provided fields
    const late_policy: any = {};

    if (policyData.late_submission_deduction_enabled !== undefined) {
      late_policy.late_submission_deduction_enabled = policyData.late_submission_deduction_enabled;
    }
    if (policyData.late_submission_deduction !== undefined) {
      late_policy.late_submission_deduction = policyData.late_submission_deduction;
    }
    if (policyData.late_submission_interval !== undefined) {
      late_policy.late_submission_interval = policyData.late_submission_interval;
    }
    if (policyData.missing_submission_deduction_enabled !== undefined) {
      late_policy.missing_submission_deduction_enabled = policyData.missing_submission_deduction_enabled;
    }
    if (policyData.missing_submission_deduction !== undefined) {
      late_policy.missing_submission_deduction = policyData.missing_submission_deduction;
    }
    if (policyData.late_submission_minimum_percent_enabled !== undefined) {
      late_policy.late_submission_minimum_percent_enabled = policyData.late_submission_minimum_percent_enabled;
    }
    if (policyData.late_submission_minimum_percent !== undefined) {
      late_policy.late_submission_minimum_percent = policyData.late_submission_minimum_percent;
    }

    const response = await this.client.patch(`/courses/${course_id}/late_policy`, {
      late_policy
    });
    return response.data;
  }

  // ---------------------
  // SPEEDGRADER NAVIGATION (Phase 3 - Teacher Tools)
  // ---------------------

  getSpeedGraderURL(args: SpeedGraderURLArgs): string {
    const { domain, course_id, assignment_id, student_id, anonymous_id } = args;

    // Validate that either student_id or anonymous_id is provided, but not both
    if (student_id && anonymous_id) {
      throw new Error('Cannot specify both student_id and anonymous_id');
    }

    if (!student_id && !anonymous_id) {
      throw new Error('Must specify either student_id or anonymous_id');
    }

    // Build query parameters
    const params = new URLSearchParams({
      assignment_id: assignment_id.toString()
    });

    if (student_id !== undefined) {
      params.append('student_id', student_id.toString());
    } else if (anonymous_id) {
      params.append('anonymous_id', anonymous_id);
    }

    return `https://${domain}/courses/${course_id}/gradebook/speed_grader?${params.toString()}`;
  }

  // ---------------------
  // OUTCOMES/STANDARDS (Phase 3 - Teacher Tools)
  // ---------------------

  async listOutcomes(courseId: number): Promise<Outcome[]> {
    const response = await this.client.get(`/courses/${courseId}/outcome_groups/0/outcomes`);
    return response.data;
  }

  async getOutcome(courseId: number, outcomeId: number): Promise<Outcome> {
    const response = await this.client.get(`/courses/${courseId}/outcomes/${outcomeId}`);
    return response.data;
  }

  async createOutcome(args: CreateOutcomeArgs): Promise<Outcome> {
    const { course_id, ...outcomeData } = args;

    const response = await this.client.post(
      `/courses/${course_id}/outcome_groups/0/outcomes`,
      { outcome: outcomeData }
    );
    return response.data;
  }

  async updateOutcome(args: UpdateOutcomeArgs): Promise<Outcome> {
    const { course_id, outcome_id, ...outcomeData } = args;

    const response = await this.client.put(
      `/courses/${course_id}/outcomes/${outcome_id}`,
      { outcome: outcomeData }
    );
    return response.data;
  }

  async deleteOutcome(courseId: number, outcomeId: number): Promise<void> {
    await this.client.delete(`/courses/${courseId}/outcomes/${outcomeId}`);
  }

  async getOutcomeAlignments(courseId: number): Promise<OutcomeAlignment[]> {
    const response = await this.client.get(`/courses/${courseId}/outcome_alignments`);
    return response.data;
  }

  async getOutcomeResults(courseId: number, options?: OutcomeResultsArgs): Promise<OutcomeResult[]> {
    const params: any = {};

    if (options?.user_ids) {
      params['user_ids[]'] = options.user_ids;
    }
    if (options?.outcome_ids) {
      params['outcome_ids[]'] = options.outcome_ids;
    }
    if (options?.include) {
      params['include[]'] = options.include;
    }

    const response = await this.client.get(`/courses/${courseId}/outcome_results`, { params });
    return response.data.outcome_results || [];
  }

  // ---------------------
  // ATTENDANCE (Phase 3 - Teacher Tools)
  // ---------------------

  getAttendanceInfo(): AttendanceInfo {
    return {
      tool_type: 'lti',
      availability: 'Must be enabled at account level by Canvas administrator',
      data_access_method: 'Roll Call Attendance creates an assignment in the gradebook after first use. Access attendance data via the Assignment Grades API using the Roll Call assignment ID.',
      example_workflow: [
        '1. Ensure Roll Call Attendance is enabled by your Canvas administrator',
        '2. Use Roll Call tool in your course (creates assignment automatically)',
        '3. List course assignments to find Roll Call assignment: GET /api/v1/courses/:course_id/assignments',
        '4. Get attendance data via grades: GET /api/v1/courses/:course_id/assignments/:assignment_id/submissions',
        '5. Attendance status is stored in submission grades and comments'
      ],
      documentation_url: 'https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-use-the-Roll-Call-Attendance-tool-in-a-course/ta-p/1003'
    };
  }
}