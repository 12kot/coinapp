export interface TCoin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface THistoryItem {
  priceUsd: string;
  time: number;
  date: string;
}

export interface THistoryRequest {
  name: string;
  interval: string;
  start: number;
  end: number;
  format: string;
  ticksCount: number;
}

export interface TMyCoin {
  symbol: string,
  coinId: string,
  count: string,
  pricePerOne: string,
}
