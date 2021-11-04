import authSteps from '../../steps/auth.step';
import registraitionSteps from '../../steps/registraition.step';

describe("User Registration Process", () => {
  beforeEach(() => {
    authSteps.signIn();
  });

  it("should show register form errors", () => {
    authSteps.createBankAccount();
    registraitionSteps.checkRegistrationErrorMessages();
  });

  it("should register new user", () => {
    authSteps.createBankAccount()
    registraitionSteps.signUp()
  });
});