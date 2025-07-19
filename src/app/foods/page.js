"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import getConfig from "@/firebase/config";

import styles from "./page.module.css";

import Loading from "@/components/loading";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import AddFoodModal from "@/components/add-food-modal";
import useOnlineStatus from "@/hooks/useOnlineStatus";

export default function FoodsPage() {
  const { role } = useAuthGuard();
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const { db } = getConfig();
    const foodCol = collection(db, "foods");

    const unsub = onSnapshot(foodCol, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFoodList(items);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleAddFood = () => {
    setShowModal(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      {role === "admin" && (
        <button className={styles.addButton} onClick={handleAddFood}>
          Add Food
        </button>
      )}
      Status: {isOnline ? "Online" : "Offline"}
      <h3 className={styles.title}>Foods List</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>ID</th>
            <th className={styles.header}>Name</th>
            <th className={styles.header}>Price</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((food) => (
            <tr key={food.id} className={styles.row}>
              <td className={styles.cell}>{food.id}</td>
              <td className={styles.cell}>{food.name}</td>
              <td className={styles.cell}>Rp {food.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <AddFoodModal setShowModal={setShowModal} />}
    </div>
  );
}
