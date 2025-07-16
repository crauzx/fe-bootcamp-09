import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import getConfig from "@/firebase/config";
import modalStyles from "./css/add-modal.module.css";

export default function AddFoodModal({ setShowModal }) {
  const { db } = getConfig();
  const [form, setForm] = useState({
    name: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await addDoc(collection(db, "foods"), {
      name: form.name,
      price: parseFloat(form.price),
    });
    setShowModal(false);
  };

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.modal}>
        <button
          className={modalStyles.close}
          onClick={() => setShowModal(false)}
          title="Close"
        >
          &times;
        </button>
        <h2 className={modalStyles.title}>Add Food</h2>
        <div className={modalStyles.form}>
          <label>
            Food Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Food Price:
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              min="1"
              required
            />
          </label>
          <button className={modalStyles.submit} onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
