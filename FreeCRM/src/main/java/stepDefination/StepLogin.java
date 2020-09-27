package stepDefination;



import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.crm.qa.base.TestBase;
import com.crm.qa.page.HomePage;
import com.crm.qa.page.LoginPage;
import com.crm.qa.util.Utility;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class StepLogin extends TestBase {
	
	HomePage homePage;
	LoginPage loginPage;

	@Before
	public static void init()
	{
		TestBase.initialization();
	}
	
	@After
	public static void EndSCript()
	{
		driver.quit();
	}
	
	@Given("^user standing into login page$")
	public void user_standing_into_login_page() throws InterruptedException 
	{
		
		loginPage =  new LoginPage();
		loginPage.clickLoginLink();
		Thread.sleep(5000);
		driver.manage().timeouts().pageLoadTimeout(Utility.pageLoadTime, TimeUnit.SECONDS);
		//System.out.println(pageTitle);
		//Assert.assertEquals(pageTitle, "Cogmento CRM");
		String curURL=loginPage.verifyLoginPagePresentURL();	
		System.out.println(curURL);
		Assert.assertEquals(curURL, "https://ui.freecrm.com/");
	}

	@When("^for successful search enter user details as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void for_successful_search_enter_user_details_as_and(String arg1, String arg2) throws InterruptedException
	{
		homePage = loginPage.successfulLogin(arg1,arg2);
	}

	@Then("^user successfully Login into Home page$")
	public void user_successfully_Login_into_Home_page() 
	{
		String curURL=loginPage.verifyLoginPagePresentURL();
		Assert.assertEquals(curURL, "https://ui.freecrm.com/");
	}

	@Then("^user remain in Login page$")
	public void user_remain_in_Login_page() 
	{
	}
	
	@When("^for unsuccessful search enter user details as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_user_details_as(String arg1, String arg2) throws InterruptedException 
	{
		loginPage.unsuccessfulLogin(arg1,arg2);
	}

	@Then("^User received error message as Something went Wrong and \"([^\"]*)\"$")
	public void user_received_an_error(String message) 
	{
		boolean errorMag = loginPage.VerifyErrorMessages(message);
		Assert.assertEquals(errorMag, true);
	}



}
