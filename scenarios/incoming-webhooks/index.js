const axios = require('axios');

const { webhookURL } = require('./config');

const send = async (message) => {
  const { status, data } = await axios({
    method: 'post',
    url: webhookURL,
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    data: message,
  });

  return data;
};

module.exports = {
  send,
};
