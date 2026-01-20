name: bdd-scenario-standards
description: Write Gherkin scenarios following our team's style guide
---

## Our BDD Standards

### Always
- Start scenarios with business context (Given)
- Use "I" for user actions, not "the user"
- Keep scenarios under 10 steps
- Write from user's perspective

### Never
- Don't include technical implementation details
- Don't write scenarios that test multiple features
- Don't use vague words like "check" or "verify"

## Example
```gherkin
Scenario: Customer completes checkout with saved payment method
  Given I am logged in as a customer with saved cards
  And I have items in my shopping cart
  When I proceed to checkout
  And I select my saved Visa ending in 1234
  And I confirm my order
  Then I see my order confirmation
  And I receive an order confirmation email
```