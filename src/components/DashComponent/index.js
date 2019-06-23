import React from 'react'
import NavBarComponent from '../NavBarComponent'
import { StorageKey } from '../../store/commons'
const DashComponent = props => {
    return (
        <div>
            <NavBarComponent />

            <div className="container">
                <h1 >{localStorage.getItem(StorageKey.name_user)}</h1>
            </div>
        </div>
    )
}

export default DashComponent
