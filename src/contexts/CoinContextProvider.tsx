import React, { ReactNode, createContext } from "react";
import { TCoin } from "types/coin";

export const CoinContext = createContext<TCoin | null>(null);

interface Props {
  children: ReactNode;
  coin: TCoin;
}

const CoinContextProvider = ({ coin, children }: Props) => {
  return <CoinContext.Provider value={coin}>{children}</CoinContext.Provider>;
};

export default CoinContextProvider;
