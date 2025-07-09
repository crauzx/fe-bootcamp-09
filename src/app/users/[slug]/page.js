import getDatabase from "@/firebase/config";
import UserDetailView from "./user-detail-view";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default async function UserDetailPage({ params }) {
  const { slug } = params;
  
  const db = getDatabase();
  const userDoc = doc(db, "users", slug);
  const userSnapshot = await getDoc(userDoc);

  const addressDocs = collection(db, "users", slug, "address")
  const addressSnapshot = await getDocs(addressDocs)
  addressSnapshot.docs.map(address => {
    console.log(address.data())
  })

  if(!userSnapshot.exists()) {
    return <h3>Page no found</h3>;
  }

  return <UserDetailView user={userSnapshot.data()}/>;
}
