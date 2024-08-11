import React from "react";
import styles from "../../styles/Contact.module.css";

export default function FormInput({ type, id, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}
