import Modal from "components/Modal";
import React, { ReactElement, useContext } from "react";
import styles from "./profile.module.scss";
import { TCoin } from "types/coin";
import toFix from "utils/services/toFix";
import { getTotalCoinsPrice } from "utils/services/profile.service";
import MyCoins from "./MyCoins";
import { TMyCoinsContext } from "types/providers";
import { MyCoinsContext } from "contexts/contexts";

interface TProps {
  newCoins: TCoin[];
  active: boolean;
  toggle: () => void;
}

const Profile = ({
  newCoins,
  active,
  toggle,
}: TProps): ReactElement => {
  const { coins, setCoins } = useContext(MyCoinsContext) as TMyCoinsContext;

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
          <MyCoins oldCoins={coins} newCoins={newCoins} handleDelete={handleDelete} />
          <p className={styles.totalPrice}>
            Total price:{" "}
            <b>{`$${toFix(getTotalCoinsPrice(coins, newCoins))}`}</b>
          </p>
        </main>
      </div>
    </Modal>
  );
};

export default Profile;
