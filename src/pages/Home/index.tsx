import React from "react";
import styles from "./home.module.scss";
import Table from "components/Table";
import { getCoins } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";

const Main = () => {
  const { data: coins, isLoading } = useRequest<{ data: TCoin[] }>(
    getCoins(50, 0)
  );

  if (isLoading) return <>LOADING</>;

  return (
    <main className={styles.container}>
      <header>
        <h1>LOGO - the best information about coins</h1>
        <p>Millions choose us!</p>
      </header>
      <section className={styles.table}>
        <div className={styles.search}>
          <input className={styles.input} placeholder="USDT"></input>
        </div>
        <Table coins={coins?.data || []} />
      </section>
    </main>
  );
};

export default Main;
