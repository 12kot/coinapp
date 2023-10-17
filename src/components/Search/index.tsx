import React, { ReactElement } from "react";
import styles from "./search.module.scss";

const Seacrh = (): ReactElement => {
  return <input className={styles.container} placeholder="USDT"></input>;
};

export default Seacrh;
