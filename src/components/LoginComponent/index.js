import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormReduxLogin from './view/FormReduxLogin'
import { LoginAction as action } from '../../store/LoginRedux'
import { reset } from 'redux-form';


export default props => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)

  useEffect(() => {
     
    // if (localStorage.getItem(props.storage.token))
    //   props.history.push('/dash')
  })

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