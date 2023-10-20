import React from "react";
import styles from "./burgerButton.module.scss";

interface Props {
  isActive: boolean;
  toggle: () => void;
}

const BurgerButton = ({ isActive, toggle }: Props) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <button
      aria-label="menu"
      className={styles.menuButton}
      onClick={() => {
        handleClick();
      }}
    >
      <input
        id={styles.checkbox2}
        className={`${isActive && styles.active}`}
        type="checkbox"
        onClick={() => {
          handleClick();
        }}
      />
      <label
        className={`${styles.toggle} ${styles.toggle2}`}
        htmlFor={styles.checkbox2}
      >
        <div id={styles.bar4} className={styles.bars}></div>
        <div id={styles.bar5} className={styles.bars}></div>
        <div id={styles.bar6} className={styles.bars}></div>
      </label>
    </button>
  );
};

export default BurgerButton;
