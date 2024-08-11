import React from "react";
import styles from "../../styles/Contact.module.css";

export default function FormLabel({ htmlFor, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
