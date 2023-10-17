import React, { ReactElement, useRef } from "react";
import styles from "./thead.module.scss";
import useInView from "utils/hooks/useInView";
import SortUpSVG from "assets/svg/SortUpSVG";
import SortDownSVG from "assets/svg/SortDownSVG";
import { TSortConfig, TSortKeys } from "types/sort";

interface Props {
  sortConfig: TSortConfig | undefined;
  requestSort: (key: TSortKeys) => void;
}

const getArrow = (
  sortConfig: TSortConfig | undefined,
  name: TSortKeys
): ReactElement => {
  if (sortConfig?.key !== name) return <></>;

  return sortConfig.isDown ? <SortDownSVG /> : <SortUpSVG />;
};

const Thead = ({ sortConfig, requestSort }: Props): ReactElement => {
  const ref = useRef<HTMLTableSectionElement>(null);
  const inView = useInView(ref);

  return (
    <thead
      className={`${styles.container} ${inView && styles.active}`}
      ref={ref}
    >
      <tr className={styles.item}>
        <th>
          <p></p>
        </th>
        <th>
          <p>#</p>
        </th>
        <th>
          <p>Name</p>
        </th>
        <th>
          {getArrow(sortConfig, "priceUsd")}
          <button onClick={() => requestSort("priceUsd")}>Price</button>
        </th>
        <th>
          {getArrow(sortConfig, "volumeUsd24Hr")}
          <button onClick={() => requestSort("volumeUsd24Hr")}>Volume</button>
        </th>
        <th>
          {getArrow(sortConfig, "changePercent24Hr")}
          <button onClick={() => requestSort("changePercent24Hr")}>24h %</button>
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
