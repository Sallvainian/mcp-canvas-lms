# Design Lesson Plan Task

## Purpose
Create effective, evidence-based lesson plans using Gagne's 9 Events of Instruction framework to ensure systematic learning experiences that activate prior knowledge, present new content, provide practice, and assess understanding.

## Prerequisites
- Learning objectives defined (see `create-learning-objectives.md`)
- Content knowledge prepared
- Resources and materials available
- Understanding of Gagne's 9 Events framework
- Access to Canvas MCP tools
- Awareness of learner characteristics and needs

## Step-by-Step Process

### Step 1: Prepare Lesson Foundations

#### 1.1 Define Lesson Parameters
1. **Identify Learning Objectives**
   - What specific learning will occur?
   - Align to module/unit goals
   - Use SMART and Bloom's-aligned objectives
   - **Canvas Tool**: `canvas_get_module` to review module objectives

2. **Determine Lesson Duration**
   - Total time available (e.g., 50-minute class period)
   - Account for transitions and management
   - Build in flexibility buffer (5-10%)

3. **Assess Prior Knowledge**
   - What should students already know?
   - What common misconceptions exist?
   - Any prerequisite checks needed?

4. **Gather Resources**
   - Materials, handouts, technology
   - Visual aids, examples, non-examples
   - Assessment instruments
   - **Canvas Tool**: `canvas_list_files` to access course materials

#### 1.2 Consider Learning Context
1. **Learner Characteristics**
   - Developmental level and readiness
   - Learning preferences and needs
   - Cultural and linguistic diversity
   - Prior performance data

2. **Instructional Environment**
   - Physical space (classroom, lab, online)
   - Available technology and tools
   - Group size and composition
   - Time of day and schedule placement

### Step 2: Apply Gagne's 9 Events of Instruction

Gagne's framework provides a systematic approach to designing effective instruction. Each event serves a specific cognitive function.

#### Event 1: Gain Attention (Stimulate Attention)
**Purpose**: Activate learners' attention and prepare them for learning

**Strategies**:
- Pose provocative question or problem
- Show surprising fact, image, or video
- Tell compelling story or scenario
- Present cognitive conflict or puzzle
- Use multimedia, humor, or novelty

**Time Allocation**: 2-5 minutes (beginning of lesson)

**Example**:
```
Lesson: Ecosystems and Food Webs
Event 1: Show video of wolves reintroduced to Yellowstone,
resulting in unexpected ecosystem changes (riverbank growth, beaver return)
Essential Question: "How can removing one species transform an entire ecosystem?"
```

**Canvas Integration**:
```python
# Embed attention-grabber in module intro
canvas_create_page(
    course_id=12345,
    title="Lesson 3.2: Food Web Dynamics",
    body="""
    <iframe src='[Yellowstone wolves video]'></iframe>
    <p><strong>Consider this:</strong> When wolves were reintroduced to
    Yellowstone in 1995, rivers changed their course. How is that possible?</p>
    """
)
```

#### Event 2: Inform Learners of Objectives (Inform Purpose)
**Purpose**: Establish expectations and activate goal-oriented learning

**Strategies**:
- State objectives in student-friendly language
- Explain relevance and real-world application
- Show how lesson connects to prior and future learning
- Make success criteria explicit

**Time Allocation**: 2-3 minutes

**Example**:
```
"Today, you will be able to:
1. Explain how energy flows through food webs
2. Predict how removing a species affects an ecosystem
3. Analyze real-world case studies of ecosystem disruption

Why this matters: Understanding food webs helps us make informed
decisions about conservation, agriculture, and environmental policy."
```

**Canvas Documentation**:
- Post objectives prominently in module
- Link to assessment criteria
- Connect to essential questions

#### Event 3: Stimulate Recall of Prior Learning (Retrieve Prerequisites)
**Purpose**: Activate relevant prior knowledge and create connections

**Strategies**:
- Review prerequisite concepts briefly
- Connect to previous lessons explicitly
- Use graphic organizers to show relationships
- Quick formative check of prior knowledge
- Address common misconceptions

**Time Allocation**: 3-5 minutes

**Example**:
```
"Last week, we learned about producers, consumers, and decomposers.
Turn to a partner and explain:
- What is the role of producers in an ecosystem?
- Where does the energy originally come from?

[2-minute pair-share, then quick review]

Today, we'll build on that foundation to understand
how these organisms interact in complex food webs."
```

**Formative Check**:
- Exit ticket from prior lesson
- KWL chart (What I Know, Want to know, Learned)
- Concept map review
- **Canvas Tool**: `canvas_create_assignment` for pre-assessment

#### Event 4: Present the Content (Present Stimulus)
**Purpose**: Deliver new information in organized, accessible format

**Strategies**:
- Use multiple representations (verbal, visual, symbolic)
- Chunk information into manageable pieces
- Employ worked examples and non-examples
- Use analogies and metaphors
- Incorporate multimedia and demonstrations

**Time Allocation**: 10-15 minutes (varies by lesson complexity)

**Example**:
```
Content: Food Web Dynamics

Chunk 1: Basic food web structure (5 min)
- Visual: Food web diagram with arrows showing energy flow
- Explanation: Energy transfer and trophic levels
- Example: Grassland food web

Chunk 2: Keystone species concept (5 min)
- Definition and characteristics
- Case study: Sea otters in kelp forests
- Visual: Before/after ecosystem diagrams

Chunk 3: Trophic cascades (5 min)
- Definition: Top-down effects through ecosystem
- Return to Yellowstone wolves example
- Model: How removing top predator affects all levels
```

**UDL Considerations** (see `apply-udl.md`):
- Multiple means of representation: Text, diagrams, video, audio explanation
- Provide graphic organizers for note-taking
- Scaffold complex concepts with analogies

**Canvas Implementation**:
```python
# Create content page with multimedia
canvas_create_page(
    course_id=12345,
    title="Food Web Dynamics: Core Concepts",
    body="""
    <h2>Part 1: Food Web Structure</h2>
    [Embedded video explanation]
    <img src='food_web_diagram.png' alt='Energy flow in food webs'>

    <h2>Part 2: Keystone Species</h2>
    [Interactive diagram]
    <p>[Text explanation with highlighting]</p>

    <h2>Part 3: Trophic Cascades</h2>
    [Case study with annotations]
    """
)
```

#### Event 5: Provide Learning Guidance (Provide Scaffold)
**Purpose**: Support learners in processing and encoding information

**Strategies**:
- Use mnemonic devices and memory aids
- Provide concept maps or advance organizers
- Model thinking processes (think-alouds)
- Offer examples with explanations
- Use analogies to familiar concepts
- Provide guided notes or templates

**Time Allocation**: Integrated throughout content presentation (5-10 min)

**Example**:
```
Guidance for understanding trophic cascades:

1. Think-Aloud Model:
"When I analyze an ecosystem disruption, I ask myself:
- What was removed or added?
- What does that organism eat or get eaten by?
- How will populations above and below be affected?
Let me show you with the wolves example..."

2. Graphic Organizer:
"Use this cascade diagram to trace effects:
[Visual template showing predator → prey → vegetation → soil]

3. Mnemonic:
"Remember PACE for ecosystem analysis:
P - Population affected
A - Adjacent populations
C - Cascade effects
E - Equilibrium outcome"
```

**Scaffolding Techniques**:
- Worked examples with annotations
- Partially completed diagrams or problems
- Sentence starters for analysis
- Checklists for complex processes

#### Event 6: Elicit Performance (Elicit Response)
**Purpose**: Have learners actively practice new knowledge/skills

**Strategies**:
- Guided practice with instructor support
- Think-pair-share activities
- Problem-solving with immediate feedback
- Application to new examples
- Low-stakes quizzing

**Time Allocation**: 10-15 minutes (core of lesson)

**Example**:
```
Practice Activities:

Activity 1: Guided Practice (5 min)
"I'll show you a food web diagram. Together, let's predict
what happens if we remove the fox:
[Interactive class discussion with teacher guidance]

Activity 2: Partner Practice (5 min)
"Now with your partner, analyze this new ecosystem.
What happens if the owl population decreases?
Use the PACE framework to organize your thinking."
[Circulate to monitor and support]

Activity 3: Independent Application (5 min)
"On your own, analyze this ocean food web scenario.
Write your prediction and reasoning."
[Quick formative assessment]
```

**Active Learning Strategies**:
- Clickers or Poll Everywhere for quick checks
- Collaborative problem-solving
- Case study analysis
- Simulation or role-play
- **Canvas Tool**: `canvas_create_discussion_topic` for online practice

#### Event 7: Provide Feedback (Give Informative Feedback)
**Purpose**: Inform learners of their performance and guide improvement

**Strategies**:
- Immediate, specific, actionable feedback
- Positive reinforcement of correct responses
- Corrective feedback with explanation for errors
- Peer feedback structured by criteria
- Self-assessment against models

**Time Allocation**: Integrated with Event 6 (ongoing during practice)

**Example**:
```
Feedback During Practice:

Correct Response:
"Excellent! You correctly identified that removing foxes
would increase the rabbit population. What would happen
to the grass as a result of more rabbits?"

Partial/Incorrect Response:
"I see you predicted the rabbit population would decrease.
Remember, foxes eat rabbits. If foxes are removed, would
there be more or fewer predators for rabbits?
[Wait for reconsideration]
Right! So the rabbit population would actually increase."

Self-Assessment:
"Check your answer against the model on page 2.
Did you include all three levels of the cascade?
If not, add the missing components now."
```

**Feedback Principles**:
- Timely (immediate or very soon after performance)
- Specific (reference exact aspects of work)
- Actionable (tell how to improve)
- Non-judgmental (focus on work, not person)

#### Event 8: Assess Performance (Assess Achievement)
**Purpose**: Determine if learning objectives have been achieved

**Strategies**:
- Formative assessment (during lesson)
- Summative assessment (end of lesson or unit)
- Performance-based demonstration
- Written or oral checks
- Observation with criteria

**Time Allocation**: 5-10 minutes (end of lesson)

**Example**:
```
Exit Ticket Assessment (5 min):

"Complete this exit ticket before you leave:

1. Draw a simple food web with at least 5 organisms

2. Choose one organism to remove. Predict the effects
on the rest of the ecosystem using the PACE framework.

3. Explain: Why are some species more important to
ecosystem stability than others?

Submit via Canvas by end of class."
```

**Assessment Types**:
- **Formative** (during): Thumbs up/down, whiteboard responses, observation
- **Summative** (end): Quiz, exit ticket, demonstration, product
- **Self-Assessment**: Reflection, rubric evaluation

**Canvas Integration**:
```python
# Create exit ticket assignment
canvas_create_assignment(
    course_id=12345,
    name="Lesson 3.2 Exit Ticket: Food Web Analysis",
    description="[Assessment prompt]",
    points_possible=10,
    submission_types=["online_text_entry"],
    due_at="[end of class period]"
)
```

#### Event 9: Enhance Retention and Transfer (Facilitate Transfer)
**Purpose**: Support long-term retention and application in new contexts

**Strategies**:
- Summarize key concepts
- Make connections to real-world contexts
- Preview upcoming related content
- Assign meaningful homework/practice
- Encourage reflection on learning

**Time Allocation**: 3-5 minutes (closure)

**Example**:
```
Closure and Transfer (5 min):

Summary:
"Today we discovered that ecosystems are interconnected systems
where removing or adding even one species can trigger unexpected
changes throughout the entire system. Keystone species play
outsized roles in maintaining ecosystem balance."

Real-World Connection:
"This week, research a current conservation issue
(your choice: coral reefs, pollinators, top predators).
Identify a keystone species and predict what might happen
if it's lost. Bring your findings to class Friday."

Preview:
"Next lesson, we'll explore how human activities
affect ecosystems and what we can do to prevent
unintended consequences."

Reflection Prompt:
"In your learning journal: How has your understanding
of ecosystems changed from the beginning to the end of
today's lesson? What surprised you?"
```

**Retention Strategies**:
- Spaced retrieval practice (review over time)
- Varied contexts for application
- Connection to prior and future learning
- Elaboration and explanation in own words

### Step 3: Structure Complete Lesson Plan

#### 3.1 Create Lesson Plan Document
Use this standard template structure:

```markdown
# Lesson Plan: [Title]

## Lesson Information
- **Subject/Course**:
- **Grade Level**:
- **Duration**:
- **Date**:

## Learning Objectives
Students will be able to:
1. [Objective 1 - aligned to standards]
2. [Objective 2 - aligned to standards]

## Standards Alignment
- [Standard code]: [Description]

## Materials and Resources
- [List all materials, handouts, technology]
- [Links to digital resources]

## Lesson Sequence (Gagne's 9 Events)

### Event 1: Gain Attention (2-5 min)
[Description of attention-grabber]

### Event 2: Inform Objectives (2-3 min)
[How objectives will be communicated]

### Event 3: Recall Prior Learning (3-5 min)
[Pre-assessment or review activity]

### Event 4: Present Content (10-15 min)
[Content delivery with chunking]

### Event 5: Provide Guidance (integrated, 5-10 min)
[Scaffolding and support strategies]

### Event 6: Elicit Performance (10-15 min)
[Practice activities]

### Event 7: Provide Feedback (integrated)
[Feedback strategies during practice]

### Event 8: Assess Performance (5-10 min)
[Formative/summative assessment]

### Event 9: Enhance Transfer (3-5 min)
[Closure, connections, preview]

## Differentiation
- **For advanced learners**:
- **For struggling learners**:
- **For ELL students**:
- **For students with IEPs**:

## Assessment
- **Formative**: [During-lesson checks]
- **Summative**: [End-of-lesson assessment]
- **Criteria for success**: [How you'll know objectives are met]

## Reflection (Post-Lesson)
- What worked well?
- What needs adjustment?
- Student performance insights
- Modifications for next time
```

**Template**: `templates/lesson-plan-template.md`

#### 3.2 Time Management Grid
Create a visual timeline to manage lesson pacing:

```
Time    | Event              | Activity                    | Duration
--------|--------------------|-----------------------------|----------
0:00    | Event 1: Attention | Wolves video & question     | 3 min
0:03    | Event 2: Objectives| State learning targets      | 2 min
0:05    | Event 3: Prior     | Review food chain basics    | 4 min
0:09    | Event 4: Content   | Food web instruction        | 15 min
         (with Event 5)     | (with guided notes)
0:24    | Event 6: Practice  | Food web analysis tasks     | 12 min
         (with Event 7)     | (with feedback)
0:36    | Event 8: Assess    | Exit ticket                 | 8 min
0:44    | Event 9: Transfer  | Closure & homework preview  | 4 min
0:48    | Buffer/Transition  | Pack up, questions          | 2 min
```

### Step 4: Enhance with Best Practices

#### 4.1 Incorporate Active Learning
- Minimize passive lecture (<30% of lesson time)
- Maximize student engagement and interaction
- Use think-pair-share, turn-and-talk frequently
- Incorporate movement and varied activities

#### 4.2 Apply UDL Principles (see `apply-udl.md`)
- **Multiple Means of Representation**: Content in various formats
- **Multiple Means of Engagement**: Choice, relevance, optimal challenge
- **Multiple Means of Action/Expression**: Varied ways to demonstrate learning

#### 4.3 Integrate Technology Purposefully
- Enhance, don't replace, good pedagogy
- Use for engagement, differentiation, or efficiency
- Ensure accessibility and equitable access
- **Canvas Tool**: `canvas_create_module_item` to add digital resources

#### 4.4 Plan for Differentiation
- Anticipate learner variability
- Prepare tiered activities or resources
- Build in choice where appropriate
- Have extension and support materials ready

### Step 5: Validate and Refine

#### 5.1 Quality Check Lesson Plan
- [ ] Learning objectives clear and measurable?
- [ ] All 9 events of instruction present?
- [ ] Timing realistic and balanced?
- [ ] Assessment aligned to objectives?
- [ ] Differentiation strategies included?
- [ ] Materials and resources prepared?
- [ ] Active learning emphasized?
- [ ] UDL principles applied?

**Checklist**: `checklists/lesson-plan-quality.md`

#### 5.2 Peer Review
- Share plan with colleague for feedback
- Discuss alternative strategies
- Identify potential challenges
- Refine based on insights

#### 5.3 Pilot and Reflect
- Teach the lesson as planned
- Take notes during or immediately after
- Reflect on what worked and what didn't
- Revise for next iteration

**Post-Lesson Reflection Questions**:
- Did students achieve the learning objectives?
- Which events were most/least effective?
- What timing adjustments are needed?
- What differentiation worked well?
- How did assessment inform instruction?
- What will I change next time?

### Step 6: Document in Canvas

#### 6.1 Create Lesson Module
```python
# Create lesson module item
canvas_create_module_item(
    course_id=12345,
    module_id=3,
    title="Lesson 3.2: Food Web Dynamics",
    type="Page",
    content_id=[page_id]
)
```

#### 6.2 Link All Lesson Components
- Objectives page
- Instructional content
- Practice activities
- Assessment assignment
- Resources and materials

#### 6.3 Publish Student-Facing Materials
- What students need to access
- Clear instructions and expectations
- Due dates and submission requirements
- Support resources

## Tools Needed

### Canvas MCP Tools
- `canvas_get_module` - Review module context
- `canvas_create_page` - Content delivery
- `canvas_create_assignment` - Practice and assessment
- `canvas_create_discussion_topic` - Collaborative learning
- `canvas_create_module_item` - Link lesson components
- `canvas_list_files` - Access resources

### Templates
- `templates/lesson-plan-template.md` - Complete lesson structure
- `templates/gagne-events-checklist.md` - 9 events verification
- `templates/time-management-grid.md` - Pacing tool

### Checklists
- `checklists/lesson-plan-quality.md` - Quality assurance
- `checklists/active-learning-check.md` - Engagement validation
- `checklists/udl-lesson-check.md` - Universal design

## Quality Checks

### Validation Criteria
1. **Objective Alignment**: Activities and assessment match objectives?
2. **Gagne's Events**: All 9 events present and effective?
3. **Student Engagement**: Maximize active learning?
4. **Time Management**: Realistic pacing with buffer?
5. **Assessment Quality**: Measures what objectives specify?
6. **Differentiation**: Addresses learner variability?
7. **Resources**: All materials prepared and accessible?

### Gagne's Events Validation
- [x] Event 1: Attention-grabbing hook present?
- [x] Event 2: Objectives communicated clearly?
- [x] Event 3: Prior knowledge activated?
- [x] Event 4: Content organized and chunked?
- [x] Event 5: Scaffolding and guidance provided?
- [x] Event 6: Practice opportunities included?
- [x] Event 7: Feedback integrated?
- [x] Event 8: Assessment aligned to objectives?
- [x] Event 9: Transfer and retention supported?

## Common Pitfalls

### ❌ Avoid These Mistakes

1. **Skipping Events**
   - ❌ Jumping straight to content (Event 4) without Events 1-3
   - ✅ Systematically progress through all 9 events

2. **Passive Lecture Dominance**
   - ❌ Teacher talks for 40 minutes, students practice 5 minutes
   - ✅ Balance: 15 min instruction, 20 min practice, 10 min assessment

3. **Misaligned Assessment**
   - ❌ Objective says "analyze" but assessment asks "list"
   - ✅ Cognitive level matches (both require analysis)

4. **Unrealistic Timing**
   - ❌ Planning 45 minutes of content for 40-minute period
   - ✅ Build in 10-15% buffer for transitions and flexibility

5. **One-Size-Fits-All**
   - ❌ No differentiation or accommodation
   - ✅ Tiered activities, scaffolding, choice, UDL

6. **Unclear Objectives**
   - ❌ "Students will learn about ecosystems"
   - ✅ "Students will predict ecosystem effects of species removal"

7. **Missing Feedback**
   - ❌ Students practice but receive no feedback until graded
   - ✅ Immediate, specific feedback during practice (Event 7)

## Example Complete Lesson Plan

[See the Stage 3 example in `apply-backward-design.md` for a complete lesson plan following this process]

## Related Tasks
- **Foundation**: `create-learning-objectives.md` - Define lesson targets
- **Framework**: `apply-backward-design.md` - UbD Stage 3 planning
- **Assessment**: `create-assessment.md` - Align assessments
- **Accessibility**: `apply-udl.md` - Universal design
- **Resources**: `canvas-course-build.md` - Implement in Canvas

## References
- Gagné, R.M., Wager, W.W., Golas, K.C., & Keller, J.M. (2004). *Principles of Instructional Design* (5th ed.)
- Gagné, R.M. (1985). *The Conditions of Learning* (4th ed.)
- Hunter, M. (1982). *Mastery Teaching*
- Marzano, R.J. (2007). *The Art and Science of Teaching*
- Lemov, D. (2015). *Teach Like a Champion 2.0*
- Fisher, D., & Frey, N. (2014). *Better Learning Through Structured Teaching*
