Feature: Login Feature
    As a user, I should be able to Login

    Scenario:A user should be able to signup successfully without referral code after filling all fields.
        Given I am on the home page
        # When I click on the homepage "Sign up" Button
        When I click on the "Log in" Button
        And I fill in the email into the "email" field
        And I fill in "Test@1234" into "#password" field
        When I click on the "Login" Button
        And I click on the "Go back Home" Button