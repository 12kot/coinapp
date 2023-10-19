import React, { useState } from "react";
import styles from "./coinAside.module.scss";
import { TCoin } from "types/coin";
import CoinAsideMain from "./Main";
import CoinAsideSecond from "./Second";
import Button from "components/Button";
import BuyCoinModal from "components/BuyCoin";

interface Props {
  coin: TCoin;
}

const CoinAside = ({ coin }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleBuy = () => {
    setOpenModal((val) => !val);
  };

  return (
    <aside className={styles.aside}>
      <BuyCoinModal
        coin={coin}
        isActive={openModal}
        setIsActive={setOpenModal}
      />

      <CoinAsideMain name={coin.name} symbol={coin.symbol} />
      <CoinAsideSecond coin={coin} />
      <section className={styles.add}>
        <Button text={"BUY"} isActive={true} onClick={handleBuy} />
      </section>
    </aside>
  );
};

export default CoinAside;
