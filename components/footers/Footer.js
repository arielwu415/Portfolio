import React from 'react';
import styles from '../../styles/components/footers/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/arielwu415/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyrights 2022 / Designed and Developed by Ariel Wu
        {/*<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />*/}
      </a>
    </footer>
  )
}