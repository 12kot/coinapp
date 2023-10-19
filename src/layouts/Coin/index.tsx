import React, { ReactElement } from "react";
import styles from "./coinLayout.module.scss";
import { getCoin } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import CoinAside from "layouts/Coin/CoinAside";
import { useParams } from "react-router-dom";
import CoinContent from "./CoinContent";
import Loader from "components/Loader";
import NotFound from "pages/NotFound";

//ДОБАВИТЬ КОНТЕКСТ
const CoinLayout = (): ReactElement => {
  const params = useParams();

  const { data: coin, isLoading } = useRequest<{ data: TCoin }>(
    getCoin(params.id || "")
  );

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  
  if (!coin) return <NotFound />;

  return (
    <main className={styles.container}>
      <CoinAside coin={coin.data} />
      <CoinContent id={coin.data.id} />
    </main>
  );
};

export default CoinLayout;
