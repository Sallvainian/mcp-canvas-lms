# Canvas Integration Guide
## Complete MCP Tools Reference and Implementation Patterns

## Purpose
This guide provides comprehensive documentation of all 95+ Canvas MCP tools available through the BMAD Education Pack, organized by educational use case with implementation patterns, best practices, and troubleshooting guidance.

## Who Should Read This
- **Educators** implementing Canvas courses using BMAD agents
- **Instructional designers** leveraging Canvas automation
- **EdTech integrators** building Canvas workflows
- **Curriculum developers** deploying courses at scale

---

## Table of Contents

1. [Canvas MCP Overview](#canvas-mcp-overview)
2. [Tool Categories](#tool-categories)
3. [Course Management (12 tools)](#course-management)
4. [Assignment & Assessment (25 tools)](#assignment-assessment)
5. [Content Delivery (15 tools)](#content-delivery)
6. [Grading & Feedback (18 tools)](#grading-feedback)
7. [Communication & Collaboration (12 tools)](#communication-collaboration)
8. [Advanced Features (13 tools)](#advanced-features)
9. [Implementation Patterns](#implementation-patterns)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)

---

## Canvas MCP Overview

### What is Canvas MCP?
The Canvas Model Context Protocol (MCP) server provides programmatic access to Canvas LMS functionality through AI agents. It enables automated course creation, content deployment, assessment management, and student interaction—all aligned to educational frameworks.

### Key Benefits
- **Automation**: Build complete courses programmatically
- **Consistency**: Apply educational frameworks systematically
- **Scale**: Deploy curricula across multiple sections/courses
- **Alignment**: Ensure standards and objectives tracking
- **Integration**: Seamlessly work within BMAD agent workflows

### Prerequisites
- Canvas LMS access with appropriate permissions
- Canvas API token configured in environment
- BMAD Education Pack installed
- Basic understanding of Canvas course structure

---

## Tool Categories

**95+ Tools Organized by Function**:

1. **Course Management** (12 tools) - Create, update, configure courses
2. **Assignment & Assessment** (25 tools) - Design assessments aligned to frameworks
3. **Content Delivery** (15 tools) - Organize modules, pages, and resources
4. **Grading & Feedback** (18 tools) - Provide feedback and track mastery
5. **Communication & Collaboration** (12 tools) - Discussions, announcements, messaging
6. **Advanced Features** (13 tools) - Outcomes, analytics, rubrics, groups

---

## Course Management

### 1. canvas_health_check
**Purpose**: Verify Canvas API connectivity before operations

**Parameters**: None

**Returns**: Connection status, API version

**Use Case**: Troubleshooting, initial setup validation

**Example**:
```
canvas_health_check()
→ {"status": "healthy", "api_version": "v1", "authenticated": true}
```

**Best Practice**: Call at start of automated workflows to verify connection

---

### 2. canvas_list_courses
**Purpose**: Retrieve all courses for current user

**Parameters**:
- `include_ended` (optional, bool): Include completed courses

**Returns**: Array of course objects with IDs, names, codes, enrollment info

**Use Case**: Course overview, semester planning, batch operations

**Example**:
```
canvas_list_courses(include_ended=False)
→ Returns active courses only for current term
```

**Integration**: Use with curriculum-architect for multi-course deployment

---

### 3. canvas_get_course
**Purpose**: Get detailed information about specific course

**Parameters**:
- `course_id` (required, int): Course ID

**Returns**: Complete course object with settings, enrollment, syllabus

**Use Case**: Course analysis, verification before updates

**Example**:
```
canvas_get_course(course_id=12345)
→ Full course details including modules, assignments, students
```

---

### 4. canvas_create_course
**Purpose**: Create new course with complete configuration

**Parameters**:
- `account_id` (required, int): Account to create course in
- `name` (required, str): Course name
- `course_code` (required, str): Course code (e.g., "BIO101")
- `start_at` (optional, str): Start date (ISO 8601 format)
- `end_at` (optional, str): End date
- `time_zone` (optional, str): Time zone
- `syllabus_body` (optional, str): Syllabus HTML
- `public_syllabus` (optional, bool): Make syllabus public
- `is_public_to_auth_users` (optional, bool): Visible to authenticated users
- `self_enrollment` (optional, bool): Allow student self-enrollment
- `restrict_enrollments_to_course_dates` (optional, bool): Enforce date restrictions

**Educational Framework Alignment**:
- **UDL**: Design accessible from start with public syllabus
- **Backward Design**: Plan structure before content with clear syllabus

**Example**:
```
canvas_create_course(
    account_id=1,
    name="Introduction to Biology",
    course_code="BIO101",
    start_at="2024-01-15T00:00:00Z",
    end_at="2024-05-15T00:00:00Z",
    time_zone="America/New_York",
    syllabus_body="<h2>Course Overview</h2><p>This course explores...</p>",
    public_syllabus=True,
    restrict_enrollments_to_course_dates=True
)
```

**Best Practice**: Use curriculum-architect agent to generate aligned syllabus before course creation

---

### 5. canvas_update_course
**Purpose**: Modify existing course settings

**Parameters**:
- `course_id` (required, int): Course to update
- `name`, `course_code`, `start_at`, `end_at` (optional): Update course metadata
- `published` (optional, bool): Publish or unpublish course
- `syllabus_body` (optional, str): Update syllabus

**Use Case**: Mid-semester adjustments, continuous improvement

**Example**:
```
canvas_update_course(
    course_id=12345,
    published=True,
    syllabus_body="<h2>Updated Course Overview</h2>..."
)
```

---

### 6-12. Additional Course Management Tools

**canvas_create_assignment_group**: Organize gradebook categories
**canvas_update_assignment_group**: Modify grading category settings
**canvas_list_assignment_groups**: Review gradebook structure
**canvas_list_sections**: View course sections
**canvas_get_section**: Section details
**canvas_cross_list_section**: Move section between courses (merge)
**canvas_uncross_list_section**: Unmerge sections

**Full details**: See `data/canvas-mcp-tools.md` for complete parameter documentation

---

## Assignment & Assessment

### Core Assignment Tools

### 13. canvas_list_assignments
**Purpose**: List all assignments in course

**Parameters**:
- `course_id` (required, int)
- `include_submissions` (optional, bool): Include submission data

**Use Case**: Unit planning, workload balance analysis

**Example**:
```
canvas_list_assignments(course_id=12345, include_submissions=True)
→ Returns all assignments with submission counts and due dates
```

---

### 14. canvas_get_assignment
**Purpose**: Get detailed assignment information

**Parameters**:
- `course_id` (required, int)
- `assignment_id` (required, int)
- `include_submission` (optional, bool): Include user's submission

**Use Case**: Verify assignment before updates, check student submission status

---

### 15. canvas_create_assignment
**Purpose**: Create assignment aligned to frameworks

**Parameters** (key ones):
- `course_id` (required, int)
- `name` (required, str): Assignment name
- `description` (optional, str): Instructions (supports HTML)
- `points_possible` (optional, float): Maximum points
- `due_at` (optional, str): Due date (ISO 8601)
- `submission_types` (optional, array): ["online_text_entry", "online_upload", "online_url"]
- `allowed_extensions` (optional, array): File types ["pdf", "docx", "mp4"]
- `published` (optional, bool): Publish immediately

**Educational Framework Integration**:

**Bloom's Taxonomy Application**:
```
# Analyze-level assignment (Bloom's Level 4)
canvas_create_assignment(
    course_id=12345,
    name="Literary Analysis Essay",
    description="""
    <h2>Learning Objectives</h2>
    <p>CCSS.ELA-LITERACY.RL.9-10.2: Determine theme and analyze development</p>

    <h2>Bloom's Level: Analyze</h2>
    <p>You will analyze how the author develops the central theme through
    character choices, symbolism, and plot structure.</p>

    <h2>Instructions</h2>
    <p>Analyze character development in the novel, using textual evidence to
    support your interpretation of the author's message.</p>
    """,
    points_possible=100,
    due_at="2024-03-15T23:59:00Z",
    submission_types=["online_text_entry", "online_upload"]
)
```

**UDL - Multiple Means of Expression**:
```
# Differentiated product options
canvas_create_assignment(
    course_id=12345,
    name="Ecosystem Model Project",
    description="""
    <h2>Learning Objectives</h2>
    <p>Demonstrate understanding of energy flow in ecosystems</p>

    <h2>UDL: Choose Your Format</h2>
    <ul>
      <li>Physical 3D model with written explanation</li>
      <li>Digital simulation or animation</li>
      <li>Interactive website with explanations</li>
      <li>Video documentary with narration</li>
    </ul>

    <p>All options assessed via the same rubric focusing on conceptual
    understanding, not format.</p>
    """,
    points_possible=150,
    submission_types=["online_upload", "online_url"],
    allowed_extensions=["pdf", "mp4", "zip", "html"]
)
```

**DOK Levels**:
```
# DOK 3 Strategic Thinking assignment
canvas_create_assignment(
    course_id=12345,
    name="Historical Investigation: Civil Rights Strategies",
    description="""
    <h2>DOK Level 3: Strategic Thinking</h2>
    <p>Analyze primary sources to develop argument about most effective
    Civil Rights strategies. Requires: reasoning, evidence synthesis,
    complex analysis over time.</p>

    <h2>Task</h2>
    <p>Using 4-6 primary sources, construct argument about which Civil Rights
    strategies proved most effective in achieving legislative change. Support
    claims with historical evidence and address counterarguments.</p>
    """,
    points_possible=100
)
```

---

### 16. canvas_update_assignment
**Purpose**: Modify existing assignment

**Parameters**: Same as create (course_id, assignment_id required)

**Use Case**: Adjust due dates, update instructions, modify points

---

### 17. canvas_duplicate_assignment
**Purpose**: Copy assignment within same course

**Parameters**:
- `course_id` (required, int)
- `assignment_id` (required, int): Assignment to duplicate

**Use Case**: Create similar assignments efficiently, template reuse

**Example**:
```
canvas_duplicate_assignment(course_id=12345, assignment_id=67890)
→ Creates copy with " Copy" appended to name
```

---

### 18. canvas_delete_assignment
**Purpose**: Remove assignment from course

**Parameters**:
- `course_id` (required, int)
- `assignment_id` (required, int)

**Use Case**: Remove outdated or incorrect assignments

**Warning**: Cannot be undone. Verify assignment_id before deletion.

---

### Quiz Assessment Tools

### 19-30. Quiz Tools (12 tools)
**Complete quiz creation and management toolkit**:

**canvas_list_quizzes**: List all quizzes in course
**canvas_get_quiz**: Get quiz details
**canvas_create_quiz**: Create new quiz/survey
**canvas_update_quiz**: Modify quiz settings
**canvas_delete_quiz**: Remove quiz
**canvas_start_quiz_attempt**: Begin student quiz session
**canvas_list_quiz_questions**: View all questions in quiz
**canvas_get_quiz_question**: Get specific question details
**canvas_create_quiz_question**: Add question to quiz
**canvas_update_quiz_question**: Modify existing question
**canvas_delete_quiz_question**: Remove question from quiz

**Educational Applications**:

**Formative Assessment (Low-Stakes)**:
```
# Exit ticket for formative feedback
canvas_create_quiz(
    course_id=12345,
    title="Exit Ticket - Day 12",
    quiz_type="survey",  # Ungraded
    time_limit=5,
    allowed_attempts=-1,  # Unlimited
    description="Quick reflection: What was main concept? What questions remain?"
)
```

**Summative Assessment (Standards-Aligned)**:
```
# Unit test with test blueprint
canvas_create_quiz(
    course_id=12345,
    title="Unit 3 Test - Genetics",
    quiz_type="assignment",  # Graded
    description="""
    Content Coverage (Test Blueprint):
    - Punnett squares: 25% (DOK 2-3)
    - Pedigrees: 25% (DOK 2)
    - Probability: 25% (DOK 2-3)
    - Genetic disorders: 25% (DOK 1-2)

    Cognitive Levels (Bloom's):
    - Remember/Understand: 30%
    - Apply: 40%
    - Analyze/Evaluate: 30%
    """,
    time_limit=50,
    allowed_attempts=1,
    points_possible=100,
    published=True
)
```

**Question Types by Bloom's Level**:

**Remember (DOK 1)**:
```
canvas_create_quiz_question(
    course_id=12345,
    quiz_id=67890,
    question_type="multiple_choice",
    question_text="What is the powerhouse of the cell?",
    answers=[
        {"text": "Mitochondria", "weight": 100},
        {"text": "Nucleus", "weight": 0},
        {"text": "Ribosome", "weight": 0}
    ],
    points_possible=1
)
```

**Understand (DOK 2)**:
```
canvas_create_quiz_question(
    question_type="short_answer_question",
    question_text="Explain the function of mitochondria in your own words.",
    points_possible=5
)
```

**Analyze/Evaluate (DOK 3)**:
```
canvas_create_quiz_question(
    question_type="essay_question",
    question_text="""Compare and contrast mitosis and meiosis. Explain the
    biological significance of each process for multicellular organisms.""",
    points_possible=15
)
```

---

## Content Delivery

### Module Organization Tools

### 31-40. Module Tools (10 tools)
**Structure content into organized learning units**:

**canvas_list_modules**: List all modules in course
**canvas_get_module**: Get module details
**canvas_create_module**: Create new module
**canvas_update_module**: Modify module settings
**canvas_delete_module**: Remove module
**canvas_publish_module**: Publish module and items
**canvas_unpublish_module**: Unpublish module
**canvas_list_module_items**: List items in module
**canvas_get_module_item**: Get item details
**canvas_create_module_item**: Add item to module
**canvas_update_module_item**: Modify item
**canvas_delete_module_item**: Remove item

**Backward Design Integration**:

**Module Structure Following UbD**:
```
# Stage 1: Create module with learning objectives
canvas_create_module(
    course_id=12345,
    name="Unit 3: The Civil War Era (1850-1877)",
    position=3,
    unlock_at="2024-02-15T00:00:00Z",
    require_sequential_progress=True  # Enforce logical sequence
)

# Stage 2 & 3: Add items in backward design order
# 1. Learning objectives page (Stage 1)
canvas_create_module_item(
    course_id=12345,
    module_id=101,
    type="Page",
    title="Unit Learning Objectives",
    page_url="unit-3-objectives",
    position=1
)

# 2. Assessment overview (Stage 2)
canvas_create_module_item(
    module_id=101,
    type="Assignment",
    content_id=5001,  # Performance task ID
    title="Unit 3 Performance Task Overview",
    position=2
)

# 3. Learning experiences (Stage 3)
canvas_create_module_item(
    module_id=101,
    type="Page",
    title="Causes of Civil War - Reading",
    position=3
)
# ... continue adding learning activities
```

**Gagné's Nine Events as Module Structure**:
```
# Module organized by instructional events
Module: Photosynthesis

Item 1: Hook Video (Event 1: Gain Attention)
Item 2: Learning Objectives Page (Event 2: Inform Objectives)
Item 3: Pre-Assessment Discussion (Event 3: Recall Prior Knowledge)
Item 4: Content Pages/Videos (Events 4-5: Present Content, Provide Guidance)
Item 5: Practice Quiz (Event 6: Elicit Performance)
Item 6: Formative Feedback Assignment (Event 7: Provide Feedback)
Item 7: Graded Lab Report (Event 8: Assess Performance)
Item 8: Real-World Application Discussion (Event 9: Enhance Transfer)
```

---

### Page & Content Tools

### 41-45. Page Management (5 tools)

**canvas_list_pages**: List all pages in course
**canvas_get_page**: Get page content
**canvas_create_page**: Create new content page
**canvas_update_page**: Modify page content
**canvas_delete_page**: Remove page

**UDL Content Design**:
```
# Multiple means of representation
canvas_create_page(
    course_id=12345,
    title="Introduction to Photosynthesis",
    body="""
    <h2>Learning Objectives</h2>
    <ul>
      <li>Explain the process of photosynthesis</li>
      <li>Identify reactants and products</li>
    </ul>

    <h2>Content (Multiple Formats)</h2>

    <h3>Text Explanation</h3>
    <p>[Written explanation of photosynthesis process...]</p>

    <h3>Video Explanation (With Captions)</h3>
    <iframe src="[video URL]" ...></iframe>
    <p><a href="[transcript URL]">Video Transcript</a></p>

    <h3>Interactive Simulation</h3>
    <p><a href="[simulation URL]">Try Interactive Photosynthesis Model</a></p>

    <h3>Visual Diagram</h3>
    <img src="[diagram]" alt="Photosynthesis diagram showing light-dependent
    and light-independent reactions with labeled inputs and outputs">
    """,
    published=True,
    front_page=False
)
```

---

## Grading & Feedback

### Grading Tools

### 46-55. Grading & Feedback (10 tools)

**canvas_submit_grade**: Record grade for assignment
**canvas_get_submission**: View student submission
**canvas_list_submissions**: View all submissions for assignment
**canvas_update_submission_grade**: Modify existing grade
**canvas_bulk_update_grades**: Grade multiple students at once
**canvas_grade_with_rubric**: Apply rubric scoring
**canvas_add_submission_comment**: Provide detailed feedback
**canvas_post_assignment_grades**: Make grades visible to students
**canvas_hide_assignment_grades**: Hide grades from students
**canvas_get_posting_policy**: Check grade visibility settings

**Effective Feedback Strategies**:

**Growth Mindset Feedback**:
```
canvas_add_submission_comment(
    course_id=12345,
    assignment_id=67890,
    user_id=11111,
    comment="""
    Strengths:
    - Excellent understanding of photosynthesis concept
    - Clear diagrams with accurate labels
    - Strong use of scientific vocabulary

    Areas for Growth:
    - Explain chlorophyll's role more specifically
    - Connect light-dependent and light-independent reactions more explicitly

    Next Steps:
    - Review textbook pages 145-147 on chlorophyll function
    - Try the simulation again, focusing on how the two stages connect
    - See me during office hours if you'd like to discuss

    You're making great progress! Keep up the strong effort.
    """
)
```

**Rubric-Based Assessment**:
```
# Consistent, criteria-based grading
canvas_grade_with_rubric(
    course_id=12345,
    assignment_id=67890,
    user_id=11111,
    rubric_assessment={
        "criterion_claim": {
            "points": 18,
            "comments": "Clear, specific thesis statement. Well-positioned in introduction."
        },
        "criterion_evidence": {
            "points": 35,
            "comments": "Excellent use of textual evidence. 4 credible sources, well-integrated."
        },
        "criterion_organization": {
            "points": 16,
            "comments": "Good organization. Could improve transitions between paragraphs."
        },
        "criterion_conclusion": {
            "points": 18,
            "comments": "Strong conclusion that extends argument beyond summary."
        }
    },
    posted_grade=87,
    text_comment="Overall strong work! Focus on smoother transitions for next essay."
)
```

**Timely Feedback Loop**:
```
# Quick turnaround formative feedback
canvas_submit_grade(
    course_id=12345,
    assignment_id=67890,  # Practice problem set
    user_id=11111,
    grade=8,
    comment="Good work on problems 1-7. Problem 8: Check your calculation on step 3. See example 4 in textbook."
)
```

---

### Late Policy & Grade Management

### 56-60. Policy Tools (5 tools)

**canvas_get_late_policy**: View late submission policy
**canvas_create_late_policy**: Set automatic late deductions
**canvas_update_late_policy**: Modify late policy
**canvas_set_posting_policy**: Control automatic vs manual grade posting
**canvas_get_posting_policy**: Check current posting policy

**Transparent Grading Systems**:
```
# Consistent late policy
canvas_create_late_policy(
    course_id=12345,
    late_submission_deduction=10,  # 10% per day
    late_submission_interval="day",
    late_submission_minimum_percent=50,  # Floor at 50%
    missing_submission_deduction=100  # 0% for missing
)
```

**Manual Grade Review Before Posting**:
```
# Review all grades before students see them
canvas_set_posting_policy(
    course_id=12345,
    assignment_id=67890,
    post_manually=True  # Grades hidden until manually posted
)

# After review, release grades
canvas_post_assignment_grades(
    course_id=12345,
    assignment_id=67890
)
```

---

## Communication & Collaboration

### Discussion Tools

### 61-70. Discussion & Communication (10 tools)

**canvas_list_discussion_topics**: List all discussions
**canvas_get_discussion_topic**: Get discussion details
**canvas_create_discussion_topic**: Create discussion
**canvas_update_discussion_topic**: Modify discussion
**canvas_delete_discussion_topic**: Remove discussion
**canvas_post_to_discussion**: Add message to discussion
**canvas_list_announcements**: View course announcements
**canvas_create_announcement**: Post announcement
**canvas_update_announcement**: Modify announcement

**Active Learning Strategies**:

**Think-Pair-Share (Asynchronous)**:
```
canvas_create_discussion_topic(
    course_id=12345,
    title="Think-Pair-Share: Climate Solutions",
    message="""
    <h2>Active Learning: Think-Pair-Share</h2>

    <h3>THINK Phase (Individual - Due Wednesday)</h3>
    <p>Post your initial ideas: What local actions can address climate change?
    Use evidence from this week's readings.</p>

    <h3>PAIR Phase (Partner Discussion - Thu-Fri)</h3>
    <p>Reply to your assigned partner's post (see Canvas message).
    Discuss ideas, combine best elements, refine thinking together.</p>

    <h3>SHARE Phase (Whole Class - Weekend)</h3>
    <p>Post one refined solution combining both partners' ideas.
    Comment constructively on 2 other pairs' solutions.</p>
    """,
    discussion_type="threaded",
    published=True,
    assignment={"points_possible": 20}  # Graded discussion
)
```

**Socratic Seminar**:
```
canvas_create_discussion_topic(
    title="Socratic Seminar: Should Schools Ban Social Media?",
    message="""
    <h2>Socratic Seminar Guidelines</h2>

    <p>Engage in respectful, evidence-based dialogue. Goals:</p>
    <ul>
      <li>Listen actively to peers</li>
      <li>Build on others' ideas</li>
      <li>Support claims with evidence</li>
      <li>Ask clarifying questions</li>
    </ul>

    <h3>Opening Question</h3>
    <p>Should schools ban social media access during school hours?
    Why or why not? Support your position with evidence from readings.</p>

    <h3>Follow-Up Questions</h3>
    <p>- What are the strongest arguments for the opposing view?</p>
    <p>- What real-world evidence supports your position?</p>
    <p>- How might we address concerns from both perspectives?</p>
    """,
    discussion_type="threaded"
)
```

**Differentiated Discussion**:
```
# Tiered question levels
canvas_create_discussion_topic(
    title="Civil Rights Movement - Choose Your Challenge Level",
    message="""
    <h2>Tiered Discussion Questions</h2>
    <p>Choose ONE question matching your challenge level:</p>

    <h3>Foundation (Recall/Understand)</h3>
    <p>Describe three key events of the Civil Rights Movement and explain
    their significance using evidence from your textbook.</p>

    <h3>Core (Analyze)</h3>
    <p>Compare Martin Luther King Jr.'s and Malcolm X's strategies.
    How did their approaches differ and why? Use primary sources.</p>

    <h3>Advanced (Evaluate/Create)</h3>
    <p>Analyze how Civil Rights tactics influence current social movements.
    What strategies transferred successfully? What needs adaptation for
    today's context? Synthesize historical and contemporary sources.</p>

    <p><strong>Participation</strong>: Respond thoughtfully to 2 classmates
    at ANY level. Ask questions, add evidence, extend thinking.</p>
    """
)
```

---

### Messaging & Announcements

### 71-75. Communication Tools (5 tools)

**canvas_list_conversations**: List user's conversations
**canvas_get_conversation**: Get conversation details
**canvas_create_conversation**: Send message to students
**canvas_list_notifications**: View user notifications

**Proactive Communication**:
```
# Weekly announcement with learning preview
canvas_create_announcement(
    course_id=12345,
    title="Week 4 Preview: Ecosystems & Energy Flow",
    message="""
    <h2>This Week's Focus</h2>
    <p>We'll explore how energy moves through ecosystems and the
    relationships between organisms.</p>

    <h3>Learning Objectives</h3>
    <ul>
      <li>Explain energy flow in food chains and webs</li>
      <li>Describe producer, consumer, decomposer roles</li>
      <li>Calculate energy transfer between trophic levels</li>
    </ul>

    <h3>Key Assignments Due</h3>
    <ul>
      <li>Tuesday: Ecosystem Reading Quiz</li>
      <li>Thursday: Food Web Diagram (practice, ungraded)</li>
      <li>Sunday: Energy Pyramid Lab Report</li>
    </ul>

    <h3>Support Available</h3>
    <p>Office hours: Tuesday 3-4pm, Thursday 2-3pm (in-person or Zoom)</p>
    <p>Questions? Reply to this announcement or email me.</p>
    """,
    published=True
)
```

---

## Advanced Features

### Rubric Tools

### 76-80. Rubric Management (5 tools)

**canvas_list_rubrics**: List all rubrics in course
**canvas_get_rubric**: Get rubric details
**canvas_create_rubric**: Create new rubric
**canvas_update_rubric**: Modify existing rubric

**Standards-Aligned Rubric Creation**:

**CCSS Writing Rubric Example**:
```
canvas_create_rubric(
    course_id=12345,
    title="Argumentative Essay Rubric - CCSS W.8.1",
    criteria=[
        {
            "description": "Claim (W.8.1.a)",
            "points": 20,
            "ratings": [
                {
                    "description": "Clear, specific, arguable claim in introduction. Directly addresses prompt.",
                    "points": 20
                },
                {
                    "description": "Claim present but vague or too broad. Partially addresses prompt.",
                    "points": 13
                },
                {
                    "description": "Weak claim or statement of fact rather than argument.",
                    "points": 6
                }
            ]
        },
        {
            "description": "Evidence & Reasoning (W.8.1.b)",
            "points": 40,
            "ratings": [
                {
                    "description": "3+ credible sources. Properly cited. Well-integrated quotes. Clear reasoning connecting evidence to claim.",
                    "points": 40
                },
                {
                    "description": "2 sources. Minor citation issues. Adequate evidence-claim connection.",
                    "points": 26
                },
                {
                    "description": "1 or fewer sources. Poor integration or weak reasoning.",
                    "points": 13
                }
            ]
        },
        {
            "description": "Organization & Transitions (W.8.1.c)",
            "points": 20,
            "ratings": [
                {
                    "description": "Logical structure. Effective transitions. Clear relationships between ideas.",
                    "points": 20
                },
                {
                    "description": "Basic structure. Some transitions. Relationships mostly clear.",
                    "points": 13
                },
                {
                    "description": "Disorganized. Weak transitions. Unclear relationships.",
                    "points": 6
                }
            ]
        },
        {
            "description": "Counterclaim (W.8.1.a)",
            "points": 10,
            "ratings": [
                {
                    "description": "Acknowledges and refutes strong counterclaim with evidence.",
                    "points": 10
                },
                {
                    "description": "Mentions counterclaim but weak refutation.",
                    "points": 6
                },
                {
                    "description": "No counterclaim addressed.",
                    "points": 0
                }
            ]
        },
        {
            "description": "Conclusion (W.8.1.e)",
            "points": 10,
            "ratings": [
                {
                    "description": "Strong conclusion following from and supporting argument.",
                    "points": 10
                },
                {
                    "description": "Basic summary of argument.",
                    "points": 6
                },
                {
                    "description": "Weak or missing conclusion.",
                    "points": 2
                }
            ]
        }
    ],
    free_form_criterion_comments=True
)
```

**Performance Task Rubric (Bloom's Create, DOK 3)**:
```
canvas_create_rubric(
    course_id=12345,
    title="Science Experiment Design Rubric",
    criteria=[
        {
            "description": "Hypothesis (Bloom's: Apply, DOK 2)",
            "points": 15,
            "ratings": [
                {"description": "Testable, specific, based on research", "points": 15},
                {"description": "Vague or not clearly testable", "points": 10},
                {"description": "Weak or missing", "points": 5}
            ]
        },
        {
            "description": "Experimental Design (Bloom's: Create, DOK 3)",
            "points": 30,
            "ratings": [
                {"description": "Clear procedure, controlled variables, repeatable, valid", "points": 30},
                {"description": "Basic procedure, some controls, minor gaps", "points": 20},
                {"description": "Incomplete procedure, poor controls", "points": 10}
            ]
        },
        {
            "description": "Data Analysis (Bloom's: Analyze, DOK 3)",
            "points": 25,
            "ratings": [
                {"description": "Appropriate analysis, correct interpretation, supported conclusions", "points": 25},
                {"description": "Basic analysis, mostly correct", "points": 16},
                {"description": "Incomplete or incorrect", "points": 8}
            ]
        },
        {
            "description": "Scientific Communication",
            "points": 20,
            "ratings": [
                {"description": "Clear writing, proper terminology, well-organized", "points": 20},
                {"description": "Adequate communication with minor issues", "points": 13},
                {"description": "Unclear or poorly organized", "points": 6}
            ]
        }
    ]
)
```

---

### Learning Outcomes & Standards Tracking

### 81-87. Outcome Tools (7 tools)

**canvas_list_outcomes**: List learning outcomes
**canvas_get_outcome**: Get outcome details
**canvas_create_outcome**: Create new outcome
**canvas_update_outcome**: Modify outcome
**canvas_delete_outcome**: Remove outcome
**canvas_get_outcome_alignments**: Check outcome-content mapping
**canvas_get_outcome_results**: View student mastery data

**Standards-Based Grading Implementation**:

**CCSS Math Outcome**:
```
canvas_create_outcome(
    course_id=12345,
    title="CCSS.MATH.CONTENT.8.F.A.1",
    description="""
    Understand that a function is a rule that assigns to each input
    exactly one output. The graph of a function is the set of ordered
    pairs consisting of an input and the corresponding output.
    """,
    display_name="Functions: Input-Output Relationship",
    mastery_points=3,
    calculation_method="decaying_average",  # Recent attempts weighted more
    calculation_int=65,  # 65% weight on most recent, 35% on average
    vendor_guid="CCSS.MATH.CONTENT.8.F.A.1"  # Standard code for reporting
)
```

**ISTE Technology Standard**:
```
canvas_create_outcome(
    course_id=12345,
    title="ISTE 3: Knowledge Constructor",
    description="""
    Students critically curate resources using digital tools to
    construct knowledge, produce creative artifacts, and make
    meaningful learning experiences for themselves and others.
    """,
    display_name="Digital Knowledge Construction",
    mastery_points=4,
    calculation_method="n_mastery",  # Must demonstrate N times
    calculation_int=2,  # Must show mastery twice
    vendor_guid="ISTE.3"
)
```

**Tracking Student Progress**:
```
# Check which students have mastered outcomes
outcomes_results = canvas_get_outcome_results(
    course_id=12345,
    outcome_ids=[101, 102, 103],  # Specific outcomes to check
    user_ids=[501, 502, 503]  # Specific students (optional)
)

# Results show mastery levels per student per outcome
# Use for intervention planning, progress monitoring
```

**Alignment Validation**:
```
# Verify all outcomes are assessed
alignments = canvas_get_outcome_alignments(
    course_id=12345
)

# Check:
# - Every outcome aligned to at least one assignment?
# - Balanced distribution across assignments?
# - No outcomes over-assessed?
```

---

### Group & Collaboration Tools

### 88-95. Group Management (8 tools)

**canvas_create_group_category**: Create group set (e.g., "Project Teams")
**canvas_create_group**: Create specific group within category
**canvas_assign_group_members**: Add students to groups

**Collaborative Learning Setup**:

**Jigsaw Activity Groups**:
```
# Step 1: Create expert group category
expert_category = canvas_create_group_category(
    course_id=12345,
    name="Chemical Bonds - Expert Groups",
    self_signup="enabled",  # Students choose expertise
    group_limit=5  # Max 5 per expert group
)

# Step 2: Create expert groups
for topic in ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds", "Hydrogen Bonds"]:
    canvas_create_group(
        group_category_id=expert_category['id'],
        name=f"{topic} Experts",
        description=f"Become experts on {topic} to teach home groups"
    )

# Step 3: Create home group category (teacher-assigned)
home_category = canvas_create_group_category(
    course_id=12345,
    name="Chemical Bonds - Home Groups",
    self_signup="disabled"
)

# Step 4: Assign diverse home groups (one expert from each topic)
# [Teacher assigns to ensure one expert per topic in each home group]

# Step 5: Create discussion topics per group type
canvas_create_discussion_topic(
    course_id=12345,
    title="Expert Groups: Deep Learning Phase",
    message="Master your bond type to teach others...",
    group_category_id=expert_category['id']
)

canvas_create_discussion_topic(
    title="Home Groups: Teaching & Learning Phase",
    message="Each expert teaches their bond type...",
    group_category_id=home_category['id']
)
```

**Differentiated Group Projects**:
```
# Create group category with flexible structure
project_category = canvas_create_group_category(
    course_id=12345,
    name="Ecosystem Project Teams",
    self_signup="restricted",  # Can join any open group
    group_limit=4,  # 3-4 students per group
    create_group_count=8  # Auto-create 8 empty groups
)

# Students self-select groups based on:
# - Interest (biome type)
# - Learning profile (visual, kinesthetic, etc.)
# - Social preferences
```

---

## Implementation Patterns

### Pattern 1: Complete Course Creation (Backward Design)

**Workflow**: Use with curriculum-architect agent

```
# Stage 1: Define desired results
outcomes = [
    canvas_create_outcome(...),  # For each learning objective
    canvas_create_outcome(...),
    # ...
]

# Stage 2: Design assessments
rubrics = [
    canvas_create_rubric(...),  # Performance task rubric
    canvas_create_rubric(...),  # Project rubric
]

assignments = [
    canvas_create_assignment(...),  # Performance tasks
    canvas_create_quiz(...),  # Formative assessments
    # ...
]

# Stage 3: Organize learning experiences
modules = []
for unit in scope_sequence:
    module = canvas_create_module(...)

    # Add items in Gagné sequence
    canvas_create_module_item(...)  # Attention getter
    canvas_create_module_item(...)  # Objectives
    canvas_create_module_item(...)  # Content
    canvas_create_module_item(...)  # Practice
    canvas_create_module_item(...)  # Assessment

    modules.append(module)

# Validate alignment
alignments = canvas_get_outcome_alignments(course_id=...)
# Ensure comprehensive coverage
```

---

### Pattern 2: UDL-Aligned Module Design

**Workflow**: Use with differentiation-expert agent

```
# Multiple Means of Engagement (WHY)
engagement_options = canvas_create_page(
    title="Unit Introduction - Choose Your Entry",
    body="""
    Choose how to explore the unit question:
    - Video: TED Talk on [topic]
    - Reading: Article from [source]
    - Simulation: Interactive [tool]
    - Real-world: Case study scenario
    """
)

# Multiple Means of Representation (WHAT)
content_formats = [
    canvas_create_page(...),  # Text with images
    canvas_create_module_item(...),  # Video with captions
    canvas_create_module_item(...),  # Interactive external tool
    canvas_create_page(...),  # Infographic summary
]

# Multiple Means of Action & Expression (HOW)
performance_task = canvas_create_assignment(
    description="""
    Demonstrate your understanding through ONE of these formats:
    1. Written essay (3-5 pages)
    2. Video presentation (8-10 minutes)
    3. Digital infographic with narration
    4. Podcast episode (10-15 minutes)

    All formats assessed via same rubric focusing on content mastery.
    """
)
```

---

### Pattern 3: Formative Assessment Cycle

**Workflow**: Use with assessment-specialist agent

```
# Pre-assessment
pre_test = canvas_create_quiz(
    title="Pre-Assessment: Prior Knowledge Check",
    quiz_type="survey",  # Ungraded
    description="Help me understand what you already know..."
)

# Analyze results to inform instruction
# [Agent analyzes pre-test data]

# Formative checkpoints throughout unit
checkpoints = [
    canvas_create_quiz(title="Quick Check Day 3", quiz_type="survey"),
    canvas_create_discussion_topic(title="Midpoint Reflection"),
    canvas_create_quiz(title="Exit Ticket Day 7", quiz_type="survey"),
]

# Adjust instruction based on checkpoint data
# [Agent identifies struggling students, modifies pacing]

# Summative assessment
summative = canvas_create_assignment(
    title="Unit Performance Task",
    rubric=standards_rubric
)

# Post-assessment reflection
canvas_create_discussion_topic(
    title="Learning Reflection",
    message="What did you learn? What challenged you? What questions remain?"
)
```

---

### Pattern 4: Standards-Based Reporting

**Workflow**: Outcome tracking and reporting

```
# Create outcomes for all standards
for standard in course_standards:
    canvas_create_outcome(
        title=standard['code'],
        description=standard['description'],
        vendor_guid=standard['code'],
        mastery_points=3,
        calculation_method="decaying_average"
    )

# Align every assignment to relevant outcomes
for assignment in assignments:
    # [Agent determines which outcomes assignment assesses]
    canvas_create_assignment(
        ...,
        outcome_alignment=[outcome_id_1, outcome_id_2, ...]
    )

# Monitor student progress
for student in students:
    progress = canvas_get_outcome_results(
        user_ids=[student.id]
    )

    # Identify students below mastery
    # Plan interventions
    # Communicate with students/parents

# Generate standards-based report cards
# [Canvas outcome reports provide mastery levels per standard]
```

---

## Best Practices

### 1. Start with Learning Objectives
Always create outcomes BEFORE building content or assessments. This ensures backward design alignment.

### 2. Use Rubrics Consistently
Create rubrics for all complex assignments. Attach rubrics when creating assignments for student transparency.

### 3. Implement Gradual Release
Structure modules following Gagné's events: model, guide, practice, assess.

### 4. Provide Multiple Pathways (UDL)
Offer content in varied formats and allow product choice where possible.

### 5. Give Timely Feedback
Use `canvas_add_submission_comment` for detailed, growth-oriented feedback within 48 hours.

### 6. Track Standards Mastery
Use outcomes aligned to standards codes for data-driven instruction and intervention.

### 7. Organize Logically
Use modules as units of study. Set prerequisites for sequential learning where appropriate.

### 8. Communicate Proactively
Weekly announcements, clear assignment instructions, transparent rubrics.

### 9. Design Accessible from Start
Alt text for images, captions for videos, clear navigation, multiple formats.

### 10. Validate Alignment
Use `canvas_get_outcome_alignments` to verify comprehensive standards coverage.

---

## Troubleshooting

### Common Issues

**Issue**: API authentication failure
**Solution**: Verify Canvas API token in environment variables. Run `canvas_health_check()` to test connection.

**Issue**: Course not found
**Solution**: Verify course_id is correct. Use `canvas_list_courses()` to see available courses.

**Issue**: Assignment not appearing in module
**Solution**: Check assignment `published` status. Unpublished items won't show to students even if added to module.

**Issue**: Rubric not attaching to assignment
**Solution**: Create rubric first, then reference rubric_id when creating assignment. Or update assignment with `canvas_update_assignment` to add rubric.

**Issue**: Outcomes not tracking properly
**Solution**: Ensure assignments are explicitly aligned to outcomes. Check outcome `calculation_method` is appropriate for your assessment approach.

**Issue**: Students can't see grades
**Solution**: Check posting policy with `canvas_get_posting_policy`. Use `canvas_post_assignment_grades` to release grades.

**Issue**: Module items out of order
**Solution**: Use `position` parameter when creating items. Or use `canvas_update_module_item` to reorder.

**Issue**: Quiz questions not saving
**Solution**: Create quiz first with `canvas_create_quiz`, then add questions with `canvas_create_quiz_question` using returned quiz_id.

### Getting Help

**Documentation**:
- **Canvas API Docs**: https://canvas.instructure.com/doc/api/
- **data/canvas-mcp-tools.md**: Complete tool parameter reference
- **educational-theory-guide.md**: Framework integration guidance

**BMAD Agents**:
- **curriculum-architect**: Course structure and outcomes
- **assessment-specialist**: Rubrics and grading
- **instructional-designer**: Module and content organization
- **edtech-integrator**: Canvas technical implementation

**Support Channels**:
- Review error messages for specific parameter issues
- Check Canvas API status page for service issues
- Consult agent with `*help` command for tool guidance

---

## Related Resources

### Documentation
- **educational-theory-guide.md**: Framework integration depth
- **workflow-guide.md**: Complete workflows using these tools
- **quick-start-guide.md**: Step-by-step first course creation
- **best-practices.md**: Educational design quality standards

### Data Files
- **canvas-mcp-tools.md**: Detailed tool reference with all parameters
- **canvas-best-practices.md**: Canvas course design principles
- **blooms-taxonomy.md, webbs-dok.md**: Alignment frameworks

### Workflows
All workflows leverage Canvas MCP tools for implementation. See **workflow-guide.md** for complete sequences.

---

## Conclusion

The Canvas MCP toolkit provides 95+ tools for implementing research-based curriculum through Canvas LMS. When combined with BMAD agents and educational frameworks, these tools enable:

- **Automated course creation** aligned to Backward Design
- **Standards-based tracking** through outcomes
- **UDL-compliant** content and assessments
- **Efficient grading** with rubrics and feedback
- **Data-driven instruction** through outcome analytics

Master these tools through the BMAD workflows to transform educational theory into practical, scalable Canvas implementations.

**Next Steps**:
1. Complete **quick-start-guide.md** to create first agent-designed course
2. Review **workflow-guide.md** for systematic implementation
3. Study **best-practices.md** for quality assurance
4. Explore agent capabilities for automated design workflows

Build courses that matter. Deploy learning at scale.
