import React, { ReactElement } from "react";
import { TCoin, TMyCoin } from "types/coin";
import styles from "./myCoins.module.scss";
import MyCoinItem from "./MyCoinItem";

const getCoinsInfo = (
  coins: TMyCoin[],
  newCoins: TCoin[],
  handleDelete: (id: string) => void
): ReactElement[] => {
  return coins.map((coin) => (
    <MyCoinItem
      coin={coin}
      newCoins={newCoins}
      key={coin.coinId}
      handleDelete={handleDelete}
    />
  ));
};

interface Props {
  oldCoins: TMyCoin[];
  newCoins: TCoin[];
  handleDelete: (id: string) => void;
}

const MyCoins = ({ oldCoins, newCoins, handleDelete }: Props): ReactElement => {
  if (oldCoins.length === 0) return <p className={styles.empty}>Your briefcase is empty. Buy a coin and come back</p>;

  return (
    <div className={styles.coins}>
      <div className={styles.coin}>
        <p className={styles.text}>
          <b>Count</b>
        </p>
        <p className={styles.text}>
          <b>Price</b>
        </p>
      </div>

      {getCoinsInfo(oldCoins, newCoins, handleDelete)}
    </div>
  );
};

export default MyCoins;
