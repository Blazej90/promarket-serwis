import React from "react";
import styles from "../../styles/Contact.module.css";

export default function FormInput({ type, id }) {
  return <input type={type} id={id} className={styles.input} />;
}
