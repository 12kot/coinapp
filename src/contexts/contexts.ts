import { createContext } from "react";
import { TCoin } from "types/coin";
import { TMyCoinsContext } from "types/providers";

export const MyCoinsContext = createContext<TMyCoinsContext | null>(null);
export const SearchItemsContext = createContext<TCoin[] | null>(null);
export const CoinContext = createContext<TCoin | null>(null);
