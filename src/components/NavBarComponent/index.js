import React from 'react'
import ComponentNavBarIten from './NavBarItenComponent'

const NavComponent = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">App Speed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ComponentNavBarIten />

        </nav>
    )
}

export default NavComponent

