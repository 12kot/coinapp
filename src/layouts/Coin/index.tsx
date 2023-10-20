import React, { ReactElement } from "react";
import styles from "./coinLayout.module.scss";
import { getCoin } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import CoinAside from "layouts/Coin/CoinAside";
import { NavLink, useParams } from "react-router-dom";
import CoinContent from "./CoinContent";
import Loader from "components/Loader";
import NotFound from "pages/NotFound";
import { CoinContext } from "contexts/contexts";
import ArrowBackSVG from "assets/svg/ArrowBackSVG";

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
      <NavLink to="/" className={styles.back}>
        <ArrowBackSVG />
      </NavLink>

      <CoinContext.Provider value={coin.data}>
        <CoinAside />
        <CoinContent id={coin.data.id} />
      </CoinContext.Provider>
    </main>
  );
};

export default CoinLayout;
