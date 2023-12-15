import React, { ReactElement, useState } from "react";
import ArrowBackSVG from "assets/svg/ArrowBackSVG";
import CoinAside from "components/Coin/CoinAside";
import CoinContent from "components/Coin/CoinContent";
import Loader from "components/Loader";
import CoinContextProvider from "contexts/CoinContextProvider";
import NotFound from "pages/NotFound";
import { NavLink, useParams } from "react-router-dom";
import { TCoin, THistoryItem, THistoryRequest } from "types/coin";
import { getCoin, getCoinHistory } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import styles from "./coinLayout.module.scss";
import { InitHistoryRequestMonth } from "types/Initials/coin";

const Coin = (): ReactElement => {
  const params = useParams();
  const [time, setTime] = useState<THistoryRequest>(InitHistoryRequestMonth);

  const { data: coin, isLoading: coinLoading } = useRequest<{ data: TCoin }>(
    getCoin(params.id || "")
  );

  const { data: history, isLoading: historyLoading } = useRequest<{
    data: THistoryItem[];
  }>(getCoinHistory(params.id || "", time.interval, time.start, time.end));

  if (coinLoading || historyLoading)
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
        <CoinContent
          id={coin.data.id}
          history={history?.data}
          time={time}
          setTime={setTime}
        />
      </CoinContextProvider>
    </article>
  );
};

export default Coin;
