import React, { ReactNode, createContext } from "react";
import { TCoin } from "types/coin";

export const SearchItemsContext = createContext<TCoin[] | null>(null);

interface Props {
  children: ReactNode;
  coins: TCoin[];
}

const SearchItemsContextProvider = ({ coins, children }: Props) => {
  return (
    <SearchItemsContext.Provider value={coins}>
      {children}
    </SearchItemsContext.Provider>
  );
};

export default SearchItemsContextProvider;
