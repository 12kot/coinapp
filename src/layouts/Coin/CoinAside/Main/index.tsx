import React, { ReactElement, useContext } from "react";
import styles from "./coinAsideMain.module.scss";
import { getCoinImage } from "utils/constants/API";
import { TCoin } from "types/coin";
import { CoinContext } from "contexts/CoinContextProvider";

const CoinAsideMain = (): ReactElement => {
  const { name, symbol } = useContext(CoinContext) as TCoin;

  return (
    <section className={styles.container}>
      <img
        id={"img"}
        className={styles.logo}
        src={getCoinImage(symbol)}
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
