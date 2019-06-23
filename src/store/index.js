
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import history from '../routes/history'
import reducers from './reducers'
import sagas from './sagas'

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares), reduxDevTool)
)

sagaMiddleware.run(sagas)

export default store