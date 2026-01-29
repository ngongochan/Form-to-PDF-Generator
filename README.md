# Form-to-PDF Generator

## Overview
This project is an **automated document generation tool** built on Google Workspace.

It enables users to generate customized PDF documents by simply submitting a Google Form — eliminating repetitive manual work such as duplicating templates and manually filling in data.

The tool was originally created to automate medical prescription exports, but it is designed to be **reusable for any form-based document workflow**, including reports, invoices, etc.

---

## Workflow
1. The user fills in a Google Form  
   (e.g. name, date of birth, description, selected options).

2. Upon submission:
   - Responses are stored in Google Sheets  
   - A Google Docs template is duplicated

3. The template is automatically populated with the submitted data.

4. A PDF version of the document is generated and saved to a designated Google Drive folder.

5. The generated PDF is automatically emailed to a specified email address, along with a customizable email content body.

This workflow enables efficient batch document generation without manually copying templates.

---

## Technologies with Useful Samples

- [Google Forms](https://docs.google.com/forms/d/1uk-E3GC9z2BFplBHI190dncvFM4vDk8i-TcTjaXF4A8/edit): data input
- [Google Sheets](https://docs.google.com/spreadsheets/d/1dGF1FHpA-uL8Z5X1Kz-AyLvqEAIGMHFHlXCl4X9QgpY/edit): response storage
- [Google Docs](https://docs.google.com/document/d/1J1opUFMpJb_rTa1S5xpi5CSPBB-A_XJAHjlAaXeFKWY/edit): document templating
- [Google Drive](https://drive.google.com/drive/u/0/folders/1Mwld8k8JNJcCsSEBLSAFETm7W4yvR5N7): destination folder (to store newly created PDF documents)
- [Google Apps Script](https://developers.google.com/apps-script): automation logic & APIs
- HTML & JavaScript: scripting

---

## Project Setup

To customize this project for your own use, you will need:

- Basic programming skills in **HTML** and **JavaScript**
- A Google account with access to:
  - Google Forms
  - Google Docs
  - Google Drive

> [!TIP]
> Each document and folder in Google Workspace has a unique ID.  
> Make sure to replace all IDs in the script with your own.

Setup typically involves:

- Creating your own Google Form
- Clicking **“View in Sheets”** to generate a response spreadsheet
- From the spreadsheet, navigating to  
  `Extensions` → `Apps Script`
- Adding both `Code.gs` and `EmailTemplate.html` under the **Files** section
- Designing your own Google Docs template
- Creating your own Google Drive destination folder
- Editing `Code.gs` to map form responses to template placeholders
- Editing `EmailTemplate.html` to customize the email body content
- Configuring Apps Script triggers on form submission

---

## Suggestions & Feedback
If you have any suggestions to improve this project or run into any issues while setting it up, feel free to reach out!