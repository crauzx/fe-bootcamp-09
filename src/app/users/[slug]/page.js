import { doc, getDoc } from "firebase/firestore";
import getDatabase from "@/firebase/config";

import UserDetailView from "./user-detail-view";

export default async function UserDetailPage({ params }) {
  const { slug } = params;

  const db = getDatabase();
  const userRef = doc(db, "users", slug);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    return <div>User not found</div>;
  }

  return <UserDetailView user={userSnapshot.data()} />;
}
