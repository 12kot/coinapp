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
import toFix from "utils/services/toFix";

const getCoinsIds = (coins: TMyCoin[]): string[] => {
  return coins.map((coin) => coin.coinId);
};

const findCoinCount = (oldCoins: TMyCoin[], id: string): number => {
  const result = oldCoins.find((coin) => coin.coinId === id);

  if (result) return +result.count;
  return 0;
};

const getCoinsPrice = (oldCoins: TMyCoin[], newCoins: TCoin[]): string => {
  let oldPrice: number = 0;
  oldCoins.forEach((coin) => (oldPrice += +coin.pricePerOne * +coin.count));

  let newPrice: number = 0;
  newCoins.forEach(
    (coin) => (newPrice += +coin.priceUsd * findCoinCount(oldCoins, coin.id))
  );

  return `$${toFix(newPrice + '')} ${newPrice - oldPrice > 0 && "+"}${
    toFix(newPrice - oldPrice + '')
  } (${toFix(newPrice / oldPrice * 100 - 100 + '')}%)`;
};

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
        coins={coins}
        setCoins={setCoins}
        active={value}
        toggle={toggle}
      />
    </header>
  );
};

export default Header;
