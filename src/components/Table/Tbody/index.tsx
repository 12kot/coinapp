import React, { ReactElement } from "react";
import styles from "./tbody.module.scss";
import TableRow from "./TableRow";
import { TCoin } from "types/coin";

interface Props {
  coins: TCoin[];
  searchItems?: TCoin[];
  activeSearch?: boolean;
}

const getTableRows = (coins: TCoin[]) => {
  return coins
    .filter((coin) => +coin.priceUsd?.slice(0, 4) !== 0.0)
    .map((coin, id) => <TableRow coin={coin} key={id} />);
};

const Tbody = ({ coins, searchItems, activeSearch }: Props): ReactElement => {
  if (coins.length === 0)
    return (
      <section className={styles.notFound}>
        We didn't find anything 😞
      </section>
    );

  return (
    <>
      <section className={styles.container}>
        {activeSearch && !!searchItems?.length && (
          <div className={styles.absolute}>
            {getTableRows(searchItems || [])}
          </div>
        )}
        {getTableRows(coins)}
      </section>
    </>
  );
};

export default Tbody;
