// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })//
//
// -- This will overwrite an existing command 

import { elements as element } from "../e2e/components/elements"

Cypress.Commands.add('loginUser', (username, password) => {
    cy.get(element.inputLoginUserName).type(username)
    cy.get(element.inputLoginPassword).type(password)     
    cy.get(element.btnLogin).click()
})

Cypress.Commands.add('checkoutUser', (firstName, lastName, postalCode) => {
    cy.get(element.inputCheckoutFirstName).type(firstName)
    cy.get(element.inputCheckoutLastName).type(lastName)
    cy.get(element.inputCheckoutPostalCode).type(postalCode)
    cy.get(element.btnCheckoutContinue).click()
    cy.get(element.btnCheckoutFinish).click()
})
