# Quick Start Guide
## Get Started with BMAD Education Pack in 30 Minutes

## Purpose
This guide provides a hands-on, step-by-step introduction to the BMAD Education Pack. In 30 minutes, you'll activate your first agent, execute your first workflow, and create Canvas-ready educational content.

## Who Should Read This
- **New users** starting with BMAD Education Pack
- **Educators** wanting hands-on introduction
- **Anyone** preferring learning-by-doing approach

---

## Prerequisites (5 minutes)

### System Requirements
- Claude Code with MCP support
- Canvas LMS access (optional for practice)
- BMAD Education Pack installed

### Quick Verification
```bash
# Verify installation
ls expansion-packs/bmad-education/

# Should see: agents/ workflows/ templates/ data/ checklists/
```

### Canvas Setup (Optional)
If you have Canvas access:
1. Get Canvas API token from Account → Settings → New Access Token
2. Set environment variable: `export CANVAS_API_TOKEN=your_token_here`
3. Note your Canvas instance URL

**Don't have Canvas?** No problem! You can still complete the guide and generate Canvas-ready content.

---

## Step 1: Activate Your First Agent (5 minutes)

### Choose an Agent

**5 Specialized Education Agents**:
1. **curriculum-architect** (Dr. Elena Vasquez) - Course structure, learning objectives
2. **instructional-designer** (Prof. Marcus Chen) - Lesson plans, activities
3. **assessment-specialist** (Dr. Sarah Kim) - Tests, rubrics, grading
4. **differentiation-expert** (Ms. Jamie Rodriguez) - UDL, tiered assignments
5. **edtech-integrator** (Alex Thompson) - Canvas implementation, tech tools

**For This Guide**: We'll use **curriculum-architect** to design learning objectives.

### Activation Steps

**In Claude Code**:
```
User: Load the curriculum-architect agent

[Agent activates and greets you as Dr. Elena Vasquez]
[Agent automatically runs *help showing available commands]
```

**What You'll See**:
```
🏗️ Dr. Elena Vasquez - Curriculum Architect

Welcome! I specialize in backward design, standards alignment, and learning
objective creation using Bloom's Taxonomy and Webb's DOK.

Available Commands:
1. *create-objectives - Generate standards-aligned learning objectives
2. *design-scope-sequence - Create course-long curriculum plan
3. *backward-design - Apply UbD framework to unit planning
4. *align-standards - Map content to state/national standards
5. *canvas-course-structure - Build complete Canvas course
... [more commands]

How can I help you design excellent curriculum today?
```

**Success Checkpoint**: Agent greeting appears with numbered command list.

---

## Step 2: Execute Your First Workflow (10 minutes)

### Scenario
Create learning objectives for a middle school science unit on ecosystems.

### Command Execution

**User Input**:
```
*create-objectives
```

**Agent Response (Interactive)**:
```
Dr. Vasquez: I'll help you create standards-aligned learning objectives.
Let me gather some context.

1. What grade level?
2. What subject area?
3. What specific topic or unit?
4. What standards framework? (NGSS, Common Core, State Standards)
5. What cognitive complexity level? (Bloom's, DOK, or both)

Please answer or select options.
```

**Your Responses (Example)**:
```
User:
1. Grade 7
2. Science
3. Ecosystems and energy flow
4. NGSS
5. Both Bloom's and DOK
```

**Agent Process**:
```
Dr. Vasquez: Excellent! I'm designing learning objectives for:
- Grade 7 Science
- Topic: Ecosystems and energy flow
- Aligned to NGSS MS-LS2-1, MS-LS2-3
- Cognitive range: Bloom's Remember through Analyze, DOK 1-3

Generating objectives...
```

**Output (Excerpt)**:
```yaml
learning_objectives:
  unit: Ecosystems and Energy Flow
  grade: 7
  standards:
    - NGSS.MS-LS2-1: Analyze interactions in ecosystems
    - NGSS.MS-LS2-3: Develop model of cycling of matter and energy

  objectives:
    - id: obj_1
      text: "Define producer, consumer, and decomposer roles in ecosystems"
      bloom_level: Remember
      dok_level: 1
      standard: NGSS.MS-LS2-1
      assessment_type: Quiz

    - id: obj_2
      text: "Explain energy flow through trophic levels using food chains and webs"
      bloom_level: Understand
      dok_level: 2
      standard: NGSS.MS-LS2-1
      assessment_type: Diagram with explanation

    - id: obj_3
      text: "Analyze how matter and energy transfer between organisms in ecosystem"
      bloom_level: Analyze
      dok_level: 3
      standard: NGSS.MS-LS2-3
      assessment_type: Performance task

    - id: obj_4
      text: "Create energy pyramid model showing 10% energy transfer rule"
      bloom_level: Create
      dok_level: 3
      standard: NGSS.MS-LS2-3
      assessment_type: Model creation project

  canvas_outcomes:
    - title: "NGSS.MS-LS2-1: Ecosystem Interactions"
      description: "Analyze and interpret data about organism interactions and resource competition"
      mastery_points: 3
      calculation_method: decaying_average

    - title: "NGSS.MS-LS2-3: Matter and Energy Transfer"
      description: "Develop model showing cycling of matter and flow of energy in ecosystems"
      mastery_points: 3
      calculation_method: decaying_average
```

**Success Checkpoint**: You have YAML-formatted learning objectives ready for Canvas.

---

## Step 3: First Canvas Integration (10 minutes)

### Option A: With Canvas Access

**Create Outcomes in Canvas**:
```
User: Create these outcomes in my Canvas course

Dr. Vasquez: I'll create Canvas outcomes from the objectives.
What's your course ID? (Find in Canvas URL: canvas.edu/courses/[ID])

User: 12345

Dr. Vasquez: Creating outcomes...
✅ Created outcome: NGSS.MS-LS2-1 (ID: 1001)
✅ Created outcome: NGSS.MS-LS2-3 (ID: 1002)

Your outcomes are now in Canvas and ready to align to assignments!
```

**Verify in Canvas**:
1. Go to Course → Outcomes
2. See newly created outcomes with mastery criteria
3. Ready to align to future assignments

### Option B: Without Canvas Access

**Generate Canvas-Ready Instructions**:
```
User: Generate Canvas implementation instructions

Dr. Vasquez: Here's how to manually implement these outcomes in Canvas:

STEP-BY-STEP CANVAS IMPLEMENTATION:

1. Navigate to Course → Outcomes
2. Click "+ Outcome"
3. For Outcome 1:
   - Title: "NGSS.MS-LS2-1: Ecosystem Interactions"
   - Description: [provided text]
   - Mastery Points: 3
   - Calculation Method: Decaying Average (65%)
   - Click Save

4. Repeat for Outcome 2: NGSS.MS-LS2-3

5. When creating assignments, align to these outcomes for tracking.

These objectives are saved to: learning-objectives-ecosystem.yaml
```

**Success Checkpoint**: Canvas outcomes created OR implementation guide generated.

---

## Step 4: Explore More Capabilities (5 minutes)

### Try Another Command

**Backward Design a Unit**:
```
User: *backward-design ecosystems unit

Dr. Vasquez: I'll guide you through UbD backward design process.

STAGE 1: Desired Results
Essential Question: "How do organisms depend on each other and their environment?"
Enduring Understanding: "Energy flows and matter cycles through ecosystems in predictable patterns"

STAGE 2: Assessment Evidence
Performance Task: Design and present ecosystem model showing energy flow
Other Evidence: Quizzes on terminology, food web diagrams

STAGE 3: Learning Plan (WHERETO)
W: Show unit objectives and essential question
H: Hook with decomposition demonstration
E: Explore food webs, practice energy calculations
R: Revise diagrams based on peer feedback
E: Evaluate with ecosystem model project
T: Tier resources by complexity, offer product choices
O: Sequence from simple food chains to complex webs

[Full template generated]
```

### Review Available Workflows

```
User: What workflows are available?

Dr. Vasquez: The BMAD Education Pack includes 7 complete workflows:

1. **course-design-full** - Comprehensive course creation (Backward Design)
2. **unit-design-backward** - Single unit with UbD framework
3. **assessment-development** - Create valid, reliable assessments
4. **differentiation-planning** - UDL and tiered strategies
5. **canvas-deployment** - Automated Canvas course building
6. **lesson-planning-gagne** - Daily lessons with Nine Events
7. **standards-alignment** - Map curriculum to standards

Each workflow uses multiple agents in sequence for comprehensive design.
See workflow-guide.md for details.
```

---

## Next Steps (Post-Tutorial)

### Immediate Actions
1. **Save Your Work**: Agent outputs are in `expansion-packs/bmad-education/outputs/`
2. **Try Another Agent**: Load `instructional-designer` for lesson plans
3. **Run a Workflow**: Execute `course-design-full` for complete course

### Learning Progression

**Beginner** (You are here):
- ✅ Activate agents
- ✅ Execute single commands
- ✅ Generate Canvas-ready content

**Intermediate** (Next):
- Run complete workflows (unit-design-backward)
- Use multi-agent collaboration
- Implement in Canvas systematically

**Advanced**:
- Customize workflows for your needs
- Chain multiple workflows
- Build curriculum at scale

### Recommended Reading Order

1. **educational-theory-guide.md** - Understand frameworks (1 hour)
2. **workflow-guide.md** - Master 7 workflows (1 hour)
3. **agent-collaboration-guide.md** - Multi-agent patterns (30 min)
4. **best-practices.md** - Quality standards (30 min)
5. **canvas-integration-guide.md** - Deep Canvas dive (2 hours)

---

## Common Quick Start Questions

### Q: "Can I use this without Canvas?"
**A**: Absolutely! Agents generate educational content in standard formats (YAML, Markdown). You can:
- Use outputs for lesson planning
- Adapt for any LMS (Moodle, Blackboard, Google Classroom)
- Print for traditional planning
- Import Canvas-formatted content later when ready

### Q: "Do I need to know educational frameworks?"
**A**: No! Agents guide you through frameworks with:
- Plain-language explanations
- Numbered options for selection
- Templates that structure your thinking
- Automatic alignment to standards

You'll learn frameworks by using them.

### Q: "How long does a full course take?"
**A**: Depends on scope:
- **Single unit** (2-3 weeks): 30-60 minutes with unit-design-backward workflow
- **Semester course** (15 weeks): 2-3 hours with course-design-full workflow
- **Full year** (36 weeks): 4-6 hours with systematic planning

Agents dramatically reduce planning time while improving quality.

### Q: "Can I customize agent outputs?"
**A**: Yes! Agents provide:
- YAML templates you can edit
- Markdown documents you can revise
- Canvas-ready formats you can adjust
- "doc-out" command to save work in progress

All outputs are starting points, not final products.

### Q: "What if I make a mistake?"
**A**: No problem:
- Agents guide with numbered options (no wrong choices)
- You can restart commands anytime
- Canvas changes are reversible
- Templates can be regenerated

Learning by doing is encouraged!

---

## Troubleshooting Quick Start

### Issue: Agent won't activate
**Solution**: Verify path and use exact agent name:
```
/load expansion-packs/bmad-education/agents/curriculum-architect.md
```

### Issue: Commands not working
**Solution**: Commands require `*` prefix:
```
*create-objectives  ✅ Correct
create-objectives   ❌ Incorrect
```

### Issue: Canvas tools failing
**Solution**:
1. Check API token is set: `echo $CANVAS_API_TOKEN`
2. Verify course ID is correct
3. Run `canvas_health_check()` to test connection

### Issue: Don't understand agent questions
**Solution**: Ask agent for clarification:
```
User: Can you explain what you mean by "standards framework"?

Dr. Vasquez: Standards frameworks are official sets of learning expectations.
Common examples:
1. Common Core (ELA and Math)
2. NGSS (Science)
3. NCSS (Social Studies)
4. ISTE (Technology)

Which subject are you teaching? I'll suggest the appropriate framework.
```

---

## Success Checklist

After completing this guide, you should have:

- [ ] Activated curriculum-architect agent successfully
- [ ] Executed *create-objectives command
- [ ] Generated learning objectives aligned to standards
- [ ] Created Canvas outcomes OR generated implementation guide
- [ ] Explored *backward-design or another command
- [ ] Saved outputs for future use
- [ ] Identified next learning steps

**All checked?** Congratulations! You're ready for workflow-level work.

**Some unchecked?** That's okay! Review relevant sections and try again.

---

## What You've Accomplished

In 30 minutes, you've:

**Learned**:
- How to activate BMAD education agents
- How to execute agent commands
- How agents apply educational frameworks
- How to generate Canvas-ready content

**Created**:
- Standards-aligned learning objectives
- Canvas outcomes with mastery tracking
- Backward design unit framework
- Foundation for complete curriculum

**Prepared For**:
- Full workflow execution
- Multi-agent collaboration
- Systematic Canvas course building
- Curriculum development at scale

---

## Ready for More?

**Next Tutorial**: [workflow-guide.md](workflow-guide.md)
- Execute complete unit-design-backward workflow
- See how agents collaborate
- Build full Canvas course from start to finish

**Deep Dive**: [educational-theory-guide.md](educational-theory-guide.md)
- Understand Bloom's, DOK, UbD, Gagné, UDL
- See how frameworks integrate
- Learn educational research foundations

**Technical Reference**: [canvas-integration-guide.md](canvas-integration-guide.md)
- All 95+ Canvas MCP tools documented
- Implementation patterns and best practices
- Troubleshooting and advanced usage

---

## Community & Support

**Documentation**:
- All guides in `expansion-packs/bmad-education/docs/`
- Agent references in `agents/`
- Data files in `data/` for framework details

**Getting Help**:
- Review `troubleshooting.md` for common issues
- Check agent `*help` commands for guidance
- Consult educational-theory-guide.md for framework questions

**Contributing**:
- Share your workflow customizations
- Report issues or suggest improvements
- Help other educators learn the system

---

## Conclusion

You've completed your first BMAD Education Pack experience! You now know how to:
- Activate specialized education agents
- Execute commands to generate curriculum
- Create Canvas-ready educational content
- Navigate the BMAD documentation system

**The journey from here**:
1. Practice with different agents and commands
2. Run complete workflows for full units/courses
3. Implement in Canvas and see impact on students
4. Customize and scale for your educational context

**Remember**: BMAD agents are your collaborators, not replacements. They:
- Handle tedious alignment and formatting
- Apply research-based frameworks systematically
- Free you to focus on student needs and instructional creativity
- Learn your preferences and context over time

**Transform theory into practice. Build learning that matters.**

Welcome to the BMAD Education Pack community!
