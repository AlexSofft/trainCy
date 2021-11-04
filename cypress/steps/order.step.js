import AccountPage from '../pages/account';
import OrderPage from '../pages/order';
import ItemPage from '../pages/item';

class OrderSteps {
    constructor() {
        this.orderpage = new OrderPage();
        this.accountpage = new AccountPage();
        this.itempage = new ItemPage();
    }

    checkTotalPrice() {
        this.orderpage.getSummaryFullPrice().then(($sum) => {
            let fullPrice = $sum.text()
            cy.wrap(fullPrice).as('fullPrice')
        })
        this.orderpage.clickSummaryProceedToCheckoutButton()
        this.orderpage.clickAddressProceedToCheckoutButton()
        this.orderpage.clickTermsAgreeCheckbox()
        this.orderpage.clickShippingProceedToCheckoutButton()
        this.orderpage.clickPayByCheckButton()
        this.orderpage.clickConfirmOrderButton()
        this.orderpage.checkTotalAmount("@fullPrice")
    }

    checkPriceReflectsQntChange() {
        this.orderpage.getSummaryUnitPrice().then(($sum) => {
            let unitPrice = $sum.text().trim().slice(1)
            let doublePrice = (parseFloat(unitPrice)*2.0).toString();
            cy.wrap(doublePrice).as('doublePrice')
            console.log(`UNIT PRICE ${doublePrice}`)
        })
        cy.intercept('POST', 'http://automationpractice.com/index.php?rand=*').as('wait')
        this.orderpage.clickAddQtyButton()
        cy.wait('@wait')
        this.orderpage.checkDoublePrice('@doublePrice')
    }

    addItemToCart() {
        this.accountpage.clickWomenButton()
        this.itempage.clickFirstItem()
        this.itempage.selectSize('M')
        this.itempage.selectColor('Blue')
        cy.intercept('POST', '/index.php?rand=*').as('addToCart')
        this.itempage.clickAddToCart()
        cy.wait('@addToCart')
        this.orderpage.clickProceedToCheckoutPopUpButton()
    }

}

export default new OrderSteps();