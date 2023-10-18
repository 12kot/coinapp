export const getCoins = (count: number, page: number) =>
  `https://api.coincap.io/v2/assets?limit=${count}&offset=${count * page}`;

export const searchCoins = (value: string) =>
  `https://api.coincap.io/v2/assets?search=${value}`;

export const getCoin = (id: string) => `https://api.coincap.io/v2/assets/${id}`;

export const getCoinHistory = (
  coin: string,
  interval: string,
  start: number,
  end: number
) =>
  `https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}&start=${start}&end=${end}`;
