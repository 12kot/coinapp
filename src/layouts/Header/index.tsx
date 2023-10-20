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

const Header = (): ReactElement => {
  const { coins } = useContext(MyCoinsContext) as TMyCoinsContext;

  const { data: coinsInfo } = useRequest<{ data: TCoin[] }>(
    getCoinsByIds(getCoinsIds(coins))
  );
  const { value, toggle } = useToggle(false);

  return (
    <header className={styles.container}>
      <NavLink to="/" className={`${styles.logo} ${styles.item}`}>
        LOGO
      </NavLink>
      <div className={styles.info}>
        <BestCoins />
        <button className={styles.item} onClick={toggle}>
          <UserSVG />
          {coinsInfo && coins.length !== 0 && getCoinsPrice(coins, coinsInfo.data)}
        </button>
      </div>
      <Profile
        newCoins={coinsInfo?.data || []}
        active={value}
        toggle={toggle}
      />
    </header>
  );
};

export default Header;
