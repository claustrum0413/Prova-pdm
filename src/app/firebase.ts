import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpr6qaN23-eof6pe4vmDFDxHR1kJmTSHE",
  authDomain: "mural-eduardo-firebase.firebaseapp.com",
  projectId: "mural-eduardo-firebase",
  storageBucket: "mural-eduardo-firebase.firebasestorage.app",
  messagingSenderId: "743687573075",
  appId: "1:743687573075:web:6cace756e14140505e40a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
