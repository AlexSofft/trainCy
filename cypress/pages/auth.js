import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    getCreateAccountErrorMessage() { return cy.get('#create_account_error li') }
    getPageTitle() { return cy.get('.page-heading') }
    getCreateAccountField() { return cy.get('#email_create') }
    getCreateAccountButton() { return cy.get('#SubmitCreate') }
    getSignInButton() { return cy.get('.login') }
    getEmailField() { return cy.get('#email') }
    getPasswordFiled() { return cy.get('#passwd') }
    getSbmtLoginButton() { return cy.get('#SubmitLogin') }

    clickSignIn() { this.getSignInButton().click() }

    enterNewAccountEmail(email) { this.getCreateAccountField().type(email) }
    clickCreateAccountButton() { this.getCreateAccountButton().click() }

    enterEmailForLogin(email) { this.getEmailField().type(email) }
    enterPassword(password) { this.getPasswordFiled().type(password) }
    clickSbmtButton() { this.getSbmtLoginButton().click() }

    checkLoginErrorMessage(text) { this.getErrorMessage().find('p').should('have.text', text) }
    checkCreateAccountErrorMessage(message) {
        this.getCreateAccountErrorMessage().should('have.text', message);
    }
}