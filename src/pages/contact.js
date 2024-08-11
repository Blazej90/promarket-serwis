import React from "react";
import FormLabel from "../components/ContactForm/FormLabel";
import FormInput from "../components/ContactForm/FormInput";
import FormTextarea from "../components/ContactForm/FormTextarea";
import SubmitButton from "../components/ContactForm/SubmitButton";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Skontaktuj się z nami</h1>
      <form className={styles.form}>
        <FormLabel htmlFor="name">Imię:</FormLabel>
        <FormInput type="text" id="name" />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput type="email" id="email" />

        <FormLabel htmlFor="message">Wiadomość:</FormLabel>
        <FormTextarea id="message" />

        <SubmitButton>Wyślij</SubmitButton>
      </form>
    </div>
  );
}

export default Contact;
