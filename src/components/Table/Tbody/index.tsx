import React, { ReactElement } from "react";
import styles from "./tbody.module.scss";
import TableRow from "./TableRow";

const getTableRows = () => {
  return [...Array(20)].map((row, id) => <TableRow key={id} />);
};

const Tbody = (): ReactElement => {
  return <tbody className={styles.container}>{getTableRows()}</tbody>;
};

export default Tbody;
