Feature: Signup Feature
    As a user, I should be able to Signup
    Background:  Intial Steps
        Given I am on the home page
        When I click on the "Sign up" Button
        Then I should see the signup form
        When I fill in "Ademola Bhadmus" into "#fullname" field
        And I fill in "Bhadoo" into "#businessname" field
        And I fill in the email into the "business email" field
        And I fill in "+234805898290" into "#businessphonenumber" field
        And I fill in "RC-682879" into "#businessRegNum" field
        And I click on the "Next" Button
        And I fill in "https://www.wearetesting.com" into "#website" field
        And I fill in "@testing" into "#instagramHandle" field
        And I fill in "@testing2" into "#twitterHandle" field


    Scenario:A user should be able to signup successfully without referral code after filling all fields.
        And I select how I heard about mima through "Instagram"
        And I fill in "Test@1234" into "#password" field
        And I click on the "Sign Up" Button
        Then I should see the OTP page
        When I insert the OTP
        Then I should see the welcome page


    Scenario Outline: A user should be able to signup successfully without referral code using <info-source>.
        And I select how I heard about mima through "<info-source>"
        And I fill in "Test@1234" into "#password" field
        And I click on the "Sign Up" Button
        Then I should see the OTP page
        When I insert the OTP
        Then I should see the welcome page
        When I click on the "Go back Home" Button
        Then I should see the home page title

        Examples:
            | info-source      |
            | Webinar/Seminar  |
            | Mima Sales Agent |
            | Instagram        |
