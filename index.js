/* eslint-disable no-console */

const admin = require('firebase-admin');

async function sendMessage(serviceAccount, message) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  const messaging = admin.messaging();
  await messaging.send(message);
}

exports.sendMessage = sendMessage;
