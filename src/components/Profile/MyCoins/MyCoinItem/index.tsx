import TrashSVG from "assets/svg/TrashSVG";
import React, { ReactElement } from "react";
import { TCoin, TMyCoin } from "types/coin";
import { getCoinImage } from "utils/constants/API";
import { getCoinPrice } from "utils/services/profile.service";
import toFix from "utils/services/toFix";
import styles from "./myCoinItem.module.scss";

interface Props {
    coin: TMyCoin;
    newCoins: TCoin[]
}

const MyCoinItem = ({ coin, newCoins }: Props): ReactElement => {
  return (
    <div key={coin.coinId} className={styles.coin}>
      <img src={getCoinImage(coin.symbol)} alt={coin.coinId}></img>
      <p>{coin.count}</p>
      <p>${toFix(getCoinPrice(coin.coinId, +coin.count, newCoins))}</p>
      <button>
        <TrashSVG />
      </button>
    </div>
  );
};

export default MyCoinItem;
