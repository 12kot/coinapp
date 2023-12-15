import React, { ReactElement } from "react";
import styles from "./burgerMenu.module.scss";
import BestCoins from "components/Header/BestCoins";
import useRequest from "utils/hooks/useRequest";
import { TCoin } from "types/coin";
import { getCoins } from "utils/constants/API";

interface Props {
  isActive: boolean;
  toggle: () => void;
}

const BurgerMenuContainer = ({ isActive, toggle }: Props): ReactElement => {
  const { data: coins, isLoading } = useRequest<{ data: TCoin[] }>(
    getCoins(3, 0)
  );

  if (!coins || isLoading) return <></>;

  return (
    <article
      className={`${styles.container} ${isActive && styles.active}`}
      onClick={toggle}
    >
      <BestCoins coins={coins.data} />
    </article>
  );
};

export default BurgerMenuContainer;
