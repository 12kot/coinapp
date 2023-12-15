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
import ArrowBackSVG from "assets/svg/ArrowBackSVG";
import CoinContextProvider from "contexts/CoinContextProvider";

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
    <article className={styles.container}>
      <NavLink to="/" className={styles.back}>
        <ArrowBackSVG />
      </NavLink>

      <CoinContextProvider coin={coin.data}>
        <CoinAside />
        <CoinContent id={coin.data.id} />
      </CoinContextProvider>
    </article>
  );
};

export default CoinLayout;
