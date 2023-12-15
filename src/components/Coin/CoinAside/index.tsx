import React from "react";
import styles from "./coinAside.module.scss";
import CoinAsideMain from "./Main";
import CoinAsideSecond from "./Second";
import Button from "components/Buttons/Button";
import useToggle from "utils/hooks/useToggle";
import BuyCoinModal from "components/Modal/BuyCoinModal";

const CoinAside = () => {
  const { value, toggle } = useToggle(false);

  return (
    <aside className={styles.aside}>
      <BuyCoinModal isActive={value} setIsActive={toggle} />
      <CoinAsideMain />
      <CoinAsideSecond />
      <section className={styles.add}>
        <Button text={"BUY"} isActive={true} onClick={toggle} />
      </section>
    </aside>
  );
};

export default CoinAside;
