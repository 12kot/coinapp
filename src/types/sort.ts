export interface TSortConfig {
  key: TSortKeys;
  isDown: boolean;
}

export type TSortKeys = "priceUsd" | "volumeUsd24Hr" | "changePercent24Hr";

