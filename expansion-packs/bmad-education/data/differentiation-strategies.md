# Differentiation Strategies: Tomlinson Framework

## Overview
Differentiation is a philosophy and approach to teaching that proactively plans varied approaches to content, process, and product in anticipation of and response to student differences in readiness, interest, and learning profile. Based on Carol Ann Tomlinson's research, differentiation ensures that all students have access to challenging, appropriate learning experiences.

## Theoretical Foundation
**Developed by**: Carol Ann Tomlinson (1999, 2001, 2014)
**Research Base**: Constructivism, brain research, multiple intelligences, learning styles

**Core Principles**:
1. Students differ in readiness, interests, and learning profiles
2. Teachers can proactively address these differences
3. Respectful tasks ensure all students are challenged appropriately
4. Flexible grouping allows students to work with various peers
5. Ongoing assessment informs instruction

## Core Framework: What to Differentiate

### Content (The "What")
**Definition**: What students need to learn and the materials/resources used

**Differentiation Strategies**:

**1. Compacting**
- Pre-assess to identify students who already know content
- Eliminate repetitive practice for those students
- Provide enrichment or acceleration instead

**Example**:
```yaml
Pre-assessment shows 5 students already mastered multiplication facts.

Traditional: All students complete 50 practice problems
Differentiated:
  - 5 advanced: Skip practice, work on multi-step word problems
  - Remaining: Complete practice with support as needed
```

**2. Tiered Materials**
- Provide same concept at different complexity levels
- All students work toward same essential understanding
- Materials match readiness levels

**Example**:
```yaml
Concept: Main idea and supporting details

Text Options:
  - Approaching: Picture book, 200 words, explicit main idea
  - On-level: Short story, 500 words, implied main idea
  - Advanced: Essay, 1000 words, multiple themes
  
All students identify main idea and cite evidence.
```

**3. Learning Centers / Stations**
- Create stations with different resources/activities
- Students rotate or choose based on needs
- Can vary by readiness, interest, or learning profile

**4. Scaffolding and Extensions**
- Provide supports for struggling learners
- Offer challenges for advanced learners

**Canvas Integration** (`canvas_create_module`):
```yaml
name: "Photosynthesis - Tiered Learning Paths"
description: |
  Choose your learning path based on pre-assessment results.
  All paths lead to same learning goals with different supports.

items:
  # Foundation Path (extra support)
  - "Video: Photosynthesis Overview (with subtitles)"
  - "Interactive: Label the Process (guided)"
  - "Reading: Photosynthesis Basics (simplified text)"
  - "Practice: Multiple choice check"
  
  # Core Path (on-level)
  - "Article: How Photosynthesis Works"
  - "Simulation: Build a Photosynthesis Model"
  - "Practice: Short answer questions"
  
  # Extension Path (challenge)
  - "Research Article: Recent Discoveries"
  - "Problem: Optimize photosynthesis efficiency"
  - "Create: Explain to specific audience"
```

### Process (The "How")
**Definition**: How students make sense of content; the activities and strategies used

**Differentiation Strategies**:

**1. Flexible Grouping**
- Vary groups based on task, readiness, interest
- Students work with different peers regularly
- Avoid permanent ability grouping

**Grouping Formats**:
```yaml
Readiness-based:
  Purpose: Target instruction to skill level
  Example: Math groups for reteaching/enrichment

Interest-based:
  Purpose: Increase engagement and motivation
  Example: Choose historical period to research

Random:
  Purpose: Build community, expose to diverse perspectives
  Example: Count off for discussion groups

Student choice:
  Purpose: Develop collaboration skills, autonomy
  Example: Choose project partners

Teacher-selected (heterogeneous):
  Purpose: Peer tutoring, diverse perspectives
  Example: Mixed-ability groups for problem solving
```

**2. Tiered Activities**
- Vary complexity while maintaining focus on essential understanding
- All tiers are equally engaging and respectful
- Multiple entry points to same goal

**Example**:
```yaml
Essential Understanding: Functions describe relationships between variables

Activity Tiers:

Tier 1 (Approaching):
  - Identify patterns in simple tables
  - Graph points and connect
  - Determine if relationship is linear
  
Tier 2 (On-Level):
  - Analyze multiple representations (table, graph, equation)
  - Determine function type (linear, quadratic, exponential)
  - Write function rule from patterns
  
Tier 3 (Advanced):
  - Create functions to model real situations
  - Compare efficiency of different functions
  - Justify why chosen function is best fit
```

**3. Learning Contracts**
- Student-teacher agreements outlining tasks
- Allow student choice within structure
- Promote responsibility and self-direction

**4. RAFT (Role, Audience, Format, Topic)**
- Vary one or more elements for differentiation
- Maintains content focus while providing choice

**Example**:
```yaml
Topic: Photosynthesis

Options:
  R: Chloroplast, Scientist, Plant, Sun
  A: Students, Farmers, General public, Other plants
  F: Letter, Diagram, Song, Video, Brochure
  T: How it works, Why it's important, How to optimize, New discoveries

Student creates one product combining chosen elements.
```

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Civil War RAFT Project"
description: |
  Create a product demonstrating understanding of Civil War causes.
  
  Choose ONE from each category:
  
  **Role** (Who are you?):
  - Northern factory worker
  - Southern plantation owner
  - Enslaved person
  - Politician
  
  **Audience** (Who are you addressing?):
  - Citizens of your region
  - Government officials
  - Future historians
  - Family members
  
  **Format** (How will you communicate?):
  - Letter or diary entry
  - Speech or podcast
  - Newspaper article
  - Visual timeline
  
  **Topic** (What aspect?):
  - Economic factors
  - Political tensions
  - Social divisions
  - Personal impact
  
  All combinations assessed for historical accuracy and depth.
  
submission_types: ["online_upload", "online_url", "online_text_entry"]
points_possible: 100
```

### Product (The "Show What You Know")
**Definition**: How students demonstrate what they've learned

**Differentiation Strategies**:

**1. Choice Boards / Menus**
- Provide variety of product options
- Students choose based on interest or strength
- All options address same standards

**Example - Tic-Tac-Toe Board**:
```yaml
Cell Biology Unit - Choose 3 in a row

Row 1:
  - Create 3D cell model with labels
  - Write children's book explaining cells
  - Design cell analogy (city, factory, etc.)

Row 2:
  - Present cell processes as news broadcast
  - Compare plant and animal cells (Venn diagram + essay)
  - Create cell quiz with answer key

Row 3:
  - Interview a cell organelle (Q&A format)
  - Build interactive digital cell tour
  - Research cell discovery history (timeline + report)
```

**2. Tiered Products**
- Vary complexity of final product
- All products demonstrate mastery of objectives
- Scaffolding and challenge built in

**3. Multiple Intelligences Options**
- Provide choices aligned to different intelligences
- Linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, naturalistic

**4. Rubrics with Varied Criteria**
- Core criteria apply to all students
- Additional criteria for different levels
- Clear quality indicators for each level

**Canvas Integration** - Choice Board (`canvas_create_page`):
```yaml
title: "Ecosystems Project - Choose Your Adventure"
body: |
  ## Select ONE project to demonstrate your understanding
  
  ### Verbal-Linguistic
  📝 Write a 5-page research paper on ecosystem interactions
  
  ### Visual-Spatial  
  🎨 Create infographic showing energy flow in chosen ecosystem
  
  ### Bodily-Kinesthetic
  🎭 Build 3D ecosystem model with working parts
  
  ### Musical
  🎵 Compose song/rap explaining ecosystem concepts
  
  ### Interpersonal
  👥 Collaborate on ecosystem simulation/game
  
  ### Logical-Mathematical
  📊 Analyze ecosystem data and create population models
  
  ### Naturalistic
  🌿 Field study: Document local ecosystem with photos/observations
  
  All options assessed using same rubric for content accuracy,
  depth of understanding, and presentation quality.
  
  Submit proposal first, then final product.
```

## How to Differentiate

### By Readiness
**Definition**: Student's current knowledge, understanding, and skill level relative to specific learning goals

**Assessment Methods**:
- Pre-assessments
- Formative assessments
- Observation
- Previous work samples

**Differentiation Approaches**:
```yaml
Below Standard:
  - More scaffolding and support
  - Additional time
  - Simplified materials
  - Explicit instruction
  - Smaller chunks
  - More practice with feedback

At Standard:
  - Standard curriculum
  - Moderate challenge
  - Some choice
  - Mix of support and independence

Above Standard:
  - Greater complexity
  - Abstract concepts
  - Open-ended tasks
  - Independent work
  - Real-world applications
  - Leadership opportunities
```

**Example**:
```yaml
Readiness-Based Math Groups

Approaching (needs support):
  - Review prerequisite skills
  - Use manipulatives
  - Work sample problems together
  - Practice with immediate feedback
  
On-Level:
  - Standard problem set
  - Partner work
  - Mix of routine and novel problems
  
Advanced (ready for challenge):
  - Complex, multi-step problems
  - Apply to new contexts
  - Create own problems
  - Explore connections to algebra
```

### By Interest
**Definition**: Topics or approaches that engage and motivate students

**Assessment Methods**:
- Interest inventories
- Observation of free choice activities
- Student surveys
- Conversations

**Differentiation Approaches**:
- Topic choice within standards
- Different examples/contexts
- Projects aligned to passions
- Relevant real-world connections

**Example**:
```yaml
Persuasive Writing Unit

All students: Write persuasive essay using evidence

Interest Differentiation:
  Sports fans: Should college athletes be paid?
  Environmental: Should plastic bags be banned?
  Technology: Should schools provide laptops for all?
  Arts: Should arts funding increase?
  Social: Should voting age be lowered?
  
Same skills, different topics = higher engagement
```

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Persuasive Essay - Choose Your Issue"
description: |
  Write persuasive essay on issue you care about.
  
  Requirements (all topics):
  - Clear thesis statement
  - 3+ evidence-based arguments
  - Address counterarguments
  - Credible sources (minimum 4)
  - 5-7 pages
  
  Suggested Topics:
  - Environmental issues
  - Technology and society
  - Education policy
  - Health and wellness
  - Social justice
  - Other (get approval first)
  
  Assessment focuses on argumentation skills,
  not specific topic chosen.
```

### By Learning Profile
**Definition**: How students learn best; influenced by learning style, intelligence preference, culture, gender

**Assessment Methods**:
- Learning style inventories
- Multiple intelligences surveys
- Observation
- Student self-reporting

**Differentiation Approaches**:
- Vary presentation mode (visual, auditory, kinesthetic)
- Offer different ways to process (individual, partner, group)
- Provide choice in expression method
- Consider environmental preferences

**Example**:
```yaml
Concept: Geometric Proofs

Learning Profile Options:

Visual Learners:
  - Color-coded proof diagrams
  - Flow charts showing logic
  - Video demonstrations
  
Auditory Learners:
  - Explain proofs aloud
  - Discussion-based problem solving
  - Podcast/audio explanations
  
Kinesthetic Learners:
  - Build physical models
  - Walk through proof steps
  - Use manipulatives
  
Independent Processors:
  - Individual problem sets
  - Self-paced online tutorials
  
Collaborative Processors:
  - Group proof challenges
  - Peer teaching
  - Think-pair-share
```

## Principles for Effective Differentiation

### 1. Respectful Tasks
**All tasks should be**:
- Equally interesting and engaging
- Equally important and challenging
- Respectful of students (no "busy work" for advanced or "dumbed down" for struggling)

**Questions to Ask**:
- Would I want to do this task?
- Does this task require thinking?
- Is this task worthy of the student's time?

### 2. Flexible Grouping
**Avoid**:
- Permanent ability groups
- Always same partners
- Predictable patterns

**Implement**:
- Groups change frequently
- Group by different criteria (readiness, interest, random)
- Whole class, small group, partner, individual - all used regularly

### 3. Ongoing Assessment and Adjustment
**Formative Assessment Cycle**:
1. Pre-assess to determine starting points
2. Check understanding during instruction
3. Adjust based on student needs
4. Reassess to measure growth
5. Repeat

**Canvas Integration** (`canvas_create_quiz`):
```yaml
# Formative assessments throughout unit
quiz_type: "survey"  # Ungraded
title: "Quick Check - Day 3"

# Use results to form next day's groups:
# - Struggling: Reteach with different approach
# - Proficient: Practice with application
# - Advanced: Extension activity
```

### 4. Clear Learning Goals
**Essential Questions and Understandings**:
- What should all students know, understand, be able to do?
- What is the core that cannot be compromised?
- How will we know they've learned it?

**Communicating Goals**:
- Post learning targets
- Use "I can" statements
- Connect activities to objectives
- Assess what matters

## Common Misconceptions About Differentiation

### Myth 1: "Differentiation means individualized instruction for every student"
**Reality**: Differentiation uses flexible grouping and targeted support for groups of students with similar needs.

### Myth 2: "Differentiation is only for special education"
**Reality**: All students benefit from appropriately challenging tasks and varied approaches.

### Myth 3: "Differentiation means more work for teachers"
**Reality**: Initial planning takes time, but reduces behavior issues and increases engagement, making teaching more efficient.

### Myth 4: "Differentiation means different standards"
**Reality**: All students work toward same standards; the path and support vary.

### Myth 5: "Advanced students can just work independently"
**Reality**: Advanced students need challenge and instruction appropriate to their level, not just more work.

## Canvas Integration for Differentiation

### Module Design with Pathways
```yaml
canvas_create_module:
  name: "Unit 2: Ecosystems (Differentiated Paths)"
  require_sequential_progress: false  # Allow choice
  
  items:
    # All students
    - "Pre-Assessment (Required)"
    - "Learning Objectives (Required)"
    
    # Tier 1: Foundation
    - "Foundation Path: Start Here if Pre-Assessment < 60%"
    - "Video with guided notes"
    - "Vocabulary support"
    - "Simplified readings"
    
    # Tier 2: Core
    - "Core Path: Start here if Pre-Assessment 60-85%"
    - "Standard readings and activities"
    
    # Tier 3: Challenge
    - "Challenge Path: Start here if Pre-Assessment > 85%"
    - "Complex texts"
    - "Extension activities"
    
    # All students
    - "Post-Assessment (Required)"
```

### Assignment Differentiation
```yaml
canvas_create_assignment:
  name: "Demonstrate Understanding - Multiple Options"
  description: |
    Show you understand [concept] by choosing ONE:
    
    **Option A: Written Analysis**
    (Good for: Verbal-linguistic learners, detail-oriented)
    Write 3-page analysis...
    
    **Option B: Visual Representation**
    (Good for: Visual-spatial learners, creative thinkers)
    Create infographic or diagram...
    
    **Option C: Multimedia Presentation**
    (Good for: Tech-savvy, interpersonal learners)
    Produce video or podcast...
    
    All options assessed for same content objectives.
    
  submission_types: ["online_text_entry", "online_upload", "online_url"]
```

### Discussion Differentiation
```yaml
canvas_create_discussion_topic:
  title: "Civil Rights Movement - Tiered Discussion"
  message: |
    Choose ONE question to respond to (aim for your challenge level):
    
    **Foundation**: Describe key events of Civil Rights Movement.
    Use at least 3 specific examples.
    
    **Core**: Compare tactics of different Civil Rights leaders.
    Evaluate effectiveness of each approach.
    
    **Extension**: Analyze how Civil Rights Movement influences
    current social justice movements. Draw parallels and contrasts.
    
    Respond to at least 2 classmates at any level.
```

## References

Tomlinson, C. A. (2001). *How to differentiate instruction in mixed-ability classrooms* (2nd ed.). Alexandria, VA: ASCD.

Tomlinson, C. A., & Imbeau, M. B. (2010). *Leading and managing a differentiated classroom*. Alexandria, VA: ASCD.

Tomlinson, C. A. (2014). *The differentiated classroom: Responding to the needs of all learners* (2nd ed.). Alexandria, VA: ASCD.

Tomlinson, C. A., & McTighe, J. (2006). *Integrating differentiated instruction and Understanding by Design*. Alexandria, VA: ASCD.

## Related Resources
- **udl-framework.md** - UDL provides principles for universal access
- **blooms-taxonomy.md** - Differentiate by cognitive complexity
- **active-learning-strategies.md** - Active learning supports differentiation
- **backward-design.md** - Plan differentiated units systematically
- **canvas-best-practices.md** - Implement differentiation in Canvas
