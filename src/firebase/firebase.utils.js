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

export const createUserProfileDocument = async(userAuth, additionalData) => {
   if(!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get()
   console.log(snapShot);
   if (!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.log('error creating user', error.message );
      }
   }
   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
