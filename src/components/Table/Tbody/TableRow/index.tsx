import React from "react";
import styles from "./tableRow.module.scss";
import { TCoin } from "types/coin";

interface Props {
  coin: TCoin;
}

const TableRow = ({ coin }: Props) => {
  return (
    <tr className={styles.item}>
      <td>+</td>
      <td>{coin.rank}</td>
      <td>
        {coin.name}
        <p className={styles.symbol}>{coin.symbol}</p>
      </td>
      <td>${(+coin.priceUsd).toFixed(2)}</td>
      <td>{(+coin.volumeUsd24Hr).toFixed(2)}</td>
      <td className={+coin.changePercent24Hr > 0 ? styles.green : styles.red}>
        {(+coin.changePercent24Hr).toFixed(2)}%
      </td>
    </tr>
  );
};

export default TableRow;
