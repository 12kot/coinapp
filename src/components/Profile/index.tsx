import Modal from "components/Modal";
import React, { ReactElement } from "react";
import styles from "./profile.module.scss";
import { TCoin, TMyCoin } from "types/coin";
import toFix from "utils/services/toFix";
import { getTotalCoinsPrice } from "utils/services/profile.service";
import MyCoins from "./MyCoins";

interface TProps {
  oldCoins: TMyCoin[];
  newCoins: TCoin[];
  setCoins: React.Dispatch<React.SetStateAction<TMyCoin[]>>;
  active: boolean;
  toggle: () => void;
}

const Profile = ({
  oldCoins,
  newCoins,
  active,
  toggle,
  setCoins
}: TProps): ReactElement => {
  const handleDelete = (coinId: string) => {
    setCoins((coins) => coins.filter((coin) => coin.coinId !== coinId));
  };
  
  return (
    <Modal isActive={active} setIsActive={toggle}>
      <div className={styles.container}>
        <header className={styles.header}>
          <b>Profile</b>
        </header>
        <main className={styles.content}>
          <MyCoins oldCoins={oldCoins} newCoins={newCoins} handleDelete={handleDelete} />
          <p className={styles.totalPrice}>
            Total price:{" "}
            <b>{`$${toFix(getTotalCoinsPrice(oldCoins, newCoins))}`}</b>
          </p>
        </main>
      </div>
    </Modal>
  );
};

export default Profile;
