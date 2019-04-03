var admin = require('firebase-admin');

var serviceAccount = require('path/to/serviceAccountKey.json');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAETfy9yl1tYaY_hpA6-FBnd-nX7lnyLb8",
    authDomain: "testapp-f6eca.firebaseapp.com",
    databaseURL: "https://testapp-f6eca.firebaseio.com",
    projectId: "testapp-f6eca",
    storageBucket: "testapp-f6eca.appspot.com",
    messagingSenderId: "178925337275"
};
admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: 'https://testapp-f6eca.firebaseio.com'
});