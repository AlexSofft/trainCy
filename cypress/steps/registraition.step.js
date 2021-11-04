import RegistrationPage from '../pages/registraition';
import AccountPage from '../pages/account';
import user from '../data/userData.json';

class RegistraitionSteps {
    constructor() {
        this.registrationpage = new RegistrationPage();
        this.accountPage = new AccountPage();
    }

    checkRegistrationErrorMessages() {
        this.registrationpage.checkFirstNameError()
        this.registrationpage.checkLastNameError()
        this.registrationpage.checkPasswordError()
        this.registrationpage.submitForm()
        this.registrationpage.checkSbmtErrorMesgs('There are 8 errors')
    }

    signUp() {
        this.registrationpage.checkCountry('United States')
        this.registrationpage.clickRadio('Mr')
        this.registrationpage.enterFirstName(user.firstName)
        this.registrationpage.enterLastname(user.lastName)
        this.registrationpage.enterPassword(user.password)
        this.registrationpage.selectDate('10')
        this.registrationpage.selectMonth('10')
        this.registrationpage.selectYear('1983')
        this.registrationpage.enterCompany(user.company)
        this.registrationpage.enterAddress(user.address)
        this.registrationpage.enterCity(user.city)
        this.registrationpage.selectState(user.state)
        this.registrationpage.enterPostalCode(user.postalCode)
        this.registrationpage.enterMobile(user.mobile)
        this.registrationpage.submitForm()
        this.accountPage.checkUrl("/index.php")
        this.accountPage.checkPageTitle('My account')
        this.accountPage.checkUserName(user.firstName, user.lastName)
    }
}

export default new RegistraitionSteps();