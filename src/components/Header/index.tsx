import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";
import UserSVG from "assets/svg/UserSVG";
import { TCoin, TMyCoin } from "types/coin";
import useToggle from "utils/hooks/useToggle";
import { getCoinsPrice } from "utils/services/profile.service";
import BurgerMenu from "components/BurgerMenu";
import BurgerButton from "components/Buttons/BurgerButton";
import ProfileModal from "components/Modal/ProfileModal";

interface Props {
  myCoins: TMyCoin[];
  coins: TCoin[];
}

const Header = ({ myCoins, coins }: Props): ReactElement => {
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
            <BestCoins />
          </div>
          <button className={styles.item} onClick={setProfileActive}>
            <UserSVG />
            {!!coins.length &&
              !!myCoins.length &&
              getCoinsPrice(myCoins, coins)}
          </button>
          <div className={`${styles.item} ${styles.burger}`}>
            <BurgerButton isActive={burgerMenu} toggle={setBurgerMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
