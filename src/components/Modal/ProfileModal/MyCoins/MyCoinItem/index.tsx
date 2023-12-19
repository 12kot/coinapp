import TrashSVG from "assets/svg/TrashSVG";
import React, { ReactElement } from "react";
import { TCoin, TMyCoin } from "types/coin";
import { getCoinImage } from "utils/constants/API";
import { getCoinPrice } from "utils/services/profile.service";
import toFix from "utils/services/toFix";
import styles from "./myCoinItem.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
  coin: TMyCoin;
  newCoins: TCoin[];
  handleDelete: (id: string) => void;
}

const MyCoinItem = ({ coin, newCoins, handleDelete }: Props): ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleDelete(coin.coinId);
  };

  return (
    <NavLink to={`/coin/${coin.coinId}`} key={coin.coinId} className={styles.coin}>
      <img className={styles.image} src={getCoinImage(coin.symbol)} alt={coin.coinId}></img>
      <p className={styles.text}>{coin.count}</p>
      <p className={styles.text}>${toFix(getCoinPrice(coin.coinId, +coin.count, newCoins))}</p>
      <button className={styles.button} onClick={handleClick}>
        <TrashSVG />
      </button>
    </NavLink>
  );
};

export default MyCoinItem;
