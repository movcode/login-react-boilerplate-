import React from 'react'
import './login.css'

export default p =>
    <div>
        <div className="col-md-3  mx-auto v-center " >
            <form className="form-signin col-md-12 ">
                <h1 className="h3 mb-3 font-weight-normal text-center ">
                    Login de Usuário
                </h1>

                <input type="email" className="form-control"
                    onChange={p.email}
                    value={p.resp.email}
                    placeholder="Seu email" />

                <input type="password" className="form-control"
                    onChange={p.pwd}
                    value={p.resp.password}
                    placeholder="Senha" />

                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block"
                        onClick={() => p.signIn(p.resp.email, p.resp.password)}
                        type="button">Login</button>
                </div>
            </form>
        </div>

    </div>



