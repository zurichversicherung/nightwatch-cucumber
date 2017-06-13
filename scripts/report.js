const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'simple',
  jsonFile: './reports/cucumber.json',
  output: './reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
