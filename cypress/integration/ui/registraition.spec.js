import LoginPage from '../../pages/auth';
import RegistrationPage from '../../pages/registraition';
import AccountPage from '../../pages/account';
import user from '../../data/userData.json';

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const accountPage = new AccountPage();

describe("User Registration Process", function () {
  beforeEach(function () {
    loginPage.signIn();
  });

  it("should register new user", function () {
    loginPage.createBankAccount(user.email);
    registrationPage.getCountry().should('have.text', 'United States')
    registrationPage.signUp(user.firstName, user.lastName, user.password, user.company, user.address, user.city, user.postalCode, user.mobile);
    cy.location("pathname").should("eq", "/index.php");
    accountPage.getPageTitle().should('have.text', 'My account');
    accountPage.getUserName().should('have.text', `${user.firstName} ${user.lastName}`);
  });

  it("should show invalid email error", function () {
    loginPage.createBankAccount(user.invalidEmail);
    loginPage.getCreateAccountErrorMessage().should('have.text', 'Invalid email address.');
  });

  it("should show register form errors", function () {
    loginPage.createBankAccount(user.email);
    registrationPage.getFirstName().focus().blur().parent('div').should('have.class', 'required form-group form-error');
    registrationPage.getLastName().focus().blur().parent('div').should('have.class', 'required form-group form-error');
    registrationPage.getPassword().focus().blur().parent('div').should('have.class', 'required password form-group form-error');
    registrationPage.submitForm().click();
    registrationPage.getErrorMessage().find('p').should('have.text', 'There are 8 errors');
  });

  it("should show zipCode format error", function () {
    loginPage.createBankAccount(user.email);
    registrationPage.signUp(user.firstName, user.lastName, user.password, user.company, user.address, user.city, user.invalidPostalCode, user.mobile);
    registrationPage.submitForm().click();
    registrationPage.getErrorMessage().find('ol li:nth-child(2)').should('have.text', "The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
  });
});