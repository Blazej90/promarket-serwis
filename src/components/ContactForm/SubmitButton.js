import React from "react";
import styles from "../../styles/Contact.module.css";

export default function SubmitButton({ children }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}
