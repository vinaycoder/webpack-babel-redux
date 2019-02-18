import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducer';

// var initialState=[{name:'vinay kumar',lastName:'Raut'}]
// const store=createStore(reducers,initialState,applyMiddleware(thunk));
const store=createStore(reducers,applyMiddleware(thunk));
export default store;