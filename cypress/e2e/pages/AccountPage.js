
const faker = require('faker');
const myName = faker.name.findName();
const myEmail = faker.internet.email();

class AccountPage {

    newUserSignup() {
        cy.get('input[placeholder="Name"]').type(myName);
        cy.get('input[data-qa="signup-email"]').type(myEmail);
        cy.get('button[data-qa="signup-button"]').click();
    }

    fillRegistrationForm() {
        cy.fixture('testData').then((data) => {
            cy.get('#id_gender1').click();
            cy.get('#password').type(`${data.myPassword}`);
            cy.get('input#password.form-control').click();
            cy.wait(1000);
            cy.get('input#password.form-control').click();
            cy.get('#days').select('8');
            cy.get('#months').select('November');
            cy.get('#years').select('1988');
            cy.get('#first_name').type(myName);
            cy.get('#last_name').type(myName);
            cy.get('#company').type(`${data.companyName}`);
            cy.get('#address1').type(`${data.companyAddress}`);
            cy.get('#country').select(`${data.country}`);
            cy.get('#state').type(`${data.state}`);
            cy.get('#city').type(`${data.city}`);
            cy.get('#zipcode').type(`${data.zipcode}`);
            cy.get('#mobile_number').type(`${data.mobileNumber}`);
        });
    }

    createAccount() {
        cy.get('button[data-qa="create-account"]').click();
        cy.get('.btn.btn-primary').should('be.visible').click();
    }

    userLogin() {
        cy.get('input[data-qa="login-email"]').clear().type(myEmail);
        cy.fixture('testData').then((data) => {
            cy.get('input[placeholder="Password"]').clear().type(`${data.myPassword}`);
        });
        cy.get('button[data-qa="login-button"]').click();
    }

}

export default AccountPage;
