import BasePage from './basePage.js'

export default class OrderPage extends BasePage {

    constructor() {
        super()
    }

    getSummaryProceedToCheckoutButton() {
        return cy.get('p a[title="Proceed to checkout"]');
    }

    
    proceedToCheckoutPopUpButton() {
        return cy.get('.clearfix [title="Proceed to checkout"]')
    }

    getSummaryUnitPrice() {
        return cy.get('.cart_unit .price');
    }

    getSummaryTotalPrice() {
        return cy.get('.cart_total .price');
    }

    getSummaryFullPrice() {
        return cy.get('#total_price');
    }

    getAddQtyButton(){
        return cy.get('[title="Add"]');
    }

    getAddressProceedToCheckoutButton() {
        return cy.get('[name="processAddress"]');
    }

    getShippingProceedToCheckoutButton() {
        return cy.get('[name="processCarrier"]');
    }

    getTermsAgreeCheckbox() {
        return cy.get('#uniform-cgv');
    }

    getPayByCheckButton() {
        return cy.get('.bankwire');
    }

    getConfirmOrderButton() {
        return cy.get('.button.btn.btn-default.button-medium[type="submit"]');
    }

    getTotalAmount() {
        return cy.get('.box span strong');
    }

    getSearchResultTitle(){
        return cy.get('#center_column h1 span');
    }
}