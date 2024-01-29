
class HomePage {

    visit() {
        cy.fixture('testData').then((data) => {
            cy.visit(data.url);
        });
    }

    scrollToCenter() {
        cy.scrollTo('center');
    }

    selectProduct() {
        cy.fixture('testData').then((data) => {
            cy.get(`a[href="${data.productLocator}"]`).click();
        });
    }

    clickOnCart() {
        cy.contains('Cart').should('be.visible').click();
    }

    logout() {
        cy.get('a[href="/logout"]').click();
    }

    clickOnContactUs() {
        cy.get('a[href="/contact_us"]').should('be.visible').click();
    }

}

export default HomePage;
