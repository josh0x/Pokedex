import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from "./config.js";
import { readable } from 'svelte/store';

firebase.initializeApp(firebaseConfig);
// gets the object's id, name, email, picture
const userMapper = claims => ({
   id: claims.user_id,
   name: claims.name,
   email: claims.email,
   picture: claims.picture
});
//function to trigger firebase inside svelte
export const initAuth = (useRedirect = false) => {
   const auth = firebase.auth();

   const loginWithEmailPassword = (email, password) =>
      auth.signInWithEmailAndPassword(email, password);
//ask if we are logged in with Google
   const loginWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      if (useRedirect) { // if we are logged in, then redirect to provider
         return auth.signInWithRedirect(provider);
      } else {
         return auth.signInWithPopup(provider);
      }
   };

   const logout = () => auth.signOut();

   // We init our user store here
   const user = readable(null, set => {
      // on onAuthStateChange we need to trigger an asynchronous function which is a firebase user
      const unsub = auth.onAuthStateChanged(async fireUser => {
         // if there is a fireUser then...
         if (fireUser) {
            const token = await fireUser.getIdTokenResult();
            const user = userMapper(token.claims);
            set(user);
         // else...
         } else {
            set(null);
         }
      });
      return unsub;
   });

   return {
      user,
      loginWithGoogle,
      loginWithEmailPassword,
      logout
   };

};