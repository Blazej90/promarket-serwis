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

  const [attachments, setAttachments] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (event) => {
    setAttachments(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    for (let i = 0; i < attachments.length; i++) {
      formDataToSend.append("attachments", attachments[i]);
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania wiadomości");
      }

      const result = await response.json();
      setSuccess(result.message);

      setFormData({ name: "", email: "", message: "" });
      setAttachments([]);

      document.getElementById("attachments").value = null;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInfo}>
        <h1 className={styles.heading}>Skontaktuj się z nami</h1>
        <div className={styles.info}>
          <p>PROMARKET-SERWIS Hubert Ziółko</p>
          <p>ul. Stawowa 6</p>
          <p>46-060 Górki</p>
          <p>woj. opolskie</p>
          <p>NIP: 754-101-03-44</p>
          <p>tel: 603 636 169</p>
          <p>
            Email:{" "}
            <a href="mailto:hubert@ziolko.pl" className={styles.emailLink}>
              hubert@ziolko.pl
            </a>
          </p>
        </div>
      </div>
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

        <FormLabel htmlFor="attachments">Załączniki:</FormLabel>
        <FormInput
          type="file"
          id="attachments"
          onChange={handleFileChange}
          multiple
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
