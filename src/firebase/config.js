import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function getDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyC4qS2-js2UFQADTdU7a6JsI8na94_WUek",
    authDomain: "fe-bootcamp-123321.firebaseapp.com",
    projectId: "fe-bootcamp-123321",
    storageBucket: "fe-bootcamp-123321.firebasestorage.app",
    messagingSenderId: "178575212857",
    appId: "1:178575212857:web:0dc33477d1cb42d28c28e8",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
}
