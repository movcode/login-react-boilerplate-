import { all } from 'redux-saga/effects'
import { LoginSaga } from './LoginRedux'

export default function* combineSagas() {
    yield all([
        LoginSaga(),
    ])
} 