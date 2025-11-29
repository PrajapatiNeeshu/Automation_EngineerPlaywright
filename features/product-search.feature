Feature: Flipkart Product Search
    As a user of Flipkart
    I want to search for products
    So that I can find and purchase items

    @search
    Scenario: Search for iPhone on Flipkart
        Given I am on the Flipkart homepage
        When I close the login popup if present
        And I search for "iPhone 14"
        Then I should see iPhone search results
        And I should see product filters
        And product prices should be visible

    @search @filter
    Scenario: Filter iPhone search results
        Given I am on the Flipkart homepage
        When I close the login popup if present
        And I search for "iPhone 14"
        And I apply the following filters
            | filter     | value     |
            | price     | 50000-100000 |
            | ram       | 8 GB      |
        Then I should see filtered results
        And prices should be within selected range

    @search @sort
    Scenario: Sort iPhone search results by price
        Given I am on the Flipkart homepage
        When I close the login popup if present
        And I search for "iPhone 14"
        And I sort results by "Price High to Low"
        Then products should be sorted by price in descending order