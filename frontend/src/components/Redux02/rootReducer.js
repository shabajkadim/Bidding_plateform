// rootReducer.js
// rootReducer.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
// import other reducers here if needed

const rootReducer = combineReducers({
    product: productReducer,
    // add other reducers here
});

export default rootReducer;

