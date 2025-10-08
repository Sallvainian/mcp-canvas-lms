/**
 * Google Apps Script to Create ESS Teacher Feedback Form
 *
 * Instructions:
 * 1. Go to script.google.com
 * 2. Create new project
 * 3. Paste this code
 * 4. Click Run > createESSForm
 * 5. Authorize permissions when prompted
 * 6. Check execution log for form URL
 */

function createESSForm() {
  // Create the form
  var form = FormApp.create('ESS Teacher Feedback - Multi-Student');
  form.setDescription('Weekly feedback for Isabella Ortiz, Isabella Kidd, and Arieonna Valderruten');
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);

  // Section 1: General Information
  form.addSectionHeaderItem()
    .setTitle('General Information')
    .setHelpText('Information applicable to all students');

  form.addDateItem()
    .setTitle('Week of')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Teacher Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Subject')
    .setRequired(true);

  // Define days and options for grids
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  var students = [
    'Isabella Ortiz',
    'Isabella Kidd',
    'Arieonna Valderruten'
  ];

  // Create sections for each student
  for (var s = 0; s < students.length; s++) {
    var studentName = students[s];

    // Add section header
    form.addPageBreakItem()
      .setTitle(studentName)
      .setHelpText('Daily tracking for ' + studentName);

    // Attendance Grid
    form.addGridItem()
      .setTitle(studentName + ' - Attendance')
      .setRows(days)
      .setColumns(['On Time', 'Late', 'Absent', 'Other'])
      .setRequired(true);

    // Class Participation Grid
    form.addGridItem()
      .setTitle(studentName + ' - Class Participation')
      .setRows(days)
      .setColumns(['Fully engaged', 'Partially engaged', 'Off task', 'Other'])
      .setRequired(true);

    // Class work/Homework Grid
    form.addGridItem()
      .setTitle(studentName + ' - Class work/Homework')
      .setRows(days)
      .setColumns(['Completed', 'Incomplete', 'Overdue', 'Other'])
      .setRequired(true);

    // Class Preparedness Grid
    form.addGridItem()
      .setTitle(studentName + ' - Class Preparedness')
      .setRows(days)
      .setColumns(['Prepared', 'Partially', 'Unprepared', 'Other'])
      .setRequired(true);

    // Class Behavior Grid
    form.addGridItem()
      .setTitle(studentName + ' - Class Behavior')
      .setRows(days)
      .setColumns(['Respectful', 'Needed redirection', 'Inappropriate behavior', 'Other'])
      .setRequired(true);

    // Need to meet with ESS staff
    form.addMultipleChoiceItem()
      .setTitle(studentName + ' - Need to meet with ESS staff?')
      .setChoiceValues(['Yes', 'No'])
      .setRequired(true);

    // Current Grade
    form.addMultipleChoiceItem()
      .setTitle(studentName + ' - Current Grade')
      .setChoiceValues(['Passing', 'Failing', 'Other'])
      .setRequired(true);

    // Describe a success
    form.addParagraphTextItem()
      .setTitle(studentName + ' - Describe a success')
      .setRequired(false);
  }

  // Log the form URL
  Logger.log('Form created successfully!');
  Logger.log('Form URL: ' + form.getPublishedUrl());
  Logger.log('Edit URL: ' + form.getEditUrl());

  // Return the URLs
  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl()
  };
}
