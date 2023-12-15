import React, { ReactElement } from "react";
import styles from "./coinContent.module.scss";
import Chart from "components/Chart";
import ChartButtons from "./Buttons";
import { THistoryItem, THistoryRequest } from "types/coin";
import NotFound from "pages/NotFound";

interface Props {
  id: string;
  history?: THistoryItem[];
  time: THistoryRequest;
  setTime: React.Dispatch<React.SetStateAction<THistoryRequest>>;
}

const CoinContent = ({ history, time, setTime }: Props): ReactElement => {
  if (!history || history.length === 0) return <NotFound />;

  return (
    <section className={styles.content}>
      <ChartButtons timeName={time.name} setTime={setTime} />

      <div className={styles.chart}>
        <Chart
          history={history}
          format={time.format}
          ticksCount={time.ticksCount}
        />
      </div>
    </section>
  );
};

export default CoinContent;
