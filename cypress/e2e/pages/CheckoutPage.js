
class CheckoutPage {

    verifyAddressAndMobile() {
        cy.fixture('testData').then((data) => {
            cy.get('#address_delivery').should('contain', `${data.companyAddress}`);
            cy.get('#address_delivery li.address_phone').should('contain', `${data.mobileNumber}`);
        });
    }

    placeOrder() {
        cy.fixture('testData').then((data) => {
            cy.get('textarea[name="message"]').type(`${data.coment}`);
        });
        cy.get('.btn.btn-default.check_out').click();
    }

}

export default CheckoutPage;
