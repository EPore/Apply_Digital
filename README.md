Apply Digital Project Documentation

Introduction

 In an era where technology is rapidly evolving, quality assurance (QA) emerges as a pivotal component in software development. This documentation exposes strategies, methodologies, and practices designed to ensure the test-project e2e execution. It also describes the environment setups for the automated script run using Node.js and Cypress as main tools.
    
Within the framework of an exciting hands-on training challenge, I present to you the product of a meticulous process of work guided by the future goal of generating value to the company.
    
Finally, it is a sincere expression of gratitude for the opportunity to show what I’m capable of doing.




Test Plan, Design, and Strategy

Overview

The test suite for the Apply Digital Project was specially designed to validate user flows within “Automation Exercise” website (‘https://automationexercise.com/’), a comprehensive practice web application intended for automation testing exercises. This website serves as a training ground including a range of functionalities typical of e-commerce and user interaction platforms, for developing and honing automation skills. Exercise emphasis is also placed on testing interactive elements like buttons, forms, input fields, navigation links, and modal windows, ensuring a seamless user experience.

Test Cases

1.	User Navigation and Product Selection:
Navigates to the homepage, scrolls to the center, and selects a specified product.
2.	Product Verification and Cart Interaction:
Verifies the selected product details and adds a specified quantity to the cart.
3.	Checkout Process:
Processes through the checkout steps, including user registration, cart verification, and address confirmation.
4.	Payment Verification:
Fills in and verifies payment details using mock data.
5.	Order Placement and User Logout:
Completes the order placement and performs user logout.
6.	User Login with Existing Credentials:
Logs in with previously registered user credentials.
7.	Contact Form Submission:
Fills out and submits the contact form, handling any pop-up confirmations.
8.	Final User Logout:
Ensures the user is logged out at the end of the session.

Testing Strategy

	Tools and Frameworks:

└── Node.js: @20.11.0 version.

└── ‘npm’/’npx’ (Node Package Manager/Execute): @10.2.4 version.

└── Cypress @13.6.3 version.

└── faker @5.5.3 version.

	Page Object Model (POM):
Implements POM for improved test maintenance and readability. Each page's actions and elements are encapsulated within dedicated page object files, facilitating code reuse and modular test design.
	End-to-End User Flow Validation:
The automated test is designed to simulate entire happy path user flow, from visiting the website to final logout, covering all critical functionalities, and providing a comprehensive assessment of the application from start to finish.
	Data-Driven Approach:
‘testData.json’ is used for dynamic data injection.




Setting Up the Test Environment

Installation Steps

1.	Download Node.js from its official website and install.
2.	Verify the installation with ‘node -v’ and ‘npm -v’ in the command line.
3.	Create ‘package.json’ file and project dependencies with ‘npm -i init’ command in the terminal.
4.	Navigate to the project directory.
5.	Run ‘npm install cypress --save-dev’ to install all Cypress as ‘devDependencies’.
6.	Control Cypress installation with ‘npx cypress verify’ command in the terminal.
7.	Ensure correct ‘/faker’ library installation for data generation with ‘npm install faker@5.5.3 --save-exact’ command in the terminal.
Running Tests

9.	Start executing Cypress with ‘npx cypress open’ command in the terminal.
10.	If you want to register evidence, Cypress can record video and screenshots automatically using the command 'npx cypress run' in the terminal.

Additional Configurations

10.	Configure ‘cypress.config.js’ as needed for environment-specific settings.
11.	Ensure ‘testData.json’ in the ‘/fixtures’ folder is updated with the necessary test data.



Automation Test Script Development and Execution

Script Structure and Key Features of the Test Script

The test suite is divided into 3 main folders for different purposes:

//	‘/fixtures’ folder, with ‘testData.json’ for dynamic data handling/edition.

//	‘/page’ folder, in which every page of the application is represented by a separate page object. That folder is visited during the development of the script and encapsulates his own methods-actions, making the tests modular and reusable.


└── AccountPage:
Handles new user signup and subsequent logins.


└── CartPage:
Manages the cart, including proceeding to checkout and initiating the login process.


└── CheckoutPage:
Automates cart verification, address confirmation, and order placement.


└── ContactPage:
Executes contact form submission and final logout.


└── HomePage:
Includes site navigation, scrolling, and product selection, among others.


└── PaymentPage:
Simulates payment detail entry and order confirmation.


└── ProductPage:
Verifies the selected product and adds it to the cart.

//	‘/integration’ folder, where the main test script ‘adProyect.cy.js’ leads the end-to-end user journey. 
