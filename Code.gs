function SendPrescription() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName('Form Responses 1')
  const data = sheet.getDataRange().getValues()
  // for (let i = 1; i < data.length; i++) {
  //   console.log(data[i][0], data[i][1])
  // }
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
  body.replaceText('{{ageGroup}}', data[1][1]);
  body.replaceText('{{occupation}}', data[1][2]);
  body.replaceText('{{tools}}', data[1][3]);
  
  // save and close
  doc.saveAndClose();

  // connect HTML template
  var emailTemplate = HtmlService.createTemplateFromFile('EmailTemplate')
  var content = emailTemplate.evaluate().getContent()

  var emailRecipient = 'ngongochan@gmail.com'
  var emailSubject = 'Test'
  var defaultEmailBody = 'This is the body of the mail and is not supposed to be sent.'

  // sendEmail(recipient, subject, body) 
  MailApp.sendEmail(
    emailRecipient,
    emailSubject,
    defaultEmailBody,
    {
      htmlBody: content,
      attachments: [pdfBlob]
    }
  );
}