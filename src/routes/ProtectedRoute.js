import React, { useLayoutEffect, useState, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom'

import { StorageKey, BackendMap, SetHeader } from '../store/commons'
import ErrorComponent from '../components/ErrorComponent';


const Cnpt = (props, Component, storage) => (<Component {...props} storage={storage} />)

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [isAuth, _isAuth] = useState(null)

    const validToken = async token => {

        const resp = await fetch(BackendMap.validToken, {
            method: "POST",
            headers: SetHeader(token)
        })

        if (resp.status === 200){
            _isAuth(true)
        }else{
            _isAuth(false)
        }            
    }

    useLayoutEffect(() => {
        validToken(localStorage.getItem(StorageKey.token))
    }, [])


    console.log(isAuth)

    return <Route {...rest} render={p => {
        if (isAuth) {
            return Cnpt(p, Component, StorageKey)
        } else {
            if (isAuth !== null) {
                return < ErrorComponent />
            }
        }
    }} />
}



