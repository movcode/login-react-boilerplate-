import { ActionMap } from '../commons'

const INITIAL_STATE = {
    error: { show: false, msg: "" },
    load: ""
}

export default (state = INITIAL_STATE, action) => {

    const clsError = { show: false, msg: "" }

    const { type, payload } = action

    switch (type) {
        case ActionMap.user_auth.Errror:
            return { ...state, error: { show: true, msg: payload } }

        case ActionMap.clsError:
            return { ...state, error: clsError }
            
        case ActionMap.user_auth.load:
            return { ...state, load: payload , error:clsError}

        default: return state
    }
}
