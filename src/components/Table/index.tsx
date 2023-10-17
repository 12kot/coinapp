import React, { ReactElement } from "react";
import styles from "./table.module.scss";
import Thead from "./Thead";
import Tbody from "./Tbody";
import { TCoin } from "types/coin";
import useSort from "utils/hooks/useSort";

interface Props {
  coins: TCoin[];
}

const Table = ({ coins }: Props): ReactElement => {
  const { items, requestSort, sortConfig } = useSort(coins);

  return (
    <table className={styles.container}>
      <Thead requestSort={requestSort} sortConfig={sortConfig} />
      <Tbody coins={items} />
    </table>
  );
};

export default Table;
