import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";
import UserSVG from "assets/svg/UserSVG";

const Header = (): ReactElement => {
  return (
    <header className={styles.container}>
      <NavLink to="/" className={`${styles.logo} ${styles.item}`}>
        LOGO
      </NavLink>
      <div className={styles.info}>
        <BestCoins />
        <button className={styles.item}>
          <UserSVG />
        </button>
      </div>
    </header>
  );
};

export default Header;
