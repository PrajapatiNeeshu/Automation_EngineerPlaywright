Feature: Ecommerce Validation
  @Regression
  Scenario: placing the order
    Given login to Ecommerce application with "neeshubiet@gmail.com" and "Nee@kumar1234"
    When add "Zara coat 3" to cart
    Then verify "Zara coat 3" is displayed in cart
    When Enter valid details and placing the order
    Then verify order in present in the Orderhistory page 


    
		@validation
		Scenario Outline: place the order 
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	      | 	password    |
          | anshika@gmail.com   | Iamking@000   |
		      | neeshubiet@gmail.com| Iamgood@123.  |
		      | eddy@gmail.com.     | Iamgroot      | 
		      | rahulshettyacademy  | learning      |