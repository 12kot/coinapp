import React, { ReactElement } from "react";
import styles from "./coinAsideMain.module.scss";
import { getCoinImage } from "utils/constants/API";

interface Props {
  name: string;
  symbol: string;
}

const CoinAsideMain = ({ name, symbol }: Props): ReactElement => {
  return (
    <section className={styles.container}>
      <img id={"img"} className={styles.logo} src={getCoinImage(symbol)} alt=""></img>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.symbol}>{symbol}</p>
      </div>
    </section>
  );
};

export default CoinAsideMain;
