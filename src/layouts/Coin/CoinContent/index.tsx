import React, { ReactElement, useState } from "react";
import styles from "./coinContent.module.scss";
import Chart from "components/Chart";
import { InitHistoryRequest, THistoryItem, THistoryRequest } from "types/coin";
import useRequest from "utils/hooks/useRequest";
import { getCoinHistory } from "utils/constants/API";
import ChartButtons from "./Buttons";
import Loader from "components/Loader";

interface Props {
  id: string;
}

const CoinContent = ({ id }: Props): ReactElement => {
  const [time, setTime] = useState<THistoryRequest>(InitHistoryRequest);

  const { data: history, isLoading } = useRequest<{ data: THistoryItem[] }>(
    getCoinHistory(id, time.interval, time.start, time.end)
  );

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  if (!history)
    return (
      <div className={styles.loader}>
        <p>Произошла какая-то ошибка 😞</p>
        <p>Мы уже получили код ошибки. Скоро всё заработает!</p>
      </div>
    );

  return (
    <section className={styles.content}>
      <ChartButtons timeName={time.name} setTime={setTime} />

      <div className={styles.chart}>
        <Chart history={history.data} />
      </div>
    </section>
  );
};

export default CoinContent;
