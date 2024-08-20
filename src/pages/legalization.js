import Navigation from "../components/Navigation";
import styles from "../styles/Legalization.module.css";
import homeStyles from "../styles/HomePage.module.css";
import { useState } from "react";

export default function Legalization() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={homeStyles.homePage}>
      <header className={homeStyles.header}>
        <Navigation />
      </header>
      <main className={styles.mainContent}>
        <section>
          <h1 className={styles.title}>Oznaczenia tabliczki znamionowej</h1>

          <div className={styles.plateContainer}>
            <div className={styles.imageContainer}>
              <img
                src="/images/WE-plate.jpg"
                alt="Tabliczka znamionowa"
                className={styles.responsiveImage}
                onClick={handleImageClick}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.imageCaption}>
                Jakie ważne informacje możemy odczytać z takiej tabliczki?
              </h2>
              <ul className={styles.infoList}>
                <li>
                  Czerwone strzałki pokazują prawidłowo oznaczoną ocenę
                  zgodności. Ocena zgodności dla tego przyrządu pomiarowego jest
                  ważna 2 lata od daty dokonania oceny zgodności. Dwa lata nie
                  są pełne, ponieważ koniec zawsze przypada na miesiąc
                  październik. W tym konkretnym przypadku przyrząd pomiarowy
                  utracił ważność oceny zgodności w październiku 2022 r.
                </li>
                <li>
                  Bardzo ważne jest umieszczenie klasy dokładności. Dla wag
                  nieautomatycznych rozróżniamy klasy: I, II, III, IIII
                  umieszczone w elipsie.
                </li>
                <li>
                  "Max" i "Min" informują nas o maksymalnym obciążeniu wagi oraz
                  obciążeniu minimalnym, poniżej którego nie powinniśmy
                  dokonywać pomiarów, gdyż jest to obarczone zbyt dużym błędem.
                </li>
                <li>
                  Bardzo ważnym symbolem na tabliczce znamionowej jest litera
                  "e", która oznacza działkę legalizacyjną i ta informacja musi
                  być koniecznie umieszczona na tabliczce. Litera "d" oznacza
                  działkę odczytową, czyli z jaką dokładnością odczytujemy
                  pomiar.
                </li>
                <li>
                  Zakres tarowania oznaczony literą "T" mówi o maksymalnym
                  obciążeniu, które możemy wtarować w wagę.
                </li>
                <li>
                  Dodatkowo na tabliczce znamionowej powinien znajdować się
                  producent, model, numer seryjny oraz certyfikat badania typu,
                  tutaj jest to: 0200-NAWI-06530.
                </li>
              </ul>
            </div>
          </div>

          {isModalOpen && (
            <div className={styles.modal} onClick={handleCloseModal}>
              <span className={styles.close}>&times;</span>
              <img src="/images/WE-plate.jpg" alt="Tabliczka znamionowa" />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
