
class ProductPage {

    verifySelectedProduct() {
        cy.fixture('testData').then((data) => {
            cy.get('div[class="product-information"] h2').should('contain', `${data.productName}`);
        });
    }

    enterQuantityAndAddToCart() {
        cy.get('#quantity').click().clear().type('30');
        cy.get('button[type="button"] i[class="fa fa-shopping-cart"]').click();
    }

}

export default ProductPage;
