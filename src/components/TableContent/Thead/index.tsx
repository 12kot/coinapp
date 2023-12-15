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
    <section
      className={`${styles.container} ${inView && styles.active}`}
      id="thead"
      ref={ref}
    >
      <div className={styles.item}>
        <span className={styles.rowItem}></span>
        <span className={styles.rowItem}>#</span>
        <span className={styles.rowItem}>Name</span>
        <div className={styles.rowItem}>
          {getArrow(sortConfig, "priceUsd")}
          <button onClick={() => requestSort("priceUsd")}>Price</button>
        </div>
        <div className={styles.rowItem}>
          {getArrow(sortConfig, "volumeUsd24Hr")}
          <button onClick={() => requestSort("volumeUsd24Hr")}>Volume</button>
        </div>
        <div className={styles.rowItem}>
          {getArrow(sortConfig, "changePercent24Hr")}
          <button onClick={() => requestSort("changePercent24Hr")}>
            24h %
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thead;
