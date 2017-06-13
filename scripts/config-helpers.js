const helpers = {
  handleConfig: function handleConfig(nightwatchConfig) {
    for (let i in nightwatchConfig.test_settings) {
      let config = nightwatchConfig.test_settings[i];
      config.selenium_host = nightwatchConfig.selenium.host;
      config.selenium_port = nightwatchConfig.selenium.port;
      config.desiredCapabilities = config.desiredCapabilities || {};
      for (let j in nightwatchConfig.common_capabilities) {
          config.desiredCapabilities[j] = config.desiredCapabilities[j] || nightwatchConfig.common_capabilities[j];
      }
    }

    return nightwatchConfig;
  }
};

module.exports = helpers;
