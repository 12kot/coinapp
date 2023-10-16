import React from 'react';
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.item}>Все права защищены</p>
    </footer>
  )
}

export default Footer