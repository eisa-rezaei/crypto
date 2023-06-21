import {createStore} from "redux";
import reducers from "./index";

const devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, devTool);
