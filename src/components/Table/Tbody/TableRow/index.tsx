import React from "react";
import styles from "./tableRow.module.scss";
import { TCoin } from "types/coin";
import { NavLink } from "react-router-dom";
import toFix from "utils/services/toFix";
import { getCoinImage } from "utils/constants/API";
import Button from "components/Button";
import BuyCoinModal from "components/BuyCoin";
import useToggle from "utils/hooks/useToggle";

interface Props {
  coin: TCoin;
}

const TableRow = ({ coin }: Props) => {
  const { value, toggle } = useToggle(false);

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <>
      <BuyCoinModal coin={coin} isActive={value} setIsActive={toggle} />
      <NavLink to={`/coin/${coin.id}`} className={styles.item}>
        <span className={`${styles.rowItem}`}>
          <Button
            style={{ height: "60%", width: "90%" }}
            text={"+"}
            onClick={handleBuy}
            isActive={true}
          />
        </span>
        <span className={styles.rowItem}>{coin.rank}</span>
        <div className={styles.rowItem}>
          <img
            className={styles.img}
            src={getCoinImage(coin.symbol)}
            alt={coin.symbol}
          ></img>
          {coin.name}
          <p className={styles.symbol}>{coin.symbol}</p>
        </div>
        <div className={styles.rowItem}>${toFix(coin.priceUsd)}</div>
        <div className={styles.rowItem}>{toFix(coin.volumeUsd24Hr)}</div>
        <div
          className={` ${styles.rowItem} ${
            +coin.changePercent24Hr > 0 ? styles.green : styles.red
          }`}
        >
          {toFix(coin.changePercent24Hr)}%
        </div>
      </NavLink>
    </>
  );
};

export default TableRow;
