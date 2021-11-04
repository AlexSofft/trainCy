import authSteps from '../../steps/auth.step'

describe("Login process", () => {
  beforeEach( () => {
    authSteps.signIn();
  });

  it("should login", () => {
    authSteps.logIn();
  });

  it("should fail to login", () => {
    authSteps.failToLogin()
  });

  it("should show invalid email error", function () {
    authSteps.failToCreateBankAccount();
  });

});