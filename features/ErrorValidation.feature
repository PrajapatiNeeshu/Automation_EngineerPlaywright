Feature: Greeting
		@validation
		Scenario Outline: Say hello
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  | 	password  |
          | anshika@gmail.com | Iamking@000   |
		  | neeshubiet@gmail.com| Iamgood@123.|
		  | eddy@gmail.com.     | Iamgroot    | 
		  | rahulshettyacademy  | learning    |
		