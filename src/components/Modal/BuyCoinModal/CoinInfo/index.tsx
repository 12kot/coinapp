import React, { ReactElement } from "react";
import styles from "./modalCoinInfo.module.scss";
import toFix from "utils/services/toFix";

interface Props {
  priceUsd: string;
  supply: number;
}

const ModalCoinInfo = ({ priceUsd, supply }: Props): ReactElement => {
  return (
    <section className={styles.info}>
      <div className={styles.item}>
        <p>Price</p>
        <b>${toFix(priceUsd)}</b>
      </div>
      <div className={styles.item}>
        <p>Max coins</p>
        <b>{toFix(supply + '')}</b>
      </div>
    </section>
  );
};

export default ModalCoinInfo;
