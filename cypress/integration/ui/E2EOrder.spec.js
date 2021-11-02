import LoginPage from '../../pages/auth';
import AccountPage from '../../pages/account';
import WomanPage from '../../pages/women';
import OrderPage from '../../pages/order';
import user from '../../data/userData.json';

const loginPage = new LoginPage();
const accountPage = new AccountPage();
const womenPage = new WomanPage();
const orderPage = new OrderPage();

describe("Automate End to End Buy Order functionality", function () {
    beforeEach(function () {
        loginPage.signIn();
        loginPage.logIn(user.email, user.password);
    });

    it("should purchase first item", function () {
        accountPage.getPageTitle().should('have.text', 'My account');
        accountPage.getWomenButton().click();
        womenPage.getItemsList().first().click();
        womenPage.getSize('M');
        womenPage.getColor('Blue');
        womenPage.addToCart();
        orderPage.proceedToCheckoutPopUpButton().click();
        let fullPrice;
        orderPage.getSummaryFullPrice().then(($sum) => {
            fullPrice = $sum.text()
        })
        orderPage.getSummaryProceedToCheckoutButton().click();
        orderPage.getAddressProceedToCheckoutButton().click();
        orderPage.getTermsAgreeCheckbox().click();
        orderPage.getShippingProceedToCheckoutButton().click();
        orderPage.getPayByCheckButton().click();
        orderPage.getConfirmOrderButton().click();
        orderPage.getTotalAmount().should(($amount) => {
            expect($amount.text()).to.equal(fullPrice)
        })
    });

    it("Verify that Total Price is reflecting correctly if the user changes quantity on the 'Shopping Cart Summary' Page", function () {
        accountPage.getPageTitle().should('have.text', 'My account');
        accountPage.getWomenButton().click();
        womenPage.getItemsList().first().click();
        womenPage.getSize('M');
        womenPage.getColor('Blue');
        womenPage.addToCart();
        orderPage.proceedToCheckoutPopUpButton().click();
        let totalPrice;
        orderPage.getSummaryUnitPrice().then(($sum) => {
            totalPrice = $sum.text().trim().slice(1)
        })
        orderPage.getAddQtyButton().click()
        orderPage.getSummaryTotalPrice().should(($sum) => {
            let expected = (parseFloat(totalPrice)*2.0).toString();
            expect($sum.text().trim().slice(1)).to.equal(expected)
        })
    });

    it("Automate 'Search Product' Functionality", function () {
        accountPage.getPageTitle().should('have.text', 'My account');
        accountPage.getSearchField().type('Dress');
        accountPage.getSubmitSearch().click();
        orderPage.getSearchResultTitle().first().should(($span) => {
            expect($span.text().trim().replaceAll('"', '')).to.equal('Dress');
        })
    });

    it("Verify that 'Add to Wishlist' only works after login", function () {
        accountPage.signOut().click();
        loginPage.getPageTitle().should('have.text', 'Authentication');
        loginPage.getWomenButton().click();
        womenPage.getItemsList().first().click();
        womenPage.addToCart();
        orderPage.proceedToCheckoutPopUpButton().click();
        orderPage.getSummaryProceedToCheckoutButton().click();
        loginPage.getPageTitle().should('have.text', 'Authentication');
    });
});

