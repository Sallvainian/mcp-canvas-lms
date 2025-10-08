# BMAD Education Pack - Workflows

Comprehensive workflow YAML files for educational course design, implementation, and improvement using Understanding by Design (UbD), Universal Design for Learning (UDL), and Canvas LMS integration.

## Available Workflows

### 1. New Course Design (`new-course-design.yaml`)
**Duration:** 6-8 weeks | **Difficulty:** Advanced

Complete course development from initial design through Canvas implementation and launch.

**Key Phases:**
- Needs Analysis and Course Foundations
- Assessment Design and Success Criteria
- Curriculum Mapping and Unit Design
- Lesson Development and Learning Activities
- Canvas Course Build and Configuration
- Quality Assurance and Launch Preparation

**Primary Agents:** curriculum-architect, assessment-specialist, instructional-designer, accessibility-specialist, canvas-integration-specialist

---

### 2. Unit Redesign (`unit-redesign.yaml`)
**Duration:** 2-3 weeks | **Difficulty:** Intermediate

Comprehensive redesign of existing instructional unit using UbD and UDL principles.

**Key Phases:**
- Unit Analysis and Gap Identification
- Redesign Unit Framework with UbD
- Develop UDL-Enhanced Learning Plan
- Canvas Implementation and Configuration
- Quality Assurance and Launch

**Primary Agents:** curriculum-architect, assessment-specialist, instructional-designer, accessibility-specialist, canvas-integration-specialist

---

### 3. Assessment Overhaul (`assessment-overhaul.yaml`)
**Duration:** 2-3 weeks | **Difficulty:** Advanced

Complete revision of course assessment system to improve alignment, authenticity, fairness, and feedback quality.

**Key Phases:**
- Assessment System Audit and Analysis
- Design Assessment Architecture
- Develop Grading and Reporting System
- Build Assessment Materials and Resources
- Canvas Gradebook Implementation
- Communication and Support Materials

**Primary Agents:** assessment-specialist, curriculum-architect, instructional-designer, accessibility-specialist, canvas-integration-specialist

---

### 4. Accessibility Enhancement (`accessibility-enhancement.yaml`)
**Duration:** 1-2 weeks | **Difficulty:** Intermediate

Systematic improvement of course accessibility through UDL integration and WCAG 2.1 AA compliance.

**Key Phases:**
- Accessibility Audit and Barrier Identification
- Content Remediation and WCAG Compliance
- UDL Integration and Multiple Pathways
- Canvas Accessibility Configuration
- Testing, Validation, and Documentation

**Primary Agents:** accessibility-specialist, instructional-designer, canvas-integration-specialist

---

### 5. Lesson Improvement (`lesson-improvement.yaml`)
**Duration:** 3-5 days | **Difficulty:** Beginner

Quick turnaround improvement of a single lesson to enhance engagement, alignment, and accessibility.

**Key Phases:**
- Lesson Analysis and Goal Setting
- Lesson Redesign and Enhancement
- Materials Development and Refinement
- Canvas Implementation and Testing

**Primary Agents:** instructional-designer, accessibility-specialist, assessment-specialist, canvas-integration-specialist

---

### 6. Standards Alignment (`standards-alignment.yaml`)
**Duration:** 1-2 weeks | **Difficulty:** Intermediate

Systematic review and correction of course standards alignment for outcomes, assessments, and instruction.

**Key Phases:**
- Standards Analysis and Mapping Audit
- Learning Outcomes Revision and Alignment
- Assessment Alignment Verification
- Instructional Alignment and Coverage
- Canvas Integration and Documentation

**Primary Agents:** curriculum-architect, assessment-specialist, instructional-designer, canvas-integration-specialist

---

### 7. Canvas Course Migration (`canvas-course-migration.yaml`)
**Duration:** 3-4 weeks | **Difficulty:** Intermediate

Complete migration of existing course materials to Canvas LMS with best practices implementation.

**Key Phases:**
- Pre-Migration Planning and Analysis
- Content Preparation and Remediation
- Canvas Course Build - Foundation
- Content Migration and Organization
- Assessment and Assignment Configuration
- Enhancement and Student Experience
- Quality Assurance and Launch Preparation

**Primary Agents:** curriculum-architect, canvas-integration-specialist, instructional-designer, accessibility-specialist, assessment-specialist

---

## Workflow Selection Guide

### By Timeline
- **3-5 days:** Lesson Improvement
- **1-2 weeks:** Accessibility Enhancement, Standards Alignment
- **2-3 weeks:** Unit Redesign, Assessment Overhaul
- **3-4 weeks:** Canvas Course Migration
- **6-8 weeks:** New Course Design

### By Expertise Level
- **Beginner:** Lesson Improvement
- **Intermediate:** Unit Redesign, Accessibility Enhancement, Standards Alignment, Canvas Course Migration
- **Advanced:** New Course Design, Assessment Overhaul

### By Focus Area
- **Curriculum Design:** New Course Design, Unit Redesign, Standards Alignment
- **Assessment:** Assessment Overhaul, Standards Alignment
- **Accessibility:** Accessibility Enhancement
- **Technology Integration:** Canvas Course Migration
- **Quick Improvements:** Lesson Improvement

## Common Workflow Patterns

### Full Course Development
1. New Course Design → Standards Alignment → Accessibility Enhancement

### Course Improvement
1. Standards Alignment → Unit Redesign → Assessment Overhaul → Accessibility Enhancement

### Canvas Implementation
1. Canvas Course Migration → Accessibility Enhancement → Unit Redesign

### Rapid Iteration
1. Lesson Improvement (repeated for multiple lessons) → Unit Redesign

## Agent Responsibilities

Each workflow leverages specialized agents from the BMAD Education Pack:

- **curriculum-architect**: Course design, standards alignment, overall coordination
- **assessment-specialist**: Assessment design, rubrics, grading systems
- **instructional-designer**: Lesson planning, learning activities, materials creation
- **accessibility-specialist**: UDL integration, WCAG compliance, barrier removal
- **canvas-integration-specialist**: Canvas technical implementation and configuration
- **lesson-planner**: Daily lesson design and instructional sequences

## Canvas MCP Integration

All workflows include comprehensive Canvas integration using the Canvas MCP Server tools:

### Course Management
- `canvas_create_course`, `canvas_update_course`, `canvas_get_course`
- `canvas_set_core_properties`

### Module Management
- `canvas_create_module`, `canvas_update_module`, `canvas_list_modules`
- `canvas_create_module_item`, `canvas_update_module_item`

### Assessment & Grading
- `canvas_create_assignment`, `canvas_update_assignment`
- `canvas_create_rubric`, `canvas_update_rubric`
- `canvas_create_assignment_group`, `canvas_update_assignment_group`

### Content Management
- `canvas_create_page`, `canvas_update_page`
- `canvas_upload_asset_from_url`

### Learning Outcomes
- `canvas_create_outcome`, `canvas_update_outcome`
- `canvas_get_outcome_alignments`

## Quality Standards

All workflows include:
- Clear quality gates between phases
- Success criteria for completion
- Common pitfalls to avoid
- Resource recommendations
- Template and checklist integration
- Agent role definitions
- Canvas implementation sequences

## Usage

Each workflow YAML file contains:
- Complete phase breakdowns with tasks
- Agent assignments and responsibilities
- Required templates and checklists
- Expected outputs and deliverables
- Quality gates and validation criteria
- Canvas MCP tool sequences
- Success criteria
- Common pitfalls
- Resource recommendations

Refer to individual workflow files for detailed implementation guidance.
