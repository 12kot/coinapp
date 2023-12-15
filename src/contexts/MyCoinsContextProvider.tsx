import React, { ReactNode, createContext } from "react";
import { TMyCoinsContext } from "types/providers";

export const MyCoinsContext = createContext<TMyCoinsContext | null>(null);

interface Props extends TMyCoinsContext {
  children: ReactNode;
}

const MyCoinsContextProvider = ({ coins, setCoins, children }: Props) => {
  return (
    <MyCoinsContext.Provider value={{ coins, setCoins }}>
      {children}
    </MyCoinsContext.Provider>
  );
};

export default MyCoinsContextProvider;
