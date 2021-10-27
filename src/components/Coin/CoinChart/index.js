import React, { useCallback, useLayoutEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../../Loading";

const CoinChart = ({ id, limit }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    const CoinGeckoClient = new CoinGecko();
    try {
      setLoading(true);
      const res = await CoinGeckoClient.coins.fetchMarketChart(id, {
        days: limit || 7,
        vs_currency: "usd",
      });
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id, limit]);

  useLayoutEffect(() => {
    getData();
  }, [getData]);

  const ChartHelper = (data) => {
    let ChartValues = [];
    let ChartLabels = [];
    const len = data?.length;
    for (let i = 0; i < len; i++) {
      const time = new Date(data[i][0]).getDate();
      ChartLabels?.push(time);
      ChartValues?.push(data[i][1]);
    }
    return { ChartValues, ChartLabels };
  };

  const chartOptions = {
    // responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //   const chartData = {
  //     labels: ChartLabels,
  //     datasets: [
  //       {
  //         data: prices,
  //         borderColor: "rgba(38, 194, 129, 1)",
  //         pointBorderWidth: 0,
  //         borderWidth: 3,
  //         fill: true,
  //         backgroundColor: "rgba(210, 77, 87, 0.1)",
  //         xAxisID: "x",
  //         yAxisID: "y",
  //         tension: 0.1,
  //       },
  //       {
  //         data: market_cap,
  //         borderColor: "rgba(210, 77, 87, 1)",
  //         pointBorderWidth: 0,
  //         borderWidth: 3,
  //         backgroundColor: "rgba(38, 194, 129, 0.1)",
  //         fill: true,
  //         yAxisID: "y1",
  //         xAxisID: "x1",
  //         tension: 0.1,
  //       },
  //     ],
  //   };

  const Chartdata = () => {
    const { ChartValues: prices_cap, ChartLabels } = ChartHelper(data?.prices);
    const chartData = {
      labels: ChartLabels,
      datasets: [
        {
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          yAxisID: "y",
          xAxisID: "x",
          data: prices_cap,
          pointBorderWidth: 0,
          backgroundColor:
            prices_cap[0] < prices_cap[prices_cap.length - 1]
              ? "rgba(38, 194, 129, 0.1)"
              : "rgba(210, 77, 87, 0.1)",
          borderColor:
            prices_cap[0] < prices_cap[prices_cap.length - 1]
              ? "rgba(38, 194, 129, 1)"
              : "rgba(210, 77, 87, 1)",
        },
      ],
    };

    return chartData;
  };
  if (loading) {
    return <Loading />;
  } else {
    return <Line options={chartOptions} data={Chartdata} height="100px" />;
  }
};

export default CoinChart;
