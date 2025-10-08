# WCAG 2.1 Accessibility Guidelines for Education

## Overview
Web Content Accessibility Guidelines (WCAG) 2.1 provides international standards for making web content accessible to people with disabilities. For educational technology, meeting WCAG 2.1 Level AA ensures that learning materials are accessible to all students, including those with visual, auditory, motor, or cognitive disabilities.

## Theoretical Foundation
**Developed by**: World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI)
**Current Version**: WCAG 2.1 (June 2018); WCAG 2.2 (October 2023)
**Legal Basis**: ADA Title II, Section 508, European Accessibility Act

**Four Principles (POUR)**:
1. **Perceivable**: Information must be presentable to users in ways they can perceive
2. **Operable**: Interface components must be operable by all users
3. **Understandable**: Information and operation must be understandable
4. **Robust**: Content must be robust enough to work with assistive technologies

## Core Components: WCAG 2.1 Level AA Criteria

### Principle 1: Perceivable

#### Guideline 1.1: Text Alternatives
**1.1.1 Non-text Content (Level A)**
- **Requirement**: Provide text alternatives for all non-text content
- **Educational Application**:
  - Alt text for images in course materials
  - Text descriptions for charts and graphs
  - Captions for icons and buttons
  - Text equivalents for mathematical equations

**Examples**:
```html
<!-- Good: Descriptive alt text -->
<img src="cell-diagram.png" alt="Diagram of animal cell showing nucleus, mitochondria, and cell membrane">

<!-- Bad: Non-descriptive -->
<img src="cell-diagram.png" alt="image">

<!-- Math equation -->
<img src="equation.png" alt="E equals m c squared">
<!-- Better: Use MathML or LaTeX with text alternative -->
```

**Canvas Integration**:
- Use image upload features with alt text fields
- Ensure all embedded images have descriptions
- Use Canvas Equation Editor (generates accessible math)

#### Guideline 1.2: Time-based Media
**1.2.1 Audio-only and Video-only (Level A)**
- Provide alternative for prerecorded audio-only
- Provide alternative for prerecorded video-only

**1.2.2 Captions (Prerecorded) (Level A)**
- **Requirement**: Provide captions for all prerecorded video
- **Educational Application**:
  - Lecture recordings must have accurate captions
  - Educational videos need synchronized captions
  - Include relevant non-speech information (laughter, music)

**1.2.3 Audio Description or Media Alternative (Level A)**
- Provide audio description or transcript for prerecorded video

**1.2.4 Captions (Live) (Level AA)** ⭐ KEY FOR EDUCATION
- **Requirement**: Provide captions for all live audio content
- **Educational Application**:
  - Live lectures and webinars
  - Real-time class discussions
  - Live streaming events

**1.2.5 Audio Description (Prerecorded) (Level AA)** ⭐
- **Requirement**: Provide audio description for prerecorded video
- **Educational Application**:
  - Describe visual elements in educational videos
  - Explain diagrams shown in video lectures
  - Describe demonstrations and experiments

**Canvas Tools**:
- Canvas Studio for captioning
- YouTube auto-captions (must be edited for accuracy)
- Third-party captioning services (3Play Media, Rev)

#### Guideline 1.3: Adaptable
**1.3.1 Info and Relationships (Level A)**
- **Requirement**: Structure must be programmatically determined
- **Educational Application**:
  - Use proper heading hierarchy (H1, H2, H3)
  - Use semantic HTML for lists, tables, forms
  - Label form fields clearly

**1.3.2 Meaningful Sequence (Level A)**
- Reading order must make sense
- Content sequence must be logical

**1.3.3 Sensory Characteristics (Level A)**
- Don't rely solely on shape, size, visual location, orientation, or sound
- **Bad**: "Click the button on the right"
- **Good**: "Click the Submit button"

**1.3.4 Orientation (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Content doesn't restrict view to single orientation
- **Educational Application**:
  - Quizzes work in portrait or landscape
  - PDFs are viewable in any orientation
  - Mobile learning apps don't force rotation

**1.3.5 Identify Input Purpose (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Purpose of input fields can be programmatically determined
- **Educational Application**:
  - Use autocomplete attributes for common fields
  - Label email, name, date fields appropriately

#### Guideline 1.4: Distinguishable
**1.4.1 Use of Color (Level A)**
- **Requirement**: Color is not the only means of conveying information
- **Educational Application**:
  - Don't use only red/green for correct/incorrect
  - Add icons or text labels with color
  - Use patterns in graphs, not just colors

**1.4.2 Audio Control (Level A)**
- Provide mechanism to pause/stop audio that auto-plays

**1.4.3 Contrast (Minimum) (Level AA)** ⭐ CRITICAL
- **Requirement**: Text has contrast ratio of at least 4.5:1
- **Educational Application**:
  - Check contrast for all text on backgrounds
  - Ensure readability in presentations
  - Test color schemes with contrast checkers

**Tools**: WebAIM Contrast Checker, Chrome DevTools

**1.4.4 Resize Text (Level AA)** ⭐
- **Requirement**: Text can be resized up to 200% without loss of functionality
- **Educational Application**:
  - Use relative font sizes (em, rem, %)
  - Ensure layout doesn't break when zoomed
  - Test at 200% zoom in browser

**1.4.5 Images of Text (Level AA)** ⭐
- **Requirement**: Use actual text rather than images of text
- **Exceptions**: Logos, essential images
- **Educational Application**:
  - Use HTML text instead of text screenshots
  - Use web fonts, not images
  - Convert PDF text images to actual text

**1.4.10 Reflow (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Content reflows to single column at 320 CSS pixels width
- **Educational Application**:
  - Mobile-responsive course design
  - No horizontal scrolling on mobile
  - Content adapts to small screens

**1.4.11 Non-text Contrast (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: 3:1 contrast for UI components and graphics
- **Educational Application**:
  - Buttons have sufficient contrast
  - Form field borders are visible
  - Graph elements are distinguishable

**1.4.12 Text Spacing (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Content doesn't break when text spacing is adjusted
- **Educational Application**:
  - Test with increased line height, letter spacing
  - Ensure no content is cut off or overlapping

**1.4.13 Content on Hover or Focus (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Content that appears on hover/focus is dismissible, hoverable, persistent
- **Educational Application**:
  - Tooltips can be closed (ESC key)
  - Dropdown menus stay open when moused over
  - Hover content doesn't disappear too quickly

### Principle 2: Operable

#### Guideline 2.1: Keyboard Accessible
**2.1.1 Keyboard (Level A)** ⭐ CRITICAL
- **Requirement**: All functionality available via keyboard
- **Educational Application**:
  - Quiz navigation works with Tab/Enter/Space
  - Drag-and-drop has keyboard alternative
  - Media players have keyboard controls

**2.1.2 No Keyboard Trap (Level A)**
- **Requirement**: Keyboard focus can move away from component
- **Educational Application**:
  - Modal dialogs can be closed with keyboard
  - Embedded content doesn't trap focus
  - Tab cycles properly through interface

**2.1.4 Character Key Shortcuts (Level A)** ⭐ NEW IN 2.1
- **Requirement**: Single-key shortcuts can be turned off or remapped
- **Educational Application**:
  - Provide settings to disable shortcuts
  - Use Ctrl/Alt/Cmd modifiers for shortcuts

#### Guideline 2.2: Enough Time
**2.2.1 Timing Adjustable (Level A)**
- **Requirement**: User can extend, adjust, or disable time limits
- **Educational Application**:
  - Timed quizzes have extension options
  - Session timeouts have warnings
  - Auto-advancing slides can be paused

**2.2.2 Pause, Stop, Hide (Level A)**
- **Requirement**: Moving, blinking, auto-updating content can be paused
- **Educational Application**:
  - Carousel slides can be paused
  - Auto-scrolling announcements can be stopped

#### Guideline 2.3: Seizures and Physical Reactions
**2.3.1 Three Flashes or Below Threshold (Level A)**
- **Requirement**: No content flashes more than 3 times per second
- **Educational Application**:
  - Avoid rapid flashing in videos
  - No strobing animations in presentations
  - Check GIFs and animations

#### Guideline 2.4: Navigable
**2.4.1 Bypass Blocks (Level A)**
- **Requirement**: Mechanism to skip repeated content
- **Educational Application**:
  - "Skip to main content" link
  - Heading navigation in screen readers
  - Landmark regions (nav, main, aside)

**2.4.2 Page Titled (Level A)**
- **Requirement**: Pages have descriptive titles
- **Educational Application**:
  - Module pages: "Module 3: Photosynthesis"
  - Assignment pages: "Essay Assignment - Due Oct 15"
  - Clear, unique page titles

**2.4.3 Focus Order (Level A)**
- **Requirement**: Focus order makes sense
- **Educational Application**:
  - Tab order follows visual layout
  - Forms tab in logical sequence
  - Skip links appear first in tab order

**2.4.4 Link Purpose (In Context) (Level A)**
- **Requirement**: Purpose of link clear from text or context
- **Bad**: "Click here" "Read more"
- **Good**: "Download syllabus PDF" "Read Chapter 3 notes"

**2.4.5 Multiple Ways (Level AA)** ⭐
- **Requirement**: More than one way to locate pages
- **Educational Application**:
  - Navigation menu + search + sitemap
  - Modules + Calendar + Assignments list
  - Multiple paths to find content

**2.4.6 Headings and Labels (Level AA)** ⭐
- **Requirement**: Headings and labels are descriptive
- **Educational Application**:
  - Clear section headings in modules
  - Descriptive form labels
  - Meaningful assignment titles

**2.4.7 Focus Visible (Level AA)** ⭐
- **Requirement**: Keyboard focus indicator is visible
- **Educational Application**:
  - Don't remove outline from focused elements
  - Ensure focus is clearly visible
  - Test keyboard navigation visually

#### Guideline 2.5: Input Modalities (NEW IN 2.1)
**2.5.1 Pointer Gestures (Level A)**
- **Requirement**: Multi-point or path-based gestures have single-pointer alternative
- **Educational Application**:
  - Pinch-to-zoom has +/- buttons
  - Swipe has navigation arrows
  - Drag-and-drop has click alternative

**2.5.2 Pointer Cancellation (Level A)**
- **Requirement**: Single-pointer activation on up-event or can be aborted
- **Educational Application**:
  - Clicks activate on release, not press
  - Accidental touches can be canceled

**2.5.3 Label in Name (Level A)**
- **Requirement**: Accessible name contains visible text label
- **Educational Application**:
  - Button aria-label includes visible text
  - Voice control users can activate by visible name

**2.5.4 Motion Actuation (Level A)**
- **Requirement**: Functionality that uses device motion has UI alternative
- **Educational Application**:
  - Shake to undo has button alternative
  - Tilt controls have keyboard alternative

### Principle 3: Understandable

#### Guideline 3.1: Readable
**3.1.1 Language of Page (Level A)**
- **Requirement**: Default language of page is programmatically determined
- **HTML**: `<html lang="en">`

**3.1.2 Language of Parts (Level AA)** ⭐
- **Requirement**: Language changes are indicated
- **Educational Application**:
  - Foreign language examples marked up
  - `<span lang="es">Hola</span>`

#### Guideline 3.2: Predictable
**3.2.1 On Focus (Level A)**
- **Requirement**: Focus doesn't trigger unexpected changes
- **Educational Application**:
  - Focusing on field doesn't auto-submit form
  - Tabbing doesn't change pages

**3.2.2 On Input (Level A)**
- **Requirement**: Changing settings doesn't cause unexpected changes
- **Educational Application**:
  - Selecting dropdown doesn't auto-navigate
  - Provide explicit submit button

**3.2.3 Consistent Navigation (Level AA)** ⭐
- **Requirement**: Navigation is consistent across pages
- **Educational Application**:
  - Course navigation in same location
  - Consistent button placement
  - Predictable interface patterns

**3.2.4 Consistent Identification (Level AA)** ⭐
- **Requirement**: Components with same functionality are identified consistently
- **Educational Application**:
  - Download icon always means download
  - Submit buttons always labeled "Submit"
  - Consistent terminology

#### Guideline 3.3: Input Assistance
**3.3.1 Error Identification (Level A)**
- **Requirement**: Errors are identified and described in text
- **Educational Application**:
  - Form validation messages are clear
  - Quiz feedback explains what's wrong
  - Error messages suggest corrections

**3.3.2 Labels or Instructions (Level A)**
- **Requirement**: Labels or instructions provided when input required
- **Educational Application**:
  - All form fields have labels
  - Required fields are marked
  - Format instructions provided (date, etc.)

**3.3.3 Error Suggestion (Level AA)** ⭐
- **Requirement**: If error detected, suggestions provided
- **Educational Application**:
  - "Email must include @"
  - "Password must be 8 characters"
  - Helpful correction guidance

**3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)** ⭐
- **Requirement**: Submissions are reversible, checked, or confirmed
- **Educational Application**:
  - Quiz submission requires confirmation
  - "Are you sure you want to submit?"
  - Allow review before final submission

### Principle 4: Robust

#### Guideline 4.1: Compatible
**4.1.1 Parsing (Level A)**
- **Requirement**: Valid HTML markup
- **Educational Application**:
  - Proper opening/closing tags
  - Unique IDs
  - Validate HTML

**4.1.2 Name, Role, Value (Level A)**
- **Requirement**: UI components have accessible name and role
- **Educational Application**:
  - Use semantic HTML (button, not div)
  - ARIA labels where needed
  - Custom controls accessible

**4.1.3 Status Messages (Level AA)** ⭐ NEW IN 2.1
- **Requirement**: Status messages can be determined without focus
- **Educational Application**:
  - Success messages announced to screen readers
  - Loading indicators accessible
  - Use ARIA live regions

## Application in Education

### Course Design Checklist
**Structure**:
- ✅ Proper heading hierarchy (H1 > H2 > H3)
- ✅ Semantic HTML for all content
- ✅ Skip navigation links

**Media**:
- ✅ All images have alt text
- ✅ Videos have captions and transcripts
- ✅ Audio has transcripts

**Color & Contrast**:
- ✅ 4.5:1 contrast for text
- ✅ 3:1 contrast for UI components
- ✅ Color not sole means of information

**Keyboard**:
- ✅ All functions keyboard accessible
- ✅ Visible focus indicators
- ✅ Logical tab order

**Forms & Quizzes**:
- ✅ All fields labeled
- ✅ Error messages clear and helpful
- ✅ Keyboard navigable

### Testing Tools
**Automated**:
- WAVE (WebAIM)
- axe DevTools
- Lighthouse (Chrome)
- ANDI (Accessibility Inspector)

**Manual**:
- Keyboard navigation test
- Screen reader test (NVDA, JAWS, VoiceOver)
- Contrast checker
- HTML validator

### Canvas-Specific Considerations
**Canvas Accessibility Features**:
- Built-in accessibility checker for editor
- Supports proper heading structure
- ARIA landmarks in interface
- Keyboard shortcuts documented

**Common Canvas Issues**:
- Embedded content may not be accessible
- Third-party LTI tools vary in accessibility
- Custom HTML must be validated
- File uploads should include alt text option

## Canvas Integration

### Using Canvas MCP Tools for Accessibility

**Assignment with Accessibility Notes** (`canvas_create_assignment`):
```yaml
name: "Reading Response"
description: |
  ## Assignment Instructions
  [Clear, structured instructions with headings]
  
  ## Accessibility Options
  - Prefer text response, but can submit video with captions
  - Use voice typing if helpful
  - Contact instructor for alternative formats
submission_types: ["online_text_entry", "online_upload"]
```

**Accessible Quiz** (`canvas_create_quiz`):
```yaml
title: "Chapter 5 Quiz"
time_limit: 60
quiz_type: "assignment"
# Ensure:
# - All images in questions have alt text
# - Math equations use Equation Editor
# - Time extensions available via accommodations
# - Keyboard navigable
```

**Page with Proper Structure** (`canvas_create_page`):
```yaml
title: "Module 3 Overview"
body: |
  <h2>Learning Objectives</h2>
  <ul>
    <li>Objective 1</li>
    <li>Objective 2</li>
  </ul>
  
  <h2>Required Readings</h2>
  <p><a href="..." aria-label="Download Chapter 3 PDF">Chapter 3</a></p>
  
  <h2>Activities This Week</h2>
  [Properly structured content with semantic HTML]
```

**Accessible Discussion** (`canvas_create_discussion_topic`):
```yaml
title: "Week 3 Discussion: Climate Change"
message: |
  <h2>Discussion Prompt</h2>
  <p>[Clear instructions]</p>
  
  <h2>Accessibility Notes</h2>
  <ul>
    <li>Use alt text if posting images</li>
    <li>Describe visual content in posts</li>
    <li>Format lists properly for screen readers</li>
  </ul>
```

**Accessible File Uploads**:
- Use Canvas file upload with description field
- Add alt text to images
- Ensure PDFs are properly tagged
- Provide text versions of documents

**Canvas Accessibility Checker**:
- Use built-in checker in Rich Content Editor
- Fix flagged issues before publishing
- Validate custom HTML

## References

World Wide Web Consortium. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. Retrieved from https://www.w3.org/TR/WCAG21/

World Wide Web Consortium. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. Retrieved from https://www.w3.org/TR/WCAG22/

WebAIM. (2024). *Introduction to Web Accessibility*. Retrieved from https://webaim.org/intro/

U.S. Department of Justice. (2010). *Americans with Disabilities Act*. Retrieved from https://www.ada.gov/

Section508.gov. (2024). *Section 508 Standards*. Retrieved from https://www.section508.gov/

## Related Resources
- **udl-framework.md** - UDL complements WCAG with pedagogical approach
- **canvas-best-practices.md** - Accessibility in Canvas course design
- **cognitive-load-theory.md** - Accessibility supports cognitive load reduction
- **active-learning-strategies.md** - Accessible active learning techniques
