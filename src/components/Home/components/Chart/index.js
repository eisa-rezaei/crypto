import React, { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../../../Loading";

const InfoChart = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    const getData = async () => {
      setLoading(true);
      const res = await CoinGeckoClient.coins.fetchMarketChart(id, {
        days: 7,
        vs_currency: "usd",
      });
      setData(res.data.prices);
      res && setLoading(false);
    };
    getData();
  }, [id]);

  const ChartHelper = useCallback((data) => {
    let ChartValues = [];
    let ChartLabels = [];
    for (let i = 0; i < data.length; i++) {
      ChartLabels.push(new Date(data[i][0]).getDate());
      ChartValues.push(data[i][1]);
    }
    return { ChartValues, ChartLabels };
  }, []);

  const { ChartValues, ChartLabels } = ChartHelper(data);

  const options = {
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
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const Chartdata = {
    labels: ChartLabels,
    datasets: [
      {
        label: `${id}`,
        data: ChartValues,
        backgroundColor: "rgba(255, 99, 132, 1)",
        hoverBackgroundColor: "rgba(255, 159, 64, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointBorderWidth: 0,
        borderWidth: 4,
      },
    ],
  };

  if (loading) {
    return <Loading />;
  } else {
    return <Line options={options} data={Chartdata} height="100px" />;
  }
};

export default InfoChart;
