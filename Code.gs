function SendPrescription(e) {
  if (!e) {
    return;
  }

  try {
    console.log("Form submitted, function running");
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = spreadsheet.getSheetByName('Form Responses 1')
    // const data = sheet.getDataRange().getValues()

    var row = sheet.getLastRow();
    var data = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];

    const templateID = '1J1opUFMpJb_rTa1S5xpi5CSPBB-A_XJAHjlAaXeFKWY';  // YOUR_TEMPLATE_DOCUMENT_ID
    const folderID = '1kT1yiQQo9G7rX8d6TPTK_2LFjqlF323-';               // YOUR_DESTINATION_FOLDER_ID

    // open Folder and File
    const templateFile = DriveApp.getFileById(templateID);
    const folder = DriveApp.getFolderById(folderID);
    
    // define new document name
    const newName = 'New Document - ' + new Date().toLocaleDateString();
    
    // copy the template
    const copy = templateFile.makeCopy(newName, folder);
    
    // open the new document to edit
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();
    const pdfBlob = doc.getAs(MimeType.PDF);

    // replace placeholders
    const ageGroup = data[1]
    const occupation = data[2]
    const tools = data[3]
    const purposes = data[6]
    const lastTime = data[7]

    body.replaceText('{{ageGroup}}', ageGroup);
    body.replaceText('{{occupation}}', occupation);
    body.replaceText('{{tools}}', tools);
    body.replaceText('{{purposes}}', purposes);
    body.replaceText('{{lastTime}}', lastTime);
    
    // save and close
    doc.saveAndClose();

    // connect HTML template
    var emailTemplate = HtmlService.createTemplateFromFile('EmailTemplate')
    var emailContent = emailTemplate.evaluate().getContent()

    var emailRecipient = 'ngongochan@gmail.com'
    var emailSubject = 'Test'
    var defaultEmailBody = 'This is the body of the mail and is not supposed to be sent.'

    // sendEmail(recipient, subject, body) 
    MailApp.sendEmail(
      emailRecipient,
      emailSubject,
      defaultEmailBody,
      {
        htmlBody: emailContent,
        attachments: [pdfBlob]
      }
    );
  } catch (error) {
    console.error("An error occurred: ", error.message);
  } finally {

  }
}