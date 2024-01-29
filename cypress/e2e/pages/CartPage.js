
class CartPage {
    
    proceedToCheckout1() {
        cy.get('.btn.btn-success.close-modal.btn-block').click();
    }

    clickLogin() {
        cy.get('a[href="/login"]').click();
    }

    verifyCart() {
        cy.fixture('testData').then((data) => {
            cy.get('a[href="/product_details/22"]').should('contain', `${data.productName}`);
        });
        cy.get('.disabled').should('contain', '30');
    }
    
    proceedToCheckout2() {
        cy.get('.btn.btn-default.check_out').click();
    }

}

export default CartPage;
