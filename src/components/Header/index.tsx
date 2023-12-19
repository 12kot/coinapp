import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";
import UserSVG from "assets/svg/UserSVG";
import { TCoin, TMyCoin } from "types/coin";
import useToggle from "utils/hooks/useToggle";
import { getCoinsPrice } from "utils/services/profile.service";
import BurgerMenu from "containers/BurgerMenu";
import BurgerButton from "components/Buttons/BurgerButton";
import ProfileModal from "components/Modal/ProfileModal";

interface Props {
  myCoins: TMyCoin[];
  coins: TCoin[];
  bestCoins: TCoin[];
}

const Header = ({ myCoins, coins, bestCoins }: Props): ReactElement => {
  const { value: profileActive, toggle: setProfileActive } = useToggle(false);
  const { value: burgerMenu, toggle: setBurgerMenu } = useToggle(false);

  return (
    <>
      <BurgerMenu isActive={burgerMenu} toggle={setBurgerMenu} />
      <ProfileModal
        newCoins={coins}
        active={profileActive}
        toggle={setProfileActive}
      />
      <header className={`${styles.container} ${burgerMenu && styles.active}`}>
        <NavLink to="/" className={`${styles.logo} ${styles.item}`}>
          LOGO
        </NavLink>
        <div className={styles.info}>
          <div className={styles.best}>
            <BestCoins coins={bestCoins} />
          </div>
          <button className={styles.item} onClick={setProfileActive}>
            <UserSVG />
            {!!coins.length &&
              !!myCoins.length &&
              getCoinsPrice(myCoins, coins)}
          </button>
          <button className={`${styles.burger} ${styles.item}`} onClick={setBurgerMenu}>
            <BurgerButton isActive={burgerMenu} toggle={setBurgerMenu} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
