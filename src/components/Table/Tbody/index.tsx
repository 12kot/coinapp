import React, { ReactElement, useState } from "react";
import styles from "./tbody.module.scss";
import TableRow from "./TableRow";
import { TCoin } from "types/coin";
import toFix from "utils/services/toFix";
import BuyCoinModal from "components/BuyCoin";
import useToggle from "utils/hooks/useToggle";

interface Props {
  coins: TCoin[];
  searchItems?: TCoin[];
}

const filterRows = (coins: TCoin[]): TCoin[] => {
  return coins.filter(
    (coin) =>
      toFix(coin.priceUsd) !== 0 &&
      toFix(coin.volumeUsd24Hr) !== 0 &&
      !!coin.name
  );
};

const getTableRows = (
  coins: TCoin[],
  handleBuy: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    coin: TCoin
  ) => void
): ReactElement[] => {
  return coins.map((coin, id) => (
    <TableRow coin={coin} key={id} handleBuy={handleBuy} />
  ));
};

const Tbody = ({ coins, searchItems }: Props): ReactElement => {
  const [currentCoin, setCurrentCoin] = useState<TCoin>(coins[0]);
  const { value, toggle } = useToggle(false);

  const items = filterRows(coins);
  const search = filterRows(searchItems || []);
  if (items.length === 0)
    return (
      <section className={styles.notFound}>We didn't find anything 😞</section>
    );

  const handleBuy = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    coin: TCoin
  ) => {
    e.preventDefault();
    setCurrentCoin(coin);
    toggle();
  };

  return (
    <>
      <BuyCoinModal coin={currentCoin} isActive={value} setIsActive={toggle} />
      <section className={styles.container}>
        {!!search.length && (
          <div className={styles.absolute}>
            <p className={styles.search}>Search results</p>
            {getTableRows(search, handleBuy)}
            <p className={styles.search}>Search end</p>
          </div>
        )}

        {getTableRows(items, handleBuy)}
      </section>
    </>
  );
};

export default Tbody;
