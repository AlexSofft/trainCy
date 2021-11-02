import BasePage from './basePage.js'

export default class WomenPage extends BasePage {

    constructor() {
        super()
    }

    getItemsList() {
        return cy.get('.product_img_link')
    }

    getSize(size) {
        return cy.get('#group_1').select(`${size}`)
    }

    getColor(color) {
        return cy.get(`[title="${color}"]`)
    }

    getAddToCartButton() {
        return cy.contains('Add to cart')

    }

    getAddToWishListButton() {
        return cy.get('#wishlist_button')
    }

    getAddToWishListError(){
        return cy.get('.fancybox-error');
    }

    addToCart() {
        cy.intercept('POST', "/index.php?rand=*").as('addToCart')
        this.getAddToCartButton().click()
        cy.wait('@addToCart')
    }


}