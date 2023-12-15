import React, { ReactElement } from "react";
import styles from "./bestCoins.module.scss";
import { NavLink } from "react-router-dom";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import { getCoinImage, getCoins } from "utils/constants/API";
import toFix from "utils/services/toFix";

const getList = (coins: TCoin[]) => {
  return coins.map((coin) => (
    <li key={coin.name} className={styles.item}>
      <NavLink to={`/coin/${coin.id}`}>
        <img src={getCoinImage(coin.symbol)} alt={coin.symbol} />
        <p>${toFix(coin.priceUsd)}</p>
      </NavLink>
    </li>
  ));
};

const BestCoins = (): ReactElement => {
  const { data: coins, isLoading } = useRequest<{ data: TCoin[] }>(
    getCoins(3, 0)
  );

  if (!coins || isLoading) return <></>;

  return (
    <ul className={styles.container}>
      {getList(coins.data)}
    </ul>
  );
};

export default BestCoins;
