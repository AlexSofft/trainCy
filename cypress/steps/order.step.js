import AccountPage from '../pages/account';
import OrderPage from '../pages/order';
import ItemPage from '../pages/item';

class OrderSteps {
    constructor() {
        this.orderpage = new OrderPage();
        this.accountpage = new AccountPage();
        this.itempage = new ItemPage();

    }

    purchaseItem() {
        let fullPrice;
        this.accountpage.clickWomenButton()
        this.itempage.clickFirstItem()
        this.itempage.selectSize('M')
        this.itempage.selectColor('Blue')

        cy.intercept('POST', '/index.php?rand=*').as('addToCart')
        this.itempage.clickAddToCart()
        cy.wait('@addToCart')

        this.orderpage.clickProceedToCheckoutPopUpButton()
        this.orderpage.getSummaryFullPrice().then(($sum) => {
            fullPrice = $sum.text()
            console.log(`FULL PRICE ${fullPrice}`) 
        })
        console.log(`FULL PRICE2 ${fullPrice}`)
        this.orderpage.clickSummaryProceedToCheckoutButton()

        this.orderpage.clickAddressProceedToCheckoutButton()
        this.orderpage.clickTermsAgreeCheckbox()
        this.orderpage.clickShippingProceedToCheckoutButton()
        this.orderpage.clickPayByCheckButton()
        this.orderpage.clickConfirmOrderButton()
        this.orderpage.checkTotalAmount(fullPrice)
    }

}

export default new OrderSteps();