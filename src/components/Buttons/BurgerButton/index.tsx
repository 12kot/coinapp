import React from "react";
import styles from "./burgerButton.module.scss";

interface Props {
  isActive: boolean;
  toggle: () => void;
}

const BurgerButton = ({ isActive, toggle }: Props) => {
  return (
    <div aria-label="menu" className={styles.menuButton}>
      <input
        id={styles.checkbox2}
        className={`${isActive && styles.active}`}
        type="checkbox"
        onClick={toggle}
      />
      <label
        className={`${styles.toggle} ${styles.toggle2}`}
        htmlFor={styles.checkbox2}
      >
        <div id={styles.bar4} className={styles.bars}></div>
        <div id={styles.bar5} className={styles.bars}></div>
        <div id={styles.bar6} className={styles.bars}></div>
      </label>
    </div>
  );
};

export default BurgerButton;
