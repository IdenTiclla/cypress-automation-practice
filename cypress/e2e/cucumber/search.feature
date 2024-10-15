Feature: Search functionality
    As a user I want to perform searchs on the websites

    Scenario: Searching for cats
    Given The user is on the search page
    When The user search for cats
    Then The user see the results page for cats

    Scenario: Searching for dogs with keyword
    Given The user is on the search page
    When The user search for "dogs"
    Then The user see the results page for dogs

    Scenario: Multiple searchs
    Given The user is on the search page
    When I perform search with the keywords
    | pinguino | salmon | oso | tigre |
    Then The search page is displayed