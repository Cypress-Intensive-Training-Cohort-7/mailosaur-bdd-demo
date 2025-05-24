import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(/^I should see the home page title$/, () => {
	cy.title().should('contains', 'Mima - Freemium Business Management Solution Tools')
    cy.saveSignUpEmail()
});
