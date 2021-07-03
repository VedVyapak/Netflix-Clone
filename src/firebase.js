import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBMaD3Iby1jeW00UWm6fO0EBytFJNGSyB0",
    authDomain: "netflix-clone-1339b.firebaseapp.com",
    projectId: "netflix-clone-1339b",
    storageBucket: "netflix-clone-1339b.appspot.com",
    messagingSenderId: "185674690063",
    appId: "1:185674690063:web:9b3663056dea4c33523d7a",
    measurementId: "G-6G2WYSH9MT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
