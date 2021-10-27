// import CoinGecko from "coingecko-api";

// const CoinGeckoClient = new CoinGecko();

// const getCoins = async () => {
//   try {
//     const res = await CoinGeckoClient.coins.all();
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getCoinsChart = async (id, limit) => {
//   try {
//     const res = await CoinGeckoClient.coins.fetchMarketChart(id?.toString(), {
//       days: limit || 7,
//       vs_currency: "usd",
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchFunctions = {
//   getCoins,
//   getCoinsChart,
// };

// export default fetchFunctions;
