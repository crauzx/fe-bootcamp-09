'use client';
import styles from "./page.module.css";

export default function FoodsPage() {
  return (
    <div className={styles.page}>
      <button className={styles.addButton}>
        Add Food
      </button>
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
          <tr className={styles.row}>
            <td className={styles.cell}>1</td>
            <td className={styles.cell}>Food 1</td>
            <td className={styles.cell}>Rp 10</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>2</td>
            <td className={styles.cell}>Food 2</td>
            <td className={styles.cell}>Rp 15</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>3</td>
            <td className={styles.cell}>Food 3</td>
            <td className={styles.cell}>Rp 20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
