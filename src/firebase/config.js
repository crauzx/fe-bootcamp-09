import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function getFirebaseConfig() {
  return {};
}

export default function getConfig() {
  const firebaseConfig = getFirebaseConfig();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return {
    db,
  };
}
