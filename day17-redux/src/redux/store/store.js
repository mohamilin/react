import {createStore} from 'redux';
import counterProduct from '../reducers/cart.reducers';

export default createStore(counterProduct);