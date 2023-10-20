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
      <img src={getCoinImage(coin.symbol)} alt={coin.coinId}></img>
      <p>{coin.count}</p>
      <p>${toFix(getCoinPrice(coin.coinId, +coin.count, newCoins))}</p>
      <button onClick={handleClick}>
        <TrashSVG />
      </button>
    </NavLink>
  );
};

export default MyCoinItem;
