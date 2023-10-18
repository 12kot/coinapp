import React, { ReactElement } from "react";
import styles from "./coinLayout.module.scss";
import { getCoin } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import CoinAside from "components/CoinAside";

const CoinLayout = (): ReactElement => {
  const { data: coin } = useRequest<{ data: TCoin }>(getCoin("bitcoin"));

  if (!coin) return <>ОЙ</>;
  
  return (
    <main className={styles.container}>
      <CoinAside coin={coin.data} />
      <section className={styles.content}>content</section>
    </main>
  );
};

export default CoinLayout;
