import React from "react";
import styles from "../../styles/Contact.module.css";

export default function SubmitButton({ children, onClick }) {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
