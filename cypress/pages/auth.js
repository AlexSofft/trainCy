import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }

    getCreateAccountErrorMessage() { return cy.get('#create_account_error li') }
    getPageTitle() { return cy.get('.page-heading') }

    createBankAccount(email) {
        cy.intercept('POST', "/index.php").as('createAccount');
        cy.get('#email_create').type(email);
        cy.get('#SubmitCreate').click();
        cy.wait('@createAccount');
    }

    signIn() {
        cy.intercept('GET', "https://www.facebook.com/x/oauth/status?ancestor_origins=*").as('signin');
        this.navigate("/signin");
        cy.get('.login').click();
        cy.wait('@signin');
    }

    logIn(email, password) {
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
    }
}