/// <reference types="cypress" />
import { elements as element } from "./components/elements"
describe('SWAGLABS', () => {
    beforeEach(() => 
      cy.visit('/')
    )
  
    it('Logs in successuflly with standard user', () => {
      cy.get('@fixture').then(fixture => {
        cy.loginUser(
          fixture.users.valid.username,
          fixture.users.valid.password
        )
      })

      cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    })

    it('Tries to login with a locked out user', () => {
      cy.get('@fixture').then(fixture => {
        cy.loginUser(
          fixture.users.locked.username,
          fixture.users.locked.password
        )
      })
      
      cy.get(element.baseCheckErrorMsg).should('be.visible')
    })

    it('Logs in successuflly with a problematic user', () => {
      cy.get('@fixture').then(fixture => {
        cy.loginUser(
          fixture.users.problem.username,
          fixture.users.problem.password
        )
      })
      
     cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    })

    it('Logs in successuflly with performance glitch user', () => {
      cy.get('@fixture').then(fixture => {
        cy.loginUser(
          fixture.users.performance_glitch.username,
          fixture.users.performance_glitch.password
        )
      })
      
     cy.get(element.baseValidateUserLogin).contains('.title', 'Products').should('be.visible')
    })
  })
    