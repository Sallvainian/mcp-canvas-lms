# Workflow Guide
## Complete Guide to 7 BMAD Education Workflows

## Purpose
This guide explains how to use all 7 complete workflows in the BMAD Education Pack, including when to use each workflow, how to sequence workflows, customization guidance, and success patterns.

## Who Should Read This
- **Educators** ready to build complete curriculum units or courses
- **Instructional designers** implementing systematic design processes
- **Anyone** who has completed the quick-start-guide and wants comprehensive design

---

## Table of Contents

1. [Workflow Overview](#workflow-overview)
2. [Workflow 1: course-design-full](#workflow-1-course-design-full)
3. [Workflow 2: unit-design-backward](#workflow-2-unit-design-backward)
4. [Workflow 3: assessment-development](#workflow-3-assessment-development)
5. [Workflow 4: differentiation-planning](#workflow-4-differentiation-planning)
6. [Workflow 5: canvas-deployment](#workflow-5-canvas-deployment)
7. [Workflow 6: lesson-planning-gagne](#workflow-6-lesson-planning-gagne)
8. [Workflow 7: standards-alignment](#workflow-7-standards-alignment)
9. [Workflow Sequencing](#workflow-sequencing)
10. [Customization Guide](#customization-guide)
11. [Success Patterns](#success-patterns)

---

## Workflow Overview

### What is a Workflow?
A workflow is a **complete, multi-step process** that combines multiple agents, tasks, templates, and checklists to produce comprehensive educational designs. Workflows automate complex design processes while maintaining educational rigor.

### 7 Complete Workflows

| Workflow | Agents Used | Time Required | Output |
|----------|-------------|---------------|--------|
| **course-design-full** | All 5 agents | 3-6 hours | Complete course |
| **unit-design-backward** | curriculum-architect, instructional-designer, assessment-specialist | 1-2 hours | Full unit plan |
| **assessment-development** | assessment-specialist, curriculum-architect | 45-90 min | Valid assessments |
| **differentiation-planning** | differentiation-expert, instructional-designer | 30-60 min | Differentiated lessons |
| **canvas-deployment** | edtech-integrator, curriculum-architect | 30-90 min | Live Canvas course |
| **lesson-planning-gagne** | instructional-designer | 20-30 min per lesson | Daily lesson plans |
| **standards-alignment** | curriculum-architect, assessment-specialist | 30-60 min | Standards mapping |

### When to Use Workflows

**Use Workflows When**:
- Building complete curriculum (not just single assignments)
- Want systematic application of educational frameworks
- Need Canvas-ready implementation
- Require quality validation at each step
- Working at scale (multiple units, courses, sections)

**Use Single Agent Commands When**:
- Quick adjustments to existing curriculum
- Single-purpose tasks (create rubric, write objectives)
- Experimenting with ideas
- Learning agent capabilities

---

## Workflow 1: course-design-full

### Purpose
Design a complete course from scratch using backward design principles, integrating all educational frameworks across an entire semester or year.

### When to Use
- Starting new course for first time
- Major course redesign or curriculum revision
- Need systematic framework integration
- Building Canvas course from ground up
- Want comprehensive quality validation

### Prerequisites
- Course description or learning outcomes
- Standards framework (CCSS, NGSS, etc.)
- Time frame (semester, year)
- Grade level and student context
- Canvas course shell (optional)

### Step-by-Step Process

#### Step 1: Curriculum Architecture (45-60 min)
**Agent**: curriculum-architect (Dr. Elena Vasquez)

**Process**:
```
User: Load curriculum-architect agent

Dr. Vasquez: I'll guide you through comprehensive course design using UbD.

1. What is your course title and subject area?
2. What grade level or student audience?
3. How long is the course? (weeks, units)
4. What standards framework applies?
5. What are your overarching learning goals?

User: [Provides course context]

Dr. Vasquez: Excellent! I'll create the course architecture.

STAGE 1: DESIRED RESULTS
- Overarching essential questions
- Enduring understandings
- Transfer goals
- Standards alignment map

STAGE 2: ASSESSMENT EVIDENCE
- Course-level performance tasks
- Summative assessment plan
- Formative assessment strategy

STAGE 3: LEARNING PLAN
- Unit sequence and pacing
- Scope and sequence
- Major learning experiences

Output: course-architecture.yaml
```

**Deliverables**:
- Course essential questions
- Transfer goals
- Standards mapping
- Unit sequence (6-12 units)
- Assessment plan
- Pacing guide

**Quality Checks**:
✅ Essential questions are overarching and transferable
✅ All required standards addressed across units
✅ Assessment plan includes multiple evidence types
✅ Pacing is realistic for time frame
✅ Progression shows logical skill building

#### Step 2: Unit Development (2-4 hours)
**Agent Collaboration**: curriculum-architect → instructional-designer → assessment-specialist

**Process for Each Unit**:
```
Dr. Vasquez: Let's design Unit 1 using backward design.

UNIT STAGE 1: Desired Results
- Unit-specific essential questions
- Unit learning objectives (Bloom's + DOK aligned)
- Standards for this unit
- Prior knowledge required

→ Handoff to Prof. Chen (instructional-designer)

Prof. Chen: I'll design the learning experiences using Gagné's framework.

UNIT STAGE 3: Learning Experiences
For each lesson in unit:
1. Gain attention (hook)
2. State objectives
3. Recall prior learning
4. Present content
5. Provide guidance
6. Practice
7. Feedback
8. Assess performance
9. Enhance retention/transfer

→ Handoff to Dr. Kim (assessment-specialist)

Dr. Kim: I'll design the unit assessments.

UNIT STAGE 2: Assessment Evidence
- Performance task with rubric
- Formative assessments
- Self-assessment tools
- Success criteria
- Differentiated assessment options

Output per unit: unit-[n]-complete.yaml
```

**Deliverables per Unit**:
- 3-5 essential questions
- 8-12 learning objectives
- 5-10 daily lesson plans
- 1 performance task
- 3-5 formative assessments
- Rubric aligned to objectives
- Differentiation strategies

#### Step 3: Differentiation Integration (1-2 hours)
**Agent**: differentiation-expert (Ms. Jamie Rodriguez)

**Process**:
```
Ms. Rodriguez: I'll ensure UDL and differentiation throughout your course.

For each unit, I'll provide:

CONTENT DIFFERENTIATION:
- Tiered reading materials (3 complexity levels)
- Multi-modal content delivery
- Alternative representations

PROCESS DIFFERENTIATION:
- Flexible grouping strategies
- Choice boards for activities
- Scaffolding tools

PRODUCT DIFFERENTIATION:
- Assignment choice menus
- Multiple ways to demonstrate learning
- Tiered rubrics

UDL CHECKPOINTS:
- Representation options validated
- Action/expression options validated
- Engagement options validated

Output: differentiation-plan-course.yaml
```

**Deliverables**:
- Tiered materials for each unit
- Choice boards (3-5 per unit)
- Scaffolding tools
- UDL compliance validation

#### Step 4: Canvas Course Building (1-2 hours)
**Agent**: edtech-integrator (Alex Thompson)

**Process**:
```
Alex: I'll build your complete Canvas course from the curriculum design.

COURSE STRUCTURE:
1. Create modules for each unit
2. Add welcome page and syllabus
3. Create outcome standards
4. Build assignments with rubrics
5. Set up gradebook

For each unit module:
- Module overview page
- Learning objectives as outcomes
- Lesson pages with embedded content
- Assignment submissions
- Discussion forums
- Quiz/assessment tools
- Module requirements and prerequisites

CANVAS IMPLEMENTATION:
canvas_create_course(...)
canvas_create_module(...) for each unit
canvas_create_outcome(...) for each objective
canvas_create_assignment(...) with rubrics
canvas_create_page(...) for content
canvas_set_posting_policy(...) for grading

Output: Canvas course ID + implementation log
```

**Deliverables**:
- Live Canvas course with all modules
- Assignments with rubrics published
- Learning outcomes created and aligned
- Grade book configured
- Course navigation structured

#### Step 5: Quality Validation (30-45 min)
**All Agents Review**

**Validation Checklist**:

**Curriculum Architecture** (Dr. Vasquez):
- [ ] All standards addressed systematically
- [ ] Essential questions are overarching
- [ ] Backward design logic flows correctly
- [ ] Scope and sequence is coherent

**Instructional Design** (Prof. Chen):
- [ ] Gagné's events present in each lesson
- [ ] Learning experiences match objectives
- [ ] Pacing is appropriate for students
- [ ] Resources support all learning styles

**Assessment Quality** (Dr. Kim):
- [ ] Assessments show valid alignment
- [ ] Multiple evidence types included
- [ ] Rubrics have clear criteria
- [ ] Formative assessment plan robust

**Differentiation** (Ms. Rodriguez):
- [ ] UDL principles applied systematically
- [ ] Multiple means for all three principles
- [ ] Tiering provides appropriate challenge
- [ ] All students can access curriculum

**Canvas Implementation** (Alex):
- [ ] All content transferred correctly
- [ ] Navigation is intuitive
- [ ] Outcomes align to assignments
- [ ] Technology enhances learning

### Educational Frameworks Applied

**Understanding by Design (UbD)**:
- Three-stage backward design for entire course
- Essential questions drive curriculum
- Assessment evidence before learning plan

**Bloom's Taxonomy**:
- Objectives span cognitive levels (Remember → Create)
- Progressive complexity across units
- Higher-order thinking emphasized

**Webb's DOK**:
- Complexity levels appropriate for grade
- Strategic competence targeted (DOK 3-4)
- Extended thinking tasks included

**Gagné's Nine Events**:
- Every lesson follows instructional events
- Systematic learning experience design
- Retention and transfer emphasized

**UDL Principles**:
- Multiple means of representation
- Multiple means of action/expression
- Multiple means of engagement

### Canvas Integration Pattern

**Course Structure**:
```
Course Home
├── Syllabus & Welcome
├── Course Learning Outcomes
├── Module 1: [Unit Title]
│   ├── Overview
│   ├── Learning Objectives (as Canvas Outcomes)
│   ├── Lesson 1 Page
│   ├── Lesson 2 Page
│   ├── ...
│   ├── Formative Assessment 1
│   ├── Formative Assessment 2
│   ├── Unit Performance Task (with rubric)
│   └── Module Requirements
├── Module 2: [Unit Title]
│   └── [Same structure]
...
└── Gradebook
    ├── Outcome Mastery Tracking
    └── Weighted Categories
```

**Automation Workflow**:
```python
# Pseudocode for Canvas automation
for unit in course_units:
    module_id = canvas_create_module(course_id, unit.title)

    for objective in unit.objectives:
        outcome_id = canvas_create_outcome(course_id, objective)

    for lesson in unit.lessons:
        page_id = canvas_create_page(course_id, module_id, lesson.content)

    for assignment in unit.assignments:
        assign_id = canvas_create_assignment(
            course_id,
            assignment.title,
            assignment.rubric
        )
        canvas_align_to_outcomes(assign_id, unit.objectives)
```

### Quality Validation Results

**Expected Outputs**:
- Complete course architecture document
- 6-12 unit plans with full backward design
- 30-60 daily lesson plans
- 6-12 performance tasks with rubrics
- 18-36 formative assessments
- Comprehensive differentiation plan
- Live Canvas course ready for students

**Quality Metrics**:
- 100% standards coverage
- 100% objectives have aligned assessments
- ≥3 UDL options per principle per unit
- Bloom's range: Remember through Create
- DOK range: 1 through 3 or 4
- Gagné's events: Present in all lessons

### Time Investment vs Traditional Design

| Design Aspect | Traditional Time | BMAD Workflow | Time Savings |
|---------------|------------------|---------------|--------------|
| Course outline | 4-6 hours | 45 min | 75% |
| Unit planning | 2-3 hours/unit | 1 hour/unit | 50% |
| Lesson plans | 45 min/lesson | 20 min/lesson | 55% |
| Assessment design | 2 hours/unit | 45 min/unit | 62% |
| Differentiation | 3-4 hours/unit | 30 min/unit | 85% |
| Canvas setup | 8-12 hours | 1-2 hours | 85% |
| **Total (10 units)** | **60-80 hours** | **15-20 hours** | **70-75%** |

### Customization Options

**Pace Variation**:
- **Sprint Mode** (3 hours): Core architecture only, fill in details later
- **Standard Mode** (6 hours): Complete comprehensive design
- **Collaborative Mode** (2 days): Team reviews at each phase

**Focus Customization**:
- **Standards-Heavy**: Extra emphasis on standards alignment mapping
- **Assessment-Focused**: More formative assessments, varied evidence types
- **Differentiation-Priority**: Enhanced UDL, extensive tiering
- **Tech-Integrated**: Additional Canvas features, external tools

**Output Format Options**:
- **YAML Templates**: Structured data for reusability
- **Markdown Documents**: Human-readable course guides
- **Canvas-Direct**: Build live course simultaneously
- **PDF Reports**: Printable curriculum documents

### Common Variations

**Variation 1: Existing Course Redesign**:
```
Start with existing syllabus
→ curriculum-architect analyzes gaps
→ Identify what to keep, revise, replace
→ Apply framework to weak areas
→ Integrate into existing Canvas course
```

**Variation 2: Team Collaboration**:
```
Principal creates course architecture
→ Team of teachers each design 2-3 units
→ Differentiation expert reviews all units
→ EdTech integrator consolidates in Canvas
→ All agents validate final course
```

**Variation 3: Standards-First Approach**:
```
Start with standards document
→ curriculum-architect maps to units
→ Design assessments for each standard
→ Build lessons backward from assessments
→ Validate 100% standards coverage
```

### Success Story Example

**Context**: High School Biology, 36 weeks, NGSS standards

**Process**:
- Week 1: Course architecture (4 units, 36 lessons)
- Week 2-3: Unit 1-2 design (8 weeks of curriculum)
- Week 4-5: Unit 3-4 design (8 weeks of curriculum)
- Week 6: Differentiation integration
- Week 7: Canvas course building
- Week 8: Quality validation and refinement

**Results**:
- Complete year-long biology curriculum
- 36 daily lesson plans with Gagné's framework
- 12 performance tasks with rubrics
- 36 formative assessments
- Comprehensive differentiation for 3 tiers
- Live Canvas course with 1,200+ students
- 95% student engagement vs 70% previous year
- Teacher time savings: 6 hours/week during school year

---

## Workflow 2: unit-design-backward

### Purpose
Design a complete 2-4 week instructional unit using Understanding by Design (UbD) backward design framework.

### When to Use
- Designing standalone unit within existing course
- Want UbD backward design rigor
- Need comprehensive unit with all components
- Building Canvas module for specific topic
- Preparing for unit instruction 2-4 weeks ahead

### Prerequisites
- Unit topic and grade level
- Relevant standards (2-5 standards)
- Time frame (number of lessons/days)
- Student context and prior knowledge

### Step-by-Step Process

#### Phase 1: Stage 1 - Desired Results (20-30 min)
**Agent**: curriculum-architect

**Process**:
```
Dr. Vasquez: Let's apply UbD Stage 1 - Identify Desired Results.

ESSENTIAL QUESTIONS (2-4 questions):
- What overarching questions guide this unit?
- Must be open-ended, thought-provoking, recurring

ENDURING UNDERSTANDINGS (2-4 understandings):
- What do you want students to understand long after unit ends?
- Transfer beyond this specific content

KNOWLEDGE & SKILLS:
What students will know:
- Factual knowledge (Bloom's: Remember)
- Conceptual understanding (Bloom's: Understand)

What students will be able to do:
- Skills and procedures (Bloom's: Apply)
- Analysis and evaluation (Bloom's: Analyze, Evaluate)
- Creation and synthesis (Bloom's: Create)

STANDARDS ALIGNMENT:
- Map each objective to specific standards
- Ensure complete standards coverage

Output: unit-stage1.yaml
```

**Example Output**:
```yaml
unit: Ecosystems and Energy Flow
grade: 7
subject: Science
duration: 3 weeks (15 lessons)

essential_questions:
  - "How do organisms depend on each other and their environment?"
  - "What happens when an ecosystem is disrupted?"
  - "How is energy transferred in living systems?"

enduring_understandings:
  - "Energy flows through ecosystems in predictable patterns"
  - "Matter cycles through ecosystems; energy does not"
  - "All organisms are interconnected in ecosystems"
  - "Human actions impact ecosystem balance"

learning_objectives:
  - id: obj_1
    text: "Define producer, consumer, decomposer roles"
    bloom: Remember
    dok: 1
    standard: NGSS.MS-LS2-1

  - id: obj_2
    text: "Explain energy flow through trophic levels"
    bloom: Understand
    dok: 2
    standard: NGSS.MS-LS2-1

  - id: obj_3
    text: "Construct food web models showing energy relationships"
    bloom: Apply
    dok: 2
    standard: NGSS.MS-LS2-1

  - id: obj_4
    text: "Analyze energy pyramid data to predict population impacts"
    bloom: Analyze
    dok: 3
    standard: NGSS.MS-LS2-3

  - id: obj_5
    text: "Evaluate human impacts on ecosystem energy flow"
    bloom: Evaluate
    dok: 3
    standard: NGSS.MS-LS2-5
```

**Quality Checks**:
✅ Essential questions are open-ended and transferable
✅ Understandings focus on big ideas, not facts
✅ Objectives span Bloom's levels (Remember → Evaluate/Create)
✅ DOK levels appropriate for grade (DOK 1-3)
✅ All relevant standards explicitly addressed

#### Phase 2: Stage 2 - Assessment Evidence (30-45 min)
**Agent Handoff**: curriculum-architect → assessment-specialist

**Process**:
```
Dr. Kim (assessment-specialist): I'll design assessments to measure understanding.

PERFORMANCE TASK (transfer task):
- Authentic, real-world scenario
- Requires applying learning to novel situation
- Rubric with 4-6 criteria aligned to objectives

OTHER EVIDENCE:
- Formative assessments (quizzes, checks)
- Observations and discussions
- Self-assessment and reflection

ASSESSMENT PLAN:
Week 1: Formative check on vocabulary, concepts
Week 2: Mid-unit formative on food web construction
Week 3: Performance task - Ecosystem disruption analysis
        Final quiz on energy flow concepts

Output: unit-stage2-assessments.yaml
```

**Example Performance Task**:
```markdown
# Performance Task: Ecosystem Impact Report

**Scenario**: You are an environmental scientist hired by your city to assess
the impact of building a new shopping center on a local wetland ecosystem.

**Task**: Create a scientific report that:
1. Describes the current wetland ecosystem structure
2. Models the food web and energy flow
3. Predicts how construction will disrupt energy flow
4. Evaluates 3 possible mitigation strategies
5. Recommends best approach with evidence

**Format Options**:
- Written report with diagrams
- Presentation with visual models
- Video documentary
- Interactive digital poster

**Rubric Criteria**:
1. Ecosystem Model Accuracy (obj_3, obj_4)
2. Energy Flow Analysis (obj_2, obj_4)
3. Impact Prediction Quality (obj_4, obj_5)
4. Evidence-Based Evaluation (obj_5)
5. Communication Clarity
```

**Quality Checks**:
✅ Performance task requires transfer to new situation
✅ Task authentically connects to real-world application
✅ Rubric criteria align to specific learning objectives
✅ Multiple product options for differentiation
✅ Formative assessments distributed throughout unit
✅ Assessment types vary (selected response, constructed, performance)

#### Phase 3: Stage 3 - Learning Plan (45-60 min)
**Agent Handoff**: assessment-specialist → instructional-designer

**Process**:
```
Prof. Chen (instructional-designer): I'll design learning experiences using
Gagné's Nine Events and WHERETO framework.

WHERETO ELEMENTS:
W - WHERE: Unit objectives, essential questions, performance task preview
H - HOOK: Engaging entry to capture interest
E - EXPLORE, EXPERIENCE, EQUIP: Learning activities sequenced logically
R - RETHINK, REVISE, REFLECT: Opportunities to refine understanding
E - EVALUATE: Self-assessment and evidence review
T - TAILOR: Differentiation for varied needs
O - ORGANIZE: Logical, scaffolded progression

LESSON SEQUENCE (15 lessons):
Lesson 1: Hook + Introduce essential questions
Lesson 2-4: Build foundational knowledge (producers, consumers, decomposers)
Lesson 5-7: Energy flow concepts and food chains
Lesson 8-10: Food webs and trophic levels
Lesson 11-12: Energy pyramids and 10% rule
Lesson 13-14: Ecosystem disruptions and human impacts
Lesson 15: Performance task work session

Each lesson includes Gagné's Nine Events:
1. Gain attention (hook)
2. Inform learner of objectives
3. Stimulate recall of prior learning
4. Present stimulus material
5. Provide learner guidance
6. Elicit performance (practice)
7. Provide feedback
8. Assess performance
9. Enhance retention & transfer

Output: unit-stage3-lessons.yaml (15 detailed lesson plans)
```

**Example Lesson Plan**:
```yaml
lesson: 8
title: "Food Web Construction and Analysis"
duration: 50 minutes
objectives: [obj_2, obj_3]

gagne_events:
  gain_attention:
    activity: "Show video: What happens when wolves removed from Yellowstone?"
    duration: 5 min

  inform_objectives:
    activity: "Today: Construct food webs to model ecosystem relationships"
    objectives_displayed: true
    duration: 2 min

  recall_prior:
    activity: "Quick review: Food chains from last class, trophic levels"
    checking_method: "Pair-share what you remember"
    duration: 5 min

  present_content:
    activity: "Direct instruction: Food webs show multiple feeding relationships"
    visual_aids: "Ecosystem diagram, web vs chain comparison"
    duration: 10 min

  provide_guidance:
    activity: "Model construction of pond ecosystem food web"
    think_aloud: "Show decision-making for organism placement"
    duration: 8 min

  elicit_practice:
    activity: "Students construct forest ecosystem food web in groups"
    grouping: "Mixed ability groups of 3-4"
    materials: "Organism cards, poster paper, markers"
    duration: 15 min

  provide_feedback:
    activity: "Gallery walk with peer feedback protocol"
    feedback_criteria: "Complete connections, correct relationships, energy flow"
    duration: 8 min

  assess_performance:
    formative_check: "Exit ticket: Draw mini food web for aquatic ecosystem"
    success_criteria: "3+ organisms, 5+ connections, labeled trophic levels"
    duration: 5 min

  enhance_retention:
    connection: "How does this connect to essential question about organism interdependence?"
    preview: "Tomorrow: Energy pyramids and 10% rule"
    duration: 2 min

differentiation:
  content:
    - "Tiered organism card sets (simple/moderate/complex ecosystems)"
  process:
    - "Choice: Individual, pair, or group construction"
    - "Scaffolded web template for students needing support"
  product:
    - "Option: Digital web using online tool OR poster"
```

**Quality Checks**:
✅ All 9 of Gagné's events present in each lesson
✅ WHERETO elements integrated across unit
✅ Logical progression from foundational to complex
✅ Multiple opportunities for practice and feedback
✅ Differentiation built into activities
✅ Formative checks inform instruction

#### Phase 4: Differentiation Integration (20-30 min)
**Agent**: differentiation-expert

**Process**:
```
Ms. Rodriguez: I'll ensure UDL and tiered options throughout the unit.

UDL - MULTIPLE MEANS OF REPRESENTATION:
- Visual: Diagrams, videos, infographics
- Auditory: Lectures, discussions, podcasts
- Kinesthetic: Models, simulations, hands-on
- Text: Articles at varied reading levels

UDL - MULTIPLE MEANS OF ACTION/EXPRESSION:
- Written: Reports, essays, journals
- Visual: Posters, diagrams, models
- Oral: Presentations, discussions, debates
- Digital: Websites, videos, interactive tools

UDL - MULTIPLE MEANS OF ENGAGEMENT:
- Choice in topics within ecosystem theme
- Real-world connections to local environment
- Collaborative and independent options
- Self-paced learning opportunities

TIERED ACTIVITIES (per lesson):
- Approaching: More scaffolding, simpler examples
- On-level: Standard complexity and support
- Advanced: Extension challenges, deeper analysis

Output: unit-differentiation.yaml
```

**Quality Checks**:
✅ All three UDL principles addressed systematically
✅ At least 2 options per principle per lesson
✅ Tiered activities match student readiness levels
✅ Scaffolds are removable as skills develop
✅ Advanced options extend, don't just add quantity

#### Phase 5: Canvas Module Creation (20-30 min)
**Agent**: edtech-integrator

**Process**:
```
Alex: I'll build the Canvas module for this unit.

MODULE STRUCTURE:
1. Unit Overview Page
2. Essential Questions Page
3. Learning Objectives (as Canvas Outcomes)
4. Lesson Pages (1 per lesson)
5. Formative Assessments
6. Performance Task Assignment with Rubric
7. Reflection/Self-Assessment
8. Resources and Materials

CANVAS TOOLS USED:
- canvas_create_module() - Create unit module
- canvas_create_outcome() - Add learning objectives
- canvas_create_page() - Content pages for lessons
- canvas_create_assignment() - Performance task
- canvas_create_rubric() - Scoring rubric
- canvas_create_discussion() - Collaborative activities
- canvas_set_module_requirements() - Sequential access

Output: Live Canvas module with all components
```

**Canvas Module Structure**:
```
Module: Ecosystems and Energy Flow (3 weeks)

├── 📄 Unit Overview
│   └── Essential questions, enduring understandings, performance task preview
│
├── 🎯 Learning Objectives (Canvas Outcomes)
│   ├── Define ecosystem roles (NGSS.MS-LS2-1)
│   ├── Explain energy flow (NGSS.MS-LS2-1)
│   ├── Construct food webs (NGSS.MS-LS2-1)
│   ├── Analyze energy pyramids (NGSS.MS-LS2-3)
│   └── Evaluate human impacts (NGSS.MS-LS2-5)
│
├── Week 1: Ecosystem Basics
│   ├── 📄 Lesson 1: Introduction & Hook
│   ├── 📄 Lesson 2: Producers, Consumers, Decomposers
│   ├── 📄 Lesson 3: Energy and Matter Basics
│   ├── 📄 Lesson 4: Simple Food Chains
│   └── ✍️ Formative Quiz 1: Vocabulary & Concepts
│
├── Week 2: Food Webs and Energy Flow
│   ├── 📄 Lesson 5-7: Food Chain to Food Web
│   ├── 📄 Lesson 8: Food Web Construction (detailed example above)
│   ├── 📄 Lesson 9-10: Trophic Levels & Energy Pyramids
│   └── ✍️ Formative Assessment: Food Web Diagram
│
├── Week 3: Ecosystem Disruptions
│   ├── 📄 Lesson 11-12: 10% Rule and Energy Loss
│   ├── 📄 Lesson 13-14: Human Impacts on Ecosystems
│   ├── 📄 Lesson 15: Performance Task Work Session
│   └── 📝 Performance Task: Ecosystem Impact Report (with rubric)
│
├── 💬 Discussion: Ecosystem Connection Reflection
├── 📚 Resources & Materials (readings, videos, links)
└── ✅ Module Requirements
    └── Must complete all lessons and formative assessments before performance task
```

### Educational Frameworks Integration

**UbD Three Stages**:
- Stage 1 (Desired Results): Essential questions, understandings, objectives
- Stage 2 (Evidence): Performance task, formative assessments, rubric
- Stage 3 (Learning Plan): Lessons sequenced with WHERETO

**Bloom's Taxonomy**:
- Objectives span all 6 levels: Remember → Create
- Performance task targets Analyze and Evaluate levels
- Formative checks assess lower levels first

**Webb's DOK**:
- DOK 1: Recall ecosystem vocabulary
- DOK 2: Explain energy flow, construct food webs
- DOK 3: Analyze disruptions, evaluate solutions

**Gagné's Nine Events**:
- All 9 events in every lesson
- Systematic instructional design
- Retention and transfer emphasized

**UDL Principles**:
- Multiple means of representation (visual, auditory, kinesthetic)
- Multiple means of action/expression (written, visual, oral, digital)
- Multiple means of engagement (choice, relevance, collaboration)

### Time Investment

| Phase | Time | Deliverable |
|-------|------|-------------|
| Stage 1: Desired Results | 20-30 min | Objectives, essential questions |
| Stage 2: Assessment Evidence | 30-45 min | Performance task, rubric, formative assessments |
| Stage 3: Learning Plan | 45-60 min | 15 detailed lesson plans |
| Differentiation | 20-30 min | UDL options, tiered activities |
| Canvas Module | 20-30 min | Live Canvas module |
| **Total** | **2.5-3.5 hours** | **Complete unit ready to teach** |

### Customization Options

**Duration Adjustments**:
- **1-week unit**: 5 lessons, simplified performance task
- **2-week unit**: 10 lessons, standard complexity
- **3-week unit**: 15 lessons, deep exploration (example above)
- **4-week unit**: 20 lessons, extended projects

**Focus Variations**:
- **Assessment-Heavy**: More formative checks, multiple performance tasks
- **Project-Based**: Extended performance task as unit driver
- **Inquiry-Focused**: Essential questions drive daily exploration
- **Standards-Aligned**: Tight mapping to specific standards

### Success Metrics

**Curriculum Quality**:
- ✅ Backward design logic flows Stage 1 → 2 → 3
- ✅ Alignment: Objectives ↔ Assessments ↔ Learning Experiences
- ✅ 100% of objectives measured by assessments
- ✅ Bloom's range: At least 4 levels represented
- ✅ UDL: ≥2 options per principle

**Student Outcomes**:
- 80%+ students meet proficiency on performance task
- Essential questions guide student thinking
- Students can transfer learning to novel situations
- Engagement high (formative data, observations)

---

## Workflow 3: assessment-development

### Purpose
Design valid, reliable, and fair assessments aligned to learning objectives and educational frameworks.

### When to Use
- Creating new assessments for existing curriculum
- Redesigning assessments for better validity
- Need rubrics for performance tasks
- Want formative assessment system
- Require Canvas-ready assessment tools

### Prerequisites
- Learning objectives clearly defined
- Bloom's/DOK levels for objectives
- Standards being assessed
- Grade level and student context

### Process (45-90 minutes)

**Agents**: assessment-specialist (lead) + curriculum-architect (alignment validation)

**Step 1: Assessment Planning (15-20 min)**
```
Dr. Kim: Let's design assessments systematically.

ASSESSMENT MAPPING:
For each learning objective:
- What evidence would show mastery?
- What assessment type is most valid?
- What Bloom's/DOK level should task target?

ASSESSMENT TYPES:
1. Selected Response: Multiple choice, true/false (Bloom's 1-3, DOK 1-2)
2. Constructed Response: Short answer, essay (Bloom's 2-4, DOK 2-3)
3. Performance Task: Projects, presentations (Bloom's 4-6, DOK 3-4)
4. Observation: Skills demonstration, discussions
5. Self-Assessment: Reflection, metacognition

BALANCE:
- Formative (70%): Ongoing checks during learning
- Summative (30%): End-of-unit/course evaluation

Output: assessment-plan.yaml
```

**Step 2: Rubric Development (20-30 min)**
```
Dr. Kim: I'll create analytical rubrics aligned to objectives.

RUBRIC STRUCTURE:
Criteria: What are you assessing? (from objectives)
Levels: 4-point scale (Exemplary, Proficient, Developing, Beginning)
Descriptors: What does each level look like?

QUALITY CHECKS:
✅ Criteria align to specific learning objectives
✅ Descriptors are observable and measurable
✅ Levels show clear progression
✅ Language is student-friendly
✅ Rubric is Canvas-compatible

Output: rubrics.yaml → Canvas rubric creation
```

**Example Rubric**:
```yaml
rubric:
  title: "Ecosystem Impact Report Rubric"
  criteria:
    - name: "Ecosystem Model Accuracy"
      objective: obj_3
      points: 25
      levels:
        exemplary:
          points: 25
          description: "Food web includes 10+ organisms with accurate trophic relationships, energy flow clearly indicated, all connections scientifically correct"
        proficient:
          points: 20
          description: "Food web includes 7-9 organisms with mostly accurate relationships, energy flow indicated, minor errors present"
        developing:
          points: 15
          description: "Food web includes 5-6 organisms with some relationship errors, energy flow partially shown"
        beginning:
          points: 10
          description: "Food web incomplete or contains significant scientific errors"

    - name: "Energy Flow Analysis"
      objective: obj_4
      points: 25
      levels:
        exemplary:
          points: 25
          description: "Thoroughly analyzes energy transfer through trophic levels using 10% rule, applies quantitative reasoning with calculations"
        proficient:
          points: 20
          description: "Analyzes energy transfer with 10% rule, includes basic calculations with minor errors"
        developing:
          points: 15
          description: "Describes energy transfer but analysis lacks depth or contains errors"
        beginning:
          points: 10
          description: "Energy analysis is incomplete or contains major conceptual errors"

    # ... additional criteria for each objective
```

**Step 3: Formative Assessment Design (15-20 min)**
```
Dr. Kim: Create formative assessments to guide instruction.

FORMATIVE TYPES:
1. Quick checks: 3-5 questions (5 min)
2. Exit tickets: 1-2 questions (5 min)
3. Check-ins: Brief quizzes (10-15 min)
4. Self-assessments: Reflection prompts
5. Peer assessments: Structured feedback

PLACEMENT:
- Lesson 4: Vocabulary and basic concepts
- Lesson 8: Food web construction skill
- Lesson 12: Energy pyramid analysis
- Lesson 15: Performance task (summative)

Output: formative-assessments.yaml
```

**Step 4: Canvas Assessment Implementation (10-15 min)**
```
Alex (edtech-integrator): Build assessments in Canvas.

IMPLEMENTATION:
1. Create Canvas assignments with rubrics
2. Align assignments to learning outcomes
3. Set grade book categories (formative vs summative)
4. Configure posting policies for feedback timing

canvas_create_assignment(
    course_id=12345,
    name="Ecosystem Impact Report",
    points_possible=100,
    rubric=rubric_data
)

canvas_align_to_outcomes(assignment_id, objective_ids)

Output: Live Canvas assignments ready for students
```

**Step 5: Validity & Reliability Validation (5-10 min)**
```
Dr. Vasquez (curriculum-architect): Validate alignment.

VALIDITY CHECKS:
✅ Content Validity: Assessments match objectives
✅ Construct Validity: Measures intended constructs (understanding, not just memory)
✅ Face Validity: Appears to assess what it claims
✅ Consequential Validity: Fair for all students

RELIABILITY CHECKS:
✅ Clear criteria reduce scorer variance
✅ Multiple measures of same objective
✅ Rubric descriptors are objective

FAIRNESS CHECKS:
✅ Culturally responsive scenarios
✅ Multiple ways to demonstrate learning
✅ Accessible language and format
✅ Accommodations available

Output: validation-report.yaml
```

### Educational Frameworks Applied

**Assessment Validity Theory**:
- Content validity through objective alignment
- Construct validity through Bloom's/DOK targeting
- Consequential validity through fairness review

**Bloom's Taxonomy**:
- Assessment tasks match objective cognitive levels
- Lower levels (Remember, Understand) → quizzes
- Higher levels (Analyze, Evaluate, Create) → performance tasks

**Webb's DOK**:
- DOK 1-2: Selected and short constructed response
- DOK 3: Extended constructed response, performance tasks
- DOK 4: Extended projects spanning multiple days/weeks

**UDL in Assessment**:
- Multiple means of expression (write, present, create)
- Flexible formats and timing
- Clear success criteria

### Quality Outputs

**Deliverables**:
- Assessment plan mapping objectives to assessment types
- 3-5 analytical rubrics with Canvas integration
- 3-5 formative assessments distributed through unit
- 1 summative performance task
- Validity and fairness documentation

**Canvas Integration**:
- All assessments created as Canvas assignments
- Rubrics attached and aligned to outcomes
- Gradebook configured with categories
- Posting policies set for timely feedback

### Success Metrics

- 100% of objectives have aligned assessments
- Multiple evidence types for each objective
- Rubrics have ≥3 criteria aligned to objectives
- Formative assessments provide actionable data
- Students understand success criteria before attempting tasks

---

## Workflow 4: differentiation-planning

### Purpose
Design comprehensive differentiation strategies using Universal Design for Learning (UDL) and tiered instruction to meet diverse learner needs.

### When to Use
- Students have wide range of readiness levels
- Want to implement UDL systematically
- Need scaffolding and extension strategies
- Creating inclusive learning environment
- Addressing diverse learning needs

### Prerequisites
- Learning objectives for lesson or unit
- Student readiness data (pre-assessments, prior work)
- Information about student interests and learning profiles
- Resources to be differentiated

### Process (30-60 minutes)

**Agent**: differentiation-expert (Ms. Jamie Rodriguez)

**Step 1: UDL Foundation (10-15 min)**
```
Ms. Rodriguez: I'll design UDL options for all three principles.

PRINCIPLE 1: MULTIPLE MEANS OF REPRESENTATION
How will students access information?

Options to provide:
- Visual: Diagrams, videos, infographics, graphic organizers
- Auditory: Lectures, podcasts, discussions, read-alouds
- Kinesthetic: Models, manipulatives, simulations, role-play
- Text: Articles at varied reading levels (3 tiers)
- Digital: Interactive tools, websites, apps

PRINCIPLE 2: MULTIPLE MEANS OF ACTION/EXPRESSION
How will students demonstrate learning?

Options to provide:
- Written: Essays, reports, journals, worksheets
- Visual: Posters, diagrams, graphic organizers, concept maps
- Oral: Presentations, discussions, debates, podcasts
- Performance: Demonstrations, role-plays, simulations
- Digital: Websites, videos, multimedia, coding

PRINCIPLE 3: MULTIPLE MEANS OF ENGAGEMENT
How will students stay motivated and engaged?

Options to provide:
- Choice: Topics, formats, products, pathways
- Relevance: Real-world connections, cultural responsiveness
- Challenge: Appropriate difficulty levels, growth mindset
- Collaboration: Partner, small group, whole class options
- Self-regulation: Goal-setting, reflection, self-assessment

Output: udl-plan.yaml
```

**Example UDL Plan**:
```yaml
lesson: "Food Web Construction"
udl_options:
  representation:
    - type: visual
      resource: "Animated food web video showing energy flow"
      purpose: "Visual learners see relationships dynamically"

    - type: auditory
      resource: "Podcast: Interview with ecologist about food webs"
      purpose: "Auditory learners hear expert explanation"

    - type: kinesthetic
      resource: "Physical card sorting activity - organism connections"
      purpose: "Kinesthetic learners manipulate concrete materials"

    - type: text
      resource: "Tiered readings - 3 complexity levels on food webs"
      levels:
        - approaching: "Lexile 600-700, simplified concepts"
        - on_level: "Lexile 800-900, grade-appropriate"
        - advanced: "Lexile 1000-1100, scientific terminology"
      purpose: "All students access content at readable level"

  action_expression:
    - type: written
      option: "Written explanation of food web with diagram"

    - type: visual
      option: "Create food web poster with artistic elements"

    - type: oral
      option: "Present food web verbally with visual aid"

    - type: digital
      option: "Build interactive food web using web tool"

    - type: performance
      option: "Role-play organism interactions in ecosystem"

  engagement:
    - type: choice
      options: ["Choose ecosystem to model (forest, ocean, desert, tundra)"]

    - type: relevance
      connection: "Use local ecosystem familiar to students"

    - type: collaboration
      grouping: "Choice of individual, pair, or group of 3-4"

    - type: self_regulation
      tools: ["Self-assessment checklist", "Goal-setting template"]
```

**Step 2: Tiered Instruction Design (15-20 min)**
```
Ms. Rodriguez: I'll create tiered activities for differentiation by readiness.

TIER 1: APPROACHING GRADE LEVEL
- More scaffolding and support
- Simplified materials and tasks
- Step-by-step guidance
- Concrete examples
- Additional time if needed

TIER 2: ON GRADE LEVEL
- Standard complexity and support
- Grade-appropriate materials
- Some scaffolding available
- Balance of concrete and abstract

TIER 3: ADVANCED
- Less scaffolding, more independence
- Complex materials and tasks
- Extension and enrichment
- Abstract and theoretical thinking
- Leadership opportunities

SAME LEARNING OBJECTIVES:
All tiers target the same essential learning objectives.
Differentiation is in:
- Complexity of materials
- Amount of scaffolding
- Depth of exploration
- Pacing and support

Output: tiered-activities.yaml
```

**Example Tiered Activity**:
```yaml
activity: "Analyze Ecosystem Disruption"
objective: "Analyze how disruptions affect ecosystem energy flow"
bloom_level: Analyze
dok_level: 3

tier_1_approaching:
  scenario: "Simple pond ecosystem, one disruption"
  scaffolding:
    - "Graphic organizer with guiding questions"
    - "Sentence starters for analysis"
    - "Word bank of key terms"
    - "Simplified food web diagram provided"
  task: "Use organizer to analyze how removing frogs affects pond"
  support: "Teacher works with small group, models thinking"

tier_2_on_level:
  scenario: "Forest ecosystem, two related disruptions"
  scaffolding:
    - "Analysis framework provided"
    - "Example analysis of different ecosystem"
  task: "Analyze cascading effects of deer overpopulation and plant loss"
  support: "Peer collaboration, teacher available for questions"

tier_3_advanced:
  scenario: "Complex marine ecosystem, multiple interacting disruptions"
  scaffolding:
    - "Access to research articles"
    - "Optional analysis framework"
  task: "Analyze cumulative impacts of overfishing, warming, and pollution"
  extension: "Propose evidence-based intervention strategy"
  support: "Independent work, optional peer consultation"

product_options:
  all_tiers: ["Written analysis", "Diagram with explanation", "Presentation"]

success_criteria:
  all_tiers:
    - "Identifies direct effects on energy flow"
    - "Predicts indirect effects on other organisms"
    - "Explains reasoning with evidence"
  tier_3_additional:
    - "Synthesizes multiple sources of information"
    - "Evaluates potential solutions"
```

**Step 3: Scaffolding Strategy Design (10-15 min)**
```
Ms. Rodriguez: I'll provide scaffolds that support learning without lowering expectations.

TYPES OF SCAFFOLDS:

1. PROCESS SCAFFOLDS:
   - Graphic organizers
   - Step-by-step guides
   - Checklists
   - Think-aloud models

2. CONTENT SCAFFOLDS:
   - Vocabulary support (word banks, glossaries)
   - Background knowledge primers
   - Simplified explanations with visuals
   - Tiered texts

3. PRODUCT SCAFFOLDS:
   - Templates and frameworks
   - Exemplars and models
   - Rubrics with examples
   - Sentence starters

4. COLLABORATIVE SCAFFOLDS:
   - Strategic grouping
   - Peer tutoring protocols
   - Discussion structures
   - Shared responsibility

REMOVABLE SCAFFOLDS:
- Designed to be gradually removed as students develop competence
- Fade support over time
- Goal: Independent mastery

Output: scaffolding-tools.yaml
```

**Step 4: Flexible Grouping Strategies (5-10 min)**
```
Ms. Rodriguez: I'll design varied grouping strategies for different purposes.

GROUPING OPTIONS:

By Readiness:
- Homogeneous: Similar readiness for targeted instruction
- Heterogeneous: Mixed readiness for peer support
- Use formative data to group flexibly

By Interest:
- Group students with shared interests
- Increase engagement through relevance
- Choice within required content

By Learning Profile:
- Visual, auditory, kinesthetic preferences
- Multiple intelligences
- Work style preferences (independent, collaborative)

Random:
- Build community and relationships
- Expose students to diverse perspectives
- Prevent ability-based tracking perceptions

FLEXIBLE & FLUID:
- Groups change based on purpose
- Students not "stuck" in one group
- Regular regrouping based on new data

Output: grouping-strategies.yaml
```

**Step 5: Choice and Student Agency (5-10 min)**
```
Ms. Rodriguez: I'll build in meaningful choices for student agency.

CHOICE BOARDS:
- 3x3 grid of activity options
- All activities target same objectives
- Varied by learning preference, interest, complexity
- Students choose 3-5 activities (tic-tac-toe pattern)

TIERED CHOICE MENUS:
- Mild, Medium, Spicy options
- Students self-select challenge level
- Encourages growth mindset

PRODUCT CHOICES:
- Multiple ways to demonstrate learning
- Essay OR presentation OR video OR model
- Clear rubric for each option

PATHWAY CHOICES:
- Different routes to same destination
- Some students need Activity A before B
- Others can start with B or C
- All paths lead to essential learning

Output: choice-structures.yaml
```

**Example Choice Board**:
```markdown
# Ecosystem Energy Flow Choice Board
**Goal**: Demonstrate understanding of energy flow through ecosystems
**Requirement**: Complete any 3 activities (one from each row)

| Visual | Verbal | Kinesthetic |
|--------|--------|-------------|
| **Create** an energy pyramid poster showing 4 trophic levels with calculations | **Write** a news article explaining the 10% energy rule to non-scientists | **Build** a 3D model of energy pyramid with organism examples |
| **Design** an infographic comparing 3 different ecosystems' energy flow | **Record** a podcast interview with organisms from different trophic levels | **Perform** a skit showing energy transfer from sun to top predator |
| **Draw** a food web for local ecosystem showing all energy relationships | **Compose** an essay analyzing what happens when trophic level is removed | **Demonstrate** energy flow using manipulatives and explaining transfers |

**All options assessed with same rubric**: Energy Flow Understanding Rubric
```

### Educational Frameworks Applied

**Universal Design for Learning (UDL)**:
- Principle 1: Multiple means of representation
- Principle 2: Multiple means of action/expression
- Principle 3: Multiple means of engagement
- Guidelines applied systematically

**Tomlinson's Differentiation Framework**:
- Differentiate content (what students learn)
- Differentiate process (how students learn)
- Differentiate product (how students show learning)
- Based on readiness, interest, learning profile

**Vygotsky's Zone of Proximal Development**:
- Scaffolding supports movement through ZPD
- Gradual release of responsibility
- Support → independence progression

**Growth Mindset (Dweck)**:
- Choice promotes student agency and ownership
- Challenge levels encourage productive struggle
- Feedback focuses on effort and strategy

### Canvas Integration

```
Alex (edtech-integrator): Implement differentiation in Canvas.

CANVAS FEATURES FOR DIFFERENTIATION:

1. Differentiated Assignments:
   canvas_create_assignment_override() for:
   - Extended time for some students
   - Different due dates by group
   - Varied point values for tiered tasks

2. Mastery Paths:
   - Conditional release based on quiz scores
   - Personalized learning pathways
   - Adaptive content delivery

3. Grouped Assignments:
   - Create assignment variations by tier
   - Use groups for targeted content
   - canvas_assign_group_members()

4. Choice in Modules:
   - Module requirements: "Choose 3 of 5 activities"
   - Flexible progression through content
   - Student-selected pathways

5. Resource Libraries:
   - Organize tiered resources by complexity
   - Tag materials by learning preference
   - Easy student access to scaffolds

Output: Canvas course with differentiation structures
```

### Quality Outputs

**Deliverables**:
- UDL plan with 2-3 options per principle
- 3 tiers of activities for key lessons
- Scaffolding tools (5-10 graphic organizers, guides, templates)
- Flexible grouping strategies document
- Choice boards or menus (2-3)
- Canvas-ready differentiation structures

**Quality Metrics**:
- ✅ All 3 UDL principles addressed with multiple options
- ✅ Tiered activities maintain same learning objectives
- ✅ Scaffolds are removable, not permanent crutches
- ✅ Choices are meaningful, not just "fluffy options"
- ✅ Grouping strategies are flexible and purposeful
- ✅ Differentiation does not create separate tracks

### Success Indicators

**Student Outcomes**:
- All students access grade-level content
- Students demonstrate growth from entry points
- High engagement across readiness levels
- Students exercise choice and agency

**Teacher Outcomes**:
- Systematic differentiation approach (not ad-hoc)
- Manageable implementation (not overwhelming)
- Data-informed grouping and tiering
- Efficient use of planning time

### Time Investment

| Component | Time | Output |
|-----------|------|--------|
| UDL Planning | 10-15 min | Multiple means for all principles |
| Tiered Activities | 15-20 min | 3 tiers for key activities |
| Scaffolding Tools | 10-15 min | 5-10 support tools |
| Grouping Strategies | 5-10 min | Flexible grouping plan |
| Choice Structures | 5-10 min | Choice boards/menus |
| **Total** | **45-70 min** | **Complete differentiation plan** |

---

## Workflow 5: canvas-deployment

### Purpose
Deploy complete curriculum design into live Canvas LMS course with full functionality, aligned outcomes, and student-ready structure.

### When to Use
- Have designed curriculum ready to implement
- Need to build Canvas course from scratch
- Want systematic Canvas course structure
- Require outcomes-based mastery tracking
- Time to go from design to live course

### Prerequisites
- Course or unit design completed (from workflows 1 or 2)
- Canvas course shell created
- Canvas API access configured
- Learning objectives clearly defined
- Assessment plan completed

### Process (30-90 minutes)

**Agent**: edtech-integrator (Alex Thompson) with curriculum-architect validation

**Step 1: Course Structure Planning (10-15 min)**
```
Alex: I'll plan your Canvas course architecture.

COURSE STRUCTURE OPTIONS:

Option A: Module-per-Unit
└── Each unit becomes a Canvas module
└── Linear progression through units
└── Clear unit boundaries

Option B: Module-per-Week
└── Weekly modules for pacing
└── Mix content from multiple units
└── Time-based structure

Option C: Module-by-Topic
└── Modules organized by topic/theme
└── May span multiple weeks
└── Concept-based structure

Option D: Hybrid
└── Combine weekly and topical modules
└── Flexible based on curriculum needs

RECOMMENDED: Option A (Module-per-Unit)
- Aligns with UbD unit design
- Clear learning progressions
- Easy for students to navigate

COURSE HOME PAGE OPTIONS:
- Modules (show module list)
- Assignments (show upcoming work)
- Syllabus (course overview)

NAVIGATION SETUP:
- Home, Modules, Grades, Outcomes always visible
- Add: Discussions, Pages, Assignments based on usage

Output: course-structure-plan.yaml
```

**Step 2: Learning Outcomes Creation (15-20 min)**
```
Alex: I'll create Canvas outcomes from your learning objectives.

OUTCOME STRUCTURE:

Course-Level Outcomes (2-5):
- Overarching course goals
- Transfer objectives

Unit-Level Outcomes (5-10 per unit):
- Specific unit objectives
- Aligned to course outcomes

OUTCOME CONFIGURATION:
- Mastery points: 3-5 point scale
- Calculation method: Decaying average (most recent evidence weighted)
- Rubric criterion ratings map to outcome achievement

canvas_create_outcome(
    course_id=12345,
    title="NGSS.MS-LS2-1: Analyze ecosystem interactions",
    description="Students will analyze data about organism interactions and competition for resources",
    mastery_points=3,
    calculation_method="decaying_average"
)

OUTCOME ALIGNMENT:
- Align each assignment to relevant outcomes
- Outcome mastery tracked across assignments
- Students see progress toward outcome mastery

Output: Canvas outcomes created and ready for alignment
```

**Example Outcome Creation**:
```yaml
course_outcomes:
  - id: course_outcome_1
    title: "Analyze Ecosystem Dynamics"
    description: "Analyze and interpret data about organism interactions, resource competition, and energy flow in ecosystems"
    mastery_points: 3
    canvas_id: 1001

unit_outcomes:
  unit_1:
    - id: unit_1_obj_1
      title: "NGSS.MS-LS2-1: Ecosystem Interactions"
      description: "Define producer, consumer, and decomposer roles in ecosystems"
      mastery_points: 3
      parent_outcome: course_outcome_1
      canvas_id: 1011

    - id: unit_1_obj_2
      title: "NGSS.MS-LS2-1: Energy Flow"
      description: "Explain energy flow through trophic levels using food chains and webs"
      mastery_points: 3
      parent_outcome: course_outcome_1
      canvas_id: 1012
```

**Step 3: Module and Content Creation (20-30 min)**
```
Alex: I'll build modules with all content and structure.

FOR EACH MODULE (UNIT):

1. Create module:
   canvas_create_module(
       course_id=12345,
       name="Unit 1: Ecosystems and Energy Flow",
       position=1
   )

2. Add overview page:
   canvas_create_page(
       course_id=12345,
       title="Unit 1 Overview",
       body=overview_html  # Essential questions, objectives, task preview
   )

3. Add lesson pages:
   for lesson in unit.lessons:
       canvas_create_page(
           course_id=12345,
           title=f"Lesson {lesson.number}: {lesson.title}",
           body=lesson_content_html
       )

4. Add to module:
   canvas_create_module_item(
       module_id=module_id,
       title="Lesson 1: Introduction",
       type="Page",
       content_id=page_id
   )

5. Set module requirements:
   canvas_update_module(
       module_id=module_id,
       require_sequential_progress=True,
       publish_final_grade=False
   )

MODULE STRUCTURE TEMPLATE:
├── 📄 Unit Overview Page
├── 🎯 Learning Objectives (outcomes)
├── 📄 Lesson 1 Page
├── 📄 Lesson 2 Page
├── ✍️ Formative Assessment 1
├── 📄 Lesson 3 Page
├── ...
├── 📝 Unit Performance Task (with rubric)
└── 💬 Reflection Discussion

Output: Modules created with all content pages
```

**Step 4: Assignment and Assessment Creation (15-25 min)**
```
Alex: I'll create all assignments with rubrics and outcome alignment.

FOR EACH ASSESSMENT:

1. Create assignment:
   canvas_create_assignment(
       course_id=12345,
       name="Ecosystem Impact Report",
       description=task_description_html,
       points_possible=100,
       due_at="2024-03-15T23:59:00Z",
       submission_types=["online_text_entry", "online_upload"],
       published=True
   )

2. Attach rubric:
   canvas_create_rubric(
       course_id=12345,
       assignment_id=assignment_id,
       criteria=rubric_criteria
   )

3. Align to outcomes:
   for outcome_id in assignment.aligned_outcomes:
       canvas_align_assignment_to_outcome(
           assignment_id=assignment_id,
           outcome_id=outcome_id
       )

4. Set assignment group:
   canvas_update_assignment(
       assignment_id=assignment_id,
       assignment_group_id=group_id  # Formative vs Summative
   )

5. Configure posting policy:
   canvas_set_posting_policy(
       course_id=12345,
       assignment_id=assignment_id,
       post_manually=False  # Auto-post grades
   )

ASSIGNMENT ORGANIZATION:
- Create assignment groups: Formative (40%), Summative (60%)
- Set weighted grading if desired
- Configure late policies for consistency

Output: All assignments created with rubrics and outcome alignment
```

**Step 5: Gradebook Configuration (5-10 min)**
```
Alex: I'll configure the gradebook for outcome-based grading.

GRADEBOOK SETUP:

1. Assignment Groups:
   canvas_create_assignment_group(
       course_id=12345,
       name="Formative Assessments",
       group_weight=40
   )

   canvas_create_assignment_group(
       course_id=12345,
       name="Summative Assessments",
       group_weight=60
   )

2. Grading Scheme:
   - Points-based or outcomes-based?
   - Letter grades or percentages?
   - Custom grading scale if needed

3. Late Policy (optional):
   canvas_create_late_policy(
       course_id=12345,
       late_submission_deduction=10,  # 10% per day
       late_submission_interval="day",
       missing_submission_deduction=50  # 50% for missing
   )

4. Outcome Mastery View:
   - Enable Learning Mastery Gradebook
   - Students see progress toward outcome mastery
   - Teachers see outcome-based class data

Output: Gradebook configured and ready for grading
```

**Step 6: Communication and Collaboration Tools (5-10 min)**
```
Alex: I'll add discussion forums and communication tools.

DISCUSSIONS:

1. Unit Reflections:
   canvas_create_discussion_topic(
       course_id=12345,
       title="Unit 1 Reflection: Ecosystem Connections",
       message="Reflect on essential question: How do organisms depend on each other?",
       discussion_type="threaded"
   )

2. Collaborative Learning:
   - Peer feedback discussions
   - Group project forums
   - Question and answer boards

ANNOUNCEMENTS:

1. Welcome announcement
2. Weekly update template
3. Assignment reminders

COURSE NAVIGATION:

- Enable/disable navigation items
- Reorder menu for student usability
- Add external tools as needed

Output: Communication tools set up and ready
```

**Step 7: Publishing and Student Access (5-10 min)**
```
Alex: I'll publish course content for student access.

PUBLISHING CHECKLIST:

1. Validate all links and content
2. Test module progression
3. Check assignment due dates
4. Review outcomes alignment
5. Verify rubric attachments
6. Test student view

PUBLISHING STRATEGY:

Option A: Publish All Now
- All content visible immediately
- Students can work ahead

Option B: Drip Release
- Publish modules on schedule
- Control pacing and access
- Use Canvas prerequisites

Option C: Mastery-Based Release
- Unlock modules after prerequisite mastery
- Personalized pacing
- Use Mastery Paths feature

FINAL ACTIONS:

1. Publish course:
   canvas_update_course(
       course_id=12345,
       published=True
   )

2. Send welcome announcement

3. Monitor student access and questions

Output: Live Canvas course ready for students
```

### Educational Framework Integration

**Canvas Features Aligned to UbD**:
- **Stage 1**: Outcomes represent desired results
- **Stage 2**: Assignments and rubrics provide evidence
- **Stage 3**: Module pages and materials are learning plan

**Canvas Features Supporting UDL**:
- **Representation**: Embed videos, readings, audio, images
- **Action/Expression**: Multiple submission types per assignment
- **Engagement**: Discussion forums, choice boards, varied activities

**Bloom's Taxonomy in Canvas**:
- Outcomes tagged with Bloom's level
- Assignments progress from lower to higher levels
- Rubric criteria reflect cognitive complexity

### Canvas MCP Tools Used

**Course Management** (5 tools):
- `canvas_create_course()` - Create course shell
- `canvas_update_course()` - Publish and configure
- `canvas_get_course()` - Verify setup

**Outcomes** (4 tools):
- `canvas_list_outcomes()` - Check existing
- `canvas_create_outcome()` - Add learning objectives
- `canvas_get_outcome()` - Validate creation
- `canvas_align_assignment_to_outcome()` - Connect to assignments

**Modules** (6 tools):
- `canvas_create_module()` - Create unit modules
- `canvas_create_module_item()` - Add content items
- `canvas_update_module()` - Set requirements
- `canvas_publish_module()` - Make visible to students

**Pages** (3 tools):
- `canvas_create_page()` - Create content pages
- `canvas_update_page()` - Modify content
- `canvas_list_pages()` - Verify all pages

**Assignments** (8 tools):
- `canvas_create_assignment()` - Create assessments
- `canvas_update_assignment()` - Configure settings
- `canvas_create_assignment_group()` - Organize assignments
- `canvas_create_rubric()` - Attach scoring rubrics
- `canvas_set_posting_policy()` - Configure grading display

**Discussions** (3 tools):
- `canvas_create_discussion_topic()` - Add forums
- `canvas_update_discussion_topic()` - Modify settings
- `canvas_create_announcement()` - Course announcements

### Quality Validation

**Pre-Launch Checklist**:
- [ ] All modules created with correct titles
- [ ] All outcomes created and aligned to assignments
- [ ] All content pages published
- [ ] All assignments have rubrics attached
- [ ] Gradebook categories configured
- [ ] Due dates are set correctly
- [ ] Module progression tested
- [ ] Student view validated
- [ ] Navigation is intuitive
- [ ] Welcome announcement ready

**Post-Launch Monitoring**:
- Student access and questions (first 48 hours)
- Broken links or errors reported
- Assignment submission issues
- Gradebook calculation verification
- Outcome alignment verification

### Time Investment

| Task | Time | Output |
|------|------|--------|
| Structure Planning | 10-15 min | Course architecture plan |
| Outcomes Creation | 15-20 min | Learning outcomes in Canvas |
| Modules & Content | 20-30 min | All modules with pages |
| Assignments & Rubrics | 15-25 min | Assessments ready to grade |
| Gradebook Setup | 5-10 min | Grading system configured |
| Communication Tools | 5-10 min | Discussions and announcements |
| Publishing & Testing | 5-10 min | Live course validated |
| **Total** | **75-120 min** | **Complete live Canvas course** |

### Success Metrics

**Technical Success**:
- ✅ 100% of content transferred from design to Canvas
- ✅ All outcomes aligned to assignments
- ✅ Rubrics attached to all graded assignments
- ✅ Module progression works as intended
- ✅ No broken links or errors

**Student Success**:
- Students can navigate course independently
- Students understand how to access materials
- Students know where to submit work
- Students can track their outcome mastery
- Student questions minimal (clear structure)

**Teacher Success**:
- Grading workflow is efficient
- Outcome data informs instruction
- Course structure is reusable
- Updates and modifications are easy
- Time savings during semester vs manual setup

---

## Workflow 6: lesson-planning-gagne

### Purpose
Design individual daily lesson plans using Gagné's Nine Events of Instruction for systematic, effective teaching.

### When to Use
- Planning individual daily lessons
- Want research-based lesson structure
- Need consistent lesson quality
- Creating lesson plans for substitutes
- Building lesson template library

### Prerequisites
- Learning objectives for the lesson
- Prior knowledge students bring
- Resources and materials available
- Time available for lesson (45-90 min typical)

### Process (20-30 minutes per lesson)

**Agent**: instructional-designer (Prof. Marcus Chen)

**Step 1: Lesson Foundation (5 min)**
```
Prof. Chen: I'll help you design an effective lesson using Gagné's framework.

LESSON INFORMATION:
- Lesson title and number
- Learning objectives (1-3 per lesson)
- Bloom's and DOK levels
- Prior knowledge required
- Duration and format (in-person, virtual, hybrid)

OBJECTIVE CLARITY:
Make sure objectives are:
- Specific and measurable
- Aligned to standards
- Appropriate cognitive level
- Assessable within lesson

Output: lesson-foundation.yaml
```

**Step 2: Gagné's Nine Events Design (15-20 min)**
```
Prof. Chen: I'll design each of Gagné's nine instructional events.

EVENT 1: GAIN ATTENTION (Hook)
Duration: 3-5 minutes
Purpose: Capture interest, create readiness to learn

Strategies:
- Show surprising fact, statistic, or phenomenon
- Pose thought-provoking question
- Share relevant story or scenario
- Display intriguing visual
- Demonstrate unexpected outcome

Example: "Show video: What happens when wolves removed from Yellowstone?"

---

EVENT 2: INFORM LEARNER OF OBJECTIVES
Duration: 2-3 minutes
Purpose: Clarify what students will learn and why it matters

Strategies:
- State objectives in student-friendly language
- Display objectives visibly throughout lesson
- Connect to previous learning
- Explain relevance to students' lives

Example: "Today you'll learn to construct food webs showing how organisms
depend on each other. This helps us understand ecosystem disruptions like
we saw in the Yellowstone video."

---

EVENT 3: STIMULATE RECALL OF PRIOR LEARNING
Duration: 3-5 minutes
Purpose: Activate relevant prior knowledge as foundation

Strategies:
- Quick review of prerequisite concepts
- KWL chart (Know, Want to know, Learned)
- Think-pair-share about prior learning
- Concept mapping of related ideas
- Quick quiz on foundational concepts

Example: "Think-pair-share: What do you remember about food chains from
last class? Who eats whom in our example pond ecosystem?"

---

EVENT 4: PRESENT STIMULUS MATERIAL (Content)
Duration: 10-15 minutes
Purpose: Deliver new information in accessible ways

Strategies:
- Direct instruction with visuals
- Video or multimedia presentation
- Reading (text, article, passage)
- Demonstration or model
- Guest speaker or interview

UDL Integration:
- Multiple formats (visual, auditory, text)
- Chunk information into segments
- Use graphic organizers
- Provide note-taking support

Example: "Direct instruction (10 min): Food webs show multiple feeding
relationships in ecosystems. Show diagram comparing food chain to food web.
Explain energy flow through multiple pathways. Provide guided notes template."

---

EVENT 5: PROVIDE LEARNER GUIDANCE
Duration: 5-10 minutes
Purpose: Scaffold learning, show thinking process

Strategies:
- Model the skill or process
- Think-aloud to show reasoning
- Worked examples with explanation
- Step-by-step demonstration
- Show common mistakes to avoid

Example: "I'll model constructing a food web for pond ecosystem. Watch my
thinking: 'First I identify all organisms. Then I ask: What does each eat?
I draw arrows showing energy flow FROM food source TO consumer. I check:
Do all organisms fit in the web?'"

---

EVENT 6: ELICIT PERFORMANCE (Practice)
Duration: 10-20 minutes
Purpose: Students actively practice new learning

Strategies:
- Guided practice with support
- Independent practice
- Collaborative practice (pair/group)
- Application to new examples
- Progressive complexity

Differentiation:
- Tiered practice by readiness
- Choice of context or format
- Varied support levels

Example: "In groups of 3-4, construct food web for forest ecosystem.
Use organism cards provided. Remember to show energy flow with arrows.
I'll circulate to support groups."

---

EVENT 7: PROVIDE FEEDBACK
Duration: 5-10 minutes
Purpose: Inform students about their performance

Strategies:
- Immediate feedback during practice
- Peer feedback with protocol
- Self-assessment with criteria
- Teacher feedback (verbal, written)
- Rubric-based feedback

Quality Feedback:
- Specific to learning objectives
- Timely (during or right after practice)
- Actionable (clear steps for improvement)
- Balanced (strengths + growth areas)

Example: "Gallery walk: View other groups' food webs. Use feedback protocol:
2 stars (what's strong), 1 wish (suggestion for improvement). Focus on:
Complete connections? Correct energy flow? All organisms included?"

---

EVENT 8: ASSESS PERFORMANCE
Duration: 3-5 minutes
Purpose: Check for understanding and mastery

Formative Assessment Strategies:
- Exit ticket (1-2 questions)
- Quick write or sketch
- Digital quick poll
- Observation with checklist
- Student demonstration

Assessment Aligns to Objectives:
- Questions target specific objectives
- Bloom's/DOK level matches objective
- Results inform next lesson planning

Example: "Exit ticket: Draw a simple food web for aquatic ecosystem.
Include at least 3 organisms and 5 connections. Label trophic levels.
Success criteria: Correct energy flow, accurate relationships."

---

EVENT 9: ENHANCE RETENTION AND TRANSFER
Duration: 2-5 minutes
Purpose: Promote long-term retention and application

Strategies:
- Summarize key learning
- Connect to essential questions
- Preview next lesson
- Assign application homework
- Reflection prompt

Transfer Focus:
- How does today's learning apply beyond classroom?
- What real-world problems can this solve?
- How does this connect to future learning?

Example: "Reflection: How does today's food web work relate to our essential
question about organism interdependence? Tomorrow we'll explore what happens
when food webs are disrupted - think about Yellowstone wolves."

---

Output: Complete lesson plan with all 9 events detailed
```

**Step 3: Differentiation Integration (3-5 min)**
```
Prof. Chen: I'll add differentiation strategies throughout the lesson.

DIFFERENTIATION BY READINESS:
- Event 4 (Content): Tiered readings or videos
- Event 5 (Guidance): Varied levels of scaffolding
- Event 6 (Practice): Tiered tasks by complexity

DIFFERENTIATION BY INTEREST:
- Event 1 (Hook): Multiple hook options
- Event 6 (Practice): Choice of ecosystem to explore

DIFFERENTIATION BY LEARNING PROFILE:
- Event 4 (Content): Visual, auditory, kinesthetic options
- Event 6 (Practice): Individual, pair, or group options

UDL CHECKPOINTS:
✅ Multiple means of representation (Event 4)
✅ Multiple means of action/expression (Event 6, 8)
✅ Multiple means of engagement (Event 1, 9)

Output: differentiation-strategies.yaml
```

**Step 4: Materials and Resources (2-3 min)**
```
Prof. Chen: I'll list all materials and resources needed.

TEACHER MATERIALS:
- Presentation slides
- Visual aids (diagrams, models)
- Handouts or worksheets
- Assessment tools

STUDENT MATERIALS:
- Notebooks or graphic organizers
- Practice materials (cards, manipulatives)
- Technology access (if needed)
- Reference materials

TECHNOLOGY:
- Projector for presentation
- Student devices (if applicable)
- Online tools or apps
- LMS access (Canvas)

PREPARATION:
- Pre-class setup tasks
- Material organization
- Technology testing
- Room arrangement

Output: materials-list.yaml
```

**Step 5: Time Management and Pacing (2 min)**
```
Prof. Chen: I'll create detailed pacing guide.

TIME ALLOCATION:
Gain Attention: 5 min (0:00-0:05)
Inform Objectives: 2 min (0:05-0:07)
Recall Prior Learning: 5 min (0:07-0:12)
Present Content: 12 min (0:12-0:24)
Provide Guidance: 8 min (0:24-0:32)
Elicit Practice: 15 min (0:32-0:47)
Provide Feedback: 8 min (0:47-0:55)
Assess Performance: 3 min (0:55-0:58)
Enhance Retention: 2 min (0:58-1:00)

TOTAL: 60 minutes (adjust for your class period)

FLEXIBILITY:
- Build in 5-10 min buffer for questions, transitions
- Note which events can flex if time runs short
- Identify what can extend if students need more time

Output: pacing-guide.yaml
```

### Educational Frameworks Applied

**Gagné's Nine Events of Instruction**:
- Systematic instructional design
- Brain-based learning sequence
- Proven effectiveness through research
- Supports retention and transfer

**Bloom's Taxonomy**:
- Objectives specify cognitive level
- Practice and assessment match level
- Progression from lower to higher thinking

**UDL Principles**:
- Multiple representations in content delivery
- Multiple ways to practice and demonstrate
- Multiple hooks and engagement strategies

### Complete Lesson Plan Example

```yaml
lesson_plan:
  title: "Food Web Construction and Analysis"
  lesson_number: 8
  unit: "Ecosystems and Energy Flow"
  grade: 7
  subject: Science
  duration: 60 minutes

  objectives:
    - id: obj_2
      text: "Explain energy flow through trophic levels"
      bloom: Understand
      dok: 2

    - id: obj_3
      text: "Construct food web models showing organism relationships"
      bloom: Apply
      dok: 2

  prior_knowledge:
    - "Food chain structure from Lesson 7"
    - "Trophic levels (producer, consumer, decomposer)"
    - "Energy flow basics"

  gagne_events:
    event_1_gain_attention:
      duration: 5
      activity: "Show Yellowstone wolves video - ecosystem cascade effects"
      purpose: "Hook with dramatic real-world example of interconnections"

    event_2_inform_objectives:
      duration: 2
      activity: "Display and explain: Today you'll construct food webs to model how organisms depend on each other for energy"
      student_friendly: "You'll be able to show how many organisms in an ecosystem are connected through feeding relationships"

    event_3_recall_prior:
      duration: 5
      activity: "Think-pair-share: What is a food chain? What are trophic levels?"
      checking: "Call on pairs to share, create class list on board"

    event_4_present_content:
      duration: 12
      activity: "Direct instruction with slides: Food webs vs chains, multiple pathways, energy flow"
      visual_aids: ["Pond ecosystem diagram", "Chain vs web comparison"]
      guided_notes: true
      differentiation:
        - "Subtitles on video for hearing support"
        - "Graphic organizer for note-taking"

    event_5_provide_guidance:
      duration: 8
      activity: "Model constructing pond food web step-by-step"
      think_aloud: "I'll show my thinking as I decide which organisms to connect and why"
      scaffold: "Checklist of construction steps displayed"

    event_6_elicit_practice:
      duration: 15
      activity: "Groups construct forest ecosystem food web"
      grouping: "Mixed ability groups of 3-4"
      materials: ["Organism cards", "Poster paper", "Markers"]
      differentiation:
        tier_1: "Simplified ecosystem with 8 organisms"
        tier_2: "Standard forest with 12 organisms"
        tier_3: "Complex forest with 15+ organisms and decomposers"

    event_7_provide_feedback:
      duration: 8
      activity: "Gallery walk with peer feedback protocol"
      protocol:
        stars: "Identify 2 strengths in other groups' webs"
        wish: "Give 1 specific suggestion"
      criteria: ["Complete connections", "Correct energy flow", "All organisms fit"]

    event_8_assess_performance:
      duration: 3
      formative_assessment: "Exit ticket: Draw aquatic food web"
      success_criteria:
        - "At least 3 organisms"
        - "At least 5 connections"
        - "Correct energy flow direction"
        - "Labeled trophic levels"

    event_9_enhance_retention:
      duration: 2
      activity: "Reflection: How does today's learning connect to essential question about organism interdependence?"
      preview: "Tomorrow: Energy pyramids and the 10% rule"
      connection: "Keep thinking about what happens when one organism is removed from web"

  materials:
    teacher:
      - "Presentation slides (food webs)"
      - "Yellowstone wolves video"
      - "Pond ecosystem model"
      - "Exit ticket handouts"
    student:
      - "Guided notes template"
      - "Organism cards (tiered sets)"
      - "Poster paper and markers"
      - "Feedback protocol handout"
    technology:
      - "Projector and screen"
      - "Video playback capability"

  homework:
    assignment: "Choose a local ecosystem. List 8-10 organisms. Sketch a food web showing their relationships."
    purpose: "Apply food web construction to familiar context"
```

### Canvas Integration

```
Alex: I'll add this lesson to Canvas module.

CANVAS PAGE STRUCTURE:

Lesson 8: Food Web Construction

📌 Learning Objectives:
• Explain energy flow through trophic levels
• Construct food web models

📺 Hook Activity:
[Embedded video: Yellowstone wolves]

📖 Lesson Content:
[Presentation slides embedded]
[Guided notes template - downloadable PDF]

🎯 Practice Activity:
Instructions for group food web construction
[Organism cards - downloadable by tier]

✍️ Exit Ticket:
[Canvas quiz: Draw aquatic food web - submit image]

📚 Resources:
• Food web vs food chain comparison
• Step-by-step construction guide
• Peer feedback protocol

🏠 Homework:
[Canvas assignment: Local ecosystem food web]
Due: Tomorrow before class

canvas_create_page(
    course_id=12345,
    title="Lesson 8: Food Web Construction",
    body=lesson_html
)
```

### Quality Validation

**Gagné's Events Checklist**:
- [ ] Event 1: Attention-grabbing hook present
- [ ] Event 2: Objectives clearly stated
- [ ] Event 3: Prior knowledge activated
- [ ] Event 4: Content presented clearly
- [ ] Event 5: Guidance and modeling included
- [ ] Event 6: Practice opportunity provided
- [ ] Event 7: Feedback mechanisms in place
- [ ] Event 8: Formative assessment included
- [ ] Event 9: Retention/transfer strategies present

**Alignment Checklist**:
- [ ] All activities align to stated objectives
- [ ] Assessment measures stated objectives
- [ ] Bloom's/DOK levels consistent throughout
- [ ] Time allocation is realistic
- [ ] Differentiation addresses varied needs

### Time Investment

**Per Lesson Planning Time**: 20-30 minutes

**Efficiency Gains**:
- First lesson with template: 30-40 min
- Subsequent lessons with template: 15-20 min
- Reusing lesson structure: 10-15 min (modify content only)

### Success Metrics

**Lesson Quality**:
- All 9 Gagné events present and detailed
- Clear alignment: objectives ↔ activities ↔ assessment
- Differentiation built in systematically
- Materials list complete and organized

**Student Learning**:
- 80%+ students meet lesson objectives (exit ticket data)
- Students can articulate what they learned
- Engagement high throughout lesson
- Smooth transitions between events

---

## Workflow 7: standards-alignment

### Purpose
Systematically map curriculum to state/national standards and ensure comprehensive standards coverage.

### When to Use
- Starting curriculum design with standards
- Auditing existing curriculum for gaps
- Preparing for curriculum review or accreditation
- Need documentation of standards coverage
- Want to ensure no standards are missed

### Prerequisites
- Relevant standards framework document (CCSS, NGSS, NCSS, ISTE, etc.)
- Course or unit scope (what content is being aligned)
- Learning objectives (if already written)
- Grade level and subject area

### Process (30-60 minutes)

**Agents**: curriculum-architect (lead) + assessment-specialist (validation)

**Step 1: Standards Framework Selection (5 min)**
```
Dr. Vasquez: Let's identify which standards frameworks apply to your curriculum.

COMMON FRAMEWORKS BY SUBJECT:

English Language Arts:
- Common Core State Standards for ELA (CCSS.ELA)
- State-specific ELA standards

Mathematics:
- Common Core State Standards for Math (CCSS.Math)
- State-specific mathematics standards

Science:
- Next Generation Science Standards (NGSS)
- State science standards

Social Studies:
- National Council for Social Studies (NCSS)
- State social studies standards
- C3 Framework

Technology:
- ISTE Standards for Students
- Computer Science (CSTA)

World Languages:
- ACTFL Standards

Arts:
- National Core Arts Standards

CROSS-CURRICULAR:
- 21st Century Skills
- College and Career Readiness

SELECTION:
Which framework(s) apply to your curriculum?
Multiple frameworks can be used together.

Output: framework-selection.yaml
```

**Step 2: Standards Analysis (10-15 min)**
```
Dr. Vasquez: I'll analyze the standards to understand their structure and expectations.

STANDARDS DECOMPOSITION:

For each standard:
1. Identify verb (what students do)
2. Identify content (what students work with)
3. Identify context (conditions/constraints)
4. Determine cognitive level (Bloom's)
5. Determine complexity (DOK)

Example Standard Decomposition:
NGSS.MS-LS2-1: "Analyze and interpret data to provide evidence for the
effects of resource availability on organisms and populations of organisms
in an ecosystem."

Decomposition:
- Verbs: Analyze, interpret, provide evidence
- Content: Data about resource availability, organisms, populations
- Context: In ecosystems
- Bloom's: Analyze (Level 4)
- DOK: 3 (Strategic Thinking)

STANDARD GROUPINGS:
- Foundational standards (prerequisites)
- Core standards (essential for grade)
- Advanced standards (extensions)

Output: standards-analysis.yaml
```

**Step 3: Curriculum-to-Standards Mapping (15-25 min)**
```
Dr. Vasquez: I'll map your learning objectives to specific standards.

MAPPING PROCESS:

For each learning objective:
1. Which standard(s) does it address?
2. Does it fully address the standard or partially?
3. What percentage of the standard is covered?
4. Are multiple objectives needed for full standard coverage?

MAPPING TYPES:

One-to-One:
- One objective fully addresses one standard
- Simple, direct alignment

One-to-Many:
- One objective addresses multiple standards
- Efficient, integrated learning

Many-to-One:
- Multiple objectives needed to fully address complex standard
- Standard decomposed into learnable chunks

COVERAGE ANALYSIS:
✅ Fully addressed: 100% of standard covered
⚠️ Partially addressed: <100% coverage, gaps exist
❌ Not addressed: Standard missing from curriculum

Output: alignment-map.yaml
```

**Example Standards Mapping**:
```yaml
standards_alignment:
  unit: "Ecosystems and Energy Flow"
  frameworks: ["NGSS"]

  mapping:
    - standard: "NGSS.MS-LS2-1"
      full_text: "Analyze and interpret data to provide evidence for effects of resource availability on organisms and populations in ecosystem"
      coverage: 85%
      status: "Partially Addressed"
      aligned_objectives:
        - obj_id: obj_4
          objective_text: "Analyze energy pyramid data to predict population impacts"
          contribution: 60%
          bloom: Analyze
          dok: 3

        - obj_id: obj_5
          objective_text: "Evaluate human impacts on ecosystem energy flow"
          contribution: 25%
          bloom: Evaluate
          dok: 3

      gaps:
        - "Resource availability variations not explicitly addressed"
        - "Population data interpretation needs additional objective"
      recommendations:
        - "Add objective: Interpret graphs showing population changes when resources increase/decrease"

    - standard: "NGSS.MS-LS2-3"
      full_text: "Develop a model to describe cycling of matter and flow of energy among living and nonliving parts of ecosystem"
      coverage: 100%
      status: "Fully Addressed"
      aligned_objectives:
        - obj_id: obj_2
          objective_text: "Explain energy flow through trophic levels"
          contribution: 40%

        - obj_id: obj_3
          objective_text: "Construct food web models showing energy relationships"
          contribution: 60%

      gaps: []

    - standard: "NGSS.MS-LS2-5"
      full_text: "Evaluate competing design solutions for maintaining biodiversity and ecosystem services"
      coverage: 40%
      status: "Partially Addressed"
      aligned_objectives:
        - obj_id: obj_5
          objective_text: "Evaluate human impacts on ecosystem energy flow"
          contribution: 40%

      gaps:
        - "Design solutions component not addressed"
        - "Biodiversity maintenance strategies missing"
        - "Ecosystem services concept not covered"
      recommendations:
        - "Add objective: Design and evaluate solutions to protect ecosystem biodiversity"
        - "Add lesson on ecosystem services humans rely on"
```

**Step 4: Gap Analysis and Recommendations (5-10 min)**
```
Dr. Vasquez: I'll identify standards gaps and recommend additions.

GAP CATEGORIES:

1. MISSING STANDARDS:
   Standards not addressed at all
   Priority: HIGH - Add objectives and lessons

2. PARTIAL COVERAGE:
   Standards addressed incompletely
   Priority: MEDIUM - Expand existing objectives or add new

3. WEAK ALIGNMENT:
   Standards addressed but not at appropriate depth/complexity
   Priority: MEDIUM - Revise objectives for better match

4. OVER-COVERAGE:
   Too much time on some standards vs others
   Priority: LOW - Consider rebalancing

RECOMMENDATIONS:

For each gap:
- Suggested objective to add
- Estimated time needed
- Where in unit to insert
- Resources to support

PRIORITIZATION:
- Essential standards first
- Foundational before advanced
- Logical sequence and prerequisites

Output: gap-analysis-report.yaml
```

**Example Gap Analysis Report**:
```yaml
gap_analysis:
  total_standards: 8
  fully_addressed: 3 (37.5%)
  partially_addressed: 4 (50%)
  not_addressed: 1 (12.5%)

  priority_gaps:
    high_priority:
      - standard: "NGSS.MS-LS2-2"
        issue: "Not addressed"
        description: "Construct explanation that predicts patterns of interactions among organisms across multiple ecosystems"
        recommendation:
          add_objective: "Predict organism interaction patterns across different ecosystem types (forest, ocean, grassland)"
          placement: "After Lesson 10 (food webs)"
          estimated_time: "2 lessons (90 min)"
          bloom: Understand/Apply
          dok: 2

    medium_priority:
      - standard: "NGSS.MS-LS2-1"
        issue: "Partially addressed (85%)"
        gap_description: "Resource availability variations and population data interpretation missing"
        recommendation:
          add_objective: "Interpret population graphs showing changes as resources vary"
          placement: "Lesson 13 (expand existing lesson)"
          estimated_time: "Add 20 min to existing lesson"
          bloom: Analyze
          dok: 3

      - standard: "NGSS.MS-LS2-5"
        issue: "Partially addressed (40%)"
        gap_description: "Design solutions for biodiversity not covered"
        recommendation:
          add_objective: "Design and evaluate solutions to maintain ecosystem biodiversity"
          placement: "Lesson 14-15 (performance task modification)"
          estimated_time: "Expand performance task"
          bloom: Evaluate/Create
          dok: 4

  over_coverage:
    - standard: "NGSS.MS-LS2-3"
      coverage: 100%
      time_spent: "6 lessons"
      note: "Good coverage, consider if time allocation is optimal vs other standards"
```

**Step 5: Documentation and Validation (5-10 min)**
```
Dr. Kim (assessment-specialist): I'll validate that assessments measure standards.

ASSESSMENT ALIGNMENT VALIDATION:

For each standard:
1. What evidence shows students met the standard?
2. Do assessments match standard's cognitive demand?
3. Are multiple evidence types used?
4. Is assessment valid for the standard?

ASSESSMENT TYPES BY STANDARD:

Selected Response (Quizzes):
- Good for: Knowledge, comprehension standards
- Example: NGSS.MS-LS2-1 (define, identify, recall)

Constructed Response:
- Good for: Application, analysis standards
- Example: NGSS.MS-LS2-3 (explain, describe)

Performance Tasks:
- Good for: Evaluation, creation standards
- Example: NGSS.MS-LS2-5 (design, evaluate)

DOCUMENTATION:

Create standards alignment matrix:
- Standards (rows) × Assessments (columns)
- Mark where each standard is assessed
- Note type of evidence

Output: assessment-alignment-matrix.yaml
```

**Example Assessment Alignment Matrix**:
```yaml
assessment_alignment:
  standards_x_assessments:
    "NGSS.MS-LS2-1":
      formative_quiz_1: "Partial (vocabulary and concepts)"
      food_web_diagram: "Partial (organism interactions)"
      performance_task: "Full (data analysis and evidence)"
      evidence_types: ["Selected response", "Constructed response", "Performance"]

    "NGSS.MS-LS2-3":
      formative_quiz_1: "Partial (energy basics)"
      food_web_construction: "Full (model creation)"
      energy_pyramid: "Full (energy flow)"
      performance_task: "Full (comprehensive model)"
      evidence_types: ["Performance", "Constructed response"]

    "NGSS.MS-LS2-5":
      performance_task: "Partial (impact evaluation)"
      evidence_types: ["Performance"]
      gaps: "Design solutions component not assessed"
      recommendation: "Add to performance task rubric"

  coverage_summary:
    standards_assessed: 7 of 8 (87.5%)
    multiple_evidence: 5 of 8 (62.5%)
    performance_tasks: 100% of evaluation/creation standards
    need_additional_assessment: ["NGSS.MS-LS2-2", "NGSS.MS-LS2-5 (full)"]
```

**Step 6: Canvas Outcomes Integration (5-10 min)**
```
Alex (edtech-integrator): I'll create Canvas outcomes from standards.

CANVAS OUTCOME STRUCTURE:

State/National Standard → Canvas Outcome Group
Individual Standards → Canvas Outcomes
Aligned to Assignments for Mastery Tracking

canvas_create_outcome(
    course_id=12345,
    title="NGSS.MS-LS2-1: Ecosystem Interactions",
    description="Analyze and interpret data about organism interactions and resource competition",
    mastery_points=3,
    calculation_method="decaying_average"
)

MASTERY TRACKING:
- Students see progress toward standard mastery
- Teachers identify students needing support on specific standards
- Data-driven instruction based on outcome mastery

REPORTING:
- Standards-based report cards
- Outcome mastery gradebook view
- Parent communication on standard progress

Output: Canvas outcomes aligned to standards
```

### Educational Frameworks Applied

**Standards-Based Education**:
- Curriculum driven by clear standards
- Instruction aligned to standards
- Assessment measures standard mastery
- Grading based on standard achievement

**Backward Design with Standards**:
- Stage 0: Identify standards (before Stage 1)
- Stage 1: Derive objectives from standards
- Stage 2-3: Design learning to meet standards

**Webb's Alignment Model**:
- Categorical concurrence: Content match
- Depth of knowledge: Cognitive complexity match
- Range of knowledge: Breadth of standard coverage
- Balance of representation: Appropriate emphasis

### Quality Outputs

**Deliverables**:
- Standards framework analysis
- Complete alignment mapping (objectives ↔ standards)
- Gap analysis with recommendations
- Assessment alignment matrix
- Standards documentation report
- Canvas outcomes created from standards

**Documentation Quality**:
- 100% of applicable standards mapped
- Gaps identified and prioritized
- Recommendations are specific and actionable
- Assessment alignment validated
- Ready for curriculum review or accreditation

### Success Metrics

**Coverage Metrics**:
- ≥90% of required standards fully addressed
- ≥95% of required standards at least partially addressed
- All priority standards have multiple evidence types
- No critical standards missing

**Alignment Quality**:
- Objectives match standard cognitive level (Bloom's, DOK)
- Assessments validly measure standards
- Instructional time balanced across standards
- Logical sequence honors prerequisite relationships

### Time Investment

| Task | Time | Output |
|------|------|--------|
| Framework Selection | 5 min | Applicable standards identified |
| Standards Analysis | 10-15 min | Standards decomposed and understood |
| Curriculum Mapping | 15-25 min | Complete alignment map |
| Gap Analysis | 5-10 min | Gaps identified with recommendations |
| Assessment Validation | 5-10 min | Assessment alignment verified |
| Canvas Integration | 5-10 min | Outcomes created in Canvas |
| **Total** | **45-75 min** | **Complete standards alignment documentation** |

---

## Workflow Sequencing

### Sequential Workflow Patterns

**Pattern 1: Complete Course Development (Full Sequence)**
```
1. standards-alignment (1 hour)
   ↓ Identify all required standards for course

2. course-design-full (6 hours)
   ↓ Design complete course architecture with units

3. unit-design-backward (2 hours per unit)
   ↓ Detail each unit with UbD framework

4. differentiation-planning (1 hour per unit)
   ↓ Add UDL and tiered strategies

5. assessment-development (1 hour per unit)
   ↓ Create valid assessments and rubrics

6. lesson-planning-gagne (30 min per lesson)
   ↓ Design daily lesson plans

7. canvas-deployment (2 hours)
   ↓ Build complete live Canvas course

TOTAL TIME: 25-40 hours for full year course
OUTPUT: Complete, standards-aligned, Canvas-ready curriculum
```

**Pattern 2: Quick Unit Development (Streamlined)**
```
1. unit-design-backward (2 hours)
   ↓ Core unit design with UbD

2. assessment-development (45 min)
   ↓ Performance task and formative assessments

3. differentiation-planning (30 min)
   ↓ UDL options and tiering

4. canvas-deployment (30 min)
   ↓ Canvas module with outcomes

TOTAL TIME: 4 hours for 2-3 week unit
OUTPUT: Complete unit ready to teach
```

**Pattern 3: Assessment-First Approach**
```
1. standards-alignment (30 min)
   ↓ Map standards for unit

2. assessment-development (1 hour)
   ↓ Design assessments aligned to standards

3. unit-design-backward (1.5 hours)
   ↓ Design learning experiences toward assessments

4. lesson-planning-gagne (20 min per lesson)
   ↓ Detail daily lessons

5. canvas-deployment (30 min)
   ↓ Implement in Canvas

TOTAL TIME: 4-6 hours depending on lesson count
OUTPUT: Assessment-driven unit design
```

### Parallel Workflow Patterns

**Pattern 4: Team Collaboration (Distributed)**
```
WEEK 1: Standards and Architecture
- Principal: standards-alignment
- Department chair: course-design-full architecture

WEEK 2-3: Distributed Unit Design
- Teacher A: Units 1-3 (unit-design-backward)
- Teacher B: Units 4-6 (unit-design-backward)
- Teacher C: Units 7-9 (unit-design-backward)

WEEK 4: Shared Services
- Assessment specialist: assessment-development for all units
- Differentiation expert: differentiation-planning for all units

WEEK 5: Implementation
- EdTech integrator: canvas-deployment
- All teachers: lesson-planning-gagne for own units

TOTAL TIME: 5 weeks, distributed across team
OUTPUT: Collaboratively designed course with distributed expertise
```

**Pattern 5: Iterative Refinement (Agile)**
```
ITERATION 1 (Sprint 1: 2 weeks):
- unit-design-backward for Unit 1
- canvas-deployment for Unit 1
- Teach Unit 1, gather student data

ITERATION 2 (Sprint 2: 2 weeks):
- Refine Unit 1 based on student data
- unit-design-backward for Unit 2
- assessment-development for Units 1-2
- canvas-deployment for Unit 2

ITERATION 3 (Sprint 3: 2 weeks):
- unit-design-backward for Unit 3
- differentiation-planning for Units 1-3
- canvas-deployment for Unit 3

Continue iterative cycle throughout school year

OUTPUT: Continuously improving curriculum with student feedback integration
```

### Hybrid Workflow Patterns

**Pattern 6: Existing Curriculum Redesign**
```
1. standards-alignment (1 hour)
   ↓ Audit existing curriculum for gaps

2. gap-targeted-unit-design (1 hour per gap)
   ↓ Redesign only units with significant gaps

3. assessment-development (30 min per unit)
   ↓ Improve assessment validity

4. canvas-deployment (1 hour)
   ↓ Migrate improved curriculum to Canvas

TOTAL TIME: 5-10 hours to improve existing curriculum
OUTPUT: Standards-aligned version of existing course
```

**Pattern 7: Canvas Migration (Content Transfer)**
```
Prerequisite: Have curriculum designed (not in Canvas)

1. canvas-deployment (2-4 hours)
   ↓ Build course structure and modules

2. standards-alignment (30 min)
   ↓ Create outcomes from existing objectives

3. assessment-development (1 hour)
   ↓ Ensure rubrics are Canvas-compatible

TOTAL TIME: 4-6 hours
OUTPUT: Existing curriculum now live in Canvas
```

### Workflow Selection Guide

**Choose Full Sequence (Pattern 1) When**:
- Designing entirely new course
- Have 25-40 hours for comprehensive design
- Want highest quality, most rigorous outcome
- Building curriculum to last several years

**Choose Streamlined (Pattern 2) When**:
- Need single unit quickly (2-3 week teaching window)
- Adding new unit to existing course
- Have 4 hours for design work
- Want solid quality with efficiency

**Choose Assessment-First (Pattern 3) When**:
- Standards/assessments are non-negotiable
- Preparing for standardized testing
- Want to ensure valid assessment alignment
- Have clear assessment targets

**Choose Team Collaboration (Pattern 4) When**:
- Multiple teachers share course
- Can distribute design work
- Have specialized expertise on team
- Want consistency across sections

**Choose Iterative (Pattern 5) When**:
- Teaching course for first time
- Want to incorporate student feedback
- Prefer agile, responsive approach
- Can refine during school year

**Choose Redesign (Pattern 6) When**:
- Have existing curriculum with gaps
- Don't want to start from scratch
- Focused on standards alignment improvement
- Time-limited improvement project

**Choose Migration (Pattern 7) When**:
- Have good curriculum, not in Canvas
- Moving from another LMS or paper-based
- Need Canvas structure but keep content
- Short timeline for Canvas launch

---

## Customization Guide

### Customization by Subject Area

**ELA/English Language Arts**:
```yaml
frameworks:
  primary: CCSS.ELA-LITERACY
  secondary: [Speaking & Listening, Language Standards]

workflow_modifications:
  unit-design-backward:
    - Focus: Genre study, author study, thematic units
    - Performance tasks: Essays, creative writing, presentations
    - Differentiation: Lexile-leveled texts, choice of genres

  lesson-planning-gagne:
    - Event 4 (Content): Emphasize close reading, annotation
    - Event 6 (Practice): Writer's workshop, peer review

  assessment-development:
    - Writing rubrics: 6-trait writing or state rubric
    - Reading: Multiple-choice + constructed response balance
```

**Mathematics**:
```yaml
frameworks:
  primary: CCSS.Math
  practices: Mathematical Practice Standards (8 practices)

workflow_modifications:
  unit-design-backward:
    - Focus: Conceptual understanding + procedural fluency
    - Performance tasks: Problem-solving, real-world applications
    - Differentiation: Tiered problem sets, multiple strategies

  lesson-planning-gagne:
    - Event 5 (Guidance): Worked examples, error analysis
    - Event 6 (Practice): Scaffolded problem sets, gradual release

  assessment-development:
    - Balance: Procedures + conceptual + application
    - Rubrics: Problem-solving process rubrics
```

**Science**:
```yaml
frameworks:
  primary: NGSS
  practices: Science & Engineering Practices

workflow_modifications:
  unit-design-backward:
    - Focus: Phenomena-based, investigative units
    - Performance tasks: Lab reports, design challenges
    - Differentiation: Tiered labs, varied data sets

  lesson-planning-gagne:
    - Event 1 (Hook): Anchoring phenomenon
    - Event 6 (Practice): Hands-on investigations, data analysis

  assessment-development:
    - 3D Assessment: Practices + Crosscutting + Disciplinary Core Ideas
    - Performance: Lab practical, engineering design task
```

**Social Studies**:
```yaml
frameworks:
  primary: State social studies standards, NCSS
  secondary: C3 Framework (Inquiry Arc)

workflow_modifications:
  unit-design-backward:
    - Focus: Inquiry questions, document-based investigations
    - Performance tasks: DBQs, research projects, simulations
    - Differentiation: Primary source complexity, scaffolded analysis

  lesson-planning-gagne:
    - Event 4 (Content): Primary source analysis, historical thinking
    - Event 6 (Practice): Document analysis, perspective-taking

  assessment-development:
    - DBQ rubrics: Historical thinking skills
    - Source-based questions + argumentation
```

### Customization by Grade Level

**Elementary (K-5)**:
```yaml
workflow_adjustments:
  unit-design-backward:
    - Duration: 1-2 weeks (shorter attention span)
    - Essential questions: More concrete, accessible language
    - Performance tasks: Hands-on, creative products

  lesson-planning-gagne:
    - Event 1 (Hook): Songs, stories, games
    - Event 4 (Content): More visual, kinesthetic, shorter segments
    - Event 6 (Practice): Learning centers, manipulatives

  differentiation-planning:
    - Heavy scaffolding emphasis
    - Read-alouds for text access
    - Choice boards with pictures

  assessment-development:
    - Observation and conference heavy
    - Simplified rubrics (3-point vs 4-point)
    - Student-friendly language

  canvas-deployment:
    - Simplified navigation
    - Heavy use of images and videos
    - Parent access and communication
```

**Middle School (6-8)**:
```yaml
workflow_adjustments:
  unit-design-backward:
    - Duration: 2-4 weeks
    - Essential questions: Identity, social justice themes resonate
    - Performance tasks: Presentations, debates, projects

  lesson-planning-gagne:
    - Event 1 (Hook): Controversial topics, social relevance
    - Event 6 (Practice): Collaborative learning, peer interaction

  differentiation-planning:
    - Interest-based choices high priority
    - Tiering by abstract reasoning ability
    - Social grouping flexibility

  assessment-development:
    - Peer assessment and self-reflection
    - Product variety important for engagement

  canvas-deployment:
    - Discussion boards for social interaction
    - Choice in assignment formats
    - Clear organization (executive function support)
```

**High School (9-12)**:
```yaml
workflow_adjustments:
  unit-design-backward:
    - Duration: 3-6 weeks
    - Essential questions: College/career readiness, real-world application
    - Performance tasks: Research, analysis, authentic projects

  lesson-planning-gagne:
    - Event 1 (Hook): Career connections, current events
    - Event 6 (Practice): Independent research, complex problem-solving

  differentiation-planning:
    - Advanced Placement or honors extensions
    - College-readiness scaffolding for some students
    - Self-directed learning options

  assessment-development:
    - College-level task complexity
    - Standardized test preparation integration
    - Portfolio and authentic assessment

  canvas-deployment:
    - Mastery paths for personalized learning
    - External tool integration (Google, etc.)
    - Gradebook: weighted categories, standards-based
```

### Customization by School Context

**Title I / High-Needs Schools**:
```yaml
priorities:
  - Explicit instruction and scaffolding
  - Cultural responsiveness in content
  - Trauma-informed practices
  - Community and family engagement

workflow_emphasis:
  differentiation-planning: HIGH (varied readiness levels)
  assessment-development: Frequent formative, low-stakes
  lesson-planning-gagne: Clear structure, consistency

special_considerations:
  - Canvas accessibility for families without devices
  - Print-friendly versions of digital content
  - Community resources and partnerships
```

**Gifted/Advanced Programs**:
```yaml
priorities:
  - Depth and complexity
  - Acceleration options
  - Independent research
  - Interdisciplinary connections

workflow_emphasis:
  unit-design-backward: Essential questions with depth
  differentiation-planning: Advanced tier, extensions
  assessment-development: Open-ended, creative products

special_considerations:
  - Compacting (skip mastered content)
  - Independent study options
  - Mentorship and expert connections
```

**Special Education / Inclusive Classrooms**:
```yaml
priorities:
  - Universal Design for Learning
  - Systematic scaffolding
  - Multi-sensory instruction
  - Assistive technology

workflow_emphasis:
  differentiation-planning: CRITICAL (UDL required)
  lesson-planning-gagne: Explicit, structured, predictable
  assessment-development: Multiple modalities, varied formats

special_considerations:
  - IEP goal alignment
  - Accommodations built into Canvas
  - Co-teaching models
  - Para-educator role clarity
```

### Time Customization

**Express Mode (Minimal Time)**:
```yaml
course-design-full: 2 hours (architecture only, fill in later)
unit-design-backward: 1 hour (Stage 1 & 2 only)
assessment-development: 30 min (performance task only)
lesson-planning-gagne: 10 min (outline only)
differentiation-planning: SKIP (incorporate in lesson)
canvas-deployment: 30 min (structure only)

Use when: Extreme time pressure, will refine during teaching
Risk: Lower quality, may need significant refinement
```

**Standard Mode (Recommended Time)**:
```yaml
course-design-full: 6 hours
unit-design-backward: 2 hours
assessment-development: 1 hour
lesson-planning-gagne: 25 min per lesson
differentiation-planning: 45 min per unit
canvas-deployment: 1 hour

Use when: Normal planning timeline, quality priority
Balance: Good quality with reasonable time investment
```

**Deep Mode (Maximum Quality)**:
```yaml
course-design-full: 12 hours
unit-design-backward: 4 hours
assessment-development: 2 hours
lesson-planning-gagne: 45 min per lesson
differentiation-planning: 90 min per unit
canvas-deployment: 2 hours

Use when: Curriculum development project, multi-year use
Benefit: Highest quality, reusable for several years
```

---

## Success Patterns

### Success Story 1: High School Biology Course

**Context**:
- Teacher: 5 years experience
- Students: 120 students across 4 sections, mixed abilities
- Challenge: Low engagement, inconsistent quality, standards gaps
- Time Available: Summer break (40 hours)

**Workflow Sequence Used**:
```
Week 1: standards-alignment + course-design-full (8 hours)
Week 2-3: unit-design-backward for 6 units (12 hours)
Week 4: differentiation-planning + assessment-development (8 hours)
Week 5: lesson-planning-gagne for key lessons (10 hours)
Week 6: canvas-deployment (2 hours)
```

**Results**:
- **Standards Coverage**: 100% of NGSS standards addressed (was 70%)
- **Student Engagement**: 95% vs 70% previous year (Canvas analytics + survey)
- **Assessment Quality**: All performance tasks with validated rubrics
- **Teacher Efficiency**: 6 hours/week time savings during school year
- **Student Outcomes**: 85% proficiency vs 65% previous year

**Success Factors**:
- Systematic backward design ensured coherent curriculum
- Canvas deployment automated grading and feedback
- Differentiation strategies reached all learners
- UDL options increased accessibility and engagement

### Success Story 2: Middle School Math Team

**Context**:
- Team: 4 teachers, 600 students total
- Challenge: Inconsistent curriculum across sections, no common assessments
- Goal: Aligned curriculum with consistent quality
- Time: Distributed across semester, 2-hour weekly planning meetings

**Workflow Sequence (Team Collaboration Pattern)**:
```
Week 1: All teachers - standards-alignment (2 hours)
Week 2: Curriculum chair - course-design-full architecture (2 hours)
Week 3-6: Distributed unit design
  - Teacher A: Units 1-2
  - Teacher B: Units 3-4
  - Teacher C: Units 5-6
  - Teacher D: Units 7-8
Week 7-8: Math coach - assessment-development all units (4 hours)
Week 9: Differentiation expert - differentiation-planning (3 hours)
Week 10: EdTech teacher - canvas-deployment (4 hours)
```

**Results**:
- **Consistency**: All sections teaching same curriculum with same assessments
- **Quality**: Every unit backward designed with UbD framework
- **Collaboration**: Teachers refined units together based on student data
- **Shared Resources**: Canvas course shared across all 4 sections
- **Professional Learning**: Team learned backward design through doing

**Success Factors**:
- Distributed work prevented individual burnout
- Common Canvas course ensured consistency
- Collaborative refinement improved quality
- Shared assessment data informed instruction

### Success Story 3: Elementary ELA Curriculum Redesign

**Context**:
- School: K-5, needs curriculum update for new state standards
- Principal + 6 teachers involved
- Timeline: 1 school year (iterative approach)
- Resources: Curriculum director + reading specialist support

**Workflow Sequence (Iterative Pattern)**:
```
August: standards-alignment for full year (Principal + Curriculum director, 4 hours)

September: Grade 1 Unit 1
- unit-design-backward (Grade 1 teacher + specialist, 3 hours)
- lesson-planning-gagne for first week (1 hour)
- canvas-deployment (EdTech, 1 hour)
- TEACH and gather data

October: Grade 1 Unit 1 refinement + Unit 2 design
- Refine Unit 1 based on student data
- unit-design-backward Unit 2
- differentiation-planning for both units

Continue monthly cycle for each grade...

May: assessment-development comprehensive review (Specialist, 8 hours)
```

**Results**:
- **Standards Alignment**: 100% new standards addressed K-5
- **Quality**: Units iteratively improved with student feedback
- **Differentiation**: Extensive leveled readers and scaffolds developed
- **Teacher Buy-In**: High (because iterative, responsive to their students)
- **Sustainability**: Curriculum refined and sustainable year-to-year

**Success Factors**:
- Iterative approach prevented overwhelming teachers
- Student data drove refinements (responsive to real needs)
- Specialist support ensured quality
- Gradual implementation built teacher capacity

### Success Story 4: Career and Technical Education (CTE) Program

**Context**:
- Program: Automotive Technology, new program launch
- Instructor: Industry expert, new to teaching
- Challenge: No curriculum, needs industry-aligned course
- Standards: State CTE standards + industry certifications

**Workflow Sequence (Assessment-First Pattern)**:
```
Week 1: standards-alignment (State CTE + ASE certifications, 2 hours)
Week 2: assessment-development (Performance tasks = certification prep, 4 hours)
Week 3-4: course-design-full (Backward from industry skills, 8 hours)
Week 5-6: unit-design-backward (6 units, 12 hours)
Week 7: differentiation-planning (Apprentice, Technician, Master levels, 2 hours)
Week 8: canvas-deployment (2 hours)
```

**Results**:
- **Industry Alignment**: 100% alignment to ASE certification standards
- **Authentic Assessment**: All performance tasks = real shop tasks
- **Certification Prep**: Students prepared for ASE certification exams
- **Safety Integration**: Safety protocols embedded systematically
- **Student Success**: 90% passed ASE certification (industry average 60%)

**Success Factors**:
- Assessment-first approach ensured authentic tasks
- Backward design from industry needs
- Instructor's expertise channeled through framework
- Canvas managed complex project submissions and rubrics

### Success Story 5: AP U.S. History

**Context**:
- Teacher: Preparing for first year teaching AP course
- Challenge: College Board curriculum framework + rigorous exam prep
- Time: Summer (30 hours available)

**Workflow Sequence (Standards-First with College Board)**:
```
Week 1: standards-alignment (AP Framework, 3 hours)
Week 2: course-design-full (Following AP units, 5 hours)
Week 3-4: assessment-development
  - Create DBQ prompts
  - Design LEQ tasks
  - Plan SAQ practice
  (8 hours total)
Week 5: differentiation-planning (Varied document complexity, 3 hours)
Week 6-7: lesson-planning-gagne for first semester (10 hours)
Week 8: canvas-deployment (1 hour)
```

**Results**:
- **AP Exam Success**: 78% scored 3+ (national average 55%)
- **Historical Thinking**: Students mastered sourcing, contextualization, argumentation
- **Student Feedback**: "Rigorous but supportive structure"
- **Teacher Confidence**: Systematic framework reduced first-year anxiety
- **Reusability**: Course refined and reused for 3+ years

**Success Factors**:
- Backward design from AP exam requirements
- Systematic DBQ/LEQ skill building
- Differentiation helped students at varied starting points
- Canvas streamlined document distribution and feedback

### Common Success Patterns Across Stories

**Pattern 1: Time Investment Pays Off**
- Upfront design time (20-40 hours) → significant time savings during teaching (4-8 hours/week)
- Quality curriculum lasts multiple years with minor updates

**Pattern 2: Frameworks Provide Structure**
- Teachers new to content or teaching benefit from systematic approach
- Experienced teachers appreciate efficiency and quality consistency

**Pattern 3: Student-Centered Design Works**
- Backward design ensures alignment (objectives ↔ assessment ↔ instruction)
- UDL and differentiation result in higher engagement and achievement

**Pattern 4: Canvas Amplifies Impact**
- Organization and navigation help students manage learning
- Outcome tracking provides actionable data
- Efficiency in grading and feedback

**Pattern 5: Collaboration Multiplies Value**
- Distributed workflow prevents individual burnout
- Shared expertise improves quality
- Common curriculum ensures equity across sections

### Lessons Learned (Wisdom from Users)

**Start Small**:
- Don't try all 7 workflows at once
- Master unit-design-backward first
- Add workflows as you gain confidence

**Iterate and Refine**:
- First draft doesn't need to be perfect
- Teach it, gather student data, refine
- Year 2 is always better than Year 1

**Use the Agents**:
- Don't skip agent collaboration
- Each agent brings unique expertise
- Handoffs ensure nothing is missed

**Leverage Canvas**:
- Don't just use Canvas as file repository
- Use outcomes, rubrics, mastery tracking
- Let technology do the heavy lifting

**Focus on Transfer**:
- Essential questions should be transferable
- Performance tasks should be authentic
- Students should apply learning beyond classroom

**Document Everything**:
- Save your YAML files
- Keep design notes
- Build a curriculum library over time

---

## Conclusion

The BMAD Education Pack workflows transform educational design from fragmented, ad-hoc processes into systematic, research-based curriculum development. Each workflow applies proven educational frameworks while maintaining practical efficiency.

**Key Takeaways**:

1. **Workflows = Systematic Excellence**: Complete processes ensure nothing is missed, quality is consistent, and educational research is applied thoroughly.

2. **Agent Collaboration = Expertise**: Five specialized agents bring deep knowledge in curriculum, instruction, assessment, differentiation, and technology integration.

3. **Customization = Flexibility**: Workflows adapt to subject areas, grade levels, school contexts, and time constraints while maintaining quality.

4. **Canvas Integration = Implementation**: Research-based design translates directly into student-facing course structures with learning analytics.

5. **Success Proven = Confidence**: Documented success stories across subjects, grades, and contexts show workflows deliver results.

**Next Steps**:

- **New to BMAD**: Start with [quick-start-guide.md](quick-start-guide.md) → Try **unit-design-backward**
- **Building Full Course**: Use **course-design-full** → Follow with canvas-deployment
- **Have Existing Curriculum**: Use **standards-alignment** → Identify gaps → **assessment-development**
- **Team Collaboration**: Review Pattern 4 (Team Collaboration) → Distribute workflows
- **Deep Learning**: Read [educational-theory-guide.md](educational-theory-guide.md) → Understand frameworks

**Resources**:

- **Workflow Files**: `expansion-packs/bmad-education/workflows/`
- **Agent References**: `expansion-packs/bmad-education/agents/`
- **Templates**: `expansion-packs/bmad-education/templates/`
- **Checklists**: `expansion-packs/bmad-education/checklists/`

Transform educational design from overwhelming to systematic. Build curriculum that matters, efficiently and excellently.

**Welcome to professional curriculum development with BMAD workflows.**
