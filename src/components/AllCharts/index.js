import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../Loading";
import { StChartBoxContainer, StChartBoxContainerPrice } from "./style";

const CoinGeckoClient = new CoinGecko();
const AllCharts = ({ id, limit }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const days = limit || 7;
      try {
        const res = await CoinGeckoClient.coins.fetchMarketChart(
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
    };
    getData();
  }, [id, limit]);

  const ChartHelper = (data) => {
    let ChartValues = [];
    let ChartLabels = [];
    const len = data?.length;
    for (let i = 0; i < len; i++) {
      const time = new Date(data[i][0]).getDate();
      ChartLabels.push(time);
      ChartValues.push(data[i][1]);
    }
    return { ChartValues, ChartLabels };
  };

  const { ChartValues: prices, ChartLabels } = ChartHelper(data?.prices);

  const options = {
    // responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // const Chartdata = (canvas) => {
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 100);

  //   gradient.addColorStop(0, "rgba(138, 30, 33, 0.8)");
  //   gradient.addColorStop(0.7, "rgba(138, 30, 33, 0.2)");
  //   gradient.addColorStop(1, "rgba(138, 30, 33, 0)");
  //   // gradient.addColorStop(
  //   //   0,
  //   //   isPriceUp ? "rgba(40, 194, 129, 0.7)" : "rgba(167, 46, 33, 0.7)"
  //   // );
  //   // gradient.addColorStop(
  //   //   0.7,
  //   //   isPriceUp ? "rgba(40, 194, 129, 0.2)" : "rgba(167, 46, 33, 0.2)"
  //   // );
  //   // gradient.addColorStop(
  //   //   1,
  //   //   isPriceUp ? "rgba(40, 194, 129, 0)" : "rgba(167, 46, 33, 0)"
  //   // );
  //   return {
  //     labels: ChartLabels,
  //     datasets: [
  //       {
  //         fill: true,
  //         backgroundColor: gradient,
  //         data: prices,
  //         borderColor: isPriceUp
  //           ? "rgba(40, 194, 129, 1)"
  //           : "rgba(210, 77, 87, 1)",
  //         pointBorderWidth: 0,
  //         borderWidth: 3,
  //         tension: 0.1,
  //         yAxisID: "y",
  //         xAxisID: "x",
  //       },
  //     ],
  //   };
  // };

  const percent =
    ((prices[prices.length - 1] - prices[0]) / prices[prices.length - 1]) * 100;

  const Chartdata = {
    labels: ChartLabels,
    datasets: [
      {
        fill: true,
        backgroundColor:
          percent > 0 ? "rgba(40, 194, 129, 0.2)" : "rgba(138, 30, 33, 0.2)",
        data: prices,
        borderColor:
          percent > 0 ? "rgba(40, 194, 129, 1)" : "rgba(167, 46, 39, 1)",
        pointBorderWidth: 0,
        borderWidth: 3,
        tension: 0.1,
        yAxisID: "y",
        xAxisID: "x",
      },
    ],
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <StChartBoxContainer>
        <StChartBoxContainerPrice isPos={percent > 0}>
          last {limit || 7} days
          <p>{percent.toFixed(2)}%</p>
        </StChartBoxContainerPrice>
        <span>
          <Line options={options} data={Chartdata} height="100px" key={id} />
        </span>
      </StChartBoxContainer>
    );
  }
};

export default AllCharts;
