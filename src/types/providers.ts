import { TMyCoin } from "./coin";

export interface TMyCoinsContext {
  coins: TMyCoin[];
  setCoins: React.Dispatch<React.SetStateAction<TMyCoin[]>>;
}
