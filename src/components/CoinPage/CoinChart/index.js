import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import CoinGecko from "coingecko-api";
import Loading from "../../Loading";
import { StCoinPageChartContainer } from "./style";
import { useSizeChecker } from "../../Hook/useSizeChecker";

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
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
      },
      x1: {
        display: true,
        ticks: {
          display: true,
        },
      },
      y1: {
        display: true,
        ticks: {
          display: true,
        },
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 5,
          },
        },
      },
    },
  };
  const { ChartValues: Volume, ChartLabels } = ChartHelper(data?.total_volumes);
  const { ChartValues: prices_cap } = ChartHelper(data?.prices);

  const chartData = () => {
    const chartData = {
      labels: ChartLabels,
      datasets: [
        {
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          yAxisID: "y1",
          // xAxisID: "x",
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

  const chartDataBar = () => {
    const chartData = {
      labels: ChartLabels,
      datasets: [
        {
          yAxisID: "y",
          // xAxisID: "x1",
          data: Volume,
          backgroundColor: "#3b464e",
          borderColor: "#3b464e",
        },
      ],
    };

    return chartData;
  };
  const size = useSizeChecker();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <StCoinPageChartContainer>
        <Line
          options={chartOptions}
          data={chartData}
          height={size ? `100px` : `130px`}
        />
        <Bar
          data={chartDataBar}
          options={chartOptions}
          height={size ? `25px` : `60px`}
        />
      </StCoinPageChartContainer>
    );
  }
};

export default CoinChart;
