const { defineSupportCode } = require('cucumber');
const { client } = require('nightwatch-cucumber');

defineSupportCode(({ Before, After }) => {
  After(function () {
    return client.end();
  });
});
