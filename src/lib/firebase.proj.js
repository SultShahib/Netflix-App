import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../movieData";

const config = {
  apiKey: "AIzaSyDQTWdOgPSbHzuFj6QbwZKD2dUIjnw6akA",
  authDomain: "netflix-app-36030.firebaseapp.com",
  projectId: "netflix-app-36030",
  storageBucket: "netflix-app-36030.appspot.com",
  messagingSenderId: "557850525882",
  appId: "1:557850525882:web:20d69c1e4259cb4b7b4283",
  measurementId: "G-KGSFHS7XX6",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
// ^^ Do not uncomment. This is to store films and series data into firebase cloud firestore. Calling more than once will cause series and films duplication

export { firebase };
