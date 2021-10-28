import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../../Loading";

const CoinGeckoClient = new CoinGecko();
const CoinChart = ({ id, limit, selectedStartDay, selectedEndDay }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
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
    };
    getData();
  }, [id, limit]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await CoinGeckoClient.coins.fetchMarketChartRange(id, {
          from: selectedStartDay / 1000,
          to: selectedEndDay / 1000,
        });
        setData(res?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    selectedStartDay && selectedEndDay && getData();
  }, [selectedStartDay, selectedEndDay, id]);

  const timeSelect = (time) => {
    const millisecond = new Date(time);
    if (selectedStartDay && selectedEndDay) {
      return millisecond.getDate();
    } else if (limit >= 7 && limit <= 30) {
      return millisecond.getDate();
    } else if (limit < 7) {
      return millisecond.getHours();
    } else if (limit > 30) {
      return millisecond.getMonth();
    }
  };

  const ChartHelper = (data) => {
    let ChartValues = [];
    let ChartLabels = [];
    const len = data?.length;
    for (let i = 0; i < len; i++) {
      ChartLabels?.push(timeSelect(data[i][0]));
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
