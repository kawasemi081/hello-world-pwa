importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase.js')
importScripts('https://www.gstatic.com/firebasejs/4.12.1/firebase-messaging.js')

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
