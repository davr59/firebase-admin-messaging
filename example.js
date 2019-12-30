const serviceAccount = require('./service-account.json');
const { message } = require('./message');

const { sendMessage } = require('./messaging');

sendMessage(serviceAccount, message);
