import { createStore } from 'redux';
import reducer from './mealsReducer';

const store = createStore(reducer);

export default store;
