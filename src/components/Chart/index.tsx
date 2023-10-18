import React, { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { THistoryItem } from "types/coin";

const toFix = (str: string) => {
  return +(+str).toFixed(2);
};

const getDate = (num: number) => {
  let date = new Date(num);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    minute: "numeric",
  });
};

const getData = (history: THistoryItem[]): { x: number; y: number }[] => {
  const res: { x: number; y: number }[] = [];

  history.forEach((item) => {
    res.push({ x: item.time, y: toFix(item.priceUsd) });
  });

  return res;
};

interface Props {
  history: THistoryItem[];
}

const Chart = ({history}: Props): ReactElement => {
  const series = [
    {
      name: "Price",
      data: getData(history),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Coin Price Movement",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      shared: false,
    },
  };

  return <ReactApexChart options={options} series={series} type="area" height={'100%'} />;
};

export default Chart;
