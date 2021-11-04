import BasePage from './basePage.js'

export default class RegistrationPage extends BasePage {

    constructor() {
        super()
    }

    getMenGenderRadio() { return cy.get('#id_gender1') }
    getMrsGenderRadio() { return cy.get('#id_gender2') }
    getFirstName() { return cy.get('#customer_firstname') }
    getLastName() { return cy.get('#customer_lastname') }
    getPassword() { return cy.get('#passwd') }
    getDate() { return cy.get('select#days') }
    getMonth() { return cy.get('select#months') }
    getYear() { return cy.get('select#years') }
    getCompany() { return cy.get('[name="company"]') }
    getAddress() { return cy.get('[name="address1"]') }
    getCity() { return cy.get('[name="city"]') }
    getState() { return cy.get('#id_state') }
    getPostCode() { return cy.get('[name="postcode"]') }
    getCountry() { return cy.get('select#id_country option:selected') }
    getMobile() { return cy.get('[name="phone_mobile"]') }
    getSubmitFormButton() { return cy.get('#submitAccount') }

    //SIGNUP
    clickRadio(sex) { sex === 'Mrs' ? this.getMrsGenderRadio().click() : this.getMenGenderRadio().click() }
    enterFirstName(firstName) { this.getFirstName().type(firstName) }
    enterLastname(lastname) { this.getLastName().type(lastname) }
    enterPassword(password) { this.getPassword().type(password) }
    selectDate(date) { this.getDate().select(date) }
    selectMonth(month) { this.getMonth().select(month) }
    selectYear(year) { this.getYear().select(year) }
    enterCompany(company) { this.getCompany().type(company) }
    enterAddress(address) { this.getAddress().type(address) }
    enterCity(city) { this.getCity().type(city) }
    selectState(state) { this.getState().select(state) }
    enterPostalCode(postalCode) { this.getPostCode().type(postalCode) }
    enterMobile(mobile) { this.getMobile().type(mobile) }
    submitForm() { this.getSubmitFormButton().click() }

    // CHECK FIELDS DEFAULT
    checkCountry(country) { this.getCountry().should('have.text', country) }

    //CHECK SBMT_FORM ERRORS
    checkFirstNameError() { this.getFirstName().focus().blur().parent('div').should('have.class', 'required form-group form-error') }
    checkLastNameError() { this.getLastName().focus().blur().parent('div').should('have.class', 'required form-group form-error') }
    checkPasswordError() { this.getPassword().focus().blur().parent('div').should('have.class', 'required password form-group form-error') }
    checkSbmtErrorMesgs(message) { this.getErrorMessage().find('p').should('have.text', message); }
}