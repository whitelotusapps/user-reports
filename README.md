# User Reports

![GitHub tag checks state](https://img.shields.io/github/checks-status/whitelotusapps/user-reports/v1.0)
![GitHub language count](https://img.shields.io/github/languages/count/whitelotusapps/user-reports)
![GitHub top language](https://img.shields.io/github/languages/top/whitelotusapps/user-reports)
![GitHub repo size](https://img.shields.io/github/repo-size/whitelotusapps/user-reports)
![GitHub all releases](https://img.shields.io/github/downloads/whitelotusapps/user-reports/total)
![GitHub issues](https://img.shields.io/github/issues-raw/whitelotusapps/user-reports)
![GitHub](https://img.shields.io/github/license/whitelotusapps/user-reports)
![GitHub last commit](https://img.shields.io/github/last-commit/whitelotusapps/user-reports)

## Purpose

The purpose of this app is to allow Zendesk Admins to export their entire user base to CSV, XSLS, JSON, HTML or PDF for reporting purposes. 

Things to know about v1.0:

- To obtain the text names of the groups and organizations, two API calls are made per user
- The user search criteria is:
  - /api/v2/users?page[size]=100
    - This means that we are searching for ALL users, not just Agents and Admins
- As seen above, we are currently using CBP and set the page size to 100 entries
- This version pages through all of the pages and aggregates all of the data into one large array that it then passes to the table for displaying
## Known Issues:

* Searching by login date or time is not currently working
* This has not been tested on instances larger than a few hundred users
  - It is possible, due to the way that v1.0 is currently designed, that:
    - API rate limits may be reached
    - Large data sets may slow down, lock up, or even crash the browser (speculation)
* The PNG and SVG files contain different images
## Safety Level
SAFE

- READ-ONLY regarding Zendesk instances
- This script only performs GET API requests
- No data is written into the Zendesk instance itself
- The localstore of the webbrowser is written to
- Generated export files will be saved to the local machine

## Installation
1. Download the "source.zip" from the Releases section, which is located on the right hand side of this page
2. Login to the Admin Console of your Zendesk Instance
3. Navigate to "Zendesk Support Apps"
4. In the upper right hand corner of the screen, there should be a "Upload private app" button, click on this
5. For the "App Name", type in "User Reports"
6. Click "Choose File"
7. Browse to the location on your computer where you saved the "users-reports-1.0.zip" (NOTE: the version number is subject to change)
8. Click "Upload"
9. Another screen should appear, review the caveats, and if you are sure, then press "Upload"
10. The app will then queue and then install into your Zendesk instance
11. You will be presented with the standard config screen to enable role and/or group restrictions
12. Once you have defined the restrictions, click "Install"
13. The "User Reports" app is now installed into your Zendesk instance

You will find the "User Report" icon located on the left hand side of the Agent support window.

## Configuration

There are some steps that are required before this app will be useful. Click on the app icon on the left hand side, and then follow the below steps:

1. Click on the "Settings" button
2. Play around with these settings. A typical configuration may be:
  - Group users by field: Role
  - Sort users by field: Role
  - Make usernames URL?: Yes
  - Make user emails URL?: Yes

3. Select what items from the user object you wish to have displayed in a table
4. Once you have selected the items you wish to see, click "Save Settings"

## Usage

1. Once you have configured the app, you are now ready to use it
2. Each column can be dragged and dropped to another location, and you can sort by the different column heading by clicking on them
3. Play around with the exports; you will find that whatever is shown in the table is what will be exported
4. CSV and XLSX are going to be your best options for auditing and reporting
## v1.0 Features:

* Select any "standard element" of a user object to export into a report
  * Custom User Fields are not supported in the exports
  * Below are the items that can included in the report:
    - Name
    - Role
    - Email
    - Last Login At Date
    - Last Login At Time
    - Last Login (RAW)
    - Active Users
    - Suspended User
    - Custom Role ID
    - Moderator
    - Default Group Name
    - Default Group ID
    - User Groups
    - Created At Date
    - Created At Time
    - Created At (RAW)
    - Shared Users
    - Shared Agent
    - Shared Phone
    - User Alias
    - User Organizations
    - User Tags
    - Phone
    - Updated At Date
    - Updated At Time
    - Updated At (RAW)
    - Ticket Restriction
    - Restricted Agent
    - Notes
    - Details
    - External ID
    - Signature
    - 2FA Status
    - Time Zone
    - IANA Time Zone
    - Only Private Comments
    - Report CSV
    - User ID
    - User URL
    - Email Verification Status
    - Locale
    - Locale ID

* Group users by:
    - Name
    - Email
    - Role
    - Tags
    - Last login date
    - Last login time
    - Ogranization names

* Sort users by:
    - Name
    - Email
    - Role
    - Tags
    - Last login date
    - Last login time
    - Ogranization names

* Users names are linked, and will open a new window to the users profile

* User email addresses are linked, clicking on them will open your mail client to compose an email
# Inspiration: 
Issues that users were discussing regarding the Super Admin App:

- [Super Admin app - Marketplace](https://www.zendesk.com/marketplace/apps/support/259163/super-admin/)
- [Installing and using the Super Admin app](https://support.zendesk.com/hc/en-us/articles/4408881571482)
- [Super Admin app - official feature request thread](https://support.zendesk.com/hc/en-us/community/posts/4409217165466)