# Canvas MCP Tools Reference for Education

## Overview
This comprehensive reference documents all Canvas MCP tools available through the `mcp__canvas-mcp-server`, organized by educational use case. Each tool includes practical examples aligned to educational theory and best practices.

## Tool Organization

**By Function**:
1. Course Management (7 tools)
2. Assignment & Assessment (15 tools)
3. Content Delivery (6 tools)
4. Communication & Collaboration (9 tools)
5. Grading & Feedback (12 tools)
6. Advanced Features (8 tools)

**Total**: 57 tools across 6 categories

## 1. Course Management Tools

### canvas_health_check
**Purpose**: Verify Canvas API connectivity
**Use Case**: Troubleshooting, initial setup validation
**Returns**: Connection status and API version

```python
canvas_health_check()
# Returns: {'status': 'healthy', 'api_version': 'v1'}
```

### canvas_list_courses
**Purpose**: List all courses for current user
**Parameters**:
- `include_ended` (optional, bool): Include completed courses

**Educational Use**: Course overview, semester planning
```python
canvas_list_courses(include_ended=False)
# Returns active courses only
```

### canvas_get_course
**Purpose**: Detailed information about specific course
**Parameters**:
- `course_id` (required, int): Course ID

**Educational Use**: Course analysis, enrollment verification
```python
canvas_get_course(course_id=12345)
```

### canvas_create_course
**Purpose**: Create new course
**Parameters**: Comprehensive course configuration

**Educational Framework Alignment**:
- UDL: Design accessible from start
- Backward Design: Plan structure before content

```python
canvas_create_course(
    account_id=1,
    name="Introduction to Biology",
    course_code="BIO101",
    start_at="2024-01-15T00:00:00Z",
    end_at="2024-05-15T00:00:00Z",
    time_zone="America/New_York",
    # UDL: Clear syllabus and structure
    syllabus_body="<h2>Course Overview</h2>...",
    # Accessibility
    public_syllabus=True,
    is_public_to_auth_users=True,
    # Student autonomy
    self_enrollment=False,
    open_enrollment=False
)
```

### canvas_update_course
**Purpose**: Modify existing course
**Use Case**: Mid-semester adjustments, continuous improvement

```python
canvas_update_course(
    course_id=12345,
    name="Updated Course Title",
    published=True,
    # Make course visible to students
    syllabus_body="<h2>Updated Syllabus</h2>..."
)
```

## 2. Assignment & Assessment Tools

### canvas_list_assignments
**Purpose**: List all assignments in course
**Parameters**:
- `course_id` (required)
- `include_submissions` (optional, bool)

**Educational Use**: Unit planning, workload balance analysis

```python
canvas_list_assignments(
    course_id=12345,
    include_submissions=True
)
```

### canvas_create_assignment
**Purpose**: Create new assignment
**Educational Framework Alignment**:
- Bloom's Taxonomy: Target specific cognitive levels
- CCSS: Align to standards
- UDL: Multiple means of expression

**Example 1: Traditional Essay (Analyze/Evaluate)**
```python
canvas_create_assignment(
    course_id=12345,
    name="Literary Analysis Essay",
    description="""
    <h2>Standards</h2>
    <p>CCSS.ELA-LITERACY.W.9-10.2: Write informative/explanatory texts</p>
    <p>CCSS.ELA-LITERACY.RL.9-10.2: Determine theme and analyze development</p>
    
    <h2>Bloom's Level</h2>
    <p>Analyze and Evaluate</p>
    
    <h2>Instructions</h2>
    <p>Analyze character development in [novel], using textual evidence...</p>
    
    <h2>UDL Options</h2>
    <ul>
      <li>Written essay (3-5 pages)</li>
      <li>Video essay (8-10 minutes) with script</li>
      <li>Audio commentary with written outline</li>
    </ul>
    """,
    points_possible=100,
    due_at="2024-03-15T23:59:00Z",
    submission_types=["online_text_entry", "online_upload", "online_url"],
    # Allow late submissions with penalty
    allowed_extensions=["pdf", "docx", "mp4", "mp3"]
)
```

**Example 2: Project-Based (Create)**
```python
canvas_create_assignment(
    course_id=12345,
    name="Ecosystem Model Project",
    description="""
    <h2>ISTE Standards</h2>
    <p>4. Innovative Designer - Use design process to solve problems</p>
    <p>6. Creative Communicator - Express ideas creatively</p>
    
    <h2>Learning Objectives</h2>
    <ul>
      <li>Demonstrate understanding of energy flow</li>
      <li>Model predator-prey relationships</li>
      <li>Explain ecosystem balance</li>
    </ul>
    
    <h2>Options</h2>
    <p>Choose ONE format for your model:</p>
    <ul>
      <li>Physical 3D model with explanation</li>
      <li>Digital simulation/animation</li>
      <li>Interactive website</li>
      <li>Video documentary with models</li>
    </ul>
    """,
    points_possible=150,
    submission_types=["online_upload", "online_url"]
)
```

### canvas_create_quiz
**Purpose**: Create assessment
**Educational Use**: Formative and summative assessment

**Example: Formative Check (Remember/Understand)**
```python
canvas_create_quiz(
    course_id=12345,
    title="Cell Structure Quick Check",
    quiz_type="survey",  # Ungraded formative
    description="Check your understanding before tomorrow's lab",
    time_limit=10,
    allowed_attempts=-1  # Unlimited for practice
)
```

**Example: Summative Assessment (Apply/Analyze)**
```python
canvas_create_quiz(
    course_id=12345,
    title="Unit 3 Test - Genetics",
    quiz_type="assignment",
    description="""
    Content Coverage (Test Blueprint):
    - Punnett squares: 25%
    - Pedigrees: 25%
    - Probability: 25%
    - Genetic disorders: 25%
    
    Cognitive Levels:
    - Remember/Understand: 30%
    - Apply: 40%
    - Analyze/Evaluate: 30%
    """,
    time_limit=50,
    allowed_attempts=1,
    points_possible=100
)
```

### canvas_create_quiz_question
**Purpose**: Add questions to quiz
**Supports**: Multiple question types for different cognitive levels

**Example: Multiple Choice (Remember)**
```python
canvas_create_quiz_question(
    course_id=12345,
    quiz_id=67890,
    question_text="What is the powerhouse of the cell?",
    question_type="multiple_choice",
    answers=[
        {"text": "Mitochondria", "weight": 100},  # Correct
        {"text": "Nucleus", "weight": 0},
        {"text": "Ribosome", "weight": 0},
        {"text": "Chloroplast", "weight": 0}
    ],
    points_possible=1
)
```

**Example: Short Answer (Understand)**
```python
canvas_create_quiz_question(
    course_id=12345,
    quiz_id=67890,
    question_text="Explain the function of mitochondria in your own words.",
    question_type="short_answer_question",
    points_possible=5
)
```

**Example: Essay (Analyze/Evaluate)**
```python
canvas_create_quiz_question(
    course_id=12345,
    quiz_id=67890,
    question_text="""
    Compare and contrast mitosis and meiosis. Explain the
    significance of each process for organisms.
    """,
    question_type="essay_question",
    points_possible=15
)
```

## 3. Rubrics & Standards-Based Assessment

### canvas_create_rubric
**Purpose**: Create detailed scoring guide
**Educational Framework**: Aligns to CCSS, Bloom's, assessment validity

**Example: Standards-Aligned Writing Rubric**
```python
canvas_create_rubric(
    course_id=12345,
    title="Argumentative Essay Rubric - CCSS W.6.1",
    criteria=[
        {
            "description": "Claim (W.6.1.a)",
            "points": 20,
            "ratings": [
                {
                    "description": "Clear, specific, arguable claim stated in introduction",
                    "points": 20
                },
                {
                    "description": "Claim present but vague or unclear",
                    "points": 13
                },
                {
                    "description": "Weak or missing claim",
                    "points": 6
                }
            ]
        },
        {
            "description": "Evidence and Reasoning (W.6.1.b)",
            "points": 40,
            "ratings": [
                {
                    "description": "3+ credible sources, properly cited, well-integrated, logical reasoning",
                    "points": 40
                },
                {
                    "description": "2 sources, minor citation issues, adequate reasoning",
                    "points": 26
                },
                {
                    "description": "1 or fewer sources, poor integration",
                    "points": 13
                }
            ]
        },
        {
            "description": "Organization (W.6.1.c)",
            "points": 20,
            "ratings": [
                {
                    "description": "Logical structure, effective transitions, clear relationships",
                    "points": 20
                },
                {
                    "description": "Basic structure, some transitions",
                    "points": 13
                },
                {
                    "description": "Disorganized, unclear relationships",
                    "points": 6
                }
            ]
        },
        {
            "description": "Conclusion (W.6.1.e)",
            "points": 20,
            "ratings": [
                {
                    "description": "Strong conclusion that follows from and supports argument",
                    "points": 20
                },
                {
                    "description": "Basic conclusion that summarizes argument",
                    "points": 13
                },
                {
                    "description": "Weak or missing conclusion",
                    "points": 6
                }
            ]
        }
    ],
    free_form_criterion_comments=True
)
```

**Example: Performance Task Rubric (Bloom's Apply/Create)**
```python
canvas_create_rubric(
    course_id=12345,
    title="Science Experiment Design Rubric",
    criteria=[
        {
            "description": "Hypothesis Formation (Bloom's: Apply)",
            "points": 15,
            "ratings": [
                {"description": "Testable, specific hypothesis based on research", "points": 15},
                {"description": "Hypothesis present but vague or untestable", "points": 10},
                {"description": "Weak or missing hypothesis", "points": 5}
            ]
        },
        {
            "description": "Experimental Design (Bloom's: Create)",
            "points": 30,
            "ratings": [
                {"description": "Clear procedure, controlled variables, repeatable, valid design", "points": 30},
                {"description": "Basic procedure, some controls, minor gaps", "points": 20},
                {"description": "Incomplete procedure, poor controls", "points": 10}
            ]
        },
        {
            "description": "Data Analysis (Bloom's: Analyze)",
            "points": 25,
            "ratings": [
                {"description": "Appropriate analysis, correct interpretation, supported conclusions", "points": 25},
                {"description": "Basic analysis, mostly correct interpretation", "points": 16},
                {"description": "Incomplete or incorrect analysis", "points": 8}
            ]
        }
    ]
)
```

## 4. Differentiation & UDL Tools

### canvas_create_assignment (Differentiated Version)
**Educational Framework**: Tomlinson differentiation, UDL

**Example: Tiered Assignment by Readiness**
```python
canvas_create_assignment(
    course_id=12345,
    name="Photosynthesis Assessment - Choose Your Level",
    description="""
    <h2>UDL Principle: Multiple Means of Action & Expression</h2>
    
    <p>Based on your pre-assessment score, choose the appropriate level.
    All levels assess the same learning objectives.</p>
    
    <h3>Foundation Level (Pre-assessment < 70%)</h3>
    <ul>
      <li>Create labeled diagram of photosynthesis</li>
      <li>Explain process step-by-step with support materials</li>
      <li>Identify inputs and outputs</li>
    </ul>
    
    <h3>Core Level (Pre-assessment 70-85%)</h3>
    <ul>
      <li>Explain photosynthesis and cellular respiration relationship</li>
      <li>Apply knowledge to solve problems</li>
      <li>Create visual representation of energy flow</li>
    </ul>
    
    <h3>Advanced Level (Pre-assessment > 85%)</h3>
    <ul>
      <li>Design experiment to test photosynthesis variables</li>
      <li>Analyze C3, C4, and CAM photosynthesis</li>
      <li>Propose solutions to optimize plant growth</li>
    </ul>
    
    <p><strong>Assessment:</strong> All levels graded on accuracy, depth, and communication clarity.</p>
    """,
    points_possible=100,
    submission_types=["online_upload", "online_text_entry", "online_url"]
)
```

### canvas_create_discussion_topic (Differentiated)
**Example: Tiered Discussion Questions**
```python
canvas_create_discussion_topic(
    course_id=12345,
    title="Civil Rights Movement - Tiered Discussion",
    message="""
    <h2>Choose ONE question based on your challenge level</h2>
    
    <h3>Foundation (Recall/Understand)</h3>
    <p>Describe three key events of the Civil Rights Movement and explain their significance.</p>
    
    <h3>Core (Analyze)</h3>
    <p>Compare the strategies of Martin Luther King Jr. and Malcolm X. How did their approaches differ and why?</p>
    
    <h3>Advanced (Evaluate/Create)</h3>
    <p>Analyze how Civil Rights Movement tactics influence current social justice movements. What worked then? What needs adaptation now?</p>
    
    <p><strong>Participation:</strong> Respond to at least 2 classmates at any level.</p>
    """,
    discussion_type="threaded",
    published=True
)
```

## 5. Learning Outcomes & Standards Alignment

### canvas_create_outcome
**Purpose**: Define measurable learning outcomes
**Educational Use**: Standards alignment, mastery tracking

**Example: CCSS-Aligned Outcome**
```python
canvas_create_outcome(
    course_id=12345,
    title="CCSS.MATH.CONTENT.8.F.A.1",
    description="""
    Understand that a function is a rule that assigns to each input
    exactly one output. The graph of a function is the set of ordered
    pairs consisting of an input and the corresponding output.
    """,
    display_name="Functions - Input/Output Relationship",
    mastery_points=3,
    calculation_method="decaying_average",  # Recent attempts weighted more
    calculation_int=65  # 65% weight on most recent attempt
)
```

**Example: ISTE Standards Outcome**
```python
canvas_create_outcome(
    course_id=12345,
    title="ISTE 3: Knowledge Constructor",
    description="""
    Students critically curate resources using digital tools to
    construct knowledge, produce creative artifacts, and make
    meaningful learning experiences.
    """,
    mastery_points=4,
    calculation_method="n_mastery",  # Mastery when target met N times
    calculation_int=2  # Must demonstrate mastery twice
)
```

## 6. Grading & Feedback Tools

### canvas_submit_grade
**Purpose**: Record grades for assignments
**Educational Use**: Timely feedback, formative assessment

```python
canvas_submit_grade(
    course_id=12345,
    assignment_id=67890,
    user_id=11111,
    grade=85,
    comment="Strong analysis of themes. Consider adding more textual evidence for your claims. See specific feedback in rubric."
)
```

### canvas_grade_with_rubric
**Purpose**: Grade using rubric criteria
**Educational Use**: Consistent, criteria-based assessment

```python
canvas_grade_with_rubric(
    course_id=12345,
    assignment_id=67890,
    user_id=11111,
    rubric_assessment={
        "criterion_1": {
            "points": 18,
            "comments": "Clear thesis statement, well-positioned"
        },
        "criterion_2": {
            "points": 35,
            "comments": "Excellent use of evidence, 4 credible sources, well-integrated"
        },
        "criterion_3": {
            "points": 16,
            "comments": "Good organization, could improve transitions between paragraphs"
        }
    },
    posted_grade=85,  # Total from rubric
    text_comment="Overall strong work! Focus on transitions for next essay."
)
```

### canvas_add_submission_comment
**Purpose**: Provide detailed feedback
**Educational Use**: Formative feedback, growth mindset

```python
canvas_add_submission_comment(
    course_id=12345,
    assignment_id=67890,
    user_id=11111,
    comment="""
    Strengths:
    - Excellent understanding of photosynthesis process
    - Clear diagrams with accurate labels
    - Good use of scientific vocabulary
    
    Areas for Growth:
    - Explain the role of chlorophyll more specifically
    - Connect light and dark reactions more explicitly
    - Consider adding information about factors affecting rate
    
    Next Steps:
    - Review pages 145-147 in textbook for chlorophyll details
    - Try the simulation again focusing on variable relationships
    """
)
```

## 7. Course Content Organization

### canvas_create_module
**Purpose**: Organize content into units
**Educational Framework**: Backward Design, logical sequencing

**Example: UbD-Aligned Module**
```python
canvas_create_module(
    course_id=12345,
    name="Unit 3: The Civil War Era (1850-1877)",
    # Backward Design: Assessment first
    position=3,
    unlock_at="2024-02-15T00:00:00Z",
    # Sequential if content builds on itself
    require_sequential_progress=True
)

# Add items in backward design order:
# 1. Learning objectives (Stage 1)
# 2. Assessment overview (Stage 2)
# 3. Learning activities (Stage 3)
```

**Example: Differentiated Module with Pathways**
```python
canvas_create_module(
    course_id=12345,
    name="Genetics - Choose Your Path",
    # Allow students to choose pathway
    require_sequential_progress=False
)

# Module items include:
# - Pre-assessment (required)
# - Foundation path items
# - Core path items
# - Advanced path items
# - Post-assessment (required)
```

## 8. Active Learning & Collaboration

### canvas_create_discussion_topic
**Purpose**: Facilitate collaborative learning
**Educational Framework**: Active learning strategies

**Example: Think-Pair-Share (Asynchronous)**
```python
canvas_create_discussion_topic(
    course_id=12345,
    title="Think-Pair-Share: Climate Change Solutions",
    message="""
    <h2>Active Learning Strategy: Think-Pair-Share</h2>
    
    <h3>THINK Phase (Individual - Due Wednesday)</h3>
    <p>Post your initial ideas: What local actions can address climate change?</p>
    
    <h3>PAIR Phase (Partner Work - Thu-Fri)</h3>
    <p>Your partner: [Will assign via Canvas]</p>
    <p>Reply to your partner's post. Discuss, combine best ideas.</p>
    
    <h3>SHARE Phase (Class Discussion - Weekend)</h3>
    <p>Together, post one refined solution to main thread.</p>
    <p>Comment on 2 other pairs' solutions.</p>
    """,
    discussion_type="threaded",
    published=True
)
```

**Example: Jigsaw Activity (Asynchronous)**
```python
# Create expert group discussions
for topic in ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds", "Hydrogen Bonds"]:
    canvas_create_discussion_topic(
        course_id=12345,
        title=f"Expert Group: {topic}",
        message=f"""
        <h2>Jigsaw Activity - Expert Phase</h2>
        <p>You and your fellow {topic} experts will master this topic
        to teach your home groups.</p>
        
        <h3>Tasks:</h3>
        <ul>
          <li>Read provided resources</li>
          <li>Discuss key concepts</li>
          <li>Create teaching materials for home group</li>
          <li>Prepare examples and analogies</li>
        </ul>
        """,
        # Only students assigned to this topic participate
        group_category_id=101
    )

# Create home group discussions
canvas_create_discussion_topic(
    course_id=12345,
    title="Home Groups: Teach and Learn All Bond Types",
    message="""
    <h2>Jigsaw Activity - Teaching Phase</h2>
    <p>Each member teaches their expert topic to the group.</p>
    
    <p>Take turns explaining:
    - What is this bond type?
    - How does it form?
    - What are examples?
    - What makes it unique?
    </p>
    
    <p>Everyone: Ask questions, take notes, clarify understanding.</p>
    """,
    group_category_id=102  # Home groups
)
```

## 9. Formative Assessment Tools

### canvas_create_quiz (Formative Examples)
**Purpose**: Check understanding, guide instruction
**Educational Use**: Minute papers, exit tickets, quick checks

**Example: Exit Ticket**
```python
canvas_create_quiz(
    course_id=12345,
    title="Exit Ticket - Day 12",
    quiz_type="survey",  # Ungraded
    time_limit=5,
    description="""
    Quick reflection before you go:
    1. What was the main concept today?
    2. What questions do you still have?
    3. Rate your understanding (1-5)
    """
)
```

**Example: Muddiest Point**
```python
canvas_create_quiz(
    course_id=12345,
    title="Muddiest Point - Week 4",
    quiz_type="survey",
    description="What was the muddiest (most confusing) point this week?"
)
# Review responses to guide next class
```

## References & Best Practices

**Alignment to Frameworks**:
- Bloom's Taxonomy: Match assignment types to cognitive levels
- UDL: Provide multiple means throughout
- ISTE: Leverage technology purposefully
- CCSS: Align assignments to standards
- Tomlinson: Differentiate content, process, product

**Assessment Validity**:
- Content validity: Align to all learning objectives
- Construct validity: Measure intended skills
- Reliability: Use rubrics for consistency
- Fairness: Eliminate bias, provide accommodations

**Best Practices**:
1. Start with learning objectives
2. Design assessments next
3. Then plan instruction
4. Use rubrics for complex tasks
5. Provide multiple submission types
6. Give timely, specific feedback
7. Use formative assessments frequently
8. Differentiate appropriately
9. Make content accessible
10. Align everything to standards

## Related Resources
- **blooms-taxonomy.md** - Cognitive levels for assignments
- **udl-framework.md** - Accessibility and differentiation
- **common-core-standards.md** - Standards alignment
- **iste-standards.md** - Technology integration
- **assessment-validity.md** - Creating valid assessments
- **differentiation-strategies.md** - Differentiation implementation
- **canvas-best-practices.md** - Overall Canvas course design
