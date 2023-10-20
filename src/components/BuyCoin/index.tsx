import Modal from "components/Modal";
import React, { useContext, useState } from "react";
import styles from "./buyCoin.module.scss";
import { TCoin } from "types/coin";
import BuyInput from "./Input";
import ModalCoinInfo from "./CoinInfo";
import validatePurchase from "utils/services/validate";
import { TMyCoinsContext } from "types/providers";
import { CoinContext, MyCoinsContext } from "contexts/contexts";

interface Props {
  isActive: boolean;
  setIsActive: () => void;
}

const BuyCoinModal = ({ isActive, setIsActive }: Props) => {
  const { coins, setCoins } = useContext(MyCoinsContext) as TMyCoinsContext;
  const coin = useContext(CoinContext) as TCoin;
  
  const [error, setError] = useState<string>("");

  const getCoinCount = (): number => {
    const currentCoin = coins.find((c) => c.coinId === coin.id);

    if (currentCoin) return +currentCoin.count;
    return 0;
  };

  const handleConfirm = (value: number) => {
    const err = validatePurchase(+coin.supply - getCoinCount(), value);
    if (err) {
      setError(err);
      return;
    }

    
    const currentCoin = coins.find((c) => c.coinId === coin.id);
    if (currentCoin) {
      currentCoin.count = +currentCoin.count + value + "";
      currentCoin.pricePerOne = coin.priceUsd;

      setCoins((data) => [
        ...data.filter((c) => c.coinId !== coin.id),
        currentCoin,
      ]);

      return;
    }

    setCoins([
      ...coins,
      {
        coinId: coin.id,
        count: value + "",
        symbol: coin.symbol,
        pricePerOne: coin.priceUsd,
      },
    ]);
    
    alert(`Вы успешно купили: ${value} ${coin.symbol}`);
  };

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div className={styles.container}>
        <header className={styles.header}>
          <b>Buy {coin.name}</b>
        </header>
        <main className={styles.content}>
          <ModalCoinInfo priceUsd={coin.priceUsd} supply={+coin.supply - getCoinCount()} />
          <BuyInput handleConfirm={handleConfirm} error={error} />
        </main>
      </div>
    </Modal>
  );
};

export default BuyCoinModal;
