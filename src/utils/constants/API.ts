const COINS_URL = "https://api.coincap.io/v2/assets";
const COINS_ASSETS = "https://assets.coincap.io/assets";

export const getCoins = (count: number, page: number) =>
  `${COINS_URL}?limit=${count}&offset=${count * page}`;

export const getCoinsByIds = (ids: string[]) => `${COINS_URL}?ids=${ids}`;

export const searchCoins = (value: string) => `${COINS_URL}?search=${value}`;

export const getCoin = (id: string) => `${COINS_URL}/${id}`;

export const getCoinImage = (symbol: string) =>
  `${COINS_ASSETS}/icons/${symbol.toLowerCase()}@2x.png`;

export const getCoinHistory = (
  coin: string,
  interval: string,
  start: number,
  end: number
) =>
  `${COINS_URL}/${coin}/history?interval=${interval}&start=${start}&end=${end}`;
