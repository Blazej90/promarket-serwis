import React from "react";
import styles from "../../styles/Contact.module.css";

export default function FormTextarea({ id }) {
  return <textarea id={id} className={styles.textarea}></textarea>;
}
