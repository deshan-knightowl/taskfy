import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdtmfIbO_ZrXqZF-wxOqzK_vLwenDEvGU",
  authDomain: "taskfy-6c6d0.firebaseapp.com",
  projectId: "taskfy-6c6d0",
  storageBucket: "taskfy-6c6d0.appspot.com",
  messagingSenderId: "1082956984580",
  appId: "1:1082956984580:web:69ed3ec44b5065283e2051",
  measurementId: "G-RFXSJ4SJGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{app,auth,GoogleAuthProvider};