import React, { ReactElement } from "react";
import styles from "./burgerMenu.module.scss";
import BestCoins from "layouts/Header/BestCoins";

interface Props {
  isActive: boolean;
  toggle: () => void;
}

const BurgerMenu = ({ isActive, toggle }: Props): ReactElement => {
  return (
    <main className={`${styles.container} ${isActive && styles.active}`} onClick={toggle}>
      <BestCoins />
    </main>
  );
};

export default BurgerMenu;
