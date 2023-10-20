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

      {getCoinsInfo(oldCoins, newCoins, handleDelete)}
    </div>
  );
};

export default MyCoins;
