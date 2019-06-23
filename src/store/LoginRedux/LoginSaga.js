import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import axios from 'axios'

import { ActionMap, BackendMap, StorageKey } from '../commons'

const auth = async (email, password) =>
    await axios.post(BackendMap.user.auth, { email, password })


const authenticated = response => {
    if (response.status === 200) {
        const { token, name } = response.data
        localStorage.setItem(StorageKey.token, token)
        localStorage.setItem(StorageKey.name_user, name)
        return true
    } else {
        return false
    }
}

function* authentication(action) {
    const { email, password } = action.payload

    try {
        const responseAuth = yield call(auth, email, password)

        yield call(authenticated, responseAuth.data)
            ? yield put(push('/dash'))
            : yield put({
                type: ActionMap.user_auth.Errror,
                payload: "Error no servidor"
            })

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
}
