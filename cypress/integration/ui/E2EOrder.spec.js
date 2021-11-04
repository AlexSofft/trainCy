import authSteps from '../../steps/auth.step'
import orderSteps from '../../steps/order.step'

describe("Automate End to End Buy Order functionality", () => {
    beforeEach(() => {
        authSteps.signIn();
        authSteps.logIn();
    });

    it("should purchase first item", () => {
        orderSteps.addItemToCart()
        orderSteps.checkTotalPrice()
    });

    it("Verify that Total Price is reflecting correctly if the user changes quantity on the 'Shopping Cart Summary' Page", function () {
        orderSteps.addItemToCart()
        orderSteps.checkPriceReflectsQntChange()
    });

    // it("Automate 'Search Product' Functionality", function () {

    //     accountPage.getSearchField().type('Dress');
    //     accountPage.getSubmitSearch().click();
    //     orderPage.getSearchResultTitle().first().should(($span) => {
    //         expect($span.text().trim().replaceAll('"', '')).to.equal('Dress');
    //     })
    // });

    // it("Verify that 'Add to Wishlist' only works after login", function () {
    //     accountPage.signOut().click();
    //     loginPage.getPageTitle().should('have.text', 'Authentication');
    //     loginPage.getWomenButton().click();
    //     womenPage.getItemsList().first().click();
    //     womenPage.getAddToWishListButton().click();
    //     womenPage.getAddToWishListError().should('have.text', 'You must be logged in to manage your wishlist.')

    // });
});

