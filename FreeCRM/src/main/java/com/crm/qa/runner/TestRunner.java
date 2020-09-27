package com.crm.qa.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "/Users/SUJOY/workspace/FreeCRM/src/main/java/com/crm/qa/features/LoginFreeCRM.feature",
	glue= "stepDefination",
	plugin= {"pretty","html:test-output","json:json-output/cucumber.json","junit:junit-output/cucumber.xml"},
	monochrome=false,
	strict=false,
	dryRun=false,
	tags= {"@Smoke"}
			
)
public class TestRunner {

}
