// tambhan ke applyMiddleware dan redux-thunk
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'react-thunk';

// // tmabhkan import productReducers untuk ambil function di reducers
// import productReducers from './reducers/produts.reducers';
// const store = createStore(productReducers, applyMiddleware(thunk));

// export default store

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
