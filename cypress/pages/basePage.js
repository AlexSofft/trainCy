export default class BasePage {

    baseUrl = "http://automationpractice.com/index.php";

    navigate(path) {
        cy.visit(this.baseUrl + path)
    }

    getErrorMessage() { return cy.get('.alert.alert-danger') }
    getWomenButton() { return cy.contains("Women") }
    getSearchField() { return cy.get('#search_query_top') }
    getSubmitSearch() { return cy.get('[name="submit_search"]') }

    clickWomenButton() { this.getWomenButton().click() }

    checkUrl(url) { cy.location("pathname").should("eq", url); }
}