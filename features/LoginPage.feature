Feature: Login Page

  #Happy Path
  Scenario: Login to Orange HRM 
    Given I am on the Login Page
    When I login with username and password
    Then I should see the OrangeHRM home page

  #Negative Path
  Scenario: Login to Orange HRM with invalid credentials
    Given I am on the Login Page
    When I login with "wrongUser" and "wrongPass"
    Then I should see an error message indicating invalid login
