"use client";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import getConfig from "@/firebase/config";
import UserListView from "./user-list-view";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [userList, setUserList] = useState([]);
  const { db } = getConfig();
  const usersCol = collection(db, "users");

  useEffect(() => {
    const unsub = onSnapshot(usersCol, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUserList(items);
    });

    return () => unsub();
  }, []);

  return <UserListView users={userList} />;
}
