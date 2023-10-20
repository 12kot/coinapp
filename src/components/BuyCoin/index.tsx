import Modal from "components/Modal";
import React, { useState } from "react";
import styles from "./buyCoin.module.scss";
import { TCoin, TMyCoin } from "types/coin";
import BuyInput from "./Input";
import ModalCoinInfo from "./CoinInfo";
import useLocalStorage from "utils/hooks/useLocaleStorage";
import validatePurchase from "utils/services/validate";

interface Props {
  coin: TCoin;
  isActive: boolean;
  setIsActive: () => void;
}

const BuyCoinModal = ({ coin, isActive, setIsActive }: Props) => {
  const { value: coins, setValue: setCoins } = useLocalStorage<TMyCoin[]>(
    [],
    "coins"
  );
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

    alert(`Вы успешно купили: ${value} ${coin.symbol}`);

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
