import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormReduxLogin from './view/FormReduxLogin'
import { LoginAction as action } from '../../store/LoginRedux'
import { reset } from 'redux-form';

export default () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)

  const signIn = (credentials) => {
    dispatch(action.auth(credentials))
    dispatch(reset('formLogin'))
  }

  return (
    <div>
      <FormReduxLogin onSubmit={signIn} state={login} />
    </div>
  )
}