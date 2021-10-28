import { combineReducers } from "redux";
import { reducer as coinsReducer } from "./coins/reducer";

const reducers = combineReducers({
  coins: coinsReducer,
});

export default reducers;
