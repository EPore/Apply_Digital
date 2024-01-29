
const faker = require('faker');
const myName = faker.name.findName();

class PaymentPage {

    fillPaymentDetails() {
        cy.fixture('testData').then((data) => {
            cy.get('input[name="name_on_card"]').type(myName);
            cy.get('input[name="card_number"]').type(`${data.cardNumber}`);
            cy.get('input[name="cvc"]').type(`${data.cvc}`);
            cy.get('input[placeholder="MM"]').type(`${data.mm}`);
            cy.get('input[placeholder="YYYY"]').type(`${data.yyyy}`);
        });
    }

    confirmPayment() {
        cy.get('#submit').click();
    }

    continueAfterPayment() {
        cy.wait(3000);
        cy.contains('Continue').click();
    }

}

export default PaymentPage;
