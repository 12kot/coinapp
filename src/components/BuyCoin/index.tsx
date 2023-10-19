import Modal from "components/Modal";
import React from "react";
import { TCoin } from "types/coin";

interface Props {
  coin: TCoin;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyCoinModal = ({ coin, isActive, setIsActive }: Props) => {
  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <h1>{coin.name}</h1>
    </Modal>
  );
};

export default BuyCoinModal;
