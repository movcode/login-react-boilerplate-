import { connectRouter } from 'connected-react-router'
import history from '../routes/history'

import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { LoginReducer } from './LoginRedux'


export default combineReducers({
    router: connectRouter(history),
    login: LoginReducer,
    form: formReducer,    
},)