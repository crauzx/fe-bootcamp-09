"use client";
import { useState } from "react";

import styles from "./user-list-view.module.css";

import AddUserModal from "@/components/add-user-modal";

export default function UserListView({ users }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.page}>
      <button className={styles.addButton} onClick={handleAddUser}>
        Add User
      </button>
      <h3 className={styles.title}>Users List</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>ID</th>
            <th className={styles.header}>Name</th>
            <th className={styles.header}>Email</th>
            <th className={styles.header}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.cell}>1</td>
            <td className={styles.cell}>User 1</td>
            <td className={styles.cell}>user1@example.com</td>
            <td className={`${styles.cell} ${styles.actions}`}>
              <button className={styles.button}>View Detail</button>
              <button className={styles.button}>Delete</button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>2</td>
            <td className={styles.cell}>User 2</td>
            <td className={styles.cell}>user2@example.com</td>
            <td className={`${styles.cell} ${styles.actions}`}>
              <button className={styles.button}>View Detail</button>
              <button className={styles.button}>Delete</button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>3</td>
            <td className={styles.cell}>User 3</td>
            <td className={styles.cell}>user3@example.com</td>
            <td className={`${styles.cell} ${styles.actions}`}>
              <button className={styles.button}>View Detail</button>
              <button className={styles.button}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      {showModal && <AddUserModal setShowModal={setShowModal} />}
    </div>
  );
}
