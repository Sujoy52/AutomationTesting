package com.crm.qa.base;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.crm.qa.util.Utility;

public class TestBase 

{
public static WebDriver driver;
public static Properties prop;


	public TestBase()
	{
		try
		{
			prop=new Properties();
			FileInputStream fis = new FileInputStream("/Users/SUJOY/workspace/FreeCRM/src/main/java/com/crm/qa/config/config.properties");
			prop.load(fis);
		}
		catch(IOException e) {e.getMessage();}
	}
	
	public static void initialization()
	{
 
		System.setProperty("webdriver.chrome.driver","/Users/SUJOY/documents/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
		options.addArguments("start-maximized"); // open Browser in maximized mode
		options.addArguments("disable-infobars"); // disabling infobars
		options.addArguments("--disable-extensions"); // disabling extensions
		options.addArguments("--disable-gpu"); // applicable to windows os only
		options.addArguments("--no-sandbox"); // Bypass OS security model
		driver = new ChromeDriver();
	
		String browserUrl=prop.getProperty("url");
		driver.get(browserUrl);
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(Utility.pageLoadTime, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Utility.implicitWaitTime, TimeUnit.SECONDS);
	}
}
