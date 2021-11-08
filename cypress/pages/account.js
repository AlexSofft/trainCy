import BasePage from './basePage.js'

export default class AccountPage extends BasePage {

  constructor() {
    super()
  }

  getUserName() { return cy.get('[title="View my customer account"]') }
  getPageTitle() { return cy.get('#center_column h1') }

  checkPageTitle(title) { this.getPageTitle().should('have.text', title); }
  checkUserName(firstName, lastName) { this.getUserName().should('have.text', `${firstName} ${lastName}`); }
}