const serviceAccount = require('./service-account.json');

var message = {
  notification: {
    title: 'title',
    body: 'body'
  },
  topic: 'topic'
};

await sendMessage(serviceAccount, message);
