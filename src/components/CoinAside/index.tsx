import React from "react";
import styles from "./coinAside.module.scss";
import { TCoin } from "types/coin";
import CoinAsideMain from "./Main";
import CoinAsideSecond from "./Second";
import Button from "components/Button";
import BuyCoinModal from "components/BuyCoin";
import useToggle from "utils/hooks/useToggle";

interface Props {
  coin: TCoin;
}

const CoinAside = ({ coin }: Props) => {
  const { value, toggle } = useToggle(false);

  return (
    <aside className={styles.aside}>
      <BuyCoinModal coin={coin} isActive={value} setIsActive={toggle} />

      <CoinAsideMain name={coin.name} symbol={coin.symbol} />
      <CoinAsideSecond coin={coin} />
      <section className={styles.add}>
        <Button text={"BUY"} isActive={true} onClick={toggle} />
      </section>
    </aside>
  );
};

export default CoinAside;
