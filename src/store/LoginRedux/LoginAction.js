import { ActionMap } from '../commons'

export default () => ({
    //User Autenticate (Send action to Saga)

    auth: credential => ({
        type: ActionMap.user_auth.auth,
        payload: credential
    }),

    auth_routh: () => ({
        type: ActionMap.user_auth.Route,        
    })
})