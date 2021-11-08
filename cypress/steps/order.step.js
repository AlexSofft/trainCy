import AccountPage from '../pages/account';
import OrderPage from '../pages/order';
import ItemPage from '../pages/item';
import testdata from '../data/testData.json'

const httpPost = {
    url: 'http://automationpractice.com/index.php?rand=*',
    method: 'POST'
}

const httpToCartPost = {
    url: '/index.php?rand=*',
    method: 'POST'
}

class OrderSteps {
    constructor() {
        this.orderpage = new OrderPage();
        this.accountpage = new AccountPage();
        this.itempage = new ItemPage();
    }

    addItemToWishLis() {
        this.orderpage.getWomenButton().click();
        this.itempage.getItemsList().first().click();
        this.itempage.getAddToWishListButton().click();
        this.itempage.checkError('You must be logged in to manage your wishlist.')
    }

    checkTotalPrice() {
        this.orderpage.checkTotalAmount(testdata.fullPrice)
    }

    proceedWithPurchase() {
        this.orderpage.clickSummaryProceedToCheckoutButton()
        this.orderpage.clickAddressProceedToCheckoutButton()
        this.orderpage.clickTermsAgreeCheckbox()
        this.orderpage.clickShippingProceedToCheckoutButton()
        this.orderpage.clickPayByCheckButton()
        this.orderpage.clickConfirmOrderButton()
    }

    checkPriceReflectsQntChange() {
        this.orderpage.getSummaryUnitPrice().then(($sum) => {
            let unitPrice = $sum.text().trim().slice(1)
            let doublePrice = (parseFloat(unitPrice) * 2.0).toString();
            cy.wrap(doublePrice).as('doublePrice')
            console.log(`UNIT PRICE ${doublePrice}`)
        })
        cy.intercept(httpPost).as('wait')
        this.orderpage.clickAddQtyButton()
        cy.wait('@wait')
        this.orderpage.checkDoublePrice('@doublePrice')
    }

    checkSearchedItemTitle() {
        this.orderpage.checkItemitle('Dress')
    }

    addItemToCart() {
        this.accountpage.clickWomenButton()
        this.itempage.clickFirstItem()
        this.itempage.selectSize('M')
        this.itempage.selectColor('Blue')
        cy.intercept(httpToCartPost).as('addToCart')
        this.itempage.clickAddToCart()
        cy.wait('@addToCart')
        this.orderpage.clickProceedToCheckoutPopUpButton()
    }

    enterDressSearchField() {
        this.orderpage.getSearchField().type('Dress')
    }

    sbmtSearch() {
        this.orderpage.clickSubmitSearch()
    }

    signOut() {
        this.orderpage.clickSignOut()
        this.accountpage.checkPageTitle('Authentication')
    }


}

export default new OrderSteps();


// checkTotalPrice() {
//     this.orderpage.getSummaryFullPrice().then(($sum) => {
//         let fullPrice = $sum.text()
//         cy.wrap(fullPrice).as('fullPrice')
//     })
//     this.orderpage.clickSummaryProceedToCheckoutButton()
//     this.orderpage.clickAddressProceedToCheckoutButton()
//     this.orderpage.clickTermsAgreeCheckbox()
//     this.orderpage.clickShippingProceedToCheckoutButton()
//     this.orderpage.clickPayByCheckButton()
//     this.orderpage.clickConfirmOrderButton()
//     this.orderpage.checkTotalAmount("@fullPrice")
// }