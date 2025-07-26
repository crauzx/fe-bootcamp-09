"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import getConfig from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/modal";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    profilePictureByte: null,
  });
  const [errors, setErrors] = useState({});

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
    if (!file) {
      return;
    }
    const base64String = await toBase64(file);
    setForm({
      ...form,
      [name]: base64String,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) {
      newErrors.name = "Name is empty";
    }
    if (!form.email) {
      newErrors.email = "Email is empty";
    }
    if (!form.password) {
      newErrors.password = "Password is empty";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is empty";
    }
    if (form.age < 1) {
      newErrors.age = "Enter valid age";
    }

    return newErrors;
  };

  const handleRegister = () => {
    const validateErrors = validate();
    console.log("form: ", form);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      const { db, auth } = getConfig();
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          await setDoc(doc(db, "users", user.uid), {
            name: form.name,
            email: user.email,
            age: form.age,
            role: "user",
            profilePictureByte: form.profilePictureByte,
          });
          router.push("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrors({
            register: errorMessage || "Registration failed. Please try again.",
          });
        });
    }
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.name && (
            <div className={styles.errorMessage}>{errors.name}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.email && (
            <div className={styles.errorMessage}>{errors.email}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.password && (
            <div className={styles.errorMessage}>{errors.password}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.confirmPassword && (
            <div className={styles.errorMessage}>{errors.confirmPassword}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.age && (
            <div className={styles.errorMessage}>{errors.age}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Profile picture:</label>
          <input
            type="file"
            name="profilePictureByte"
            accept="image/*"
            onChange={handleChange}
            className={styles.inputField}
          />
          {errors.profilePictureByte && (
            <div className={styles.errorMessage}>
              {errors.profilePictureByte}
            </div>
          )}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      {errors.register && (
        <Modal
          title="Registration Error"
          message={errors.register}
          onClose={() => setErrors({})}
        />
      )}
    </div>
  );
}
