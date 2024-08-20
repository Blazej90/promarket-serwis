import Navigation from "../components/Navigation";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.mainContent}>
        <p>Strona w przygotowaniu... zapraszamy wkrótce </p>
      </main>
    </div>
  );
}
