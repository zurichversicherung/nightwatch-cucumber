const argv = require('yargs').argv;

module.exports = {
  buildResultKey: argv.hasOwnProperty('bambooBuildKey') ? argv.bambooBuildKey: 'ZUR-local',
  env: argv.hasOwnProperty('bambooEnv') ? argv.bambooEnv : 'local'
};
