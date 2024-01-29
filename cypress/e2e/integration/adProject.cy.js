
/* This is the automated test script written in JavaScript to run in Cypress
as an exercise of the technical interview proposed by Apply Digital.*/

const faker = require('faker');
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import AccountPage from '../pages/AccountPage';
import CheckoutPage from '../pages/CheckoutPage';
import PaymentPage from '../pages/PaymentPage';
import ContactPage from '../pages/ContactPage';

describe('Apply Digital Project', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const accountPage = new AccountPage();
    const checkoutPage = new CheckoutPage();
    const paymentPage = new PaymentPage();
    const contactPage = new ContactPage();

    it('Automation Exercise', () => {

        // 1.   Enter the Website and Scroll about halfway down the page.
        homePage.visit();
        homePage.scrollToCenter();

        // 2.   Chose a product and click on “View product” under the picture of the product.
        homePage.selectProduct();

        // 3-4. In the Quantity box enter 30 and click “Add to cart”.
        productPage.verifySelectedProduct();
        productPage.enterQuantityAndAddToCart();
        
        // 5-6. Click on “Proceed to Checkout” and click on “Register/Login”.
        cartPage.proceedToCheckout1();
        cartPage.clickLogin();

        // 7.   Enter name and email under “New User Signup”.
        accountPage.newUserSignup();

        // 8-9. Fill in all information and click on “Create Account” and click on “Continue”.
        accountPage.fillRegistrationForm();
        accountPage.createAccount();

        // 10.  Click on the Cart in the header.
        homePage.clickOnCart();

        // 11.  Click on “Proceed to checkout”.
        cartPage.verifyCart();
        cartPage.proceedToCheckout2();

        // 12.  Add a comment and click on “Place Order”.
        checkoutPage.verifyAddressAndMobile();
        checkoutPage.placeOrder();

        // 13.  Fill in fake Credit Card information and click on “Pay and Confirm Order”.
        paymentPage.fillPaymentDetails();
        paymentPage.confirmPayment();

        // 14.  Click on “Continue” button.
        paymentPage.continueAfterPayment();

        // 15.  Click on “Logout” on top header.
        homePage.logout();

        // 16.  Enter on the “Login to your account” box with previously created user.
        accountPage.userLogin();
        
        // 17.  Click on “Contact us” on the header.
        homePage.clickOnContactUs();

        // 18-19.   Fill required data, Click on “Submit” and press “OK” in the pop-up window.
        contactPage.fillContactForm();
        contactPage.handlePopup();

        // 20.  Finally, click on the “Logout” button on the header.
        contactPage.finalLogout();

    });

});
