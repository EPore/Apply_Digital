
const faker = require('faker');
const myName = faker.name.findName();
const myEmail = faker.internet.email();

class ContactPage {

    fillContactForm() {
        cy.fixture('testData').then((data) => {
            cy.get('input[placeholder="Name"]').type(myName);
            cy.get('input[placeholder="Email"]').type(myEmail);
            cy.get('input[placeholder="Subject"]').type(`${data.subject}`);
            cy.get('#message').type(`${data.contactMessage}`);
            cy.get('input[value="Submit"]').click();
        });
    }

    handlePopup() {
        cy.on('window:confirm', () => true);
    }

    finalLogout() {
        cy.get('a[href="/logout"]').should('be.visible').click();
        cy.url().should('include', '/login');
    }

}

export default ContactPage;
