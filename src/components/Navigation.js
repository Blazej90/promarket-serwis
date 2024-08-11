import React from "react";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            Strona główna
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/services" className={styles.navLink}>
            Usługi
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>
            O mnie
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
