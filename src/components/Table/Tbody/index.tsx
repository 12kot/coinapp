import React, { ReactElement } from "react";
import styles from "./tbody.module.scss";
import TableRow from "./TableRow";
import { TCoin } from "types/coin";
import toFix from "utils/services/toFix";

interface Props {
  coins: TCoin[];
  searchItems?: TCoin[];
  activeSearch?: boolean;
}

const filterRows = (coins: TCoin[]): TCoin[] => {
  return coins.filter((coin) => toFix(coin.priceUsd) !== 0 && toFix(coin.volumeUsd24Hr) !== 0 && !!coin.name);
};

const getTableRows = (coins: TCoin[]): ReactElement[] => {
  return coins.map((coin, id) => <TableRow coin={coin} key={id} />);
};

const Tbody = ({ coins, searchItems, activeSearch }: Props): ReactElement => {
  const items = filterRows(coins);
  console.log(items);
  if (items.length === 0)
    return (
      <section className={styles.notFound}>We didn't find anything 😞</section>
    );

  return (
    <>
      <section className={styles.container}>
        {activeSearch && !!searchItems?.length && (
          <div className={styles.absolute}>{getTableRows(items)}</div>
        )}

        {getTableRows(items)}
      </section>
    </>
  );
};

export default Tbody;
