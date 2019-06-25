import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import axios from 'axios'
import { ActionMap, BackendMap, StorageKey } from '../commons'

const auth = async (email, password) =>
    await axios.post(BackendMap.user.auth, { email, password })

const verifyTokenInApi = async (token) =>
    await axios.post(BackendMap.validToken, "",
        { headers: { Authorization: `Bearer ${token}` } })

const saveToken = resp => {
    if (resp.status === 200) {
        localStorage.setItem(StorageKey.token, resp.data.token)
        localStorage.setItem(StorageKey.name_user, resp.data.user.name)
        return true
    } else {
        return false
    }
}


function* authRoute() {
    const sendReducer = { type: ActionMap.user_auth.RouteNotAuth }
    const token = yield localStorage.getItem(StorageKey.token)

    try {
        const response = yield call(verifyTokenInApi, token)
        if (response.status !== 200)
            return yield put(sendReducer)
        return true
    } catch (error) {
        return yield put(sendReducer)
    }
}

function* authentication(action) {
    const { email, password } = action.payload

    try {
        const responseAuth = yield call(auth, email, password)

        const save = yield call(saveToken, responseAuth)

        if (!save)
            return yield put({
                type: ActionMap.user_auth.Errror,
                payload: "Usuário ou senha incorreto"
            })

        yield put(push('/dash'))
    } catch (error) {
        yield put({
            type: ActionMap.user_auth.Errror,
            payload: "Usuário ou senha incorreto"
        })
    }

    yield put({ type: ActionMap.clsError })
}

export default function* watch() {
    yield takeLatest(ActionMap.user_auth.auth, authentication);
    yield takeLatest(ActionMap.user_auth.Route, authRoute);
}
