export const getCoins = (count: number, page: number) =>
  `https://api.coincap.io/v2/assets?limit=${count}&offset=${count * page}`;

export const searchCoins = (value: string) =>
  `https://api.coincap.io/v2/assets?search=${value}`;
