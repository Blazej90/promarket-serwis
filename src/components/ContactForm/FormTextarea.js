import React from "react";
import styles from "../../styles/Contact.module.css";

export default function FormTextarea({ id, value, onChange }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className={styles.textarea}
    ></textarea>
  );
}
