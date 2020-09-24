import { combineReducers } from "redux";

import { productReducers } from "./produts.reducers";

const rootReducer = combineReducers({ productReducers });

export default rootReducer;
