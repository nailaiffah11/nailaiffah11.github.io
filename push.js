var webPush = require('web-push');

const vapidKeys = {
    "publicKey" : "BEdsHej80-S4r3-HTyiCQ2w6SUlY_tR11_dtdrcLu4OwO7hx0K-NKeiDKqraMb5KUM5E-vwSij3knWd9TvQ-bfM",
    "privateKey" : "PpXdhbWEFitjeCy0od8D-CddFWuGw9su9IDb8Ej7Ep4"
};

webPush.setVapidDetails(
    'mailto:nailaiffah11@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dMZm379h--o:APA91bE_Yd6Ytcvwq6UhP8Pw_Wsc-rDUQfcZ7v7e8tumHESyIK7S_yNfaa7JcMk2pg_jNv0JBqM-6RGFn637cpxonbr3mKBBWigbACtEtI3Shku9Sz5e9otn0PVGG7sHhc72rB2j0Jqn",
    "keys" : {
        "p256dh": "BF4KGEpRCy1wIJv0ANQXUw/CX3NIh3vSk/PO9vuXAT03n/mUhivPl0yFUTpzXYde2ELYPi3RxkyCOwDQiIL547Y=",
        "auth": "ebLesLZK5LU6UdXJwU3/pw=="
    }
};
var payload = 'Selamat ! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '724628541774',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);