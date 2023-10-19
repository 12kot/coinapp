import React from "react";
import styles from "./coinAsideSecond.module.scss";
import { TCoin } from "types/coin";
import toFix from "utils/services/toFix";

interface Props {
  coin: TCoin;
}

const CoinAsideSecond = ({ coin }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <p>Rank</p>
        <p>
          <b>{coin.rank}</b>
        </p>
      </div>
      <div className={styles.item}>
        <p>Supply</p>
        <p>
          <b>${toFix(coin.supply)}</b>
        </p>
      </div>
      <div className={styles.item}>
        <p>Price</p>
        <p>
          <b>${toFix(coin.priceUsd)}</b>
        </p>
      </div>
      <div className={styles.item}>
        <p>Volume</p>
        <p>
          <b>${toFix(coin.volumeUsd24Hr)}</b>
        </p>
      </div>
    </section>
  );
};

export default CoinAsideSecond;
