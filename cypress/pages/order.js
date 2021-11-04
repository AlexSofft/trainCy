import BasePage from './basePage.js'

export default class OrderPage extends BasePage {

    constructor() {
        super()
    }

    getProceedToCheckoutPopUpButton() { return cy.get('.clearfix [title="Proceed to checkout"]') }
    getSummaryProceedToCheckoutButton() { return cy.get('p a[title="Proceed to checkout"]') }
    getSummaryUnitPrice() { return cy.get('.cart_unit .price > span') }
    getSummaryTotalPrice() { return cy.get('.cart_total .price') }
    getSummaryFullPrice() { return cy.get('#total_price') }
    getAddQtyButton() { return cy.get('[title="Add"]') }
    getAddressProceedToCheckoutButton() { return cy.get('[name="processAddress"]') }
    getShippingProceedToCheckoutButton() { return cy.get('[name="processCarrier"]') }
    getTermsAgreeCheckbox() { return cy.get('#uniform-cgv') }
    getPayByCheckButton() { return cy.get('.bankwire') }
    getConfirmOrderButton() { return cy.get('.button.btn.btn-default.button-medium[type="submit"]') }
    getTotalAmount() { return cy.get('.box span strong') }
    getSearchResultTitle() { return cy.get('#center_column h1 span') }


    clickProceedToCheckoutPopUpButton() { this.getProceedToCheckoutPopUpButton().click() }
    clickSummaryProceedToCheckoutButton() { this.getSummaryProceedToCheckoutButton().click() }
    clickAddressProceedToCheckoutButton() { this.getAddressProceedToCheckoutButton().click() }
    clickTermsAgreeCheckbox() { this.getTermsAgreeCheckbox().click() }
    clickShippingProceedToCheckoutButton() { this.getShippingProceedToCheckoutButton().click() }
    clickPayByCheckButton() { this.getPayByCheckButton().click() }
    clickConfirmOrderButton() { this.getConfirmOrderButton().click() }
    checkTotalAmount(fullPrice) { cy.get(fullPrice).then($item => this.getTotalAmount().should('contain', $item)) }
    checkDoublePrice(price){ cy.get(price).then($item => this.getSummaryTotalPrice().should('contain', $item)) }
    clickAddQtyButton() { this.getAddQtyButton().click() }

}