# Canvas Workflow System - Visual Workflows

This document provides mermaid diagrams for Canvas LMS workflows.

## Complete Lesson Deployment Workflow

This is the full workflow from lesson planning through assignment publication:

```mermaid
graph TD
    A["Start: New Lesson"] --> B{"Have Teacher Edition Materials?"}
    B -->|Yes| C["Lesson Planner: *find-lesson"]
    B -->|No| M["Manual Spec Creation"]
    C --> D["Lesson Planner: Locate TAG Files"]
    D --> E["User: Open TAG PDF Externally"]
    E --> F["Lesson Planner: *extract-objectives"]
    F --> G["Lesson Planner: *extract-agenda"]
    G --> H["Lesson Planner: *extract-materials"]
    H --> I["Lesson Planner: *create-spec"]
    I --> J["Lesson Spec YAML Created"]
    M --> J
    J --> K["Assignment Designer: *create-batch"]
    K --> L["Create All Assignments in Sandbox"]
    L --> N{"Review Assignments"}
    N -->|Needs Changes| O["Assignment Designer: *update"]
    O --> L
    N -->|Approve| P["Assignment Designer: *validate"]
    P --> Q{"Validation Passed?"}
    Q -->|No| R["Fix Issues"]
    R --> P
    Q -->|Yes| S["Assignment Designer: *bulk-copy"]
    S --> T["Select Target Courses"]
    T --> U["Execute Bulk Copy to All Courses"]
    U --> V["Assignment Designer: *validate (in each course)"]
    V --> W{"Ready to Publish?"}
    W -->|No| X["Make Adjustments"]
    X --> V
    W -->|Yes| Y["Assignment Designer: *publish"]
    Y --> Z["✅ Lesson Deployed to All Courses"]

    style A fill:#f5f5f5,color:#000
    style B fill:#e3f2fd,color:#000
    style C fill:#e8f5e9,color:#000
    style D fill:#e8f5e9,color:#000
    style E fill:#fff3e0,color:#000
    style F fill:#e8f5e9,color:#000
    style G fill:#e8f5e9,color:#000
    style H fill:#e8f5e9,color:#000
    style I fill:#e8f5e9,color:#000
    style J fill:#e1f5fe,color:#000
    style K fill:#f3e5f5,color:#000
    style L fill:#f3e5f5,color:#000
    style M fill:#fff3e0,color:#000
    style N fill:#e3f2fd,color:#000
    style O fill:#f3e5f5,color:#000
    style P fill:#f3e5f5,color:#000
    style Q fill:#e3f2fd,color:#000
    style R fill:#f9ab00,color:#fff
    style S fill:#f3e5f5,color:#000
    style T fill:#e3f2fd,color:#000
    style U fill:#f3e5f5,color:#000
    style V fill:#f3e5f5,color:#000
    style W fill:#e3f2fd,color:#000
    style X fill:#f9ab00,color:#fff
    style Y fill:#f3e5f5,color:#000
    style Z fill:#34a853,color:#fff
```

**Agent Key**:
- 🟢 Green: Lesson Planner (Sophia)
- 🟣 Purple: Assignment Designer (Maya)
- 🔵 Blue: Decision Points
- 🟠 Orange: User Actions
- 🟡 Yellow: Fix/Adjust Steps

---

## Quick Single Assignment Workflow

For creating a single assignment without full lesson planning:

```mermaid
graph TD
    A["Start: Single Assignment Need"] --> B["Assignment Designer: *create"]
    B --> C["Select Assignment Template"]
    C --> D{"Template Type?"}
    D -->|Notebook Check| E["notebook-check-tmpl"]
    D -->|Handout| F["lesson-handout-tmpl"]
    D -->|Quiz| G["lesson-quiz-tmpl"]
    E --> H["Template Loads with Defaults"]
    F --> H
    G --> H
    H --> I["Elicit Required Info"]
    I --> J["Create in Sandbox Course"]
    J --> K{"Review Assignment"}
    K -->|Approve| L["Assignment Designer: *bulk-copy"]
    K -->|Modify| M["Assignment Designer: *update"]
    M --> J
    L --> N["Copy to Target Courses"]
    N --> O["Assignment Designer: *publish"]
    O --> P["✅ Assignment Live in All Courses"]

    style A fill:#f5f5f5,color:#000
    style B fill:#f3e5f5,color:#000
    style C fill:#e3f2fd,color:#000
    style D fill:#e3f2fd,color:#000
    style E fill:#e1f5fe,color:#000
    style F fill:#e1f5fe,color:#000
    style G fill:#e1f5fe,color:#000
    style H fill:#e1f5fe,color:#000
    style I fill:#fff3e0,color:#000
    style J fill:#f3e5f5,color:#000
    style K fill:#e3f2fd,color:#000
    style L fill:#f3e5f5,color:#000
    style M fill:#f3e5f5,color:#000
    style N fill:#f3e5f5,color:#000
    style O fill:#f3e5f5,color:#000
    style P fill:#34a853,color:#fff
```

---

## Lesson Planning Google Drive Integration

Semi-automated workflow showing file discovery and content elicitation:

```mermaid
graph TD
    A["Start: Plan Lesson X"] --> B["Lesson Planner: *find-lesson grade=8 unit=3 lesson=1"]
    B --> C["Google Drive MCP: search"]
    C --> D["Locate Grade 8 Folder"]
    D --> E["Google Drive MCP: folder_children"]
    E --> F["Find TAG & HOL Files"]
    F --> G["Google Drive MCP: file_metadata"]
    G --> H["Present File Info to User"]
    H --> I["User Opens TAG PDF Externally"]
    I --> J["Lesson Planner: *extract-objectives"]
    J --> K{"User Provides Objectives"}
    K --> L["Store Objectives"]
    L --> M["Lesson Planner: *extract-agenda"]
    M --> N{"User Provides Agenda"}
    N --> O["Store Agenda"]
    O --> P["Lesson Planner: *extract-materials"]
    P --> Q{"User Provides Materials"}
    Q --> R["Map to Assignment Templates"]
    R --> S["Lesson Planner: *create-spec"]
    S --> T["Generate lesson-X-spec.yaml"]
    T --> U["Validate Spec Structure"]
    U --> V["✅ Lesson Spec Ready"]
    V --> W["Handoff to Assignment Designer"]

    style A fill:#f5f5f5,color:#000
    style B fill:#e8f5e9,color:#000
    style C fill:#bbdefb,color:#000
    style D fill:#bbdefb,color:#000
    style E fill:#bbdefb,color:#000
    style F fill:#bbdefb,color:#000
    style G fill:#bbdefb,color:#000
    style H fill:#e8f5e9,color:#000
    style I fill:#fff3e0,color:#000
    style J fill:#e8f5e9,color:#000
    style K fill:#e3f2fd,color:#000
    style L fill:#e8f5e9,color:#000
    style M fill:#e8f5e9,color:#000
    style N fill:#e3f2fd,color:#000
    style O fill:#e8f5e9,color:#000
    style P fill:#e8f5e9,color:#000
    style Q fill:#e3f2fd,color:#000
    style R fill:#e8f5e9,color:#000
    style S fill:#e8f5e9,color:#000
    style T fill:#e1f5fe,color:#000
    style U fill:#e8f5e9,color:#000
    style V fill:#34a853,color:#fff
    style W fill:#f3e5f5,color:#000
```

**Process Key**:
- 🟢 Green: Lesson Planner Agent Actions
- 🔵 Light Blue: Google Drive MCP Calls
- 🔷 Blue: User Decision/Input Points
- 🟠 Orange: External User Actions
- 🟣 Purple: Handoff to Next Agent

---

## Batch Assignment Creation from Spec

Workflow for creating multiple assignments from a lesson specification:

```mermaid
graph TD
    A["Start: lesson-X-spec.yaml"] --> B["Assignment Designer: *create-batch"]
    B --> C["Load Specification File"]
    C --> D["Parse YAML Structure"]
    D --> E["Validate Spec Format"]
    E --> F{"Spec Valid?"}
    F -->|No| G["Show Validation Errors"]
    G --> H["User Fixes Spec"]
    H --> C
    F -->|Yes| I["For Each Assignment in Spec"]
    I --> J["Load Matching Template"]
    J --> K["Merge Spec Data + Defaults"]
    K --> L["Generate Description from Pattern"]
    L --> M["Canvas MCP: create_assignment"]
    M --> N["Assignment Created in Sandbox"]
    N --> O{"More Assignments?"}
    O -->|Yes| I
    O -->|No| P["Present Created Assignments List"]
    P --> Q{"User Approval?"}
    Q -->|Yes| R["Proceed to Bulk Copy"]
    Q -->|No| S["Stop - User to Review"]
    Q -->|Modify| T["Select Assignments to Change"]
    T --> U["Assignment Designer: *update"]
    U --> M
    R --> V["Assignment Designer: *bulk-copy"]

    style A fill:#f5f5f5,color:#000
    style B fill:#f3e5f5,color:#000
    style C fill:#f3e5f5,color:#000
    style D fill:#f3e5f5,color:#000
    style E fill:#f3e5f5,color:#000
    style F fill:#e3f2fd,color:#000
    style G fill:#f9ab00,color:#fff
    style H fill:#fff3e0,color:#000
    style I fill:#f3e5f5,color:#000
    style J fill:#e1f5fe,color:#000
    style K fill:#f3e5f5,color:#000
    style L fill:#f3e5f5,color:#000
    style M fill:#c5cae9,color:#000
    style N fill:#c5cae9,color:#000
    style O fill:#e3f2fd,color:#000
    style P fill:#f3e5f5,color:#000
    style Q fill:#e3f2fd,color:#000
    style R fill:#f3e5f5,color:#000
    style S fill:#fff3e0,color:#000
    style T fill:#e3f2fd,color:#000
    style U fill:#f3e5f5,color:#000
    style V fill:#f3e5f5,color:#000
```

**Process Key**:
- 🟣 Purple: Assignment Designer Actions
- 🔵 Blue Gradient: Canvas MCP Operations
- 🔵 Light Blue: Template Operations
- 🔷 Blue: Decision Points
- 🟡 Yellow: Error/Fix Steps

---

## Bulk Copy to Courses Workflow

Detailed workflow for copying assignments from sandbox to production courses:

```mermaid
graph TD
    A["Start: *bulk-copy Command"] --> B["List Sandbox Assignments"]
    B --> C["Filter Unpublished Only"]
    C --> D["Present Numbered List"]
    D --> E{"User Selection"}
    E -->|All| F["Load Course Mapping"]
    E -->|Select Specific| G["User Selects Assignments"]
    G --> F
    F --> H["Load course-mapping.json"]
    H --> I["Present Target Courses"]
    I --> J{"Select Courses"}
    J -->|All Courses| K["Confirm: X assignments → Y courses"]
    J -->|Select Specific| L["User Selects Courses"]
    L --> K
    K --> M{"User Confirms?"}
    M -->|No| N["Cancel Operation"]
    M -->|Yes| O["For Each Target Course"]
    O --> P["For Each Selected Assignment"]
    P --> Q["Canvas MCP: create_assignment"]
    Q --> R{"Success?"}
    R -->|Yes| S["Track Success"]
    R -->|No| T["Log Error, Continue"]
    S --> U{"More Assignments?"}
    T --> U
    U -->|Yes| P
    U -->|No| V{"More Courses?"}
    V -->|Yes| O
    V -->|No| W["Generate Results Summary"]
    W --> X["Show Success/Failure Counts"]
    X --> Y{"All Successful?"}
    Y -->|Yes| Z["✅ Bulk Copy Complete"]
    Y -->|Some Failed| AA["⚠️ Partial Success - Review Errors"]

    style A fill:#f5f5f5,color:#000
    style B fill:#f3e5f5,color:#000
    style C fill:#f3e5f5,color:#000
    style D fill:#f3e5f5,color:#000
    style E fill:#e3f2fd,color:#000
    style F fill:#f3e5f5,color:#000
    style G fill:#fff3e0,color:#000
    style H fill:#f3e5f5,color:#000
    style I fill:#f3e5f5,color:#000
    style J fill:#e3f2fd,color:#000
    style K fill:#e3f2fd,color:#000
    style L fill:#fff3e0,color:#000
    style M fill:#e3f2fd,color:#000
    style N fill:#f9ab00,color:#fff
    style O fill:#f3e5f5,color:#000
    style P fill:#f3e5f5,color:#000
    style Q fill:#c5cae9,color:#000
    style R fill:#e3f2fd,color:#000
    style S fill:#e8f5e9,color:#000
    style T fill:#ffccbc,color:#000
    style U fill:#e3f2fd,color:#000
    style V fill:#e3f2fd,color:#000
    style W fill:#f3e5f5,color:#000
    style X fill:#f3e5f5,color:#000
    style Y fill:#e3f2fd,color:#000
    style Z fill:#34a853,color:#fff
    style AA fill:#ff9800,color:#fff
```

---

## Assignment Validation Workflow

Quality gate before publishing:

```mermaid
graph TD
    A["Start: *validate Command"] --> B["Load Assignment Data"]
    B --> C["Canvas MCP: get_assignment"]
    C --> D["Run Validation Checklist"]
    D --> E["Check: Required Fields"]
    E --> F["Check: Pedagogical Standards"]
    F --> G["Check: Technical Configuration"]
    G --> H["Check: Consistency with Course"]
    H --> I["Generate Validation Report"]
    I --> J{"All Checks Passed?"}
    J -->|Yes| K["✅ Status: READY FOR PUBLISHING"]
    J -->|Warnings Only| L["⚠️ Status: REVIEW WARNINGS"]
    J -->|Critical Issues| M["❌ Status: NEEDS FIXES"]
    K --> N["Suggest: *publish command"]
    L --> O{"User Accepts Warnings?"}
    O -->|Yes| N
    O -->|No| P["List Recommended Changes"]
    M --> Q["List Required Fixes"]
    P --> R["Offer Auto-Fix"]
    Q --> R
    R --> S{"User Wants Auto-Fix?"}
    S -->|Yes| T["Assignment Designer: Apply Fixes"]
    S -->|No| U["User Will Fix Manually"]
    T --> B
    U --> V["End - User to Update"]

    style A fill:#f5f5f5,color:#000
    style B fill:#f3e5f5,color:#000
    style C fill:#c5cae9,color:#000
    style D fill:#f3e5f5,color:#000
    style E fill:#f3e5f5,color:#000
    style F fill:#f3e5f5,color:#000
    style G fill:#f3e5f5,color:#000
    style H fill:#f3e5f5,color:#000
    style I fill:#f3e5f5,color:#000
    style J fill:#e3f2fd,color:#000
    style K fill:#34a853,color:#fff
    style L fill:#ff9800,color:#fff
    style M fill:#f44336,color:#fff
    style N fill:#f3e5f5,color:#000
    style O fill:#e3f2fd,color:#000
    style P fill:#f3e5f5,color:#000
    style Q fill:#f3e5f5,color:#000
    style R fill:#f3e5f5,color:#000
    style S fill:#e3f2fd,color:#000
    style T fill:#f3e5f5,color:#000
    style U fill:#fff3e0,color:#000
    style V fill:#f5f5f5,color:#000
```

---

## Agent Interaction Map

How the three main agents interact:

```mermaid
graph LR
    A[Canvas Orchestrator] -->|Route Request| B[Lesson Planner]
    A -->|Route Request| C[Assignment Designer]
    B -->|Create Spec File| D[lesson-X-spec.yaml]
    D -->|Input| C
    C -->|Create| E[Assignments in Sandbox]
    E -->|Validate| C
    C -->|Bulk Copy| F[Production Courses]
    C -->|Publish| F
    B -->|Query| G[Google Drive MCP]
    C -->|Operations| H[Canvas MCP]
    H -->|Logs| I[canvas-operations.md]
    H -->|Uses| J[course-mapping.json]

    style A fill:#f9ab00,color:#fff
    style B fill:#e8f5e9,color:#000
    style C fill:#f3e5f5,color:#000
    style D fill:#e1f5fe,color:#000
    style E fill:#c5cae9,color:#000
    style F fill:#c5cae9,color:#000
    style G fill:#bbdefb,color:#000
    style H fill:#c5cae9,color:#000
    style I fill:#fff3e0,color:#000
    style J fill:#fff3e0,color:#000
```

**Legend**:
- 🟡 Yellow: Orchestrator (Router)
- 🟢 Green: Lesson Planner (Sophia)
- 🟣 Purple: Assignment Designer (Maya)
- 🔵 Light Blue: Data/Config Files
- 🔷 Blue Gradient: MCP Servers
- 🟠 Orange: Log/Mapping Files

---

## System Overview - Data Flow

Complete system showing data flow from Google Drive to Canvas:

```mermaid
graph TD
    A[Google Drive] -->|Teacher Edition PDFs| B[Lesson Planner]
    B -->|User Elicitation| C[Lesson Objectives]
    B -->|User Elicitation| D[Lesson Agenda]
    B -->|User Elicitation| E[Materials List]
    C --> F[lesson-spec.yaml]
    D --> F
    E --> F
    F --> G[Assignment Designer]
    H[Templates] -->|Smart Defaults| G
    G -->|Create| I[Sandbox Course]
    I -->|Validate| G
    G -->|Bulk Copy| J[Course 1]
    G -->|Bulk Copy| K[Course 2]
    G -->|Bulk Copy| L[Course N]
    M[course-mapping.json] -.->|Course IDs| G
    G -->|Log Operations| N[canvas-operations.md]
    O[Hooks] -.->|Trigger| N

    style A fill:#bbdefb,color:#000
    style B fill:#e8f5e9,color:#000
    style C fill:#fff3e0,color:#000
    style D fill:#fff3e0,color:#000
    style E fill:#fff3e0,color:#000
    style F fill:#e1f5fe,color:#000
    style G fill:#f3e5f5,color:#000
    style H fill:#e1f5fe,color:#000
    style I fill:#c5cae9,color:#000
    style J fill:#c5cae9,color:#000
    style K fill:#c5cae9,color:#000
    style L fill:#c5cae9,color:#000
    style M fill:#fff3e0,color:#000
    style N fill:#fff3e0,color:#000
    style O fill:#f5f5f5,color:#000
```

---

## Notes

All diagrams use mermaid syntax and can be viewed in:
- VSCode with Markdown Preview Mermaid Support extension
- GitHub markdown preview
- Any markdown editor with mermaid support

**Color Scheme**:
- 🟢 Green (`#e8f5e9`): Lesson Planner operations
- 🟣 Purple (`#f3e5f5`): Assignment Designer operations
- 🔵 Blue (`#e3f2fd`): Decision points
- 🔷 Light Blue (`#e1f5fe`): Data/specs/templates
- 🔵 Blue Gradient (`#c5cae9`): Canvas/MCP operations
- 🟠 Orange (`#fff3e0`): User actions
- 🟡 Yellow (`#f9ab00`): Orchestrator/warnings
- 🟢 Success (`#34a853`): Completion states
- 🔴 Error (`#f44336`): Critical issues
