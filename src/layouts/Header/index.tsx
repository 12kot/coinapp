import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import BestCoins from "./BestCoins";
import UserSVG from "assets/svg/UserSVG";
import Profile from "components/Profile";
import useLocalStorage from "utils/hooks/useLocaleStorage";
import { TCoin, TMyCoin } from "types/coin";
import useToggle from "utils/hooks/useToggle";
import useRequest from "utils/hooks/useRequest";
import { getCoinsByIds } from "utils/constants/API";
import { getCoinsIds, getCoinsPrice } from "utils/services/profile.service";

const Header = (): ReactElement => {
  const { value: coins, setValue: setCoins } = useLocalStorage<TMyCoin[]>(
    [],
    "coins"
  );
  const { data: coinsInfo } = useRequest<{ data: TCoin[] }>(
    getCoinsByIds(getCoinsIds(coins))
  );
  const { value, toggle } = useToggle(true);

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
        oldCoins={coins}
        newCoins={coinsInfo?.data || []}
        setCoins={setCoins}
        active={value}
        toggle={toggle}
      />
    </header>
  );
};

export default Header;
