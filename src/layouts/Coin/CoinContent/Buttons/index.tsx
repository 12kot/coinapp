import React, { ReactElement } from "react";
import styles from "./chartButtons.module.scss";
import { THistoryRequest } from "types/coin";
import Button from "components/Button";

const DAY = 86400000;
const WEEK = 604800000;
const MONTH = 2628000000;

const times: THistoryRequest[] = [
  {
    name: "1d",
    interval: "m5",
    start: new Date().getTime() - DAY,
    end: new Date().getTime(),
  },
  {
    name: "1w",
    interval: "m30",
    start: new Date().getTime() - WEEK,
    end: new Date().getTime(),
  },
  {
    name: "1m",
    interval: "h2",
    start: new Date().getTime() - MONTH,
    end: new Date().getTime(),
  },
];

interface Props {
  timeName: string; 
  setTime: React.Dispatch<React.SetStateAction<THistoryRequest>>;
}

const ChartButtons = ({ timeName, setTime }: Props): ReactElement => {
  const getTimes = () => {
    const handleTime = (value: THistoryRequest) => {
      setTime(value);
    };

    return times.map((item) => (
      <Button
        onClick={() => handleTime(item)}
        text={item.name}
        isActive={!!(item.name === timeName)}
      />
    ));
  };

  return <div className={styles.container}>{getTimes()}</div>;
};

export default ChartButtons;
