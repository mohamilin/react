import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import getUserReducers from './reducers/user.reducers';


const store = createStore(getUserReducers, applyMiddleware(thunk));

export default store