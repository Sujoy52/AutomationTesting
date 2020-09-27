Feature: Free CRM Login 

@Smoke
Scenario Outline: User can login into Free CRM using valid credential

Given user standing into login page
When for successful search enter user details as "<useremail>" and "<userpw>"
Then user successfully Login into Home page

Examples:
|useremail          |userpw  |
|nivmother@gmail.com|Test@123|

@Smoke
Scenario Outline: User can't login into Free CRM using invalid credential

Given user standing into login page
When for unsuccessful search enter user details as "<useremail>" and "<userpw>"
Then user remain in Login page
And User received error message as Something went Wrong and "<massage>"

Examples:
|useremail          |userpw  |massage        |
|nivmother@gmail.com|Test@12 |Invalid login  |
|nivmother@gmail.com|        |Invalid request|
|                   |Test@12 |Invalid request|
|                   |        |Invalid request|