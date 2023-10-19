import React, { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { THistoryItem } from "types/coin";
import toFix from "utils/services/toFix";

const getData = (history: THistoryItem[]): { x: number; y: number }[] => {
  const res: { x: number; y: number }[] = [];

  history.forEach((item) => {
    res.push({ x: item.time, y: toFix(item.priceUsd) });
  });

  return res;
};

interface Props {
  history: THistoryItem[];
  format: string;
  ticksCount: number
}

const Chart = ({history, format, ticksCount}: Props): ReactElement => {
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
      colors: ['#3861fb'],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      shared: false,
    },

    xaxis: {
      type: 'datetime',
      tickAmount: ticksCount,
      labels: {
        formatter: function (value, _, opts) {
              return opts.dateFormatter(new Date(+value), format)
          }
      }
  },
  };

  return <ReactApexChart options={options} series={series} type="area" height={'100%'} />;
};

export default Chart;
