Feature: SWAGLABS testing

  Background: Launch application
    Given the user launched SWAGLABS 

  Scenario Outline: To test adding an item into a cart
    And logged in using "<username>" and "<password>"
    # And changed the filter to "<filter>"
    When adding an item = "<item>" to the cart
    Then item count should be increased by 1 and "<item>" should be added in Your Cart screen
    And remove an "<item>" from the cart

    Examples:
      | username     | password     | filter | item              |
      | problem_user | secret_sauce | lohi   | Sauce Labs Onesie |
