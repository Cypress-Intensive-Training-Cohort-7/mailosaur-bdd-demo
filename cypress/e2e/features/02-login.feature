Feature: Login Feature
    As a user, I should be able to Login

    Background: Pre-requisite steps
        Given I am on the home page
        When I click on the "Log in" Button

    Scenario:A user should be able to signup successfully without referral code after filling all fields.
        And I fill in the email into the "email" field
        And I fill in "Test@1234" into "#password" field
        When I click on the "Login" Button
        And I click on the "Go back Home" Button

    # Assignment: Complete steps below
    Scenario:A user should be able to reset password successfully.
        And I click on the "Click Here" Span
        And I fill in the email into the "email" field
        And I click on the "Reset Password" Button

