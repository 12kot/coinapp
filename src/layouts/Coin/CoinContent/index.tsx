import React, { ReactElement, useState } from "react";
import styles from "./coinContent.module.scss";
import Chart from "components/Chart";
import { InitHistoryRequest, THistoryItem, THistoryRequest } from "types/coin";
import useRequest from "utils/hooks/useRequest";
import { getCoinHistory } from "utils/constants/API";
import ChartButtons from "./Buttons";

interface Props {
  id: string;
}

const CoinContent = ({ id }: Props): ReactElement => {
  const [time, setTime] = useState<THistoryRequest>(InitHistoryRequest);

  const { data: history } = useRequest<{ data: THistoryItem[] }>(
    getCoinHistory(id, time.interval, time.start, time.end)
  );

  if (!history) return <>ОЙ</>;
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
