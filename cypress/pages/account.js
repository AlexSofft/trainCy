import BasePage from './basePage.js'

export default class AccountPage extends BasePage {

  constructor() {
    super()
  }

  getUserName() {
    return cy.get('[title="View my customer account"]')
  }

  getPageTitle() {
    return cy.get('#center_column h1')
  }

  signOut() {
    return cy.get('[title="Log me out"]')
  }
}