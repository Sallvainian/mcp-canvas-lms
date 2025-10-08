# Implement Canvas Course Task

## Purpose
Execute complete Canvas course implementation from design to launch, integrating all educational design frameworks (UbD, UDL, Bloom's/DOK, Gagne's Events) while ensuring accessibility, usability, and pedagogical quality throughout the course structure.

## Prerequisites
- Course design completed (backward design, curriculum map, scope & sequence)
- Learning objectives defined (see `create-learning-objectives.md`)
- Assessments designed (see `create-assessment.md`)
- Lesson plans developed (see `design-lesson-plan.md`)
- UDL principles applied (see `apply-udl.md`)
- Differentiation strategies planned (see `differentiate-content.md`)
- Content materials prepared (readings, videos, activities)
- Access to Canvas course with instructor permissions
- Canvas MCP tools configured

## Step-by-Step Process

### Step 1: Course Foundation Setup
**Actions:**

**1.1 Configure Course Settings**
```yaml
Essential Settings:
  Course Name: Clear, descriptive title
  Course Code: Institution standard
  Time Zone: Match learner location
  License: Copyright/Creative Commons
  Visibility: Published/Unpublished status
  Format: On-campus, Online, Blended
  Self-Enrollment: Enable/Disable
```

**1.2 Set Course-Level Policies**
```yaml
Grading Policies:
  Grading Scheme: Points, Percentages, or Letter Grades
  Late Policy: Deductions, deadlines, grace periods
  Dropped Assignments: Lowest scores to drop
  Grade Posting: Manual or Automatic

Participation Policies:
  Discussion Requirements: Frequency, quality expectations
  Attendance: Tracking method (if applicable)
  Collaboration: Guidelines for group work

Accessibility Policies:
  Accommodations: How to request
  Accessibility Statement: Commitment and contact
  Technology Requirements: Minimum specs, support
```

**1.3 Establish Course Communication**
```yaml
Communication Channels:
  Announcements: Weekly updates, important info
  Discussions: Course-wide, module-specific
  Messages: Private instructor communication
  Office Hours: Virtual and/or in-person

Response Time Expectations:
  Email/Messages: Within 24-48 hours
  Discussion Posts: Within 48 hours
  Assignment Feedback: Within 7 days
```

**Canvas Integration:**
```bash
# Update course settings
canvas_update_course(
  course_id=12345,
  name="Introduction to Educational Psychology",
  course_code="EDUC 2100-001",
  time_zone="America/New_York",
  default_view="modules",
  is_public=False,
  license="private",
  allow_student_forum_attachments=True,
  public_syllabus=False
)

# Create welcome announcement
canvas_create_announcement(
  course_id=12345,
  title="Welcome to EDUC 2100!",
  message="<h2>Welcome!</h2>
           <p>I'm excited to begin this learning journey...</p>
           <h3>Getting Started</h3>
           <ul>
             <li>Review the syllabus in the Syllabus page</li>
             <li>Complete the Getting Started module</li>
             <li>Introduce yourself in the discussion</li>
           </ul>",
  published=True
)
```

**Tools/Resources:**
- Institution course setup guidelines
- Canvas course template (if available)
- Course design documentation from previous tasks

**Expected Outcome:**
Configured course foundation with clear policies and communication channels

### Step 2: Build Course Navigation Structure
**Actions:**

**2.1 Design Module Architecture**
Based on scope & sequence and curriculum map:

```yaml
Module Structure Pattern:
  Welcome/Getting Started Module:
    - Syllabus
    - Course policies
    - Technology orientation
    - Introductions
    - Pre-assessment

  Content Modules (Numbered):
    Module 1: [Topic Name]
    Module 2: [Topic Name]
    ...
    [Follow scope & sequence order]

  Resource Modules:
    - Learning Resources
    - Assignment Guidelines
    - Rubrics and Exemplars
    - FAQ and Help

  Assessment Modules:
    - Major Assessments/Exams
    - Final Project
    - Reflection and Evaluation
```

**2.2 Consistent Module Pattern**
Establish predictable structure for all content modules:

```yaml
Standard Module Organization:
  1. Overview and Objectives
     - Module overview page
     - Learning objectives
     - Essential questions
     - Module timeline

  2. Pre-Assessment/Activation
     - Entry ticket or survey
     - Prior knowledge check
     - Connection to previous learning

  3. Content and Learning Activities
     - Reading materials
     - Video lectures
     - Interactive activities
     - Practice exercises

  4. Formative Assessment
     - Self-check quizzes
     - Discussion participation
     - Practice assignments

  5. Summative Assessment
     - Major assignment/project
     - Quiz or exam
     - Rubric and exemplars

  6. Reflection and Extension
     - Reflection activity
     - Extension resources
     - Connection to next module
```

**2.3 Enable Module Prerequisites (if needed)**
```yaml
Prerequisites Strategy:
  Linear Progression:
    - Complete Module 1 before Module 2
    - Sequential unlocking
    - Mastery required

  Flexible Progression:
    - Modules available from start
    - Suggested sequence
    - Self-paced options

  Hybrid:
    - Core modules sequential
    - Extension modules available anytime
    - Required vs. optional paths
```

**Canvas Integration:**
```bash
# Create modules in sequence
canvas_create_module(
  course_id=12345,
  name="Welcome and Getting Started",
  position=1,
  publish_final_grade=False,
  require_sequential_progress=False
)

canvas_create_module(
  course_id=12345,
  name="Module 1: Foundations of Learning Theory",
  position=2,
  unlock_at="2024-08-26T00:00:00Z",
  require_sequential_progress=True,
  prerequisite_module_ids=[module_0_id]
)

# Update module with prerequisites
canvas_update_module(
  course_id=12345,
  module_id=67890,
  published=True,
  require_sequential_progress=True,
  prerequisite_module_ids=[previous_module_id]
)
```

**Tools/Resources:**
- `templates/scope-sequence-tmpl.yaml` - Module sequence
- `templates/curriculum-map-tmpl.yaml` - Content organization
- Institution module naming conventions

**Expected Outcome:**
Logical, predictable module structure aligned with curriculum design

### Step 3: Create Course Home and Syllabus
**Actions:**

**3.1 Design Course Home Page**
```yaml
Home Page Elements:
  Welcome Section:
    - Course title and instructor
    - Welcome message
    - Course image/banner

  Quick Links:
    - Syllabus
    - Course schedule
    - Assignment calendar
    - Grades
    - Important resources

  Getting Started:
    - First steps checklist
    - Technology requirements
    - How to navigate course
    - Support resources

  Communication:
    - Recent announcements
    - Discussion highlights
    - Office hours information
```

**3.2 Build Comprehensive Syllabus**
```yaml
Syllabus Sections:
  Course Information:
    - Title, code, credits, semester
    - Instructor contact and office hours
    - Course description
    - Prerequisites

  Learning Objectives:
    - Course-level objectives
    - Program/competency alignment
    - Student learning outcomes

  Course Materials:
    - Required textbooks/resources
    - Technology requirements
    - Additional materials
    - Cost information

  Assessment and Grading:
    - Grading breakdown (assignment groups)
    - Grading scale
    - Late policy
    - Academic integrity policy

  Course Schedule:
    - Weekly/module outline
    - Key dates and deadlines
    - Exam schedule

  Policies:
    - Attendance (if applicable)
    - Participation expectations
    - Accessibility statement
    - Institutional policies

  Support Resources:
    - Academic support services
    - Technical support
    - Accessibility services
    - Counseling/wellness resources
```

**Canvas Integration:**
```bash
# Update syllabus
canvas_update_course(
  course_id=12345,
  syllabus_body="<h1>EDUC 2100: Introduction to Educational Psychology</h1>
                 <h2>Course Information</h2>
                 <p><strong>Instructor:</strong> Dr. Jane Smith</p>
                 <p><strong>Email:</strong> jane.smith@university.edu</p>
                 <p><strong>Office Hours:</strong> Tuesdays 2-4pm via Zoom</p>

                 <h2>Course Description</h2>
                 <p>This course examines psychological principles...</p>

                 <h2>Learning Objectives</h2>
                 <p>By the end of this course, you will be able to:</p>
                 <ul>
                   <li>Analyze major learning theories...</li>
                   <li>Apply psychological principles to educational settings...</li>
                   <li>Evaluate research on learning and development...</li>
                 </ul>

                 [... complete syllabus content ...]",
  public_syllabus=False
)

# Create home page
canvas_create_page(
  course_id=12345,
  title="Course Home",
  body="<div style='text-align: center;'>
          <h1>Welcome to EDUC 2100!</h1>
          <img src='[course_banner.jpg]' alt='Educational Psychology Course Banner' />
        </div>

        <h2>Quick Links</h2>
        <ul>
          <li><a href='/courses/12345/assignments/syllabus'>Syllabus</a></li>
          <li><a href='/courses/12345/modules'>Course Modules</a></li>
          <li><a href='/courses/12345/grades'>My Grades</a></li>
        </ul>

        <h2>Getting Started</h2>
        <ol>
          <li>Review the syllabus</li>
          <li>Complete technology check</li>
          <li>Introduce yourself in Discussion</li>
          <li>Begin Module 1</li>
        </ol>",
  published=True,
  front_page=True
)
```

**Tools/Resources:**
- Institution syllabus template
- Accessibility checklist for syllabus
- Course schedule from scope & sequence

**Expected Outcome:**
Professional, comprehensive course home and syllabus pages

### Step 4: Populate Content Pages and Materials
**Actions:**

**4.1 Create Module Overview Pages**
For each content module:

```yaml
Module Overview Page Template:
  Title: "Module X: [Topic Name] - Overview"

  Content Sections:
    Introduction:
      - Module description
      - Connection to previous learning
      - Relevance and motivation

    Learning Objectives:
      - Numbered list of objectives
      - Aligned with Bloom's/DOK levels
      - Student-friendly "I can" statements

    Essential Questions:
      - 2-4 guiding questions
      - Promote inquiry and thinking
      - Connect to big ideas

    Timeline and Schedule:
      - Suggested pacing
      - Key deadlines
      - Time estimates for activities

    Required Materials:
      - Readings with page numbers
      - Videos with timestamps
      - Additional resources

    Assessment Overview:
      - What will be assessed
      - How it will be assessed
      - Grading criteria summary
```

**4.2 Build Content Pages with UDL**
Apply multiple means of representation:

```yaml
Content Page Best Practices:
  Structure:
    - Clear headings (H2, H3 hierarchy)
    - Short paragraphs (3-5 sentences)
    - Bullet points for lists
    - Visual white space

  Accessibility:
    - Alt text for all images
    - Captions for videos
    - Transcripts for audio
    - Descriptive link text (not "click here")
    - Sufficient color contrast

  Multimedia Integration:
    - Text explanations
    - Embedded videos (captioned)
    - Images and diagrams (alt text)
    - Interactive elements (H5P, etc.)
    - Audio options (with transcripts)

  Navigation:
    - "Previous/Next" links
    - Table of contents for long pages
    - Back to module link
    - Breadcrumb trail
```

**4.3 Upload and Organize Files**
```yaml
File Organization Strategy:
  Folder Structure:
    - Syllabus and Policies
    - Module 1 Materials
    - Module 2 Materials
    - [etc.]
    - Assessment Resources
    - Optional/Extension Resources

  File Naming Convention:
    - Descriptive names
    - Module number prefix
    - Version/date if applicable
    - Examples:
      * M1_Reading_LearningTheories.pdf
      * M2_ActivityWorksheet_Cognition.docx
      * RubricTemplate_ResearchPaper.pdf

  Accessibility:
    - PDF accessibility check
    - OCR for scanned documents
    - Alternative formats (Word, HTML)
```

**Canvas Integration:**
```bash
# Create module overview page
canvas_create_page(
  course_id=12345,
  title="Module 1: Foundations of Learning Theory - Overview",
  body="<h2>Welcome to Module 1!</h2>

        <h3>Module Description</h3>
        <p>In this module, we will explore the major learning theories...</p>

        <h3>Learning Objectives</h3>
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Compare and contrast behaviorist and cognitive learning theories</li>
          <li>Apply learning theory principles to classroom scenarios</li>
          <li>Evaluate the effectiveness of different instructional approaches</li>
        </ul>

        <h3>Essential Questions</h3>
        <ul>
          <li>How do people learn?</li>
          <li>What role does the environment play in learning?</li>
          <li>How can teachers optimize learning experiences?</li>
        </ul>

        <h3>This Module</h3>
        <p><strong>Estimated Time:</strong> 4-6 hours</p>
        <p><strong>Deadline:</strong> Sunday, September 3 at 11:59pm</p>

        <h3>Materials Needed</h3>
        <ul>
          <li>Textbook Chapter 2 (pages 45-78)</li>
          <li>Video: Overview of Learning Theories (15 min)</li>
          <li>Article: Applying Theory to Practice (provided)</li>
        </ul>",
  published=True
)

# Add page to module
canvas_create_module_item(
  course_id=12345,
  module_id=67890,
  title="Module 1 Overview",
  type="Page",
  page_url="module-1-overview",
  position=1,
  indent=0
)

# Create content page with video
canvas_create_page(
  course_id=12345,
  title="Behaviorist Learning Theory",
  body="<h2>Behaviorism: Learning Through Environment</h2>

        <p>Behaviorism focuses on observable behaviors and the environmental
        factors that shape them...</p>

        <h3>Video: Introduction to Behaviorism (12 minutes)</h3>
        <iframe src='https://www.youtube.com/embed/VIDEO_ID'
                width='560' height='315'
                title='Introduction to Behaviorism'
                allowfullscreen></iframe>
        <p><a href='[transcript_link]'>Video Transcript</a></p>

        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Classical Conditioning:</strong> Learning through association...</li>
          <li><strong>Operant Conditioning:</strong> Learning through consequences...</li>
        </ul>

        <h3>Application Activity</h3>
        <p>Think about a time when you learned something through...</p>

        <p><a href='[next_page]'>Next: Cognitive Learning Theory &rarr;</a></p>",
  published=True
)

# Upload files to organized folders
canvas_list_files(course_id=12345) # Check existing structure
# Upload files via Canvas UI or API
# Organize into folders as planned
```

**Tools/Resources:**
- `checklists/canvas-accessibility.yaml` - Content accessibility
- `checklists/wcag-accessibility.yaml` - WCAG compliance
- WAVE tool for accessibility testing
- Canvas Rich Content Editor

**Expected Outcome:**
Complete, accessible content pages for all modules

### Step 5: Build Assignments and Assessments
**Actions:**

**5.1 Create Assignment Groups**
Organize by assessment type and weight:

```yaml
Assignment Groups Structure:
  Participation (15%):
    - Discussion posts
    - In-class activities
    - Attendance/engagement

  Formative Assessments (20%):
    - Self-check quizzes
    - Practice assignments
    - Reflection journals

  Application Assignments (35%):
    - Case study analyses
    - Projects
    - Performance tasks

  Summative Assessments (30%):
    - Unit exams
    - Midterm
    - Final project

  Extra Credit (Optional):
    - Extension activities
    - Optional projects
```

**5.2 Create Individual Assignments**
For each assessment from assessment plan:

```yaml
Assignment Creation Checklist:
  Basic Information:
    - [ ] Clear, descriptive title
    - [ ] Assignment group assigned
    - [ ] Points value set
    - [ ] Due date and time
    - [ ] Available from date (if applicable)
    - [ ] Until date (if applicable)

  Instructions:
    - [ ] Clear description of task
    - [ ] Connection to learning objectives stated
    - [ ] Step-by-step instructions
    - [ ] Examples or models provided
    - [ ] Resources and materials listed
    - [ ] Format/submission requirements clear

  Submission Settings:
    - [ ] Submission type (text, file, URL, media, etc.)
    - [ ] File type restrictions (if any)
    - [ ] Allowed attempts (single or multiple)
    - [ ] Plagiarism detection (if applicable)

  Grading:
    - [ ] Grading type (points, letter, pass/fail)
    - [ ] Rubric attached
    - [ ] Anonymous grading (if applicable)
    - [ ] Peer review enabled (if applicable)

  Accessibility:
    - [ ] Instructions written clearly
    - [ ] Alternative formats offered
    - [ ] Accommodations noted
    - [ ] Time estimates provided
```

**5.3 Attach Rubrics**
For all major assignments:

```yaml
Rubric Implementation:
  - Import rubric from design phase
  - Align criteria to learning objectives
  - Clear performance level descriptions
  - Point values assigned
  - Link to assignment
  - Share with students in advance
```

**Canvas Integration:**
```bash
# Create assignment groups
canvas_create_assignment_group(
  course_id=12345,
  name="Participation",
  group_weight=15,
  position=1
)

canvas_create_assignment_group(
  course_id=12345,
  name="Application Assignments",
  group_weight=35,
  position=3
)

# Enable weighted assignment groups
canvas_update_course(
  course_id=12345,
  apply_assignment_group_weights=True
)

# Create assignment
canvas_create_assignment(
  course_id=12345,
  name="Case Study Analysis: Learning Theory Application",
  description="<h3>Purpose</h3>
               <p>This assignment allows you to apply learning theories...</p>

               <h3>Learning Objectives</h3>
               <ul>
                 <li>Analyze real-world scenarios using learning theory...</li>
                 <li>Evaluate the effectiveness of instructional strategies...</li>
               </ul>

               <h3>Instructions</h3>
               <ol>
                 <li>Read the case study provided...</li>
                 <li>Identify which learning theory best explains...</li>
                 <li>Write a 2-3 page analysis...</li>
                 <li>Submit as PDF or Word document</li>
               </ol>

               <h3>Resources</h3>
               <ul>
                 <li><a href='[case_study.pdf]'>Case Study Document</a></li>
                 <li><a href='[rubric]'>Grading Rubric</a></li>
                 <li><a href='[example]'>Sample Analysis (Example)</a></li>
               </ul>

               <p><strong>Questions?</strong> Post in the Module 1 Discussion forum.</p>",
  points_possible=100,
  due_at="2024-09-10T23:59:00Z",
  submission_types=["online_upload"],
  allowed_extensions=["pdf", "doc", "docx"],
  published=True
)

# Create and attach rubric
canvas_create_rubric(
  course_id=12345,
  title="Case Study Analysis Rubric",
  criteria=[
    {
      "description": "Theory Application",
      "points": 30,
      "ratings": [
        {"description": "Exemplary: Sophisticated application with nuanced understanding", "points": 30},
        {"description": "Proficient: Accurate application with clear explanation", "points": 24},
        {"description": "Developing: Basic application with some gaps", "points": 18},
        {"description": "Beginning: Minimal or inaccurate application", "points": 10}
      ]
    },
    # ... additional criteria
  ]
)

# Link rubric to assignment
# (Done through rubric creation with assignment association)
```

**Tools/Resources:**
- `templates/assessment-plan-tmpl.yaml` - Assessment designs
- `templates/rubric-tmpl.yaml` - Rubric structures
- `checklists/assessment-validity.yaml` - Quality validation

**Expected Outcome:**
Complete assessment system with clear instructions and rubrics

### Step 6: Set Up Quizzes and Exams
**Actions:**

**6.1 Create Quiz Question Banks**
Organize questions by module/topic:

```yaml
Question Bank Organization:
  Module 1 Questions:
    - Bloom's Remember level (10 questions)
    - Bloom's Understand level (10 questions)
    - Bloom's Apply level (8 questions)
    - Bloom's Analyze level (5 questions)

  Module 2 Questions:
    [Same pattern]

  Final Exam Bank:
    - Comprehensive questions across modules
    - Varied cognitive levels
    - Different question types
```

**6.2 Build Quizzes**
```yaml
Quiz Configuration:
  Settings:
    - Quiz type (Practice, Graded, Survey)
    - Point value
    - Time limit (if applicable)
    - Allowed attempts (1 or multiple)
    - Show correct answers (when/if)
    - One question at a time (optional)
    - Can't go back (optional)
    - Shuffle answers (recommended)
    - Access code (for proctored exams)

  Question Types Mix:
    - Multiple choice (fact recall, concept understanding)
    - True/False (misconception checking)
    - Matching (vocabulary, relationships)
    - Fill in the blank (key terms)
    - Essay (deeper analysis, application)
    - File upload (problem-solving work)

  Accessibility:
    - Extended time option for accommodations
    - Screen reader compatible questions
    - Alt text for images
    - No color-only information
```

**Canvas Integration:**
```bash
# Create quiz
canvas_create_quiz(
  course_id=12345,
  title="Module 1: Learning Theories Quiz",
  description="<p>This quiz assesses your understanding of the major learning theories...</p>
               <p><strong>Format:</strong> 20 questions (15 multiple choice, 5 short answer)</p>
               <p><strong>Time Limit:</strong> 45 minutes</p>
               <p><strong>Attempts:</strong> 2 attempts allowed (highest score counts)</p>
               <p><strong>Resources:</strong> Closed book (no notes or textbook)</p>",
  quiz_type="assignment",
  time_limit=45,
  allowed_attempts=2,
  scoring_policy="keep_highest",
  shuffle_answers=True,
  show_correct_answers=True,
  show_correct_answers_at="2024-09-11T00:00:00Z",
  hide_correct_answers_at="2024-09-18T23:59:00Z",
  due_at="2024-09-10T23:59:00Z",
  published=False  # Publish after review
)

# Create questions
canvas_create_quiz_question(
  course_id=12345,
  quiz_id=11111,
  question_name="Classical Conditioning Definition",
  question_text="What is classical conditioning?",
  question_type="multiple_choice",
  points_possible=2,
  answers=[
    {"text": "Learning through association of stimuli", "weight": 100, "comments": "Correct! Classical conditioning involves..."},
    {"text": "Learning through consequences", "weight": 0, "comments": "This describes operant conditioning"},
    {"text": "Learning through observation", "weight": 0, "comments": "This describes social learning theory"},
    {"text": "Learning through discovery", "weight": 0, "comments": "This describes inquiry-based learning"}
  ]
)

# Create short answer question
canvas_create_quiz_question(
  course_id=12345,
  quiz_id=11111,
  question_name="Behaviorism Application",
  question_text="Describe a classroom scenario where a teacher could use operant conditioning
                 principles to increase student participation. Include at least one example of
                 reinforcement and one example of punishment. (3-5 sentences)",
  question_type="essay_question",
  points_possible=5
)
```

**Tools/Resources:**
- Question bank templates
- Quiz accessibility guidelines
- Bloom's taxonomy question stems

**Expected Outcome:**
Comprehensive quizzes with varied question types and accessibility features

### Step 7: Create Discussions
**Actions:**

**7.1 Design Discussion Prompts**
```yaml
Discussion Types:
  Introduction Discussion:
    - Student introductions
    - Icebreaker questions
    - Community building

  Content Discussions:
    - Application of concepts
    - Analysis of scenarios
    - Peer learning
    - Debate/perspective-taking

  Reflection Discussions:
    - Learning process reflection
    - Metacognitive prompts
    - Connection-making

  Collaborative Discussions:
    - Group problem-solving
    - Peer feedback
    - Knowledge construction
```

**7.2 Set Discussion Guidelines**
```yaml
Discussion Rubric Elements:
  Initial Post (60%):
    - Addresses prompt thoroughly
    - Demonstrates understanding
    - Provides evidence/examples
    - Meets length requirement
    - Posted by deadline

  Responses to Peers (30%):
    - Responds to at least 2 peers
    - Adds substantive contribution
    - Respectful and constructive
    - Promotes further discussion

  Quality and Professionalism (10%):
    - Clear writing
    - Professional tone
    - Proper citations (if needed)
    - No grammatical errors
```

**Canvas Integration:**
```bash
# Create discussion topic
canvas_create_discussion_topic(
  course_id=12345,
  title="Module 1 Discussion: Learning Theory in Practice",
  message="<h3>Discussion Prompt</h3>
           <p>Think about a time when you learned something successfully.
           Analyze your learning experience using one of the learning theories
           we studied this week (behaviorism, cognitivism, or constructivism).</p>

           <h3>Instructions</h3>
           <ol>
             <li><strong>Initial Post (Due Wednesday):</strong>
               <ul>
                 <li>Describe your learning experience (1 paragraph)</li>
                 <li>Identify which theory best explains your learning (1 paragraph)</li>
                 <li>Explain WHY this theory applies, using specific concepts (1-2 paragraphs)</li>
                 <li>Total length: 250-300 words</li>
               </ul>
             </li>
             <li><strong>Peer Responses (Due Sunday):</strong>
               <ul>
                 <li>Respond to at least 2 classmates</li>
                 <li>Ask a question, add a perspective, or respectfully challenge their analysis</li>
                 <li>Each response: 75-100 words</li>
               </ul>
             </li>
           </ol>

           <h3>Grading</h3>
           <p>See the <a href='[rubric_link]'>Discussion Rubric</a> for detailed criteria.
           This discussion is worth 20 points.</p>

           <h3>Tips for Success</h3>
           <ul>
             <li>Use specific terms from the readings</li>
             <li>Provide concrete examples</li>
             <li>Engage thoughtfully with peers</li>
             <li>Proofread before posting</li>
           </ul>",
  discussion_type="threaded",
  published=True
)

# Add discussion to module
canvas_create_module_item(
  course_id=12345,
  module_id=67890,
  title="Discussion: Learning Theory in Practice",
  type="Discussion",
  content_id=discussion_topic_id,
  position=5
)
```

**Tools/Resources:**
- Discussion rubric templates
- Community guidelines
- Facilitation strategies

**Expected Outcome:**
Engaging, well-structured discussions promoting active learning

### Step 8: Implement Accessibility and UDL Features
**Actions:**

**8.1 Accessibility Audit**
Run comprehensive accessibility check:

```yaml
Accessibility Checklist:
  Content:
    - [ ] All images have alt text
    - [ ] All videos have captions
    - [ ] All audio has transcripts
    - [ ] Color is not sole information carrier
    - [ ] Sufficient color contrast (4.5:1 minimum)
    - [ ] Headings used properly (H1, H2, H3)
    - [ ] Lists use proper HTML (ul, ol)
    - [ ] Tables have headers and captions

  Documents:
    - [ ] PDFs are accessible (OCR'd, tagged)
    - [ ] Word docs use styles, not manual formatting
    - [ ] Alternative formats available (HTML, plain text)

  Navigation:
    - [ ] Keyboard navigable
    - [ ] Screen reader compatible
    - [ ] Descriptive link text (no "click here")
    - [ ] Logical tab order
    - [ ] Skip navigation links

  Media:
    - [ ] YouTube videos captioned
    - [ ] Media player keyboard accessible
    - [ ] Transcripts provided
    - [ ] Audio descriptions for visual-only content

  Interaction:
    - [ ] Forms have labels
    - [ ] Error messages are clear
    - [ ] Time limits can be extended
    - [ ] Flashing content avoided
```

**8.2 UDL Implementation Validation**
```yaml
Multiple Means of Engagement:
  - [ ] Learner choice in topics/approaches
  - [ ] Relevance and authenticity
  - [ ] Varied difficulty levels
  - [ ] Collaboration options
  - [ ] Progress tracking

Multiple Means of Representation:
  - [ ] Text, visual, audio formats
  - [ ] Varied complexity levels
  - [ ] Vocabulary support
  - [ ] Comprehension scaffolds
  - [ ] Multiple examples

Multiple Means of Action/Expression:
  - [ ] Multiple demonstration options
  - [ ] Varied assessment methods
  - [ ] Tool choices
  - [ ] Scaffolded support
  - [ ] Flexible pacing
```

**Canvas Integration:**
```bash
# Enable Canvas accessibility features
# (Most are automatic, but verify settings)

# Check accessibility with built-in tool
# Canvas Accessibility Checker (in Rich Content Editor)

# Test with screen reader
# Use NVDA (free) or JAWS to test navigation

# Validate with external tools
# WAVE browser extension
# Colour Contrast Analyser
```

**Tools/Resources:**
- `checklists/canvas-accessibility.yaml` - Canvas-specific checks
- `checklists/wcag-accessibility.yaml` - WCAG 2.1 standards
- `checklists/udl-checklist.yaml` - UDL validation
- WAVE accessibility tool
- Color contrast checker

**Expected Outcome:**
Fully accessible, UDL-compliant course

### Step 9: Test and Quality Assurance
**Actions:**

**9.1 Instructor Self-Review**
```yaml
Course Review Checklist:
  Navigation and Organization:
    - [ ] Modules in logical order
    - [ ] Consistent module structure
    - [ ] Clear labeling throughout
    - [ ] Working links (no broken links)
    - [ ] Files properly organized

  Content Quality:
    - [ ] All content pages complete
    - [ ] Accurate information
    - [ ] Clear writing
    - [ ] Appropriate difficulty level
    - [ ] Engaging presentation

  Assessments:
    - [ ] All assignments created
    - [ ] Clear instructions
    - [ ] Rubrics attached
    - [ ] Reasonable workload
    - [ ] Aligned to objectives

  Communication:
    - [ ] Syllabus complete
    - [ ] Policies clear
    - [ ] Contact info correct
    - [ ] Response times stated
    - [ ] Support resources listed

  Accessibility:
    - [ ] Accessibility audit passed
    - [ ] Alternative formats available
    - [ ] UDL principles applied
    - [ ] Accommodations noted
```

**9.2 Student Preview Mode**
Test course as a student:

```bash
# Use Canvas "Student View" feature
# Navigate through each module
# Attempt to complete assignments
# Check for confusion points
# Verify all links work
# Test on mobile device
```

**9.3 Peer Review**
Ask colleague to review:

```yaml
Peer Reviewer Questions:
  - Is the course easy to navigate?
  - Are instructions clear?
  - Is workload reasonable?
  - Are assessments fair?
  - Are accessibility features present?
  - What's confusing or unclear?
  - What works particularly well?
  - Any suggestions for improvement?
```

**9.4 Pilot Testing (if possible)**
```yaml
Pilot Test Options:
  Small Group:
    - 5-10 volunteer students
    - Complete first 2 modules
    - Provide detailed feedback
    - Revise before full launch

  Soft Launch:
    - First week only
    - Gather feedback
    - Make adjustments
    - Full launch week 2

  Previous Cohort:
    - Alumni volunteers
    - Navigate and review
    - Provide expert feedback
```

**Tools/Resources:**
- `checklists/canvas-course-design.yaml` - Course quality
- Peer review protocols
- Student feedback surveys

**Expected Outcome:**
Quality-assured course ready for launch

### Step 10: Publish and Launch Course
**Actions:**

**10.1 Pre-Launch Final Checks**
```yaml
Launch Day Checklist:
  Content:
    - [ ] All pages published
    - [ ] All modules published
    - [ ] Week 1 content complete and tested
    - [ ] Future content scheduled appropriately

  Assessments:
    - [ ] Week 1 assignments published
    - [ ] Due dates set correctly
    - [ ] Rubrics attached
    - [ ] Quiz settings verified

  Communication:
    - [ ] Welcome announcement ready
    - [ ] Syllabus published
    - [ ] Office hours scheduled
    - [ ] Communication channels active

  Settings:
    - [ ] Course published (visible to students)
    - [ ] Correct start/end dates
    - [ ] Grade posting policy set
    - [ ] Student permissions appropriate
```

**10.2 Publish Course**
```bash
# Publish course
canvas_update_course(
  course_id=12345,
  published=True
)

# Publish modules (Week 1)
canvas_update_module(
  course_id=12345,
  module_id=welcome_module_id,
  published=True
)

canvas_update_module(
  course_id=12345,
  module_id=module_1_id,
  published=True
)

# Send welcome announcement
canvas_create_announcement(
  course_id=12345,
  title="Course is Live - Let's Get Started!",
  message="<h2>Welcome to EDUC 2100!</h2>
           <p>The course is now officially open and ready for you to explore...</p>

           <h3>Your First Steps</h3>
           <ol>
             <li>Read the <strong>Syllabus</strong></li>
             <li>Review the <strong>Getting Started</strong> module</li>
             <li>Post your introduction in the <strong>Introductions Discussion</strong></li>
             <li>Begin <strong>Module 1</strong> content</li>
           </ol>

           <h3>Important Dates This Week</h3>
           <ul>
             <li>Wednesday: Introduction post due</li>
             <li>Friday: Technology check quiz due</li>
             <li>Sunday: Module 1 discussion initial post due</li>
           </ul>

           <p>I'm excited to begin this learning journey with you!</p>
           <p>Dr. Smith</p>",
  published=True
)
```

**10.3 Monitor Initial Launch**
```yaml
First Week Monitoring:
  Daily Tasks:
    - Check for student questions
    - Monitor discussion participation
    - Review quiz attempts (spot issues)
    - Check submission rates
    - Respond to concerns quickly

  Analytics to Watch:
    - Login rates
    - Page view patterns
    - Assignment completion
    - Discussion activity
    - Time spent in course

  Common Issues:
    - Access problems
    - Confusion about navigation
    - Technical difficulties
    - Unclear instructions
    - Deadline questions
```

**10.4 Gather Early Feedback**
```yaml
Week 1 Feedback:
  Informal:
    - Respond to questions in discussions
    - Note repeated confusion points
    - Monitor office hours questions

  Formal:
    - End of week 1 survey
    - "How's it going?" discussion
    - Quick pulse check quiz
```

**Canvas Integration:**
```bash
# Create Week 1 feedback survey
canvas_create_quiz(
  course_id=12345,
  title="Week 1 Feedback Survey (Optional)",
  quiz_type="survey",
  description="Help me improve the course! Quick 5-question survey about your experience so far.",
  published=True
)

# Use Canvas Analytics
# Access: Course → People → Analytics
# Review: Page Views, Participation, Assignments

# Monitor notifications
# Check: Inbox, Announcement replies, Discussion posts
```

**Expected Outcome:**
Successful course launch with active monitoring and responsiveness

### Step 11: Ongoing Course Management
**Actions:**

**11.1 Weekly Course Maintenance**
```yaml
Weekly Tasks:
  Content:
    - Publish next week's module
    - Review and update announcements
    - Check for broken links
    - Update based on feedback

  Assessment:
    - Grade submitted work (within 7 days)
    - Provide feedback on assignments
    - Monitor quiz analytics
    - Adjust assessments if needed

  Communication:
    - Send weekly announcement
    - Respond to messages (24-48 hours)
    - Facilitate discussions
    - Hold office hours

  Monitoring:
    - Check Canvas analytics
    - Identify struggling students
    - Reach out proactively
    - Adjust teaching as needed
```

**11.2 Mid-Semester Course Evaluation**
```yaml
Mid-Course Check:
  Quantitative Data:
    - Grade distribution analysis
    - Assignment completion rates
    - Discussion participation patterns
    - Time-on-task data

  Qualitative Feedback:
    - Student survey (what's working/not)
    - Focus group discussion
    - Anonymous feedback form
    - Office hours conversations

  Adjustments:
    - Revise unclear assignments
    - Adjust pacing if needed
    - Add support resources
    - Modify assessments
    - Update instructions
```

**11.3 End-of-Semester Wrap-Up**
```yaml
Course Closure:
  Final Week:
    - Complete all grading
    - Provide comprehensive feedback
    - Post final grades
    - Send closure announcement

  Course Evaluation:
    - Analyze institutional course evals
    - Review your own assessment data
    - Note successes and challenges
    - Document improvements for next semester

  Archival:
    - Export gradebook
    - Save exemplar student work
    - Archive valuable discussions
    - Back up course materials

  Reflection:
    - What worked well?
    - What needs improvement?
    - What will you change?
    - What resources are needed?
```

**Canvas Integration:**
```bash
# Export gradebook
canvas_export_gradebook_csv(
  course_id=12345,
  include_comments=True
)

# End-of-course announcement
canvas_create_announcement(
  course_id=12345,
  title="Thank You and Course Wrap-Up",
  message="<h2>Congratulations on Completing EDUC 2100!</h2>
           <p>Thank you for your engagement and hard work this semester...</p>

           <h3>Final Grades</h3>
           <p>Final grades will be posted by [date]. You can view them in Canvas Grades.</p>

           <h3>Course Materials</h3>
           <p>Course content will remain available until [date] for your review.</p>

           <h3>Stay Connected</h3>
           <p>I welcome you to reach out if you have questions about future courses...</p>

           <p>Best wishes for your continued success!</p>
           <p>Dr. Smith</p>",
  published=True
)

# Conclude course
canvas_update_course(
  course_id=12345,
  conclude_at="2024-12-20T23:59:00Z"
)
```

**Expected Outcome:**
Effective ongoing management and continuous improvement

## Tools Needed

### Canvas MCP Tools - Course Setup
- `canvas_update_course` - Configure course settings
- `canvas_create_announcement` - Welcome and updates
- `canvas_create_module` - Build module structure
- `canvas_update_module` - Configure module settings
- `canvas_create_page` - Content pages
- `canvas_update_page` - Page revisions

### Canvas MCP Tools - Content
- `canvas_create_module_item` - Add items to modules
- `canvas_list_files` - Manage files
- `canvas_add_image` - Add images with alt text
- `canvas_add_textbox` - Formatted text content

### Canvas MCP Tools - Assessments
- `canvas_create_assignment_group` - Organize assessments
- `canvas_create_assignment` - Build assignments
- `canvas_update_assignment` - Revise assignments
- `canvas_create_rubric` - Create rubrics
- `canvas_add_rubric` - Attach rubrics
- `canvas_create_quiz` - Build quizzes
- `canvas_create_quiz_question` - Add questions

### Canvas MCP Tools - Discussions
- `canvas_create_discussion_topic` - Create discussions
- `canvas_update_discussion_topic` - Modify discussions
- `canvas_list_discussion_topics` - Review discussions

### Canvas MCP Tools - Management
- `canvas_list_students` - View enrolled students
- `canvas_get_course_grades` - Monitor performance
- `canvas_list_submissions` - Track completion
- `canvas_export_gradebook_csv` - Export grades
- Canvas Analytics (built-in)

### Templates
- `templates/backward-design-unit-tmpl.yaml` - Course design
- `templates/curriculum-map-tmpl.yaml` - Content organization
- `templates/lesson-plan-tmpl.yaml` - Module structure
- `templates/assessment-plan-tmpl.yaml` - Assessment design
- `templates/rubric-tmpl.yaml` - Rubric structures
- `templates/udl-lesson-plan-tmpl.yaml` - UDL integration

### Checklists
- `checklists/canvas-course-design.yaml` - Overall course quality
- `checklists/canvas-accessibility.yaml` - Canvas accessibility
- `checklists/wcag-accessibility.yaml` - WCAG compliance
- `checklists/udl-checklist.yaml` - UDL validation
- `checklists/assessment-validity.yaml` - Assessment quality
- `checklists/learning-objectives-quality.yaml` - Objective alignment

### External Tools
- WAVE Web Accessibility Evaluation Tool
- Color Contrast Analyzer
- Canvas Accessibility Checker (built-in)
- Screen reader (NVDA, JAWS, or VoiceOver)

## Quality Validation

### Course Design Quality
- [ ] Learning objectives clear and measurable?
- [ ] Backward design principles applied?
- [ ] Curriculum map followed?
- [ ] Scope and sequence logical?
- [ ] Assessments aligned to objectives?
- [ ] UDL principles integrated?
- [ ] Differentiation strategies present?

### Canvas Implementation Quality
- [ ] Consistent module structure?
- [ ] Clear navigation?
- [ ] Logical organization?
- [ ] All links working?
- [ ] Files properly organized?
- [ ] Appropriate use of Canvas features?
- [ ] Mobile-friendly design?

### Content Quality
- [ ] Accurate information?
- [ ] Clear explanations?
- [ ] Appropriate reading level?
- [ ] Engaging presentation?
- [ ] Multiple formats provided?
- [ ] Resources properly cited?
- [ ] Copyright compliance?

### Assessment Quality
- [ ] Clear instructions?
- [ ] Aligned to objectives?
- [ ] Rubrics attached?
- [ ] Reasonable workload?
- [ ] Fair grading criteria?
- [ ] Feedback opportunities?
- [ ] Varied assessment types?

### Accessibility Quality
- [ ] WCAG 2.1 Level AA compliance?
- [ ] All images have alt text?
- [ ] All videos captioned?
- [ ] All audio transcribed?
- [ ] Keyboard navigable?
- [ ] Screen reader compatible?
- [ ] Sufficient color contrast?
- [ ] Proper heading structure?

### UDL Quality
- [ ] Multiple means of engagement?
- [ ] Multiple means of representation?
- [ ] Multiple means of expression?
- [ ] Learner choice present?
- [ ] Scaffolding appropriate?
- [ ] Flexibility built in?

### Communication Quality
- [ ] Syllabus comprehensive?
- [ ] Policies clear?
- [ ] Expectations stated?
- [ ] Support resources listed?
- [ ] Response times reasonable?
- [ ] Professional tone?

## Common Pitfalls

### ❌ Avoid These Mistakes

1. **Rushing implementation without design**
   - ❌ "I'll just start adding content and figure it out"
   - ✅ Complete backward design, curriculum map, lesson plans FIRST

2. **Inconsistent module structure**
   - ❌ Each module organized differently
   - ✅ Predictable, consistent structure in all modules

3. **Publishing everything at once**
   - ❌ All 15 weeks visible from day 1
   - ✅ Progressive release as semester unfolds

4. **Neglecting accessibility**
   - ❌ "I'll add captions later if someone requests them"
   - ✅ Build accessibility in from the start

5. **Unclear or missing instructions**
   - ❌ "Read Chapter 5 and do the assignment"
   - ✅ Step-by-step, specific instructions with examples

6. **No rubrics for major assignments**
   - ❌ "Students should know what quality work looks like"
   - ✅ Clear rubrics for all graded work

7. **Broken or missing links**
   - ❌ Not testing links before launch
   - ✅ Test every link before publishing

8. **Poor file organization**
   - ❌ Files uploaded randomly without folder structure
   - ✅ Organized folders with clear naming conventions

9. **Ignoring student view testing**
   - ❌ "It looks fine to me as instructor"
   - ✅ Test in Student View before launch

10. **No contingency plan**
    - ❌ Not preparing for technical issues
    - ✅ Backup plans, alternative access, support resources

11. **Overwhelming students**
    - ❌ 50 items in the first module
    - ✅ Manageable chunks with clear priorities

12. **Set-it-and-forget-it mentality**
    - ❌ "Course is built, I'm done"
    - ✅ Ongoing monitoring, feedback, and improvement

## Example: Full Course Implementation Timeline

### Context
- **Course**: EDUC 2100 - Introduction to Educational Psychology
- **Format**: Online asynchronous
- **Duration**: 15-week semester
- **Enrollment**: 35 students
- **Implementation Timeline**: 6 weeks before semester start

### Week-by-Week Implementation Plan

**Week 1: Foundation (6 weeks before start)**
```yaml
Monday-Tuesday: Course Setup
  - Create course in Canvas
  - Configure basic settings
  - Set up assignment groups
  - Import institution syllabus template

Wednesday-Thursday: Navigation Structure
  - Create all module shells (Welcome + 15 content modules)
  - Set module numbering and naming
  - Create standard module item structure
  - Set up resource modules

Friday: Initial Content
  - Draft syllabus
  - Create course home page
  - Upload course banner image
  - Create welcome announcement (draft)
```

**Week 2: Core Content (5 weeks before start)**
```yaml
Monday-Tuesday: Modules 1-3 Content
  - Create module overview pages
  - Upload readings and resources
  - Build content pages
  - Add accessibility features (alt text, captions)

Wednesday-Thursday: Modules 4-6 Content
  - Create module overview pages
  - Upload readings and resources
  - Build content pages
  - Add accessibility features

Friday: Review and Quality Check
  - Test all links
  - Check accessibility
  - Student view testing
  - Fix issues found
```

**Week 3: Assessments Part 1 (4 weeks before start)**
```yaml
Monday-Tuesday: Major Assignments
  - Create all assignments (Modules 1-8)
  - Write detailed instructions
  - Create rubrics
  - Add example work

Wednesday-Thursday: Quizzes
  - Create quiz question banks
  - Build Module 1-4 quizzes
  - Configure quiz settings
  - Test quiz functionality

Friday: Discussions
  - Create discussion topics (Modules 1-8)
  - Write clear prompts
  - Create discussion rubric
  - Set up threading options
```

**Week 4: Assessments Part 2 (3 weeks before start)**
```yaml
Monday-Tuesday: Remaining Assignments
  - Create assignments (Modules 9-15)
  - Write instructions
  - Create rubrics
  - Add examples

Wednesday-Thursday: Remaining Quizzes
  - Build Module 5-15 quizzes
  - Review all quiz questions
  - Test functionality
  - Finalize settings

Friday: Discussion Completion
  - Create remaining discussions
  - Finalize all prompts
  - Verify rubrics attached
  - Set participation guidelines
```

**Week 5: Polish and Accessibility (2 weeks before start)**
```yaml
Monday: Comprehensive Accessibility Audit
  - Run WAVE on all pages
  - Check all images for alt text
  - Verify video captions
  - Test with screen reader
  - Fix all issues

Tuesday: UDL Validation
  - Review multiple means of engagement
  - Verify multiple means of representation
  - Check multiple means of expression
  - Add additional options where needed

Wednesday: Syllabus Finalization
  - Complete all syllabus sections
  - Verify accuracy of all dates
  - Add support resources
  - Proofread thoroughly

Thursday: Course-Wide Review
  - Check module consistency
  - Verify navigation clarity
  - Test all assignments
  - Confirm rubrics attached
  - Review workload balance

Friday: Colleague Peer Review
  - Ask colleague to review course
  - Navigate as student
  - Gather feedback
  - Create revision list
```

**Week 6: Testing and Launch Prep (1 week before start)**
```yaml
Monday: Implement Feedback
  - Make revisions from peer review
  - Fix any remaining issues
  - Improve unclear areas
  - Add requested resources

Tuesday: Student View Testing
  - Navigate entire course as student
  - Attempt to complete assignments
  - Try quizzes
  - Post in discussions
  - Document any confusion

Wednesday: Mobile Testing
  - Test on smartphone
  - Test on tablet
  - Verify responsive design
  - Check media playback
  - Ensure navigation works

Thursday: Final Pre-Launch Checks
  - Verify Week 1 content complete
  - Check all Week 1 due dates
  - Test Week 1 assignments
  - Confirm quiz availability
  - Review syllabus one last time

Friday: Launch!
  - Publish Welcome module
  - Publish Module 1
  - Publish course
  - Send welcome announcement
  - Monitor for issues
```

**Week 7: First Week of Class**
```yaml
Monday (First Day):
  - Welcome students
  - Monitor login activity
  - Respond to questions immediately
  - Check for access issues
  - Guide students to Getting Started

Tuesday-Wednesday:
  - Facilitate introduction discussion
  - Answer navigation questions
  - Monitor quiz attempts
  - Check analytics for engagement
  - Identify students not logging in

Thursday-Friday:
  - Continue monitoring and support
  - Publish Module 2 (for next week)
  - Send encouraging announcement
  - Host first office hours
  - Gather informal feedback

Weekend:
  - Review Week 1 analytics
  - Note confusion points
  - Plan adjustments for Week 2
  - Respond to any questions
  - Prepare Week 2 announcement
```

### Canvas Tools Used Throughout

**Course Setup Phase:**
```bash
canvas_update_course() # Configure settings
canvas_create_module() # Build structure (×17 modules)
canvas_create_announcement() # Welcome message
canvas_create_page() # Home, syllabus, content pages (×60)
```

**Content Development Phase:**
```bash
canvas_create_module_item() # Add items to modules (×200+)
canvas_list_files() # Organize uploaded files
canvas_add_image() # Add images with alt text (×100+)
```

**Assessment Development Phase:**
```bash
canvas_create_assignment_group() # Organize assessments (×4)
canvas_create_assignment() # Build assignments (×25)
canvas_create_rubric() # Create rubrics (×15)
canvas_create_quiz() # Build quizzes (×15)
canvas_create_quiz_question() # Add questions (×300+)
canvas_create_discussion_topic() # Create discussions (×15)
```

**Launch and Management Phase:**
```bash
canvas_update_module() # Publish modules progressively
canvas_list_students() # Monitor enrollment
canvas_export_gradebook_csv() # Export data for analysis
```

### Results After Implementation

**Quantitative Metrics:**
```yaml
Accessibility:
  - WCAG 2.1 AA compliance: 100%
  - Images with alt text: 100% (120/120)
  - Videos with captions: 100% (45/45)
  - Screen reader compatible: Yes

Structure:
  - Modules: 17 (Welcome + 15 content + Resources)
  - Pages: 62 (content, overview, resource pages)
  - Assignments: 25
  - Quizzes: 15
  - Discussions: 15
  - Files: 140 (organized in 18 folders)

Student Experience:
  - Average setup time: 20 minutes
  - Week 1 login rate: 97% (34/35 students)
  - Week 1 completion rate: 91%
  - Student satisfaction (survey): 4.6/5.0
  - "Easy to navigate" rating: 4.8/5.0
```

**Qualitative Feedback:**
```yaml
Student Comments:
  - "Easiest Canvas course to navigate I've had"
  - "Really appreciated the clear organization"
  - "Videos with captions were so helpful"
  - "Loved having assignment examples"
  - "Knew exactly what was expected"

Areas for Improvement:
  - "Week 3 had too many deadlines"
  - "Discussion prompts could be more specific"
  - "Would like more video content"
  - "Quiz time limits felt rushed"
```

**Instructor Reflection:**
```yaml
What Worked:
  - Backward design planning paid off
  - Consistent module structure reduced confusion
  - Accessibility built-in from start
  - Rubrics clarified expectations
  - Progressive release prevented overwhelm

What to Improve Next Semester:
  - Spread Week 3 deadlines more evenly
  - Add more video mini-lectures
  - Increase quiz time limits by 5 minutes
  - Revise discussion prompts for specificity
  - Add more student choice in assignments
```

## Related Tasks
- **Prerequisites**:
  - `create-learning-objectives.md` - Course objectives
  - `design-scope-sequence.md` - Content organization
  - `create-curriculum-map.md` - Curriculum alignment
  - `apply-backward-design.md` - Course design
  - `design-lesson-plan.md` - Module planning
  - `create-assessment.md` - Assessment design
  - `create-rubric.md` - Rubric development
  - `apply-udl.md` - UDL integration
  - `differentiate-content.md` - Differentiation planning

## References

### Canvas Course Design
- Canvas Instructor Guide: https://community.canvaslms.com/docs/DOC-10460
- Canvas Accessibility Guide: https://community.canvaslms.com/docs/DOC-2061
- Quality Matters Rubric (if applicable to your institution)
- Online Learning Consortium (OLC) Quality Scorecard

### Learning Design Integration
- Wiggins, G., & McTighe, J. (2005). *Understanding by Design* (Expanded 2nd ed.)
- CAST (2018). *Universal Design for Learning Guidelines version 3.0*
- Tomlinson, C.A. (2014). *The Differentiated Classroom*
- Fink, L.D. (2013). *Creating Significant Learning Experiences*

### Online Course Quality
- Ko, S., & Rossen, S. (2017). *Teaching Online: A Practical Guide* (4th ed.)
- Vai, M., & Sosulski, K. (2015). *Essentials of Online Course Design: A Standards-Based Guide* (2nd ed.)
- Boettcher, J.V., & Conrad, R.M. (2016). *The Online Teaching Survival Guide* (2nd ed.)

### Accessibility Standards
- W3C Web Accessibility Initiative. *Web Content Accessibility Guidelines (WCAG) 2.1*
- Section 508 Standards (2017). Revised 508 Standards
- Burgstahler, S. (2015). *Universal Design in Higher Education: From Principles to Practice* (2nd ed.)

### Course Management
- Lang, J.M. (2016). *Small Teaching: Everyday Lessons from the Science of Learning*
- Nilson, L.B. (2016). *Teaching at Its Best: A Research-Based Resource for College Instructors* (4th ed.)
- Bain, K. (2004). *What the Best College Teachers Do*
