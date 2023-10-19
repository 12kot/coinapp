import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";

const Header = (): ReactElement => {
  return (
    <header className={styles.container}>
      <NavLink to="/" className={`${styles.logo} ${styles.item}`}>
        LOGO
      </NavLink>
      <BestCoins />
    </header>
  );
};

export default Header;
