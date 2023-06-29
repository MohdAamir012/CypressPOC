// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickBtn', (label) => {
    cy.get('button').contains(label).should('have.text',label).click()
  })
  Cypress.Commands.add('clickBtnForceFully', (label) => {
    cy.get('button').contains(label).should('have.text',label).click({force: true})
  })
  Cypress.Commands.add('clickBtnByXpath', (xp) => {
    cy.xpath(xp).first().click({force:true});
  })