import LoginPage from '../../pages/auth';
import AccountPage from '../../pages/account';
import user from '../../data/userData.json';

const loginPage = new LoginPage();
const accountPage = new AccountPage();

describe("Login process", function () {
  beforeEach(function () {
    loginPage.signIn();
  });

  it("should login", function () {
    loginPage.logIn(user.email, user.password);
    accountPage.getPageTitle().should('have.text', 'My account');
    accountPage.getUserName().should('have.text', `${user.firstName} ${user.lastName}`);
    accountPage.signOut();
  });

  it("should fail to login", function () {
    loginPage.logIn(user.email, user.invalidPassword);
    loginPage.getErrorMessage().find('p').should('have.text', 'There is 1 error');
  });

});