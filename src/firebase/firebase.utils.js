import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
   apiKey: "AIzaSyDqn9zu46D4WVrNu8HRfCw8Dr6awvGeeVA",
   authDomain: "crwn-app-57620.firebaseapp.com",
   projectId: "crwn-app-57620",
   storageBucket: "crwn-app-57620.appspot.com",
   messagingSenderId: "876674458009",
   appId: "1:876674458009:web:734ef00cdf5c7288053308",
   measurementId: "G-2BR3WS0FRX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
