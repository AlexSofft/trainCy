import authSteps from '../../steps/auth.step'
import orderSteps from '../../steps/order.step'

describe("Automate End to End Buy Order functionality", () => {
    beforeEach(() => {
        authSteps.signIn();
        authSteps.logIn();
    });

    it("should purchase first item", () => {
        orderSteps.addItemToCart()
        orderSteps.proceedWithPurchase()
        orderSteps.checkTotalPrice()
    });

    it("Verify that Total Price is reflecting correctly if the user changes quantity on the 'Shopping Cart Summary' Page", function () {
        orderSteps.addItemToCart()
        orderSteps.checkPriceReflectsQntChange()
    });

    it("Automate 'Search Product' Functionality", function () {
        orderSteps.enterDressSearchField()
        orderSteps.sbmtSearch()
        orderSteps.checkSearchedItemTitle()
    });

    it("Verify that 'Add to Wishlist' only works after login", function () {
        orderSteps.signOut()
        orderSteps.addItemToWishLis()
    });

});

    //     orderPage.getSearchResultTitle().first().should(($span) => {
    //         expect($span.text().trim().replaceAll('"', '')).to.equal('Dress');
    //     })

