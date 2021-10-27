import { ActionTypes } from "./types";

export const fetchCoins = (payload) => {
  return {
    type: ActionTypes.FETCH_COINS,
    payload,
  };
};
export const fetchCoinsChart = (payload) => {
  return {
    type: ActionTypes.FETCH_COINS_CHART,
    payload,
  };
};
