import { TCoin, TMyCoin } from "types/coin";
import toFix from "./toFix";

export const getCoinsIds = (coins: TMyCoin[]): string[] => {
  return coins.map((coin) => coin.coinId);
};

export const findCoinCount = (oldCoins: TMyCoin[], id: string): number => {
  const result = oldCoins.find((coin) => coin.coinId === id);

  if (result) return +result.count;
  return 0;
};

export const getCoinPrice = (
  coinId: string,
  count: number,
  coins: TCoin[]
): number => {
  const coin = coins.find((coin) => coin.id === coinId);

  if (coin) return +coin.priceUsd * count;
  return 0;
};

export const getTotalCoinsPrice = (
  oldCoins: TMyCoin[],
  newCoins: TCoin[]
): number => {
  let price: number = 0;

  oldCoins.forEach((coin) => {
    price += getCoinPrice(coin.coinId, +coin.count, newCoins);
  });

  return price;
};

export const getCoinsPrice = (
  oldCoins: TMyCoin[],
  newCoins: TCoin[]
): string => {
  let oldPrice: number = 0;
  oldCoins.forEach((coin) => (oldPrice += +coin.pricePerOne * +coin.count));

  const newPrice: number = getTotalCoinsPrice(oldCoins, newCoins);

  return `$${toFix(newPrice)} ${newPrice - oldPrice > 0 && "+"}${toFix(
    newPrice - oldPrice
  )} (${toFix((newPrice / oldPrice) * 100 - 100)}%)`;
};
