import { collection, getDocs } from "firebase/firestore";
import getDatabase from "@/firebase/config";

import UserListView from "./user-list-view";

export default async function UsersPage() {
  const { db } = getDatabase();
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return <UserListView users={userList} />;
}
