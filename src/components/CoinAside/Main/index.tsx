import React, { ReactElement } from "react";
import styles from "./coinAsideMain.module.scss";

interface Props {
  name: string;
  symbol: string;
}

const CoinAsideMain = ({ name, symbol }: Props): ReactElement => {
  return (
    <section className={styles.container}>
      <img
        className={styles.logo}
        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        alt=""
      ></img>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.symbol}>{symbol}</p>
      </div>
    </section>
  );
};

export default CoinAsideMain;
