import React, { ReactElement } from "react";
import { TCoin, TMyCoin } from "types/coin";
import styles from "./myCoins.module.scss";
import MyCoinItem from "./MyCoinItem";

const getCoinsInfo = (coins: TMyCoin[], newCoins: TCoin[]): ReactElement[] => {
  return coins.map((coin) => (
    <MyCoinItem coin={coin} newCoins={newCoins} key={coin.coinId} />
  ));
};

interface Props {
  oldCoins: TMyCoin[];
  newCoins: TCoin[];
}

const MyCoins = ({ oldCoins, newCoins }: Props): ReactElement => {
  return (
    <div className={styles.coins}>
      <div className={styles.coin}>
        <p></p>
        <p>
          <b>Count</b>
        </p>
        <p>
          <b>Price</b>
        </p>
      </div>

      {getCoinsInfo(oldCoins, newCoins)}
    </div>
  );
};

export default MyCoins;
