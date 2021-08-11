## Cypress - Axe Project

### How to install and Run Cypress

1. Open a new Terminal window
2. Run: `mkdir cypress-axe-project`
3. cd into that folder `cd cypress-axe-project`
4. Run: `npm init -y`
5. Run `npm i cypress cypress-axe`
6. Open the folder (step 2) on VSCode
7. Start a terminal inside that folder (ctrl + `)
8. Add the cypress-axe dependecy to the index.js file
   > Location: (../cypress/suppport/index.js)
   > `import "cypress-axe";`
9. Run `npx cypress open`

### Install Applitools for VisualAI testing

1. Run `npm i -D @applitools/eyes-cypress`
2. Run `npx eyes-setup`

### Run a Test using Applitools/eyes

1. Run `export APPLITOOLS_API_KEY={yourApiKey}`
2. Run `npx cypress open`
