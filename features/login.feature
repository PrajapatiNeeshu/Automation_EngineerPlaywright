Feature: Login Functionality
    As a user of the demo website
    I want to be able to log in
    So that I can access my account

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter valid username "standard_user"
        And I enter valid password "secret_sauce"
        And I click the login button
        Then I should be logged in successfully

    Scenario: Failed login with invalid credentials
        Given I am on the login page
        When I enter invalid username "invalid_user"
        And I enter invalid password "invalid_password"
        And I click the login button
        Then I should see an error message