import React from 'react'


const NavBarItenComponent = props =>
    (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item ">
                    <a className="nav-link" href="/">Baterias <span className="sr-only"></span></a>
                </li>

                <li className="nav-item ">
                    <a className="nav-link" href="/">Cidades <span className="sr-only"></span></a>
                </li>

                <li className="nav-item ">
                    <a className="nav-link" href="/">Veiculos <span className="sr-only"></span></a>
                </li>

                <li className="nav-item ">
                    <a className="nav-link" href="/">Marcas <span className="sr-only"></span></a>
                </li>

            </ul>
            <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Configuração</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Usuários</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Sair</a>
                    </div>
                </li>
            </ul>
        </div>
    )

export default NavBarItenComponent