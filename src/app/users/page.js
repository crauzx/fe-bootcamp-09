import getDatabase from "@/firebase/config";
import UserListView from "./user-list-view";
import { collection, getDocs } from "firebase/firestore";

export default async function UsersPage() {
  const db = getDatabase();
  const userCol = collection(db, "users");
  const userSnapshot = await getDocs(userCol);
  const userList = userSnapshot.docs.map((doc) => {
    console.log(doc.id);
    console.log(doc.data());
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return <UserListView users={userList} />;
}
