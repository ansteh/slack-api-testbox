const { send } = require('./index');

send({ text: 'Hello, World!'})
  .then(console.log)
  .catch(console.log);
