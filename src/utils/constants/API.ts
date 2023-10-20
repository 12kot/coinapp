export const getCoins = (count: number, page: number) =>
  `https://api.coincap.io/v2/assets?limit=${count}&offset=${count * page}`;

export const getCoinsByIds = (ids: string[]) =>
  `https://api.coincap.io/v2/assets?ids=${ids}`;

export const searchCoins = (value: string) =>
  `https://api.coincap.io/v2/assets?search=${value}`;

export const getCoin = (id: string) => `https://api.coincap.io/v2/assets/${id}`;

export const getCoinImage = (symbol: string) => `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;

export const getCoinHistory = (
  coin: string,
  interval: string,
  start: number,
  end: number
) =>
  `https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}&start=${start}&end=${end}`;
