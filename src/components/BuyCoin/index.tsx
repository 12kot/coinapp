import Modal from "components/Modal";
import React from "react";
import styles from "./buyCoin.module.scss";
import { TCoin } from "types/coin";
import BuyInput from "./Input";
import ModalCoinInfo from "./CoinInfo";

interface Props {
  coin: TCoin;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyCoinModal = ({ coin, isActive, setIsActive }: Props) => {
  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div className={styles.container}>
        <header className={styles.header}>
          <b>Buy {coin.name}</b>
        </header>
        <main className={styles.content}>
          <ModalCoinInfo priceUsd={coin.priceUsd} supply={coin.supply} />
          <BuyInput supply={+coin.supply} />
        </main>
      </div>
    </Modal>
  );
};

export default BuyCoinModal;
