<div align=center>

# GoBarber :barber:

</div>

## About
The objective of this project is to create a complete application (Back-end, Front-end e Mobile) for barbershops appointment management.

### Functionalities
- Create/Update Users
- Login with user/password.
- Authentication via sessions
- File upload for avatars
- Notifications: read/unread
- Schedule/Cancel Appointments
  - Automatic e-mail sent for the provider upon appointment cancellation

### Dependencies

- **Yarn** - Package Manager
- **Express** - Web Framework
- **Sucrase** - Allow to use more recent JS functionalities.
- **Nodemon** - Monitor changes and restart the server
---
#### Style Guide :mag:
- **ESLint** - Style guide: Airbnb
- **eslint-config-prettier** - Turns off all rules that are unnecessary or might conflict with Prettier.
- **eslint-plugin-prettier** - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- **Prettier** - Code formatter
---
#### Auth / Login :closed_lock_with_key:
- **bcryptjs** - Create/Validate password hash
- **jsonwebtoken** - Create/validate sessions
___
#### DB :open_file_folder:
- **Sequelize** -  Node.js ORM for Postgres
- **sequelize-cli** - Sequelize Command Line Interface (CLI)
- **YUP** - Schema validation
- **pg** - Non-blocking PostgreSQL client for Node.js
- **pg-hstore** - Serializing and deserializing JSON data to hstore format
- **mongoose** - Mongodb object modeling for node.js
---
#### Exception treatment
**@sentry/node** - Package to connect to Sentry
**express-async-errors** - Express cannot cath `async` errors. This extension solves that
**youch** - Error message treatment
---
#### Email :email:
- **nodemailer** - Module for email sending.
- **express-handlebars** - Handlebars view engines for Express
- **nodemailer-express-handlebars** - Generate html emails.
---
#### Miscellaneous :crystal_ball:
- **date-fns**  - Date utility library
- **multer** - Node.js middleware for handling `multipart/form-data`, primarily used for uploading files.
- **bee-queue** - job/task queue for Node.js, backed by Redis.
---

### Frontend
- RactJs - Web
- React Native - Mobile


# Tools
### Insomnia

REST Client. <br>
[Check it out!](https://insomnia.rest/)

### Docker Desktop Community
Container images.

Images used:
  - Postgres: Relational DB. Store information from the application.
  - MongoDB: Stores the notifications.
  - Redis:Alpine: Queues

### Postbird
PostgreSQL GUI client. <br>
[Check it out!](https://www.electronjs.org/apps/postbird)

### MongoDB Compass Community
GUI for MongoDB. <br>
[Check it out!](https://www.mongodb.com/products/compass)

### Mailtrap
SMTP testing server. <br>
[Check it out!](https://mailtrap.io/)

### Sentry
Error monitoring
[Check it out!](https://sentry.io/welcome/)

### VSCode 👨🏻‍💻

#### Plugins:
**Code Spell Checker** - streetsidesoftware.code-spell-checker <br>
**Color Highlight** - naumovs.color-highlight <br>
**Dracula Official** - dracula-theme.theme-dracula <br>
**EditorConfig for VS Code** - editorconfig.editorconfig <br>
**ESLint** - dbaeumer.vscode-eslint <br>
**Markdown Preview Github Styling** - bierner. markdown-preview-github-styles <br>
**Github Markdown Preview**- bierner.github-markdown-preview
(extension Pack) <br>
**Material Icon Theme** - pkief.material-icon-theme <br>

##### Personal config
```javascript
  "editor.rulers": [80, 120],
  "editor.renderLineHighlight": "gutter",
  "editor.tabSize": 2,
  "terminal.integrated.fontSize": 14,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "editor.parameterHints.enabled": false,
  "breadcrumbs.enabled": true,
  "javascript.suggest.autoImports": false,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "window.zoomLevel": 0,
  "explorer.compactFolders": false,

  //automatic fix for ESLINT
  "[javascript]": {
    "editor.codeActionsOnSave":{
      "source.fixAll.eslint": true,
  },

  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave":{
      "source.fixAll.eslint": true,
    },
  },

  //Emmet
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
```
