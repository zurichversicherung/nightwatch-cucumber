const NIGHTWATCH_MODULE_PATH = './node_modules/nightwatch/bin/nightwatch';

const Nightwatch = require('nightwatch');
const browserstack = require('browserstack-local');
const config = require('../conf/browserstack.conf');
let browserstackLocal;

process.mainModule.filename = NIGHTWATCH_MODULE_PATH;

console.log('Connecting local');
Nightwatch.browserstackLocal = browserstackLocal = new browserstack.Local();

browserstackLocal.start(config, (error) => {
  if (error) throw error;

  console.log('Connected. Now testing...');
  console.log('You can follow the process at https://www.browserstack.com/automate');

  try {
    Nightwatch.cli((argv) => {
      Nightwatch.CliRunner(argv)
        .setup(null, () => {
          // Code to stop browserstack local after end of parallel test
          browserstackLocal.stop(() => {});
          console.log('Testing end...');
        })
        .runTests(() => {
          // Code to stop browserstack local after end of single test
          browserstackLocal.stop(() => {});
        });
    });
  } catch (e) {
    console.log('There was an error while starting the test runner:\n\n');
    process.stderr.write(e.stack + '\n');
    process.exit(2);
  }
});
