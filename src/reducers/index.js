import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    userDetails: userDetailsReducer,
    loggedIn: loginReducer
});

export default rootReducer;