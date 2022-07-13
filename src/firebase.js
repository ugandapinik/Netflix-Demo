import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCYh_f2im5xCfaqY1RKkhrkiIyi1Iaj7ms",
    authDomain: "netflix-clone-d9515.firebaseapp.com",
    projectId: "netflix-clone-d9515",
    storageBucket: "netflix-clone-d9515.appspot.com",
    messagingSenderId: "541776291256",
    appId: "1:541776291256:web:1746490f6bf170f4b85b4d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default database
