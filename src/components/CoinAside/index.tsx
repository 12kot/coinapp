import React from "react";
import styles from "./coinAside.module.scss";
import { TCoin } from "types/coin";
import CoinAsideMain from "./Main";
import CoinAsideSecond from "./Second";
import Button from "components/Button";

interface Props {
  coin: TCoin;
}

const CoinAside = ({ coin }: Props) => {
  return (
    <aside className={styles.aside}>
      <CoinAsideMain name={coin.name} symbol={coin.symbol} />
      <CoinAsideSecond coin={coin} />
      <section className={styles.add}>
        <Button text={"BUY"} isActive={true} />
      </section>
    </aside>
  );
};

export default CoinAside;
