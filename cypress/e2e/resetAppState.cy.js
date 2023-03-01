/// <reference types="cypress" />
import { elements as element } from "./components/elements"
describe('SWAGLABS - Reset App State', () => {
    beforeEach(() => 
      cy.visit('/')
    )
  
    it('Removes item from cart on reset app state', () => {
      cy.get('@fixture').then(fixture => {
        cy.loginUser(
          fixture.users.valid.username,
          fixture.users.valid.password
        )
      })  

      cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
      cy.get(element.btnAddToCartProduct).click()
      cy.get(element.btnShoppingCart).should('contain', '1').click()
      cy.get(element.btnBurgerMenu).click()
      cy.get(element.btnResetSidebar).click()
      cy.get(element.btnShoppingCart).should('not.contain', '1')
    })     
})
