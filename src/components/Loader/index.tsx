import React, { ReactElement } from "react";
import styles from "./loader.module.scss";

const Loader = (): ReactElement => {
  return (
    <div className={`${styles.loader}`}></div>
  );
};

export default Loader;