import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './Reducer'
import reducer from './Reducer/Reducer'

const middleware=[thunk];
const store=createStore(reducer,applyMiddleware(...middleware))

export default store; 