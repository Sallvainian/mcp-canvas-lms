# ESS Teacher Feedback - Google Sheet Template

## Sheet Overview
Alternative to Google Form - allows direct data entry in spreadsheet format for tracking Isabella Ortiz, Isabella Kidd, and Arieonna Valderruten.

---

## Sheet 1: Weekly Tracking

### Column Structure

| Column | Header | Data Type | Notes |
|--------|--------|-----------|-------|
| A | Week of | Date | Format: MM/DD/YYYY |
| B | Teacher Name | Text | |
| C | Subject | Text | |
| D | Student Name | Text | Dropdown: Isabella Ortiz, Isabella Kidd, Arieonna Valderruten |
| E | Day | Text | Dropdown: Monday, Tuesday, Wednesday, Thursday, Friday |
| F | Attendance | Text | Dropdown: On Time, Late, Absent, Other |
| G | Class Participation | Text | Dropdown: Fully engaged, Partially engaged, Off task, Other |
| H | Class work/Homework | Text | Dropdown: Completed, Incomplete, Overdue, Other |
| I | Class Preparedness | Text | Dropdown: Prepared, Partially, Unprepared, Other |
| J | Class Behavior | Text | Dropdown: Respectful, Needed redirection, Inappropriate behavior, Other |
| K | Need ESS Meeting? | Text | Dropdown: Yes, No |
| L | Current Grade | Text | Dropdown: Passing, Failing, Other |
| M | Success Description | Text | Free text |

### Data Entry Pattern
Each row represents ONE student for ONE day. For a full week with 3 students, you would have 15 rows (5 days × 3 students).

### Example Data

| Week of | Teacher Name | Subject | Student Name | Day | Attendance | Participation | Homework | Preparedness | Behavior | ESS Meeting? | Grade | Success |
|---------|-------------|---------|--------------|-----|------------|---------------|----------|--------------|----------|--------------|-------|---------|
| 10/07/2025 | Mr. Smith | Science 8 | Isabella Ortiz | Monday | On Time | Fully engaged | Completed | Prepared | Respectful | No | Passing | Great lab work |
| 10/07/2025 | Mr. Smith | Science 8 | Isabella Ortiz | Tuesday | On Time | Partially engaged | Completed | Prepared | Respectful | No | Passing | |
| 10/07/2025 | Mr. Smith | Science 8 | Isabella Kidd | Monday | Late | Off task | Incomplete | Unprepared | Needed redirection | Yes | Failing | |

---

## Sheet 2: Summary View (Optional)

### Weekly Summary by Student

| Week of | Student | Days Present | Days Late | Days Absent | Avg Participation | Avg Homework | Avg Preparedness | Avg Behavior | ESS Meeting Needed | Current Grade |
|---------|---------|--------------|-----------|-------------|-------------------|--------------|------------------|--------------|--------------------|---------------|
| 10/07/2025 | Isabella Ortiz | 5 | 0 | 0 | Fully engaged | Completed | Prepared | Respectful | No | Passing |
| 10/07/2025 | Isabella Kidd | 4 | 1 | 0 | Partially engaged | Incomplete | Partially | Needed redirection | Yes | Failing |

---

## Implementation Instructions

### Creating the Sheet:

1. **Go to sheets.google.com**
2. **Create new sheet** titled "ESS Teacher Feedback Tracking"

3. **Sheet 1 Setup**:
   - Create headers in row 1 (A1:M1) as shown above
   - Freeze row 1: View > Freeze > 1 row
   - Format column A as Date
   - Apply bold to header row

4. **Create Data Validation Dropdowns**:

   **Column D - Student Name**:
   - Select D2:D1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Isabella Ortiz, Isabella Kidd, Arieonna Valderruten`

   **Column E - Day**:
   - Select E2:E1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Monday, Tuesday, Wednesday, Thursday, Friday`

   **Column F - Attendance**:
   - Select F2:F1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `On Time, Late, Absent, Other`

   **Column G - Class Participation**:
   - Select G2:G1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Fully engaged, Partially engaged, Off task, Other`

   **Column H - Class work/Homework**:
   - Select H2:H1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Completed, Incomplete, Overdue, Other`

   **Column I - Class Preparedness**:
   - Select I2:I1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Prepared, Partially, Unprepared, Other`

   **Column J - Class Behavior**:
   - Select J2:J1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Respectful, Needed redirection, Inappropriate behavior, Other`

   **Column K - Need ESS Meeting?**:
   - Select K2:K1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Yes, No`

   **Column L - Current Grade**:
   - Select L2:L1000
   - Data > Data validation
   - Criteria: List of items
   - Values: `Passing, Failing, Other`

5. **Optional Conditional Formatting**:
   - Highlight rows where "Need ESS Meeting?" = "Yes" in yellow
   - Highlight rows where "Current Grade" = "Failing" in red
   - Highlight rows where "Attendance" = "Absent" in orange

6. **Create Template Rows** (Optional):
   - Pre-fill Week of, Teacher Name, and Subject for quick copying
   - Create 15 template rows (5 days × 3 students) that can be copied each week

---

## Benefits of Sheet Method:

✅ **Faster data entry** for experienced spreadsheet users
✅ **Easy to copy/paste** previous week's data
✅ **Flexible filtering and sorting** capabilities
✅ **Can create charts and analytics** directly
✅ **Easy to export** to other formats
✅ **No form submission required** - just fill in cells
✅ **Can see all students at once** for comparison

---

## Comparison: Form vs Sheet

| Feature | Google Form | Google Sheet |
|---------|-------------|--------------|
| Data entry speed | Moderate | Fast (for power users) |
| Data validation | Automatic | Manual setup required |
| Historical view | Limited | Excellent |
| Filtering/sorting | Limited | Excellent |
| Copy previous data | Not available | Easy |
| Learning curve | Low | Moderate |
| Best for | Structured weekly submissions | Ongoing daily tracking |

---

## Recommended Workflow:

1. **Daily tracking**: Use the Google Sheet for quick daily entries
2. **Weekly review**: Use filters to analyze each student's week
3. **ESS meetings**: Filter for "Yes" in ESS Meeting column to identify action items
4. **Progress tracking**: Compare weeks over time using built-in filters
5. **Sharing**: Share with ESS staff with view-only access for transparency
