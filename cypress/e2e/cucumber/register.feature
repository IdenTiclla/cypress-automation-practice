Feature: Register new user
    Scenario: Register a new User
        Given I open the register page
        When I fill the register form with random data
        Then I should be redirected to success page
