import { createContext } from "react";
import { TMyCoinsContext } from "types/providers";

export const MyCoinsContext = createContext<TMyCoinsContext | null>(null);
