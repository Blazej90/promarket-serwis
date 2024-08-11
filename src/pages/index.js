import Navigation from "../components/Navigation";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.heading}>
          Witamy na stronie &quot;PROMARKET-SERWIS&quot;
        </h1>
        <p className={styles.paragraph}>
          Oferujemy profesjonalne usługi związane z serwisem wag elektronicznych
          i mechanicznych
        </p>
      </main>
    </div>
  );
}
