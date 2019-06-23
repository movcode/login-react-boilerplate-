import React from 'react'
import { reduxForm, Field } from 'redux-form'
import sweetAlert from '../../SweetAlertComponent'
import './login.css'

const FormReduxLogin = p =>
    <div>
        <div className="col-md-3  mx-auto v-center ">

            <form onSubmit={p.handleSubmit} className="form-signin col-md-12 ">
                <h1 className="h3 mb-3 font-weight-normal text-center ">
                    Login de Usuário
                </h1>

                <div className="form-group">
                    <Field name="email" component="input"
                        type="email"
                        className="form-control formLogin"
                        required
                        placeholder="Seu email" />

                    <Field name="password" component="input"
                        type="password"
                        required
                        className="form-control formLogin"
                        placeholder="Senha" />

                </div>

                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block"
                        type="submit">Login</button>
                </div>
            </form>
        </div>

        {p.state.error.show ? sweetAlert().error("Error", p.state.error.msg) : ""}
    </div>


export default reduxForm({ form: 'formLogin' })(FormReduxLogin)