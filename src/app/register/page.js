"use client";
import styles from "./page.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input type="text" name="name" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" name="email" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Age:</label>
          <input type="number" name="age" className={styles.inputField} />
        </div>
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </div>
    </div>
  );
}
