import BasePage from './basePage.js'

export default class ItemPage extends BasePage {

    constructor() {
        super()
    }

    getItemsList() { return cy.get('.product_img_link') }
    getSize() { return cy.get('#group_1') }
    getColor(color) { return cy.get(`[title="${color}"]`) }
    getAddToCartButton() { return cy.contains('Add to cart') }
    getAddToWishListButton() { return cy.get('#wishlist_button') }
    getAddToWishListError() { return cy.get('.fancybox-error'); }

    clickFirstItem() { this.getItemsList().first().click() }
    selectSize(size) { this.getSize().select(`${size}`) }
    selectColor(color) { this.getColor(color).click() }
    clickAddToCart() { this.getAddToCartButton().click() }

    checkError(text) {
        this.getAddToWishListError().should('have.text', text)
    }
}