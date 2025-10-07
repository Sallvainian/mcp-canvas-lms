# Google Drive MCP Tool Analysis

## Testing Date
2025-10-07

## Purpose
Test Google Drive MCP tools to determine optimal call patterns for lesson planning agent that needs to extract objectives, agendas, and teaching notes from teacher edition documents.

## Drive Structure Discovery

### Folder Hierarchy
```
EPSNJ Into Science 6-8 (ID: 1VILi3dSz5uRaJLgLstCw5Qz1BnVHRJhr)
├── Grade 6 (ID: 1g0uEd5FdgJyvdpI6Y8c1Pj_G8Ny5EAcl)
├── Grade 7 (ID: 1A_FTHKjsL_TRobTXID48aoMeiEetAAuk)
├── Grade 8 (ID: 1eznvDXwYP5EG_H7fM1byxtnFvHJ2t1K6)
│   ├── MS_ES_HOL_U3_L1.docx (Hands-On Lab files)
│   ├── MS_ES_HOL_U3_L2.docx
│   ├── MS_ES_HOL_U3_L3.docx
│   ├── G8 Into Science U3 SAG.pdf (Student Assessment Guide)
│   └── G8 Into Science U3 TAG.pdf (Teacher's Assessment Guide)
├── Unit 6 - Forces & Motion (ID: 1Ln19AaTDuM97uYBGd2kHFMy-GgmmY4ig)
│   ├── Forces and Motion (PDF) Student Activity Workbook
│   ├── Forces and Motion (PDF) Teacher Guide (PDF)
│   └── Hands-On Lab: Investigating Forces and Their Effects Hands-On Labs
└── TAG PDFs (Teacher's Assessment Guides)
    ├── TAG_PS_ALL_U1-8.pdf (Physical Science, 43MB)
    ├── TAG_ES_All_U1-9.pdf (Earth Science)
    ├── TAG_LS_ALL_U1-6.pdf (Life Science)
    ├── 68_TAG_PS_U3.pdf (Unit 3 specific)
    └── PS_AG_U3_UT.pdf
```

## File Types Found
- **TAG PDFs**: Teacher's Assessment Guides (comprehensive, multi-unit)
- **Unit-specific PDFs**: SAG (Student Assessment Guide), TAG (Teacher Guide)
- **Word Documents**: Hands-On Lab files (.docx)
- **Activity Workbooks**: Student and teacher versions (PDF)

## MCP Tool Testing Results

### ✅ Working Tools

#### 1. `drive_search`
**Purpose**: Search for files by name, type, or query
**Test Results**:
- ✅ Works well for finding folders by name
- ✅ Works with mimeType filters
- ✅ Can search by file name patterns
- ⚠️ fullText search returned no results (may require specific permissions or indexing)

**Optimal Usage**:
```javascript
// Find folders by grade
drive_search({
  query: "name contains 'Grade 8' and mimeType = 'application/vnd.google-apps.folder'",
  pageSize: 10
})

// Find specific file types
drive_search({
  query: "name contains 'TAG' and mimeType = 'application/pdf'",
  pageSize: 20
})
```

#### 2. `drive_folder_children`
**Purpose**: List all files in a specific folder
**Test Results**:
- ✅ Works perfectly for folder exploration
- ✅ Returns file IDs, names, and mimeTypes
- ✅ Supports pagination with pageSize

**Optimal Usage**:
```javascript
// Explore folder contents
drive_folder_children({
  folderId: "1eznvDXwYP5EG_H7fM1byxtnFvHJ2t1K6", // Grade 8 folder
  pageSize: 50
})
```

#### 3. `drive_file_metadata`
**Purpose**: Get detailed info about a file (size, dates, owner)
**Test Results**:
- ✅ Works well for all file types
- ✅ Returns comprehensive metadata
- ✅ Shows file size, creation date, owner info

**Optimal Usage**:
```javascript
// Get file details before attempting to read
drive_file_metadata({
  fileId: "1SD_PljQzDHmxuzoy7f8JGe6_dEQwBTIj"
})
```

### ❌ Problematic Tools

#### 4. `drive_file_content`
**Purpose**: Extract text content from files
**Test Results**:
- ❌ **FAILS on PDF files** - Returns blob type error
- ❌ **FAILS on Word documents (.docx)** - Returns blob type error
- ⚠️ Likely only works with Google Docs native format (application/vnd.google-apps.document)
- ⚠️ No Google Docs found in the education materials (all PDFs and Word docs)

**Error Pattern**:
```
Invalid literal value, expected "text"
received: "blob"
```

**Implication**: Cannot directly extract text from teacher edition PDFs using this MCP server

## Key Findings for Lesson Planner Agent

### ✅ What We CAN Do
1. **Navigate folder structure** efficiently using `drive_folder_children`
2. **Search for files** by name patterns using `drive_search`
3. **Identify relevant files** by examining metadata
4. **Locate specific units and lessons** by folder/file naming conventions

### ❌ What We CANNOT Do
1. **Extract text from PDFs** - MCP tool returns blob errors
2. **Read Word document content** - Same blob error issue
3. **Full-text search** - fullText queries returned no results
4. **Direct content parsing** - No native support for binary file content extraction

## Document Naming Patterns Discovered

### Useful Patterns for Agent Logic
- **Grade Level**: `Grade 8`, `Grade 7`, `Grade 6`
- **Unit Identifiers**: `U3` (Unit 3), `U1-8` (Units 1-8)
- **Lesson Format**: `MS_ES_HOL_U3_L1` (Middle School, Earth Science, Hands-On Lab, Unit 3, Lesson 1)
- **Document Types**:
  - `TAG` = Teacher's Assessment Guide
  - `SAG` = Student Assessment Guide
  - `HOL` = Hands-On Lab
  - `AG` = Assessment Guide

### Subject Codes
- `PS` = Physical Science
- `ES` = Earth Science
- `LS` = Life Science

## Recommendations for Lesson Planner Agent

### Workaround Strategy for Binary Files

Since we cannot extract content from PDFs/Word docs via MCP, the agent should:

1. **Identify Files**: Use `drive_search` and `drive_folder_children` to locate relevant TAG PDFs
2. **Provide Links**: Give user the file IDs and names to manually review
3. **Interactive Elicitation**: Prompt user to provide key information:
   - Lesson objectives
   - Lesson agenda/sequence
   - Key teaching notes
   - Assessment criteria
4. **Template Pre-fill**: Use known patterns from file names to suggest structure

### Alternative: Manual Upload Workflow

**Option A - User Provides Excerpts**:
```
Agent: "I found the TAG for Unit 3, Lesson 1. Please provide:
        1. Lesson objectives (copy from TAG)
        2. Lesson agenda/timeline (copy from TAG)
        3. Key teaching notes (copy from TAG)"
```

**Option B - File Link Reference**:
```
Agent: "I located these relevant files:
        - G8 Into Science U3 TAG.pdf (ID: 1tDgbHme1...)
        - MS_ES_HOL_U3_L1.docx (ID: 1802-hDUz...)

        Would you like me to:
        1. Open these files for you to review
        2. Guide you through extracting the key information"
```

## Optimal MCP Call Pattern for Lesson Planner

### Phase 1: Discovery (Efficient Calls)
```javascript
// Step 1: Locate grade folder
drive_search({
  query: "name contains 'Grade 8' and mimeType = 'application/vnd.google-apps.folder'",
  pageSize: 5
})

// Step 2: Explore grade folder for unit materials
drive_folder_children({
  folderId: "[grade_8_folder_id]",
  pageSize: 20
})

// Step 3: Get metadata for relevant TAG file
drive_file_metadata({
  fileId: "[tag_file_id]"
})
```

### Phase 2: Information Elicitation (Interactive)
```
Cannot extract content → Use interactive prompting:
1. Show user which files are relevant
2. Ask user to provide key sections
3. Use templates to guide what information is needed
4. Pre-fill known information from file patterns
```

## Implementation Notes

### Agent Design Implications
1. **Cannot be fully automated** - Requires user input for content extraction
2. **Should be semi-automated** - Automate file discovery, manual content input
3. **Template-driven elicitation** - Use structured prompts to gather required info
4. **File link integration** - Provide file IDs for user to open externally

### Example Agent Workflow
```yaml
commands:
  - locate-lesson:
      workflow:
        - Accept: grade, unit, lesson number
        - Search: Use drive_search to find grade folder
        - Explore: Use drive_folder_children to find TAG file
        - Present: Show found files with IDs and names
        - Elicit: Ask user for objectives, agenda, notes
        - Generate: Create lesson plan from user input
```

## Conclusion

**Google Drive MCP Limitations**:
- Cannot extract binary file content (PDFs, Word docs)
- Requires alternative workflow for content access

**Recommended Approach**:
- Use MCP for file discovery and navigation (highly efficient)
- Use interactive elicitation for content extraction (user provides text)
- Combine automated discovery with manual content input
- Leverage file naming patterns to pre-fill known information

**Agent Viability**:
- ✅ Can build effective lesson planning agent
- ⚠️ Cannot be fully zero-prompting (requires user content input)
- ✅ Can significantly reduce manual work through smart discovery and templates
