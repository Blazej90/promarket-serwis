import Link from "next/link";
import { useState } from "react";
import FormLabel from "../components/ContactForm/FormLabel";
import FormInput from "../components/ContactForm/FormInput";
import FormTextarea from "../components/ContactForm/FormTextarea";
import SubmitButton from "../components/ContactForm/SubmitButton";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania wiadomości");
      }

      const result = await response.json();
      setSuccess(result.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Skontaktuj się z nami</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Imię:</FormLabel>
        <FormInput
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormLabel htmlFor="message">Wiadomość:</FormLabel>
        <FormTextarea
          id="message"
          value={formData.message}
          onChange={handleChange}
        />

        <SubmitButton>Wyślij</SubmitButton>

        <Link href="/" className={styles.backButton}>
          Powrót do strony głównej
        </Link>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
}
