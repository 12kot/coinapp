import React, { ReactElement } from "react";
import styles from "./bestCoins.module.scss";
import { NavLink } from "react-router-dom";
import { TCoin } from "types/coin";
import { getCoinImage } from "utils/constants/API";
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

interface Props {
  coins: TCoin[];
}

const BestCoins = ({ coins }: Props): ReactElement => {
  return <ul className={styles.container}>{getList(coins)}</ul>;
};

export default BestCoins;
