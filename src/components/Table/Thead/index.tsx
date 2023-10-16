import React, { ReactElement, useRef } from "react";
import styles from "./thead.module.scss";
import useInView from "utils/hooks/useInView";

const Thead = (): ReactElement => {
  const ref = useRef<HTMLTableSectionElement>(null);
  const inView = useInView(ref);

  return (
    <thead
      className={`${styles.container} ${inView && styles.active}`}
      ref={ref}
    >
      <tr className={styles.item}>
        <th>*</th>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Volume</th>
        <th>24h %</th>
      </tr>
    </thead>
  );
};

export default Thead;
