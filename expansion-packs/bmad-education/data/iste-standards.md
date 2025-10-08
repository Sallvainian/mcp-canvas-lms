# ISTE Standards for Students and Educators

## Overview
The International Society for Technology in Education (ISTE) Standards provide frameworks for leveraging technology effectively in education. The standards define competencies for students, educators, administrators, coaches, and computer science educators, emphasizing the transformative power of technology for teaching and learning.

## Theoretical Foundation
**Developed by**: International Society for Technology in Education (ISTE)
**Current Versions**: 
- ISTE Standards for Students (2016)
- ISTE Standards for Educators (2017)
- ISTE Standards for Education Leaders (2018)
- ISTE Standards for Coaches (2019)
- ISTE Standards for Computer Science Educators (2018)

**Core Philosophy**: Technology should amplify, not replace, good teaching. Standards emphasize creativity, collaboration, critical thinking, and citizenship in digital environments.

## ISTE Standards for Students (2016)

### 1. Empowered Learner
Students leverage technology to take an active role in choosing, achieving and demonstrating competency in their learning goals, informed by the learning sciences.

**Indicators**:
- **1a**: Articulate and set personal learning goals, develop strategies leveraging technology to achieve them, and reflect on the learning process itself to improve learning outcomes.
- **1b**: Build networks and customize their learning environments in ways that support the learning process.
- **1c**: Use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways.
- **1d**: Understand the fundamental concepts of technology operations, demonstrate the ability to choose, use and troubleshoot current technologies and transfer knowledge to explore emerging technologies.

**Educational Examples**:
- Students set goals in digital portfolios and track progress
- Create personalized learning playlists
- Use learning analytics to identify areas for improvement
- Select appropriate tools for different tasks

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Personal Learning Goal Setting"
description: |
  ISTE 1a: Set personal learning goals with technology
  
  Task:
  1. Reflect on your current skills in [subject]
  2. Set 3 SMART goals using our digital goal-tracking template
  3. Identify technology tools to help achieve each goal
  4. Create action plan in your ePortfolio
submission_types: ["online_url"]  # Link to ePortfolio
```

### 2. Digital Citizen
Students recognize the rights, responsibilities and opportunities of living, learning and working in an interconnected digital world, and they act and model in ways that are safe, legal and ethical.

**Indicators**:
- **2a**: Cultivate and manage their digital identity and reputation and are aware of the permanence of their actions in the digital world.
- **2b**: Engage in positive, safe, legal and ethical behavior when using technology, including social interactions online or when using networked devices.
- **2c**: Demonstrate an understanding of and respect for the rights and obligations of using and sharing intellectual property.
- **2d**: Manage their personal data to maintain digital privacy and security and are aware of data-collection technology used to track their navigation online.

**Educational Examples**:
- Create professional digital portfolios
- Participate respectfully in online discussions
- Practice proper citation and copyright
- Understand privacy settings and data collection

**Canvas Integration** (`canvas_create_discussion_topic`):
```yaml
title: "Digital Citizenship Discussion"
message: |
  ISTE 2b: Positive, safe, legal, ethical technology use
  
  Scenario: You find a great video online that would
  be perfect for your project, but it doesn't have
  clear copyright information.
  
  Discuss:
  - What should you do?
  - What are your ethical responsibilities?
  - What alternatives exist?
  
  Practice digital citizenship in your responses.
```

### 3. Knowledge Constructor
Students critically curate a variety of resources using digital tools to construct knowledge, produce creative artifacts and make meaningful learning experiences for themselves and others.

**Indicators**:
- **3a**: Plan and employ effective research strategies to locate information and other resources for their intellectual or creative pursuits.
- **3b**: Evaluate the accuracy, perspective, credibility and relevance of information, media, data or other resources.
- **3c**: Curate information from digital resources using a variety of tools and methods to create collections of artifacts that demonstrate meaningful connections or conclusions.
- **3d**: Build knowledge by actively exploring real-world issues and problems, developing ideas and theories and pursuing answers and solutions.

**Educational Examples**:
- Evaluate source credibility using CRAAP test
- Create annotated resource collections
- Use digital curation tools (Wakelet, Padlet, Pinterest)
- Develop research question and pursue systematically

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Digital Research Portfolio"
description: |
  ISTE 3a-3c: Research strategies, evaluate sources, curate information
  
  Task:
  1. Develop research question on [topic]
  2. Find minimum 8 credible digital sources
  3. Evaluate each source using CRAAP test
  4. Curate sources in digital collection (Wakelet/Padlet)
  5. Demonstrate connections between sources
  6. Draw evidence-based conclusions
points_possible: 100
```

### 4. Innovative Designer
Students use a variety of technologies within a design process to identify and solve problems by creating new, useful or imaginative solutions.

**Indicators**:
- **4a**: Know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems.
- **4b**: Select and use digital tools to plan and manage a design process that considers design constraints and calculated risks.
- **4c**: Develop, test and refine prototypes as part of a cyclical design process.
- **4d**: Exhibit a tolerance for ambiguity, perseverance and the capacity to work with open-ended problems.

**Educational Examples**:
- Use design thinking process
- Create prototypes using digital tools
- Iterate based on feedback
- Solve real-world problems

**Canvas Integration** (`canvas_create_module`):
```yaml
name: "Design Thinking Challenge"
# ISTE 4a-4d: Design process
items:
  - "Empathize: User research and interviews"
  - "Define: Problem statement"
  - "Ideate: Brainstorming with digital tools"
  - "Prototype: Create digital prototype"
  - "Test: User feedback and iteration"
  - "Final Design: Submit refined solution"
```

### 5. Computational Thinker
Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods to develop and test solutions.

**Indicators**:
- **5a**: Formulate problem definitions suited for technology-assisted methods such as data analysis, abstract models and algorithmic thinking in exploring and finding solutions.
- **5b**: Collect data or identify relevant data sets, use digital tools to analyze them, and represent data in various ways to facilitate problem-solving and decision-making.
- **5c**: Break problems into component parts, extract key information, and develop descriptive models to understand complex systems or facilitate problem-solving.
- **5d**: Understand how automation works and use algorithmic thinking to develop a sequence of steps to create and test automated solutions.

**Educational Examples**:
- Analyze datasets using spreadsheets
- Create algorithms and flowcharts
- Use coding to automate tasks
- Apply computational thinking to non-CS problems

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Data Analysis Project"
description: |
  ISTE 5a-5b: Technology-assisted problem solving and data analysis
  
  Task:
  1. Define problem suitable for data analysis
  2. Collect or identify relevant dataset
  3. Use Google Sheets/Excel to analyze data
  4. Create visualizations (charts, graphs)
  5. Draw evidence-based conclusions
  6. Present findings with data storytelling
submission_types: ["online_url", "online_upload"]
```

### 6. Creative Communicator
Students communicate clearly and express themselves creatively for a variety of purposes using the platforms, tools, styles, formats and digital media appropriate to their goals.

**Indicators**:
- **6a**: Choose the appropriate platforms and tools for meeting the desired objectives of their creation or communication.
- **6b**: Create original works or responsibly repurpose or remix digital resources into new creations.
- **6c**: Communicate complex ideas clearly and effectively by creating or using a variety of digital objects such as visualizations, models or simulations.
- **6d**: Publish or present content that customizes the message and medium for their intended audiences.

**Educational Examples**:
- Create multimedia presentations
- Produce videos, podcasts, infographics
- Design for specific audiences
- Choose appropriate communication platforms

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Multimodal Communication Project"
description: |
  ISTE 6a-6d: Creative communication with appropriate tools
  
  Choose ONE format to explain [concept]:
  - Video tutorial (3-5 min)
  - Podcast episode (5-7 min)
  - Interactive infographic
  - Animated explanation
  - Website/blog post with multimedia
  
  Audience: [Specify grade level or expertise]
  
  Rubric criteria: Accuracy, Creativity, Audience-appropriateness
submission_types: ["online_url", "online_upload"]
points_possible: 100
```

### 7. Global Collaborator
Students use digital tools to broaden their perspectives and enrich their learning by collaborating with others and working effectively in teams locally and globally.

**Indicators**:
- **7a**: Use digital tools to connect with learners from a variety of backgrounds and cultures, engaging with them in ways that broaden mutual understanding and learning.
- **7b**: Use collaborative technologies to work with others, including peers, experts or community members, to examine issues and problems from multiple viewpoints.
- **7c**: Contribute constructively to project teams, assuming various roles and responsibilities to work effectively toward a common goal.
- **7d**: Explore local and global issues and use collaborative technologies to work with others to investigate solutions.

**Educational Examples**:
- Participate in global collaborative projects
- Use video conferencing for expert interviews
- Collaborate on shared documents
- Engage in cross-cultural exchanges

**Canvas Integration** (`canvas_create_assignment`):
```yaml
name: "Global Collaboration Project"
description: |
  ISTE 7a-7d: Digital collaboration across cultures
  
  Partner with students from [partner school/country] to:
  1. Compare perspectives on [global issue]
  2. Collaborate using Google Workspace/Microsoft Teams
  3. Create joint presentation showing multiple viewpoints
  4. Present solutions that consider different cultural contexts
  
  Reflection: How did collaboration enrich your understanding?
```

## ISTE Standards for Educators (2017)

### 1. Learner
Educators continually improve their practice by learning from and with others and exploring proven and promising practices that leverage technology to improve student learning.

**Indicators**:
- **1a**: Set professional learning goals to explore and apply pedagogical approaches made possible by technology
- **1b**: Pursue professional interests by creating and actively participating in local and global learning networks
- **1c**: Stay current with research that supports improved student learning outcomes

### 2. Leader
Educators seek out opportunities for leadership to support student empowerment and success and to improve teaching and learning.

**Indicators**:
- **2a**: Shape, advance and accelerate a shared vision for empowered learning with technology
- **2b**: Advocate for equitable access to educational technology, digital content and learning opportunities
- **2c**: Model for colleagues the identification, exploration, evaluation, curation and adoption of new digital resources

### 3. Citizen
Educators inspire students to positively contribute to and responsibly participate in the digital world.

**Indicators**:
- **3a**: Create experiences for learners to make positive, socially responsible contributions
- **3b**: Establish a learning culture that promotes curiosity and critical examination of online resources
- **3c**: Mentor students in safe, legal and ethical practices with digital tools and protecting personal data

### 4. Collaborator
Educators dedicate time to collaborate with both colleagues and students to improve practice, discover and share resources and ideas, and solve problems.

**Indicators**:
- **4a**: Dedicate planning time to collaborate with colleagues to create authentic learning experiences
- **4b**: Collaborate and co-learn with students to discover and use new digital resources
- **4c**: Use collaborative tools to expand students' authentic, real-world learning experiences
- **4d**: Demonstrate cultural competency when communicating with students, parents and colleagues

### 5. Designer
Educators design authentic, learner-driven activities and environments that recognize and accommodate learner variability.

**Indicators**:
- **5a**: Use technology to create, adapt and personalize learning experiences that foster independent learning
- **5b**: Design authentic learning activities that align with content area standards and use digital tools and resources
- **5c**: Explore and apply instructional design principles to create innovative digital learning environments

### 6. Facilitator
Educators facilitate learning with technology to support student achievement of the ISTE Standards for Students.

**Indicators**:
- **6a**: Foster a culture where students take ownership of their learning goals and outcomes
- **6b**: Manage the use of technology and student learning strategies in digital platforms
- **6c**: Create learning opportunities that challenge students to use a design process to solve authentic problems
- **6d**: Model and nurture creativity and creative expression to communicate ideas, knowledge or connections

### 7. Analyst
Educators understand and use data to drive their instruction and support students in achieving their learning goals.

**Indicators**:
- **7a**: Provide alternative ways for students to demonstrate competency and reflect on their learning
- **7b**: Use technology to design and implement a variety of formative and summative assessments
- **7c**: Use assessment data to guide progress and communicate with students, parents and education stakeholders

## Application in Education

### Aligning ISTE to Curriculum
**Lesson Planning Questions**:
1. Which ISTE Student Standard(s) does this lesson address?
2. What technology amplifies learning (not just digitizes)?
3. How do students demonstrate ISTE competencies?
4. Which ISTE Educator Standard(s) am I modeling?

### Technology Integration Matrix
**Amplification**: Technology enhances what was already possible
**Transformation**: Technology enables what wasn't previously possible

**Examples**:
- **Amplification**: Digital notes instead of paper
- **Transformation**: Global collaboration project

Aim for transformation when possible.

## Canvas Integration

### ISTE-Aligned Canvas Course Design

**Course Structure** (ISTE Educator 5):
- Modules organized by themes, not just weeks
- Student choice built into assignments
- Personalized learning paths

**Assessment Variety** (ISTE Educator 7):
```yaml
canvas_create_assignment_group:
  # Multiple ways to demonstrate competency
  groups:
    - "Digital Portfolios (30%)"  # ISTE 1c
    - "Collaborative Projects (25%)"  # ISTE 7
    - "Creative Products (25%)"  # ISTE 6
    - "Research & Analysis (20%)"  # ISTE 3, 5
```

**Student Choice Menu** (`canvas_create_page`):
```yaml
title: "Unit Project - Choose Your Path"
body: |
  ## ISTE Standards Focus: Creative Communicator (6) + Knowledge Constructor (3)
  
  Choose ONE project:
  
  ### Option A: Video Documentary
  Research and create 5-min documentary (ISTE 3, 6)
  
  ### Option B: Interactive Website
  Build multimedia site explaining topic (ISTE 4, 6)
  
  ### Option C: Podcast Series
  Produce 3-episode podcast with research (ISTE 3, 6)
  
  All options assessed with same rubric for ISTE competencies.
```

## References

International Society for Technology in Education. (2016). *ISTE Standards for Students*. Retrieved from https://www.iste.org/standards/students

International Society for Technology in Education. (2017). *ISTE Standards for Educators*. Retrieved from https://www.iste.org/standards/educators

International Society for Technology in Education. (2023). *ISTE Standards in Action*. Arlington, VA: ISTE.

Crompton, H., & Burke, D. (2018). The use of mobile learning in higher education: A systematic review. *Computers & Education, 123*, 53-64.

## Related Resources
- **common-core-standards.md** - Integrate ISTE with content standards
- **udl-framework.md** - ISTE complements UDL for technology integration
- **active-learning-strategies.md** - Technology-enhanced active learning
- **canvas-best-practices.md** - Implementing ISTE in Canvas LMS
- **differentiation-strategies.md** - Technology for differentiation
