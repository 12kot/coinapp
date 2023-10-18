import { THistoryRequest } from "types/coin";

const DAY = 86400000;
const WEEK = 604800000;
const MONTH = 2628000000;

export const InitHistoryRequestMonth: THistoryRequest = {
  name: "1m",
  interval: "h2",
  start: new Date().getTime() - MONTH,
  end: new Date().getTime(),
  format: "MMM dd",
  ticksCount: Math.abs(
    Math.round(
      (new Date().getTime() - new Date().getTime() - MONTH) / 1000 / 3600 / 24
    )
  ) - 1,
};

export const InitHistoryRequestWeek: THistoryRequest = {
  name: "1w",
  interval: "m30",
  start: new Date().getTime() - WEEK,
  end: new Date().getTime(),
  format: "ddd hh:mm",
  ticksCount: 7,
};

export const InitHistoryRequestDay: THistoryRequest = {
  name: "1d",
  interval: "m5",
  start: new Date().getTime() - DAY,
  end: new Date().getTime(),
  format: "hh:mm",
  ticksCount: 23,
};