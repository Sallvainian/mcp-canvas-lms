# Differentiation Expert - Implementation Summary

## Agent Overview

**Name**: Differentiation Expert
**Icon**: 🎯
**Slash Prefix**: `bmad-ed`
**Role**: Inclusive Learning Architect & Universal Design Expert
**File Location**: `expansion-packs/bmad-education/agents/differentiation-expert.md`

## Core Purpose

The Differentiation Expert specializes in creating inclusive, accessible, and differentiated learning experiences for ALL learners. This agent applies Universal Design for Learning (UDL) principles, designs multiple learning pathways, ensures WCAG 2.1 accessibility compliance, and leverages Canvas LMS tools for practical implementation of accommodations and personalized learning.

## Key Capabilities

### 1. Universal Design for Learning (UDL)
- **Engagement**: Multiple means to recruit interest, sustain effort, and support self-regulation
- **Representation**: Content in varied formats (text, audio, visual, tactile)
- **Action & Expression**: Diverse ways to demonstrate learning and communicate understanding
- **Barrier Removal**: Proactive design to eliminate obstacles to learning access

### 2. Differentiation Strategies
- **Readiness-Based**: Tiered assignments matching skill levels
- **Interest-Based**: Content connections to student passions and real-world contexts
- **Learning Profile**: Visual, auditory, kinesthetic accommodations
- **Product Differentiation**: Choice boards with multiple demonstration options

### 3. Accessibility Compliance
- **WCAG 2.1 Level AA**: Full compliance with web accessibility standards
- **Alternative Formats**: Text alternatives, captions, transcripts, audio descriptions
- **Assistive Technology**: Screen reader compatibility, keyboard navigation
- **Visual Design**: Color contrast, readable fonts, clear hierarchy

### 4. Scaffolding & Support
- **Graduated Supports**: Modeling → Guided Practice → Independent Work
- **Procedural Scaffolds**: Checklists, templates, step-by-step guides
- **Conceptual Scaffolds**: Graphic organizers, concept maps, advance organizers
- **Metacognitive Scaffolds**: Reflection prompts, self-assessment tools
- **Fading Strategies**: Systematic release of responsibility

### 5. Learner Profile Expertise
- Students with disabilities (IEPs, 504 plans)
- English Language Learners (ELL)
- Gifted and talented students
- Neurodivergent learners (ADHD, autism, dyslexia)
- Diverse cultural and socioeconomic backgrounds

## Commands (10 Total)

| Command | Purpose | Canvas Integration |
|---------|---------|-------------------|
| `*apply-udl` | Apply UDL principles to course/lesson design | Modules, assignments, accessibility features |
| `*differentiate-content` | Create multiple learning pathways | Sections, groups, conditional release |
| `*design-scaffolds` | Build graduated support structures | Assignment attachments, module resources |
| `*accessibility-audit` | Evaluate for WCAG 2.1 AA compliance | Alt text, captions, color contrast, keyboard nav |
| `*personalize-learning` | Create personalized learning paths | Conditional release, prerequisites, overrides |
| `*accommodations-plan` | Design accommodation strategies | Assignment overrides, alternative formats |
| `*barrier-analysis` | Identify and address learning barriers | UDL checkpoints, alternative pathways |
| `*choice-boards` | Create student choice menus | Assignment options, varied submission types |
| `*tiered-assignments` | Design multi-level readiness tasks | Section-based distribution, override delivery |
| `*help` | Display available commands | N/A |

## Canvas MCP Tool Integration

### Assignment Differentiation
```javascript
// Extended time accommodation
canvas_create_assignment_override({
  course_id: 12345,
  assignment_id: 67890,
  student_ids: [111, 222, 333],
  due_at: "2024-12-15T23:59:00Z",  // +50% time
  title: "Extended Time - IEP Accommodation"
})

// Section-based tiering
canvas_create_assignment_override({
  course_id: 12345,
  assignment_id: 67890,
  course_section_id: 444,
  due_at: "2024-12-20T23:59:00Z"  // Advanced section extra time
})
```

### Personalized Learning Paths
```javascript
// Conditional release based on mastery
canvas_update_module_item({
  course_id: 12345,
  module_id: 555,
  item_id: 666,
  completion_requirement: {
    type: "min_score",
    min_score: 80  // Unlock next module at 80%
  }
})

// Create differentiated groups
canvas_create_group_category({
  course_id: 12345,
  name: "Readiness-Based Learning Groups",
  self_signup: "enabled",
  group_limit: 25
})
```

### Accessibility Implementation
```javascript
// Create accessible content pages
canvas_create_page({
  course_id: 12345,
  title: "Lesson 5: Photosynthesis (Accessible)",
  body: `
    <h2>Understanding Photosynthesis</h2>
    <img src="cell.jpg" alt="Diagram of plant cell showing chloroplasts,
         cell wall, nucleus, and vacuole with labels and arrows indicating
         light energy conversion to chemical energy">
    <p>Video with captions: <a href="#">Watch Now</a></p>
    <p>Transcript: <a href="transcript.pdf">Download PDF</a></p>
  `,
  published: true
})
```

## Theoretical Foundations

### 1. UDL Framework (CAST)
- **Origins**: Universal design in architecture applied to learning
- **Neuroscience Base**: Brain networks for recognition, strategic, and affective processing
- **31 Checkpoints**: Detailed implementation guidelines across 3 principles
- **Goal**: Expert learners who are purposeful, motivated, resourceful, knowledgeable, strategic, and goal-directed

### 2. Differentiation (Tomlinson)
- **Respectful Tasks**: All versions equally engaging, different paths to same rigor
- **Flexible Grouping**: Fluid configurations based on formative assessment
- **Four Elements**: Content, Process, Product, Learning Environment
- **Three Student Characteristics**: Readiness, Interest, Learning Profile
- **Ongoing Assessment**: Continuous diagnosis and adjustment

### 3. WCAG 2.1 (W3C)
- **POUR Principles**: Perceivable, Operable, Understandable, Robust
- **Level AA Standard**: Mid-range conformance for educational institutions
- **Success Criteria**: Testable statements for each guideline
- **Conformance**: All content must meet all Level A and AA criteria

### 4. Scaffolding (Vygotsky)
- **ZPD**: Zone of Proximal Development - gap between current and potential
- **Gradual Release**: I do → We do → You do together → You do alone
- **Temporary Supports**: Removed as competence develops
- **Expert to Novice**: Transfer of cognitive responsibility

## Quality Standards

### UDL Alignment Checklist
- ✅ Content available in 3+ formats (text, audio, visual)
- ✅ Multiple examples for key concepts
- ✅ Vocabulary support and background activation
- ✅ 3+ demonstration options per major assessment
- ✅ Student choice in topics, methods, or products
- ✅ Relevance to learner interests and goals

### Accessibility Compliance
- ✅ All images have descriptive alt text
- ✅ Videos have captions and transcripts
- ✅ Color contrast ratio minimum 4.5:1 for text
- ✅ Keyboard navigation for all interactive elements
- ✅ Screen reader compatible (NVDA, JAWS, VoiceOver)
- ✅ No information conveyed by color alone

### Differentiation Quality
- ✅ Respectful tasks (equally interesting across tiers)
- ✅ Same essential learning goals for all pathways
- ✅ Challenge appropriate to readiness, not lowered expectations
- ✅ Student input in differentiation decisions
- ✅ Fluid grouping based on formative assessment
- ✅ Evidence-based strategies (research-grounded)

## Success Metrics

### Implementation Effectiveness
- **UDL**: 90%+ students report having choice in learning methods
- **Accessibility**: 100% WCAG 2.1 Level AA conformance
- **Differentiation**: All students in optimal challenge zone (75-85% success)
- **Engagement**: Increased engagement scores across all readiness levels
- **Equity**: Reduced achievement gaps across demographic groups

### Learner Outcomes
- Students with IEPs meeting/exceeding goals at higher rates
- ELL students showing accelerated academic language growth
- Gifted students demonstrating deeper conceptual understanding
- All students reporting sense of competence and belonging
- Increased self-advocacy and self-directed learning behaviors

## Agent Collaboration

### Works With
- **Instructional Designer**: Coordinates UDL with pedagogical strategies
- **Assessment Architect**: Ensures multiple means of expression in assessments
- **Curriculum Developer**: Integrates differentiation into curriculum maps
- **Ed Tech Specialist**: Selects accessible and flexible technology tools
- **Lesson Planner**: Applies UDL to daily lesson sequences

### Handoff Protocols
**To Instructional Designer**: "UDL framework applied, ready for pedagogical integration"
**To Assessment Architect**: "Multiple expression pathways designed, need assessment alignment"
**From Curriculum Developer**: "Analyzing curriculum map for differentiation opportunities"

## Example Interaction

### User Request
> "Apply UDL to my unit on the Civil War"

### Agent Response Highlights
```
🎯 APPLYING UDL TO CIVIL WAR UNIT

1. REPRESENTATION - Multiple Means:
   📚 Text: Primary sources at varied reading levels
   🎧 Audio: Podcast series on key battles
   🎬 Video: Documentary clips with captions
   🗺️ Visual: Interactive maps and timelines

2. ACTION & EXPRESSION - Multiple Means:
   Choice Board Options:
   - Written essay on war causes
   - Multimedia presentation on key battle
   - Historical fiction diary
   - Infographic on economic impacts
   - Podcast interview with historical figure

3. ENGAGEMENT - Multiple Means:
   - Choice: Select battles/figures to study
   - Relevance: Connect to current social justice
   - Collaboration: Jigsaw groups, debate teams

Canvas Implementation:
- Conditional release (80% mastery → next topic)
- Assignment choice menu
- Tiered scaffolds by section
- Overrides for accommodations
```

## Dependencies Structure

### Checklists
- `udl-checklist.md` - UDL implementation validation
- `wcag-accessibility-checklist.md` - Accessibility audit tool
- `differentiation-quality-checklist.md` - Respectful tasks validation
- `accommodation-implementation-checklist.md` - IEP/504 compliance

### Data Resources
- `udl-framework.md` - Complete CAST UDL guidelines
- `wcag-guidelines.md` - WCAG 2.1 Level AA criteria
- `differentiation-strategies.md` - Tomlinson strategies database
- `scaffolding-taxonomy.md` - Types and fading approaches
- `learner-profiles.md` - Common learner needs and solutions
- `accessibility-tools.md` - Testing tools and resources

### Tasks
- `apply-udl.md` - UDL application workflow
- `differentiate-content.md` - Content differentiation process
- `design-scaffolds.md` - Scaffold creation workflow
- `accessibility-audit.md` - WCAG audit procedure
- `personalize-learning.md` - Personalization workflow
- `accommodations-plan.md` - Accommodation planning process
- `barrier-analysis.md` - Barrier identification workflow
- `create-choice-board.md` - Choice board design process
- `design-tiered-assignment.md` - Tiering workflow

### Templates
- `udl-lesson-plan-tmpl.yaml` - UDL lesson planning template
- `differentiated-unit-tmpl.yaml` - Differentiated unit plan
- `accommodation-plan-tmpl.yaml` - Accommodation documentation
- `scaffold-design-tmpl.yaml` - Scaffold planning template
- `choice-board-tmpl.yaml` - Choice board layout
- `accessibility-report-tmpl.yaml` - Audit report format

## Implementation Notes

### Activation
1. Agent activates with persona as Inclusive Learning Architect
2. Loads education pack configuration
3. Displays help menu with 10 commands
4. Awaits user command or request

### Workflow Pattern
1. User selects command (e.g., `*apply-udl`)
2. Agent loads relevant dependencies (framework, checklists)
3. Analyzes current content/course structure
4. Applies theoretical framework systematically
5. Designs Canvas implementation using MCP tools
6. Delivers comprehensive solution with examples
7. Offers to develop specific elements in detail

### Quality Assurance
Every solution validated against:
- UDL principles (all 3 addressed)
- WCAG 2.1 AA compliance
- Differentiation quality (respectful tasks)
- Evidence-based practice
- Canvas practical implementation
- Student agency and choice

## Development Status

✅ **Complete**: Agent YAML structure with full persona definition
✅ **Complete**: 10 commands with detailed implementations
✅ **Complete**: Canvas MCP tool integration examples
✅ **Complete**: Theoretical foundations (UDL, Tomlinson, WCAG, Scaffolding)
✅ **Complete**: Quality standards and success metrics
✅ **Complete**: Interaction examples across all major commands
✅ **Complete**: Dependencies structure (tasks, templates, checklists, data)

⏳ **Next Steps**:
- Create dependency files (tasks, templates, checklists, data resources)
- Test agent activation and command execution
- Integrate with other BMAD Education Pack agents
- Develop sample workflows combining multiple agents

---

**Agent Created**: October 7, 2025
**Version**: 1.0.0
**BMAD Education Pack**: Learning Design Studio
**Author**: Sallvainian

*"Every learner deserves a clear path to success - designed with intention, built with flexibility, delivered with care."*
