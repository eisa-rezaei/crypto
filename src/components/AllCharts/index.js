import React, { useCallback, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../Loading";

const CoinGeckoClient = new CoinGecko();
const AllCharts = ({ id, isPriceUp, limit, marketChart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    const days = limit ? +limit : 7;
    try {
      setLoading(true);
      const res = await CoinGeckoClient?.coins?.fetchMarketChart(
        id?.toString(),
        {
          days,
          vs_currency: "usd",
        }
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id, limit]);

  useEffect(() => {
    getData();
  }, [getData]);

  const ChartHelper = useCallback((data) => {
    let ChartValues = [];
    let ChartLabels = [];
    for (let i = 0; i < data?.length; i++) {
      ChartLabels.push(new Date(data[i][0]).getDate());
      ChartValues.push(data[i][1]);
    }
    return { ChartValues, ChartLabels };
  }, []);

  const { ChartValues: prices, ChartLabels } = ChartHelper(data?.prices);
  const { ChartValues: market_cap } = ChartHelper(data?.market_caps);

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
        // label: `${id}`,
        data: prices,
        borderColor: isPriceUp
          ? "rgba(38, 194, 129, 1)"
          : "rgba(210, 77, 87, 1)",
        pointBorderWidth: 0,
        borderWidth: 3,
        xAxisID: marketChart && "x",
        yAxisID: marketChart && "y",
        tension: 0.1,
      },
    ],
  };

  const market_cap_data = {
    // label: `${id}`,
    data: market_cap,
    borderColor: isPriceUp ? "rgba(210, 77, 87, 1)" : "rgba(38, 194, 129, 1)",
    pointBorderWidth: 0,
    borderWidth: 3,
    yAxisID: "y1",
    xAxisID: "x1",
    tension: 0.1,
  };
  if (marketChart) {
    Chartdata.datasets.push(market_cap_data);
  }
  if (loading) {
    return <Loading />;
  } else {
    return <Line options={options} data={Chartdata} height="100px" />;
  }
};

export default AllCharts;
