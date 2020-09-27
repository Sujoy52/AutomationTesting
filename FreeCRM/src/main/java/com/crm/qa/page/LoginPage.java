package com.crm.qa.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.crm.qa.base.TestBase;

import junit.framework.Assert;

public class LoginPage extends TestBase
{
	
//Page Factory - OR	
 @FindBy(xpath="//span[text()='Log In']//parent::a")
 WebElement loginLink;
 
 @FindBy(xpath="//input[@name='email']")
 WebElement emailIDTextBx;
 
 @FindBy(xpath="//input[@name='password']")
 WebElement emailPWTextBx;
 
 @FindBy(xpath="//div[text()='Login']")
 WebElement loginBtn;
 
 @FindBy(xpath="//div[text()='Something went wrong...']")
 WebElement SomethingWntWrongMsg;
 
 @FindBy(xpath="//p[text()='Invalid login']")
 WebElement invalidLoginMsg;
 
 @FindBy(xpath="//p[text()='Invalid request']")
 WebElement invalidRequestMsg;
 
 //Initialize the Page Objects
 public LoginPage()
 {
	PageFactory.initElements(driver, this); 
 }
 
 //Actions:
 
 public String clickLoginLink()
 {
	 loginLink.click();
	 return driver.getTitle();
	 
 }
 
 public String verifyLoginPagePresentURL()
 {
	 String curURL = driver.getCurrentUrl();
	 return curURL;
 }
 
 public HomePage successfulLogin(String userEmail,String userPW) throws InterruptedException
 {
	 emailIDTextBx.sendKeys(userEmail);
	 emailPWTextBx.sendKeys(userPW);
	 loginBtn.click();
	 Thread.sleep(5000);
	 return new HomePage();
 }
 
 public void unsuccessfulLogin(String userEmail,String userPW) throws InterruptedException
 {
	 emailIDTextBx.sendKeys(userEmail);
	 emailPWTextBx.sendKeys(userPW);
	 loginBtn.click();
	 Thread.sleep(5000);
 }
 
public boolean VerifyErrorMessages(String strMessage)
{
	boolean masgstatus=true;
	if(SomethingWntWrongMsg.isDisplayed())
	{
		masgstatus=true;
	}
	else
	{
		masgstatus=false;
	}
	
	if(strMessage=="Invalid login")
	{
		if(invalidLoginMsg.isDisplayed())
		{
			masgstatus=true;
		}
		else
		{
			masgstatus=false;
			
		}
	}
	else
		if(strMessage=="Invalid request")
		{
			if(invalidRequestMsg.isDisplayed())
			{
				masgstatus=true;
			}
			else
			{
				masgstatus=false;
				
			}
		}
	return masgstatus;
}

}
