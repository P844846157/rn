import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";


const stores = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default stores;