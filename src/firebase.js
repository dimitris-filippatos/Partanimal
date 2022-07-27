// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC44HdWEh5Rh1vgUxCTPk9PZPmiT0LGnEo",
  authDomain: "partanimal-52086.firebaseapp.com",
  projectId: "partanimal-52086",
  storageBucket: "partanimal-52086.appspot.com",
  messagingSenderId: "330520708397",
  appId: "1:330520708397:web:61ac423f33a2f39f4f7fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };