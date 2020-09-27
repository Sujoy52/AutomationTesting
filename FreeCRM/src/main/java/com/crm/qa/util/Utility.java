package com.crm.qa.util;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.crm.qa.base.TestBase;

import cucumber.api.Scenario;

public class Utility extends TestBase {
	
	public static int pageLoadTime=60;
	public static int implicitWaitTime=0;
	
	
	public static void takeScreenShotOnFailure(Scenario scenario) {
	    if (scenario.isFailed()) {
	      // Take a screenshot...
	      final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
	    }
	}

}