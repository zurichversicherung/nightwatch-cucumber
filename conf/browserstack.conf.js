module.exports = {
  'key': process.env.BROWSERSTACK_ACCESS_KEY || process.env.BROWSERSTACK_ACCESSKEY,
  'user': process.env.BROWSERSTACK_USERNAME,
  'forceLocal': true,
  'force': true,
  'binaryLocal': process.env.BROWSERSTACK_BINARY_LOCAL
};
