import React, { ReactElement } from "react";
import styles from "./tbody.module.scss";
import TableRow from "./TableRow";
import { TCoin } from "types/coin";

interface Props {
  coins: TCoin[];
}

const getTableRows = ({ coins }: Props) => {
  return coins
    .filter((coin) => +coin.priceUsd.slice(0, 4) !== 0.0)
    .map((coin, id) => <TableRow coin={coin} key={id} />);
};

const Tbody = ({ coins }: Props): ReactElement => {
  return <tbody className={styles.container}>{getTableRows({ coins })}</tbody>;
};

export default Tbody;
