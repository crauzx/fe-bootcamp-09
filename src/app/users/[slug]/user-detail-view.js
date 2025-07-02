import styles from "./user-detail-view.module.css";

export default function UserDetailView({ user }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Detail</h2>
      <div className={styles.data}>
        <div className={styles.label}>Name:</div>
        <div>Halo ini nama</div>
      </div>
      <div className={styles.data}>
        <div className={styles.label}>Email:</div>
        <div>Halo ini email</div>
      </div>
      <div className={styles.data}>
        <div className={styles.label}>Age:</div>
        <div>Halo ini umur</div>
      </div>
    </div>
  );
}
