import React, { ReactElement } from "react";
import styles from "./table.module.scss";
import Thead from "./Thead";
import Tbody from "./Tbody";
import { TCoin } from "types/coin";
import useSort from "utils/hooks/useSort";
import useRequest from "utils/hooks/useRequest";
import { getCoins } from "utils/constants/API";

interface Props {
  activePage: number;
  searchItems?: TCoin[]; 
  activeSearch?: boolean
}

const Table = ({ activePage, searchItems, activeSearch }: Props): ReactElement => {
  const { data: coins, isLoading } = useRequest<{ data: TCoin[] }>(
    getCoins(50, activePage)
  );

  const { items, requestSort, sortConfig } = useSort(coins?.data || []);

  if (isLoading) return <>LOADING</>;

  return (
    <section className={styles.table}>
      <Thead requestSort={requestSort} sortConfig={sortConfig} />
      <Tbody coins={items} searchItems={searchItems} activeSearch={activeSearch} />
    </section>
  );
};

export default Table;
