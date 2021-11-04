import AuthPage from '../pages/auth'
import AccountPage from '../pages/account';
import user from '../data/userData.json';
import { randomEmail } from "../support/utils";

const httpGet = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    method: 'GET'
}

const httpPost = {
    url: '/index.php',
    method: 'POST'
}

class AuthSteps {
    constructor() {
        this.authpage = new AuthPage();
        this.accountpage = new AccountPage();
    }

    signIn() {
        cy.intercept(httpGet).as('signin');
        this.authpage.navigate('');
        this.authpage.clickSignIn()
        cy.wait('@signin');
    }

    logIn() {
        this.authpage.enterEmailForLogin(user.email);
        this.authpage.enterPassword(user.password)
        this.authpage.clickSbmtButton()
        this.accountpage.checkPageTitle('My account')
        this.accountpage.checkUserName(user.firstName, user.lastName)
    }

    failToLogin() {
        this.authpage.enterEmailForLogin(user.invalidEmail)
        this.authpage.clickSbmtButton()
        this.authpage.checkLoginErrorMessage('There is 1 error')
    }

    createBankAccount() {
        cy.intercept(httpPost).as('createAccount');
        this.authpage.enterNewAccountEmail(randomEmail());
        this.authpage.clickCreateAccountButton()
        cy.wait('@createAccount');
    }

    failToCreateBankAccount() {
        cy.intercept(httpPost).as('createAccount');
        this.authpage.enterNewAccountEmail(user.invalidEmail);
        this.authpage.clickCreateAccountButton()
        this.authpage.checkCreateAccountErrorMessage('Invalid email address.')
        cy.wait('@createAccount');
    }

}

export default new AuthSteps();