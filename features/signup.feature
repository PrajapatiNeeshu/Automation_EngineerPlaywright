Feature: Signup Functionality
    As a new user
    I want to create an account
    So that I can access the platform

    @signup
    Scenario: Successful signup with valid details
        Given I am on the Flipkart signup page
        When I click on the create account button
        And I enter signup details
            | field     | value                |
            | name      | Test User            |
            | email     | testuser@example.com |
            | password  | Test@123             |
            | mobile    | 9876543210           |
        And I submit the signup form
        Then I should see successful registration message

    @signup
    Scenario: Signup with existing email
        Given I am on the Flipkart signup page
        When I click on the create account button
        And I enter signup details with existing email
            | field     | value                |
            | name      | Test User            |
            | email     | existing@example.com |
            | password  | Test@123             |
            | mobile    | 9876543210           |
        Then I should see email already exists message