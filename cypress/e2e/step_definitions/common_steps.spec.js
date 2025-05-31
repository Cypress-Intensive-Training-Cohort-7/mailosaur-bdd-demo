import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(/^I should see the home page title$/, () => {
	cy.title().should('contains', 'Mima - Freemium Business Management Solution Tools')
    cy.saveSignUpEmail()
});


When(/^I click on the Sign up Button$/, () => {
	cy.clickAnyButtonWithText('Sign up')
});

When(/^I click on the Sign Up Button$/, () => {
	cy.clickAnyButtonWithText('Sign Up')
});

When(/^I click on the Next Button$/, () => {
	cy.clickAnyButtonWithText('Next')
});


When(/^I insert the "([^"]*)"$/, (args1) => {
	cy.insertDetails(args1);
});

When(/^I click on the Click Here Span$/, () => {
	cy.clickAnySpanWithText('Click Here')
});


