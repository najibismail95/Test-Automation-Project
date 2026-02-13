Feature: Dashboard Page post Login

  Background: User logs in
    Given I am on the Login Page
    When I login with username and password
    Then I should see the OrangeHRM home page

  Scenario: Verify Dashboard Widgets
    When I scroll through the Dashboard
    Then I should see the following widgets
      | Time at Work                      |
      | My Actions                        |
      | Quick Launch                      |
      | Employees on Leave                |
      | Buzz Latest Posts                 |
      | Employee Distribution by Sub Unit |
      | Employee Distribution by Location |
