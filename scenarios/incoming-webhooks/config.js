const { webhookURL } = (() => {
  try {
    return require('./credentials.json');
  } catch (err) {
    console.log('credentials.json not found');
    process.exit();
  }
})();

module.exports = {
  webhookURL,
};
