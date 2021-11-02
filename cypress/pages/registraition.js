import BasePage from './basePage.js'

export default class RegistrationPage extends BasePage {

    constructor() {
        super()
    }

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
    submitForm() { return cy.get('#submitAccount') }

    signUp(firstName, lastName, password, company, address, city, postalCode, mobile) {
        cy.get('#id_gender1').click()
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getPassword().type(password)
        this.getDate().select('10')
        this.getMonth().select('10')
        this.getYear().select('1983')

        this.getCompany().type(company)
        this.getAddress().type(address)
        this.getCity().type(city)

        this.getState().select('Colorado')
        this.getPostCode().type(postalCode)
        this.getMobile().type(mobile)
        this.submitForm().click()

    }
}