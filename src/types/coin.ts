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
}

export const InitHistoryRequest: THistoryRequest = {
  name: '1m',
  interval: 'h2',
  start: new Date().getTime() - 2628000000,
  end: new Date().getTime()
}
