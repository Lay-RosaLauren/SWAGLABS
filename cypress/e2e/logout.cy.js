/// <reference types="cypress" />
import { elements as element } from "./components/elements"
describe('SWAGLABS - Logout scenarios', () => {
  beforeEach(() =>
    cy.visit('/')
  )
  it('Logout in successfully with standard_user', () => {
    cy.get('@fixture').then(fixture => {
      cy.loginUser(
        fixture.users.valid.username,
        fixture.users.valid.password
      )
    })  

    cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    cy.get(element.btnBurgerMenu).click()
    cy.get(element.btnLogoutSidebar).click()
    cy.get(element.baseValidateUserLoggedOut).should('be.visible')
    })
  
  it('Logout in successfully with problem_user', () => {
    cy.get('@fixture').then(fixture => {
      cy.loginUser(
        fixture.users.problem.username,
        fixture.users.problem.password
      )
    })

    cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    cy.get(element.btnBurgerMenu).click()
    cy.get(element.btnLogoutSidebar).click()
    cy.get(element.baseValidateUserLoggedOut).should('be.visible')
  })
    
  it('Logout via clearning the cookies', () => {
    cy.get('@fixture').then(fixture => {
      cy.loginUser(
        fixture.users.valid.username,
        fixture.users.valid.password
      )
    })  
   
    cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    cy.clearCookies()
    cy.reload()
    cy.get(element.baseCheckErrorCookiesMsg).contains("You can only access '/inventory.html' when you are logged in.").should('be.visible')
    cy.get(element.baseValidateUserLoggedOut).should('be.visible')
  })
})
