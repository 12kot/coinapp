import React, { useContext } from "react";
import styles from "./coinAsideSecond.module.scss";
import { TCoin } from "types/coin";
import toFix from "utils/services/toFix";
import { CoinContext } from "contexts/contexts";

const CoinAsideSecond = () => {
  const coin = useContext(CoinContext) as TCoin;

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
          <b>{toFix(coin.supply)}</b>
        </p>
      </div>
      <div className={styles.item}>
        <p>Max supply</p>
        <p>
          <b>{toFix(coin.maxSupply)}</b>
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
