# Assessment Validity and Reliability

## Overview
Assessment validity and reliability are fundamental psychometric properties that ensure educational assessments accurately measure what they intend to measure (validity) and produce consistent results (reliability). For educators, understanding these concepts is essential for creating assessments that provide trustworthy evidence of student learning.

## Theoretical Foundation
**Key Researchers**: 
- Samuel Messick (Unified validity theory)
- Lee Cronbach (Reliability coefficients)
- Michael Kane (Argument-based validity)
- Pamela Moss (Consequential validity)

**Standards**: *Standards for Educational and Psychological Testing* (AERA, APA, NCME, 2014)

## Core Components

### Validity: Does the Assessment Measure What It Claims?

#### Types of Validity Evidence

**1. Content Validity**
**Definition**: Degree to which assessment items represent the full domain of the construct

**Questions to Ask**:
- Do questions cover all learning objectives?
- Are topics appropriately weighted by importance?
- Do items reflect the depth and breadth of content taught?

**Example of Strong Content Validity**:
```yaml
Unit: Photosynthesis (5 objectives taught)
Assessment breakdown:
  - Objective 1 (Process steps): 5 questions (20%)
  - Objective 2 (Inputs/outputs): 5 questions (20%)
  - Objective 3 (Light reactions): 5 questions (20%)
  - Objective 4 (Calvin cycle): 5 questions (20%)
  - Objective 5 (Factors affecting): 5 questions (20%)
# Balanced coverage = strong content validity
```

**Example of Weak Content Validity**:
```yaml
Unit: Photosynthesis (5 objectives taught)
Assessment breakdown:
  - Objective 1: 20 questions (80%)
  - Objectives 2-5: 5 questions total (20%)
# Unbalanced coverage = weak content validity
```

**Improving Content Validity**:
- Create test blueprint aligning items to objectives
- Weight items by instructional emphasis
- Review with content experts
- Use Item Objective Congruence Index

**2. Construct Validity**
**Definition**: Degree to which assessment measures the theoretical construct it claims to measure

**Questions to Ask**:
- Does the assessment truly measure "critical thinking"?
- Are we measuring understanding or just memorization?
- Do scores reflect the intended cognitive level?

**Threats to Construct Validity**:
- **Construct Underrepresentation**: Assessment too narrow
  - Example: Measuring "writing ability" only with grammar test
- **Construct-Irrelevant Variance**: Measuring unintended factors
  - Example: Vocabulary questions testing reading comprehension

**Example Analysis**:
```yaml
Claim: "This test measures problem-solving ability"

Evidence For Construct Validity:
  - Novel problems not seen in class
  - Requires multi-step reasoning
  - Shows work demonstrates process
  - Variety of problem types

Evidence Against:
  - Heavy vocabulary requirements (irrelevant variance)
  - Time pressure favors speed over thought
  - Only one problem type (underrepresentation)
```

**Improving Construct Validity**:
- Define constructs clearly with operational definitions
- Align item types to construct requirements
- Pilot test with think-alouds to verify cognitive processes
- Correlate with other measures of same construct

**3. Criterion Validity**
**Definition**: Degree to which assessment correlates with external criterion

**Concurrent Validity**: Correlation with existing measure taken at same time
- Example: New math test correlates with standardized math test

**Predictive Validity**: Correlation with future performance
- Example: Placement test predicts success in next course

**Questions to Ask**:
- Does performance predict future success?
- Do scores align with other indicators?
- Can we validate against external benchmarks?

**4. Consequential Validity**
**Definition**: Degree to which assessment consequences align with intended purposes

**Questions to Ask**:
- Do assessment results lead to appropriate educational decisions?
- Are unintended negative consequences minimized?
- Does assessment promote learning or just measure it?

**Example**: High-stakes exit exam
- **Positive Consequences**: Ensures minimum competency, motivates study
- **Negative Consequences**: Narrows curriculum to tested content, high anxiety

**Assessment of Consequences**:
- Evaluate washback effects on teaching
- Monitor equity and fairness across groups
- Consider impact on student motivation and learning

### Reliability: Does the Assessment Produce Consistent Results?

#### Types of Reliability

**1. Test-Retest Reliability**
**Definition**: Consistency of scores when same test given twice

**Calculation**: Correlation between Time 1 and Time 2 scores

**Acceptable Range**: r > 0.80 for high-stakes; r > 0.70 for classroom

**Example**:
```yaml
Student A: Test 1 = 85%, Test 2 (one week later) = 83%
Student B: Test 1 = 72%, Test 2 = 75%
Student C: Test 1 = 90%, Test 2 = 88%
# High correlation = good test-retest reliability
```

**Challenges in Education**:
- Students learn between tests (not true "retest")
- Memory effects from first administration
- Impractical for most classroom assessments

**2. Parallel Forms Reliability**
**Definition**: Consistency between two equivalent versions of test

**Calculation**: Correlation between Form A and Form B scores

**Requirements**:
- Equivalent difficulty
- Same content coverage
- Same format and length

**Example Use**: Pre/post testing with different forms

**3. Internal Consistency Reliability**
**Definition**: Degree to which items measure the same construct

**Cronbach's Alpha (α)**:
- α > 0.90: Excellent
- α > 0.80: Good
- α > 0.70: Acceptable
- α < 0.70: Questionable

**Calculation** (simplified concept):
- Compares variance of individual items to total test variance
- Higher alpha = items measuring same thing

**Example**:
```yaml
Test: 20-item math test
Cronbach's α = 0.85 (Good internal consistency)

Interpretation:
  - Items are coherently measuring math ability
  - Removing any single item doesn't dramatically change score
  - Test is measuring one construct consistently
```

**Improving Internal Consistency**:
- Ensure all items measure same construct
- Remove items that don't correlate with total score
- Increase number of items
- Use clear, unambiguous language

**4. Inter-Rater Reliability**
**Definition**: Consistency of scores across different raters

**Cohen's Kappa (κ)** for categorical ratings:
- κ > 0.80: Excellent agreement
- κ > 0.60: Good agreement
- κ > 0.40: Moderate agreement

**Intraclass Correlation Coefficient (ICC)** for continuous scores:
- Similar interpretation to kappa

**Example**:
```yaml
Essay scored by two teachers:
Student A: Teacher 1 = 85, Teacher 2 = 83
Student B: Teacher 1 = 72, Teacher 2 = 75
Student C: Teacher 1 = 90, Teacher 2 = 88

ICC = 0.92 (Excellent inter-rater reliability)
```

**Improving Inter-Rater Reliability**:
- Develop detailed rubrics
- Train raters together
- Use anchor papers/examples
- Conduct calibration sessions
- Calculate agreement periodically

### Standard Error of Measurement (SEM)
**Definition**: Average amount of measurement error in test scores

**Formula** (conceptual): SEM = SD × √(1 - reliability)

**Interpretation**:
- Smaller SEM = more precise measurement
- Used to create confidence intervals around scores

**Example**:
```yaml
Test Score: 85%
SEM: 3 points
95% Confidence Interval: 79-91%

Interpretation:
  We are 95% confident the student's "true score" 
  falls between 79% and 91%.
```

**Implications**:
- Don't over-interpret small score differences
- Use score ranges, not single points
- Communicate uncertainty to students and parents

## Application in Education

### Assessment Design Process

**Step 1: Define Purpose and Construct**
- What exactly are you measuring?
- What level of Bloom's Taxonomy?
- What will you do with results?

**Step 2: Create Test Blueprint**
```yaml
Content Domain Weighting:
  Topic A: 30% (6 questions)
  Topic B: 40% (8 questions)
  Topic C: 30% (6 questions)

Cognitive Level Weighting:
  Remember/Understand: 30%
  Apply/Analyze: 50%
  Evaluate/Create: 20%

Item Type Distribution:
  Multiple Choice: 50%
  Short Answer: 30%
  Essay: 20%
```

**Step 3: Write Items Aligned to Blueprint**
- Match items to specific objectives
- Ensure appropriate difficulty
- Remove construct-irrelevant content

**Step 4: Review for Validity**
- Content expert review
- Bias review (cultural, linguistic)
- Pilot test if possible

**Step 5: Administer and Analyze**
- Calculate item difficulty (% correct)
- Calculate item discrimination (correlation with total score)
- Revise or remove poor items

**Step 6: Evaluate Reliability**
- Calculate Cronbach's α
- Check for consistency
- Improve if needed

### Item Analysis

**Item Difficulty (p-value)**
```
p = (# correct) / (# students)

Interpretation:
  p = 1.0: Everyone got it right (too easy)
  p = 0.9-0.7: Easy (good for foundational knowledge)
  p = 0.6-0.4: Moderate (ideal for most items)
  p = 0.3-0.1: Hard (good for challenge items)
  p = 0.0: No one got it right (too hard or flawed)
```

**Item Discrimination (point-biserial correlation)**
```
Positive discrimination: Good students answer correctly
Negative discrimination: Good students answer incorrectly (bad item!)
Zero discrimination: Item doesn't distinguish ability levels

Interpretation:
  r > 0.30: Excellent discrimination
  r = 0.20-0.30: Good discrimination
  r = 0.10-0.20: Fair discrimination (consider revision)
  r < 0.10: Poor discrimination (revise or remove)
  r < 0: Negative discrimination (definitely remove!)
```

**Example Item Analysis**:
```yaml
Question 15: "What is photosynthesis?"
  Difficulty: 0.85 (85% correct - easy)
  Discrimination: 0.45 (Good - high scorers more likely correct)
  Decision: Keep item - good easy question

Question 23: "Apply the photosynthesis equation to solve..."
  Difficulty: 0.15 (15% correct - very hard)
  Discrimination: -0.10 (Negative - high scorers missing it)
  Decision: Review item - likely flawed or mstaught
```

### Ensuring Fairness and Equity

**Fairness Threats**:
- Cultural bias in language or examples
- Stereotype threat effects
- Differential item functioning (DIF)
- Access barriers (technology, language)

**Bias Review Questions**:
- Are examples culturally neutral or inclusive?
- Does language disadvantage ELL students unnecessarily?
- Are accommodations available for students with disabilities?
- Do images represent diverse populations?

**Example of Bias**:
```yaml
Biased Item:
  "Calculate the cost of a ski vacation to Aspen..."
  Issues: Assumes familiarity with skiing, expensive travel

Improved Item:
  "Calculate the cost of a weekend trip with lodging $150/night..."
  Improvement: Neutral context, accessible to all backgrounds
```

## Canvas Integration

### Using Canvas MCP Tools for Valid, Reliable Assessment

**Rubrics for Reliability** (`canvas_create_rubric`):
```yaml
title: "Essay Rubric - High Inter-Rater Reliability"
criteria:
  - description: "Thesis Statement"
    ratings:
      - description: "Clear, specific, arguable thesis in intro"
        points: 10
      - description: "Thesis present but vague or unclear"
        points: 7
      - description: "No clear thesis statement"
        points: 3
    # Specific descriptors increase reliability

  - description: "Evidence and Support"
    ratings:
      - description: "3+ credible sources, properly cited, well-integrated"
        points: 20
      - description: "2 sources, citation errors, weak integration"
        points: 13
      - description: "1 or fewer sources, major citation problems"
        points: 6
    # Observable criteria = consistent scoring
```

**Quiz Item Analysis** (`canvas_create_quiz`):
```yaml
# After quiz administration, use Canvas analytics:
# 1. Item difficulty (% correct)
# 2. Item discrimination
# 3. Time per question
# 4. Revise poor-performing items for next iteration
```

**Learning Outcomes for Construct Validity** (`canvas_create_outcome`):
```yaml
title: "Critical Analysis of Historical Sources"
description: |
  Students will evaluate primary sources by:
  - Identifying author, audience, purpose
  - Analyzing bias and perspective
  - Corroborating across sources
  - Drawing evidence-based conclusions
  
  # Clear construct definition enables valid assessment
mastery_points: 3
```

**Assignment Alignment for Content Validity** (`canvas_create_assignment`):
```yaml
# Test Blueprint Implementation
name: "Unit 3 Test - Genetics"
description: |
  Content Coverage (matches instruction):
  - Punnett squares (25%) - 5 problems
  - Pedigrees (25%) - 5 problems
  - Probability (25%) - 5 problems
  - Genetic disorders (25%) - 5 problems
  
  Cognitive Levels (Bloom's):
  - Remember/Understand: 30%
  - Apply: 40%
  - Analyze/Evaluate: 30%
points_possible: 100
```

**Multiple Assessments for Reliability**:
```yaml
canvas_create_assignment_group:
  name: "Writing Skills (Multiple Measures)"
  # Use multiple assessments to increase reliability
  assignments:
    - "Diagnostic Essay (formative)"
    - "Peer Review Practice"
    - "Midterm Essay"
    - "Final Essay"
  # Pattern of scores more reliable than single measure
```

**Differentiated Assessments for Validity** (`canvas_create_assignment`):
```yaml
name: "Demonstrate Understanding - Student Choice"
description: |
  Show your understanding of [concept] in ONE of these formats:
  
  - Written essay (traditional)
  - Video presentation
  - Infographic with annotations
  - Podcast with script
  
  All options assessed for same learning objectives.
  Format choice reduces construct-irrelevant variance 
  (e.g., writing ability in science test).
  
  Rubric focuses on concept understanding, not format.
```

## Practical Guidelines

### Quick Validity Checklist
- ✅ Items align to specific learning objectives
- ✅ Content coverage matches instruction emphasis
- ✅ Cognitive level matches intended level (Bloom's)
- ✅ No construct-irrelevant difficulty
- ✅ Clear, unambiguous questions
- ✅ Culturally neutral language and examples
- ✅ Rubrics with specific, observable criteria

### Quick Reliability Checklist
- ✅ Sufficient number of items (20+ for objective tests)
- ✅ Items measure same construct
- ✅ Clear scoring guidelines
- ✅ Multiple raters trained and calibrated (for essays)
- ✅ Test conditions standardized
- ✅ Cronbach's α > 0.70 (check if possible)

### When to Prioritize Validity vs. Reliability
**Prioritize Validity When**:
- Formative assessment guiding instruction
- Assessing complex, multifaceted constructs
- High-stakes decisions (graduation, placement)

**Prioritize Reliability When**:
- Comparing students or groups
- Tracking growth over time
- Summative accountability assessments

**Ideal**: Both high validity and high reliability

## Common Assessment Issues

### Issue: Test Anxiety Reduces Validity
**Problem**: Anxiety introduces construct-irrelevant variance
**Solutions**:
- Offer retakes or revisions
- Use low-stakes formative assessments
- Teach test-taking strategies
- Provide clear expectations and rubrics
- Allow alternative demonstration methods

### Issue: Poorly Written Items Reduce Reliability
**Problem**: Confusing questions produce inconsistent results
**Solutions**:
- Avoid double negatives
- Keep language simple and clear
- Make all options plausible
- Avoid "all of the above" / "none of the above"
- Pilot test items

### Issue: Unclear Rubrics Reduce Inter-Rater Reliability
**Problem**: Different teachers score same work differently
**Solutions**:
- Use specific, observable criteria
- Provide example work at each level
- Calibrate scoring with sample papers
- Calculate agreement and discuss discrepancies

## References

American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for educational and psychological testing*. Washington, DC: AERA.

Messick, S. (1995). Validity of psychological assessment: Validation of inferences from persons' responses and performances as scientific inquiry into score meaning. *American Psychologist, 50*(9), 741-749.

Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. *Psychometrika, 16*(3), 297-334.

Kane, M. T. (2013). Validating the interpretations and uses of test scores. *Journal of Educational Measurement, 50*(1), 1-73.

Moss, P. A. (2003). Reconceptualizing validity for classroom assessment. *Educational Measurement: Issues and Practice, 22*(4), 13-25.

## Related Resources
- **blooms-taxonomy.md** - Aligning assessments to cognitive levels
- **webbs-dok.md** - Assessing depth of knowledge appropriately
- **backward-design.md** - Planning assessment before instruction
- **common-core-standards.md** - Aligning assessments to standards
- **canvas-best-practices.md** - Implementing valid, reliable assessments in Canvas
