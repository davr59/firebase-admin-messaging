# firebase-admin-messaging
Firebase Admin Messaging | Firebase Admin Mensajería.

Node.js Function for cloud messaging with Firebase Admin Messaging.

Función de Node.js para mensajería en la nube con Firebase Admin Mensajería.

## References | Referencias

- [Messaging | Admin Node.js | Firebase](https://firebase.google.com/docs/reference/admin/node/admin.messaging)

## Quickstart | Inicio rápido

Set your message in message.js:

Establecer el mensaje en message.js:

```javascript
const message = {
  notification: {
    title: 'title',
    body: 'body'
  },
  topic: 'topic'
};
```

Set firebase service account in service-account.json.

- [Service account - How to generate new private key](https://firebase.google.com/docs/admin/setup?authuser=0#add_firebase_to_your_app)

Establecer la cuenta de servicio de firebase en service-account.json.

- [Cuenta de servicio - Cómo generar una nueva llave privada](https://firebase.google.com/docs/admin/setup?authuser=0#add_firebase_to_your_app)

### Sending message | Enviar mensaje

For sending the message, run:

Para enviar el mensaje, ejecutar:

```bash
npm run send
```

## Want to help? | ¿Quiere ayudar?

Want to file a bug, contribute some code, or improve documentation? Thanks! Feel free to contact me at [@davidvives](https://twitter.com/davidvives) or at davr59@outlook.com.

¿Quiere reportar un error o una pulga, contribuir con código o mejorar la documentación? ¡Muchas gracias! Puede contactarme a [@davidvives](https://twitter.com/davidvives) o a davr59@outlook.com.
