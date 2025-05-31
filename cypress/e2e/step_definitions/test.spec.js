import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
Before(() => {
	cy.fixture('elements').then(sel => {
		homepage = sel.elements.homepage
		signup = sel.elements.signupPage
	})
	cy.fixture('creds').then((cred) => {
		email = cred
	})
})
Given(/^I am on the home page$/, () => {
	cy.visit('/');
});

Then(/^I should see the signup form$/, () => {
	cy.verifyPageLoad('#fullname')
});

Then(/^I select how I heard about mima through "([^"]*)"$/, (heardAboutUs) => {
	cy.clickHowYouHeardABoutUsDropdown(heardAboutUs)
});

Then(/^I should see the OTP page$/, () => {
	cy.verifyPageLoad('.Onboarding_right__t5ZjT')
});

When(/^I insert the OTP$/, () => {
	cy.retrieveAndInsertOTP()
});

Then(/^I should see the welcome page$/, () => {
	return true;
});

When(/^I click on the "([^"]*)" (Button|Span|Link)$/, (buttonText, type) => {
	cy.clickDesiredElement(buttonText, type)
});

Then(/^I fill in "([^"]*)" into "([^"]*)" field$/, (text,field) => {
	cy.typeInAnyValue(field, text)
});

When(/^I fill in the email into the "([^"]*)" field$/, (field) => {
	cy.insterEmail(field)
});

