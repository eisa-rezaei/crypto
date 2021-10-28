import { ActionTypes } from "./types";

const initialValues = {
  coins: [],
  coinsChart: {
    prices: [],
    market_caps: [],
  },
};

export const reducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COINS:
      return { ...state, coins: [...payload] };
    case ActionTypes.FETCH_COINS_CHART:
      return {
        ...state,
        coinsChart: {
          prices: payload.prices,
          market_caps: payload.market_caps,
        },
      };
    default:
      return state;
  }
};
