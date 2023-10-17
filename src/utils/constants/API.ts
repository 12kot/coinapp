export const getCoins = (count: number, page: number) =>
  `https://api.coincap.io/v2/assets?limit=${count}&offset=${count * page}`;
