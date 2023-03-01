/// <reference types="cypress" />
import { elements as element } from "./components/elements"
describe('SWAGLABS - Checkout scenario', () => {
  beforeEach(() => 
    cy.visit('/')
  )

  it('Successfully goes through the checkout process one', () => {
    cy.get('@fixture').then(fixture => {
      cy.loginUser(
        fixture.users.valid.username,
        fixture.users.valid.password
      )

    cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    cy.get(element.btnAddToCartProduct).click()
    cy.get(element.btnShoppingCart).click()
    cy.get(element.btnCheckout).click()

      cy.checkoutUser(
        fixture.dataUsers.firstUser.firstName,
        fixture.dataUsers.firstUser.lastName,
        fixture.dataUsers.firstUser.postalCode
      )
    })
    cy.get(element.baseValidateUserCheckout).contains('.complete-header', 'THANK YOU FOR YOUR ORDER').should('be.visible')
  })


  it('Successfully goes through the checkout process two', () => {
    cy.get('@fixture').then(fixture => {
      cy.loginUser(
        fixture.users.valid.username,
        fixture.users.valid.password
      )

      cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
      cy.get(element.btnAddToCartProduct).click()
      cy.get(element.btnShoppingCart).click()
      cy.get(element.btnCheckout).click()

      cy.checkoutUser(
        fixture.dataUsers.secondUser.firstName,
        fixture.dataUsers.secondUser.lastName,
        fixture.dataUsers.secondUser.postalCode
      )

      cy.get(element.baseValidateUserCheckout).contains('.complete-header', 'THANK YOU FOR YOUR ORDER').should('be.visible')
    })
  })
})
