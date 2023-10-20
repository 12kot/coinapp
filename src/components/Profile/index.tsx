import Modal from "components/Modal";
import React, { ReactElement } from "react";
import styles from "./profile.module.scss";
import { TMyCoin } from "types/coin";
import { getCoinImage } from "utils/constants/API";
import toFix from "utils/services/toFix";
import TrashSVG from "assets/svg/TrashSVG";

interface TProps {
  coins: TMyCoin[];
  setCoins: React.Dispatch<React.SetStateAction<TMyCoin[]>>;
  active: boolean;
  toggle: () => void;
}

const getCoinsInfo = (coins: TMyCoin[]): ReactElement[] => {
  return coins.map((coin) => (
    <div key={coin.coinId} className={styles.coin}>
      <img src={getCoinImage(coin.symbol)} alt={coin.coinId}></img>
      <p>{coin.count}</p>
      <p>${toFix(+coin.pricePerOne * +coin.count + '')}</p>
      <button>
        <TrashSVG />
      </button>
    </div>
  ));
};

const Profile = ({ coins, active, toggle }: TProps): ReactElement => {
  return (
    <Modal isActive={active} setIsActive={toggle}>
      <div className={styles.container}>
        <header className={styles.header}>
          <b>Profile</b>
        </header>
        <main className={styles.content}>
          <div className={styles.coins}>
            <div className={styles.coin}>
              <p></p>
              <p>
                <b>Count</b>
              </p>
              <p>
                <b>Price</b>
              </p>
            </div>

            {getCoinsInfo(coins)}
          </div>
          <p className={styles.totalPrice}>
            Total price: <b>$10</b>
          </p>
        </main>
      </div>
    </Modal>
  );
};

export default Profile;
