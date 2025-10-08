# BMAD Education Pack - Design Templates

Professional educational design templates aligned with research-based frameworks and Canvas LMS integration.

## 📋 Template Overview

This collection provides comprehensive YAML templates for all phases of instructional design, from learning objectives to lesson delivery.

### Template Index

| Template | Purpose | Framework | Size | Canvas Integration |
|----------|---------|-----------|------|-------------------|
| **learning-objectives-tmpl.yaml** | Design measurable learning objectives | Bloom's Taxonomy, Webb's DOK | 6.7KB | Assignment/Module creation |
| **scope-sequence-tmpl.yaml** | Plan curriculum pacing and coverage | Scope & Sequence best practices | 9.5KB | Module structure |
| **curriculum-map-tmpl.yaml** | Comprehensive curriculum alignment | Standards mapping | 12KB | Course structure |
| **backward-design-unit-tmpl.yaml** | Unit design with end in mind | Wiggins & McTighe's UbD | 15KB | Module/Assignment design |
| **lesson-plan-tmpl.yaml** | Complete daily lesson planning | Gagne's Nine Events | 15KB | Page/Assignment creation |
| **assessment-plan-tmpl.yaml** | Assessment strategy and balance | Formative/Summative framework | 19KB | Assignment/Quiz design |
| **rubric-tmpl.yaml** | Analytic rubric for assessment | Criteria-based assessment | 17KB | Canvas rubric builder |
| **udl-lesson-plan-tmpl.yaml** | Universally designed lessons | CAST UDL Guidelines 3.0 | 24KB | Accessible course design |

---

## 🎯 Template Descriptions

### 1. Learning Objectives Template
**File:** `learning-objectives-tmpl.yaml`

**Purpose:** Design clear, measurable learning objectives aligned to standards

**Key Features:**
- Bloom's Taxonomy integration (Remember → Create)
- Webb's Depth of Knowledge levels (DOK 1-4)
- ABCD objective format (Audience, Behavior, Condition, Degree)
- Student-friendly "I can" statements
- Assessment method alignment
- Differentiation by learning level
- Cognitive complexity balance analysis

**Use When:**
- Starting unit/lesson planning
- Aligning curriculum to standards
- Designing assessments
- Creating Canvas modules

**Canvas Tools:**
- `canvas_create_assignment` - Map objectives to assignments
- `canvas_create_module` - Organize by learning progression

---

### 2. Scope & Sequence Template
**File:** `scope-sequence-tmpl.yaml`

**Purpose:** Plan comprehensive curriculum pacing and content coverage

**Key Features:**
- Weekly and quarterly breakdown
- Unit-by-unit content mapping
- Skills progression tracking
- Assessment calendar
- Vertical and horizontal alignment
- Pacing flexibility strategies
- Resource planning
- Data collection points

**Use When:**
- Planning full course/year
- Coordinating across grade levels
- Designing pacing guides
- Scheduling major assessments

**Canvas Tools:**
- `canvas_create_module` - Create course structure
- `canvas_list_modules` - Organize content sequence

---

### 3. Curriculum Map Template
**File:** `curriculum-map-tmpl.yaml`

**Purpose:** Comprehensive curriculum alignment with standards and assessment

**Key Features:**
- Complete standards coverage mapping
- Unit-level detail with resources
- Skills progression matrix
- Assessment overview by type
- Vertical/horizontal alignment
- Equity and access considerations
- Technology integration planning
- Performance task design

**Use When:**
- Department-level planning
- Curriculum review and revision
- Accreditation documentation
- Cross-curricular coordination

**Canvas Tools:**
- `canvas_list_courses` - Course structure
- `canvas_create_module` - Content organization

---

### 4. Backward Design Unit Template (UbD)
**File:** `backward-design-unit-tmpl.yaml`

**Purpose:** Unit planning using Understanding by Design framework

**Key Sections:**

**Stage 1 - Desired Results:**
- Transfer goals (long-term, autonomous application)
- Enduring understandings (big ideas)
- Essential questions (provocative inquiries)
- Knowledge and skills acquisition

**Stage 2 - Assessment Evidence:**
- Performance tasks (GRASPS framework)
- Other evidence (formative/summative)
- Student self-assessment

**Stage 3 - Learning Plan:**
- W-H-E-R-E-T-O framework
- Lesson sequence
- Differentiation strategies

**Use When:**
- Designing significant units
- Creating authentic assessments
- Focusing on transfer and meaning
- Planning backward from goals

**Canvas Tools:**
- `canvas_create_module` - Unit structure
- `canvas_create_assignment` - Performance tasks

---

### 5. Lesson Plan Template
**File:** `lesson-plan-tmpl.yaml`

**Purpose:** Complete daily lesson planning with best practices

**Key Features:**
- Gagne's Nine Events of Instruction:
  1. Gain attention
  2. Inform objectives
  3. Stimulate recall
  4. Present content
  5. Provide guidance
  6. Elicit performance
  7. Provide feedback
  8. Assess performance
  9. Enhance retention and transfer

- UDL integration (multiple means)
- Detailed timing and materials
- Formative assessment throughout
- Differentiation strategies
- Canvas integration notes

**Use When:**
- Daily lesson preparation
- Observation/evaluation prep
- Student teacher supervision
- Substitute teacher plans

**Canvas Tools:**
- `canvas_create_page` - Lesson content
- `canvas_create_assignment` - Lesson activities

---

### 6. Assessment Plan Template
**File:** `assessment-plan-tmpl.yaml`

**Purpose:** Comprehensive assessment blueprint with formative/summative balance

**Key Features:**
- Assessment philosophy and framework
- Pre-assessment strategies
- Formative assessment methods (60% focus)
- Interim/benchmark assessments (20% focus)
- Summative assessments (20% focus)
- Performance tasks and portfolios
- Grading and reporting policies
- Data analysis and use
- Feedback strategies
- Differentiation in assessment

**Use When:**
- Unit/course planning
- Balancing assessment types
- Designing assessment calendar
- Creating grading policies

**Canvas Tools:**
- `canvas_create_assignment` - All assessment types
- `canvas_create_quiz` - Formative/summative quizzes
- `canvas_grade_with_rubric` - Rubric-based grading

---

### 7. Rubric Template
**File:** `rubric-tmpl.yaml`

**Purpose:** Analytic rubric with clear criteria and performance levels

**Key Features:**
- 4-5 performance levels (Advanced → Beginning)
- Multiple criteria with weights
- Specific performance descriptors
- Observable evidence of mastery
- Feedback prompts for each level
- Student-friendly version
- Self and peer assessment components
- Differentiation options
- Inter-rater reliability tools
- Anchor examples

**Use When:**
- Creating assessment rubrics
- Grading complex assignments
- Providing structured feedback
- Supporting peer/self-assessment

**Canvas Tools:**
- `canvas_create_rubric` - Build in Canvas
- `canvas_grade_with_rubric` - Efficient grading
- `canvas_update_rubric` - Revise based on use

---

### 8. UDL Lesson Plan Template
**File:** `udl-lesson-plan-tmpl.yaml`

**Purpose:** Universally designed lessons accessible to all learners

**Key Features:**

**Multiple Means of Representation:**
- Perception options (visual, auditory)
- Language and symbol support
- Comprehension strategies

**Multiple Means of Action & Expression:**
- Physical action options
- Expression and communication variety
- Executive function support

**Multiple Means of Engagement:**
- Interest recruitment (choice, relevance)
- Effort and persistence (challenge, collaboration)
- Self-regulation (reflection, coping)

**Use When:**
- Teaching diverse learners
- Ensuring accessibility
- Meeting all students' needs
- Designing inclusive instruction

**Canvas Tools:**
- Canvas Studio (captioned videos)
- Immersive Reader (text-to-speech)
- Multiple submission types
- Discussion boards for varied expression

---

## 🔧 How to Use These Templates

### 1. Choose Your Template
Select the template that matches your design phase:
- **Planning phase** → Scope & Sequence, Curriculum Map
- **Unit design** → Backward Design, Learning Objectives
- **Lesson design** → Lesson Plan, UDL Lesson Plan
- **Assessment design** → Assessment Plan, Rubric

### 2. Fill in Metadata
Every template starts with metadata section:
```yaml
metadata:
  title: "Your Title Here"
  author: "Your Name"
  subject: "Subject Area"
  grade_level: "Grade/Level"
  date: "YYYY-MM-DD"
```

### 3. Complete Required Sections
Each template has core sections marked with clear descriptions and examples.

**Look for:**
- Field descriptions in comments (# This is what goes here)
- Example values showing format
- Lists [] for multiple items
- Nested structure for related content

### 4. Use Canvas Integration Notes
Each template includes Canvas-specific sections:
```yaml
canvas_integration:
  module_setup:
    - module_name: ""
      items: []

  assignment_mapping:
    - assignment_name: ""
      type: ""
      points: 0
```

### 5. Review Quality Checklist
Every template ends with a quality checklist:
```yaml
quality_checklist:
  - criterion: "Description of quality indicator"
    met: false  # Change to true when complete
```

---

## 🎓 Educational Framework References

### Bloom's Taxonomy (Revised)
- **Remember** - Recall facts and basic concepts
- **Understand** - Explain ideas or concepts
- **Apply** - Use information in new situations
- **Analyze** - Draw connections among ideas
- **Evaluate** - Justify a decision or course of action
- **Create** - Produce new or original work

### Webb's Depth of Knowledge (DOK)
- **Level 1: Recall** - Recall facts, definitions, terms
- **Level 2: Skill/Concept** - Use information, conceptual understanding
- **Level 3: Strategic Thinking** - Reasoning, planning, evidence
- **Level 4: Extended Thinking** - Investigation, time to think and process

### Understanding by Design (UbD)
- **Stage 1:** Identify desired results
- **Stage 2:** Determine acceptable evidence
- **Stage 3:** Plan learning experiences

### Gagne's Nine Events of Instruction
1. Gain attention
2. Inform learners of objectives
3. Stimulate recall of prior learning
4. Present the content
5. Provide learning guidance
6. Elicit performance (practice)
7. Provide feedback
8. Assess performance
9. Enhance retention and transfer

### Universal Design for Learning (UDL)
- **Representation** - Multiple ways to present information
- **Action & Expression** - Multiple ways to demonstrate learning
- **Engagement** - Multiple ways to motivate learners

---

## 📊 Canvas MCP Tools Reference

### Core Tools Used
```yaml
# Module Management
canvas_create_module:
  purpose: "Create course modules from templates"
  template_fields: ["module_name", "prerequisites", "items"]

# Assignment Creation
canvas_create_assignment:
  purpose: "Create assignments aligned to objectives"
  template_fields: ["name", "points", "rubric_criteria"]

# Assessment Tools
canvas_create_quiz:
  purpose: "Build formative/summative assessments"
  template_fields: ["questions", "time_limit", "settings"]

canvas_create_rubric:
  purpose: "Create assessment rubrics"
  template_fields: ["criteria", "ratings", "points"]

canvas_grade_with_rubric:
  purpose: "Use rubrics for grading"
  template_fields: ["rubric_assessment", "comments"]

# Content Creation
canvas_create_page:
  purpose: "Create lesson content pages"
  template_fields: ["title", "body", "published"]
```

### Template-to-Canvas Workflow

**1. From Learning Objectives Template:**
```
learning-objectives-tmpl.yaml
  ↓
Extract: objectives, assessments, standards
  ↓
canvas_create_assignment(
  name=objective,
  description=assessment_method,
  standards=codes
)
```

**2. From Rubric Template:**
```
rubric-tmpl.yaml
  ↓
Extract: criteria, performance_levels, points
  ↓
canvas_create_rubric(
  criteria=criterion_name,
  ratings=performance_descriptors,
  points=weight
)
```

**3. From UDL Lesson Plan:**
```
udl-lesson-plan-tmpl.yaml
  ↓
Extract: activities, choice_menus, assessments
  ↓
canvas_create_page(content) +
canvas_create_assignment(with_udl_options)
```

---

## 🚀 Quick Start Examples

### Example 1: Create a Unit Plan
```bash
# 1. Start with learning objectives
cp learning-objectives-tmpl.yaml unit1-objectives.yaml
# Fill in: objectives, standards, assessments

# 2. Design the unit
cp backward-design-unit-tmpl.yaml unit1-plan.yaml
# Fill in: Stage 1 (desired results) from objectives
#          Stage 2 (assessments)
#          Stage 3 (learning plan)

# 3. Create rubrics for performance tasks
cp rubric-tmpl.yaml unit1-performance-rubric.yaml
# Fill in: criteria from Stage 2 assessments

# 4. Use Canvas tools to build
canvas_create_module(unit1-plan.yaml)
canvas_create_rubric(unit1-performance-rubric.yaml)
```

### Example 2: Plan Daily Lesson
```bash
# 1. Choose lesson template
cp lesson-plan-tmpl.yaml lesson-oct8.yaml
# OR for diverse learners:
cp udl-lesson-plan-tmpl.yaml lesson-oct8-udl.yaml

# 2. Fill in all sections
# - Standards and objectives
# - Gagne's events (or UDL principles)
# - Materials and resources
# - Assessment methods

# 3. Create in Canvas
canvas_create_page(lesson-oct8.yaml)
canvas_create_assignment(practice_activity)
```

### Example 3: Assessment Planning
```bash
# 1. Create assessment plan
cp assessment-plan-tmpl.yaml unit1-assessments.yaml
# Fill in: formative, interim, summative balance

# 2. Create specific assessments
cp rubric-tmpl.yaml essay-rubric.yaml
# Fill in: essay criteria and levels

# 3. Build in Canvas
canvas_create_quiz(formative_quiz)
canvas_create_assignment(essay_assignment)
canvas_create_rubric(essay-rubric.yaml)
canvas_grade_with_rubric(rubric_id)
```

---

## ✅ Quality Assurance

### Template Validation Checklist

Before using any template:
- [ ] All metadata fields completed
- [ ] Standards alignment verified
- [ ] Learning objectives are measurable
- [ ] Assessment methods match objectives
- [ ] Differentiation strategies included
- [ ] Canvas integration notes reviewed
- [ ] Quality checklist completed
- [ ] Framework alignment verified

### Common Pitfalls to Avoid

❌ **Don't:**
- Skip the planning templates and jump to lessons
- Ignore Canvas integration sections
- Create objectives without assessment methods
- Design lessons without UDL considerations
- Forget to differentiate
- Omit reflection and revision notes

✅ **Do:**
- Start with desired results (backward design)
- Align all components (objectives → assessment → instruction)
- Use Canvas tools strategically
- Build in multiple means (UDL)
- Plan for diverse learners
- Iterate and improve based on data

---

## 📚 Additional Resources

### BMAD Education Pack Resources
- `/docs/` - Educational frameworks guide
- `/examples/` - Completed template examples
- `/tools/` - Helper scripts and utilities
- `/workflows/` - Common design workflows

### External Resources

**Instructional Design:**
- [Understanding by Design](https://www.ascd.org/books/understanding-by-design-expanded-2nd-edition)
- [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/)
- [Webb's DOK](https://www.aps.edu/sapr/documents/resources/Webbs_DOK_Guide.pdf)

**Universal Design for Learning:**
- [CAST UDL Guidelines](https://udlguidelines.cast.org/)
- [UDL on Campus](https://udloncampus.cast.org/)

**Assessment:**
- [Formative Assessment Strategies](https://www.ascd.org/books/embedded-formative-assessment-2nd-edition)
- [Rubric Design](https://www.ascd.org/books/how-to-create-and-use-rubrics)

**Canvas:**
- [Canvas LMS Guides](https://community.canvaslms.com/t5/Canvas/ct-p/canvas)
- [Canvas Accessibility](https://community.canvaslms.com/t5/Canvas-Accessibility/ct-p/accessibility)

---

## 🤝 Contributing

### How to Improve These Templates

1. **Report Issues**: Found a gap or error? Open an issue
2. **Suggest Enhancements**: Have an idea? Share it
3. **Share Examples**: Completed a great template? Contribute it
4. **Add Resources**: Know a helpful link? Add to resources

### Template Improvement Process

1. Use template in real context
2. Note what works / what doesn't
3. Gather user feedback
4. Propose specific changes
5. Test revised version
6. Share improvements

---

## 📄 License & Attribution

These templates are part of the BMAD Education Pack, an open educational resource.

**Frameworks Referenced:**
- Bloom's Taxonomy (Benjamin Bloom, 1956; Revised Anderson & Krathwohl, 2001)
- Webb's Depth of Knowledge (Norman Webb, 1997)
- Understanding by Design (Wiggins & McTighe, 1998)
- Gagne's Nine Events (Robert Gagne, 1985)
- Universal Design for Learning (CAST, 2011)

**Canvas Integration:**
- Canvas LMS (Instructure, Inc.)
- Canvas MCP Server tools

---

## 🆘 Support

### Getting Help

**Template Questions:**
- Review template comments and examples
- Check this README for guidance
- Consult educational framework resources

**Canvas Integration:**
- See Canvas MCP tools documentation
- Review Canvas LMS guides
- Check integration examples

**Best Practices:**
- Consult educational frameworks
- Review example templates
- Engage with educational community

### Contact

For questions, suggestions, or support:
- GitHub Issues: Report problems or suggest improvements
- Documentation: Check `/docs/` for detailed guides
- Community: Share experiences and learn from others

---

*Last Updated: 2025-10-07*
*Template Version: 1.0*
*BMAD Education Pack*
