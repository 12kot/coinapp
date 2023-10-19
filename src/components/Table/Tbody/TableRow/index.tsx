import React from "react";
import styles from "./tableRow.module.scss";
import { TCoin } from "types/coin";
import { NavLink } from "react-router-dom";
import toFix from "utils/services/toFix";

interface Props {
  coin: TCoin;
}

const TableRow = ({ coin }: Props) => {
  return (
    <NavLink to={`/coin/${coin.id}`} className={styles.item}>
      <span className={styles.rowItem}>+</span>
      <span className={styles.rowItem}>{coin.rank}</span>
      <div className={styles.rowItem}>
        <img
          className={styles.img}
          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          alt={coin.symbol}
        ></img>
        {coin.name}
        <p className={styles.symbol}>{coin.symbol}</p>
      </div>
      <div className={styles.rowItem}>${toFix(coin.priceUsd)}</div>
      <div className={styles.rowItem}>{toFix(coin.volumeUsd24Hr)}</div>
      <div
        className={` ${styles.rowItem} ${
          +coin.changePercent24Hr > 0 ? styles.green : styles.red
        }`}
      >
        {toFix(coin.changePercent24Hr)}%
      </div>
    </NavLink>
  );
};

export default TableRow;
