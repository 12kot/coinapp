import React, { ReactElement, useContext } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";
import UserSVG from "assets/svg/UserSVG";
import Profile from "components/Profile";
import { TCoin } from "types/coin";
import useToggle from "utils/hooks/useToggle";
import useRequest from "utils/hooks/useRequest";
import { getCoinsByIds } from "utils/constants/API";
import { getCoinsIds, getCoinsPrice } from "utils/services/profile.service";
import { TMyCoinsContext } from "types/providers";
import { MyCoinsContext } from "contexts/contexts";
import BurgerMenu from "layouts/BurgerMenu";
import BurgerButton from "components/Buttons/BurgerButton";

const Header = (): ReactElement => {
  const { coins } = useContext(MyCoinsContext) as TMyCoinsContext;

  const { data: coinsInfo } = useRequest<{ data: TCoin[] }>(
    getCoinsByIds(getCoinsIds(coins))
  );
  const { value: profileActive, toggle: setProfileActive } = useToggle(false);
  const { value: burgerMenu, toggle: setBurgerMenu } = useToggle(false);

  return (
    <>
      <BurgerMenu isActive={burgerMenu} toggle={setBurgerMenu} />
      <Profile
        newCoins={coinsInfo?.data || []}
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
            {coinsInfo &&
              coins.length !== 0 &&
              getCoinsPrice(coins, coinsInfo.data)}
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
