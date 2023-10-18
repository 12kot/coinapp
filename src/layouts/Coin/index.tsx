import React, { ReactElement } from "react";
import styles from "./coinLayout.module.scss";
import { getCoin } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import CoinAside from "components/CoinAside";
import { useParams } from "react-router-dom";
import CoinContent from "./CoinContent";

const CoinLayout = (): ReactElement => {
  const params = useParams();

  const { data: coin } = useRequest<{ data: TCoin }>(getCoin(params.id || ""));
  if (!coin) return <>ОЙ</>;

  return (
    <main className={styles.container}>
      <CoinAside coin={coin.data} />
      <CoinContent id={coin.data.id} />
    </main>
  );
};

export default CoinLayout;
