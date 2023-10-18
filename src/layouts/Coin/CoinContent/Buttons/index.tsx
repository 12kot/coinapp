import React, { ReactElement } from "react";
import styles from "./chartButtons.module.scss";
import { THistoryRequest } from "types/coin";
import Button from "components/Button";
import {
  InitHistoryRequestDay,
  InitHistoryRequestMonth,
  InitHistoryRequestWeek,
} from "types/Initials/coin";

const times: THistoryRequest[] = [
  InitHistoryRequestDay,
  InitHistoryRequestWeek,
  InitHistoryRequestMonth,
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

    return times.map((item, i) => (
      <Button
        onClick={() => handleTime(item)}
        text={item.name}
        isActive={!!(item.name === timeName)}
        key={i}
      />
    ));
  };

  return <div className={styles.container}>{getTimes()}</div>;
};

export default ChartButtons;
