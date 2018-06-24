import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAcloFE8CLKfLEk8NuAqZOrOJEAhgPflM8",
    authDomain: "pnw-hiking.firebaseapp.com",
    databaseURL: "https://pnw-hiking.firebaseio.com",
    projectId: "pnw-hiking",
    storageBucket: "pnw-hiking.appspot.com",
    messagingSenderId: "978197784084"
};
firebase.initializeApp(config);

export default firebase;
