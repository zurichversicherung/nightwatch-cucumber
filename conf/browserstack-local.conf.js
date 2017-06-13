const ci = require('./ci.conf');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'scripts/hooks.js',
    '--require', 'scripts/timeout.js',
    '--require', 'features/step_definitions',
    '--format', 'pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

const bsConfig = require('./browserstack.conf');
const helpers = require('../scripts/config-helpers');

const nightwatchConfig = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  src_folders: ['features'],

  selenium: {
    'start_process': false,
    'host': 'hub-cloud.browserstack.com',
    'port': 80
  },

  common_capabilities: {
    'build': `${ci.env}-${ci.buildResultKey}`,
    'env': ci.env,
    'browserstack.user': bsConfig.user,
    'browserstack.key': bsConfig.key,
    'browserstack.binarypath': bsConfig.binaryLocal,
    'browserstack.debug': true,
    'browserstack.local': true,
    'browserstack.force': true
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '58.0',
        'resolution': '1920x1080'
      }
    }
  }
};

module.exports = helpers.handleConfig(nightwatchConfig);
