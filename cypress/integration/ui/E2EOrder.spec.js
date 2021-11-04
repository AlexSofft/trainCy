import authSteps from '../../steps/auth.step'
import orderSteps from '../../steps/order.step'

describe("Automate End to End Buy Order functionality", () => {
    beforeEach(() => {
        authSteps.signIn();
        authSteps.logIn();
    });

    it("should purchase first item", () => {
        orderSteps.purchaseItem()
      
        // orderPage.proceedToCheckoutPopUpButton().click();


        // let fullPrice;
        // orderPage.getSummaryFullPrice().then(($sum) => {
        //     fullPrice = $sum.text()
        // })


        // orderPage.getSummaryProceedToCheckoutButton().click();
        // orderPage.getAddressProceedToCheckoutButton().click();
        // orderPage.getTermsAgreeCheckbox().click();
        // orderPage.getShippingProceedToCheckoutButton().click();
        // orderPage.getPayByCheckButton().click();
        // orderPage.getConfirmOrderButton().click();
        
        // orderPage.getTotalAmount().should(($amount) => {
        //     expect($amount.text()).to.equal(fullPrice)
        // })
    });

    // it("Verify that Total Price is reflecting correctly if the user changes quantity on the 'Shopping Cart Summary' Page", function () {
    //     accountPage.getPageTitle().should('have.text', 'My account');
    //     accountPage.getWomenButton().click();
    //     womenPage.getItemsList().first().click();
    //     womenPage.getSize('M');
    //     womenPage.getColor('Blue');
    //     womenPage.addToCart();
    //     orderPage.proceedToCheckoutPopUpButton().click();
    //     let totalPrice;
    //     orderPage.getSummaryUnitPrice().then(($sum) => {
    //         totalPrice = $sum.text().trim().slice(1)
    //     })
    //     orderPage.getAddQtyButton().click()
    //     orderPage.getSummaryTotalPrice().should(($sum) => {
    //         let expected = (parseFloat(totalPrice)*2.0).toString();
    //         expect($sum.text().trim().slice(1)).to.equal(expected)
    //     })
    // });

    // it("Automate 'Search Product' Functionality", function () {
    //     accountPage.getPageTitle().should('have.text', 'My account');
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

