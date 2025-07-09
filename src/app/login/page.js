"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.form}>
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
        <button className={styles.submitButton}>Login</button>
        <div className={`${styles.formGroup} ${styles.registerPrompt}`}>
          <label>Don&apos;t have an account?</label>
          <Link href="/register" className={styles.registerLink}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
