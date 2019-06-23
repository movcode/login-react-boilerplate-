import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'

//Components
import LoginComponent from '../components/LoginComponent'
import DashComponent from '../components/DashComponent'


const Routes = () => (
    <ConnectedRouter history={history} >
        <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/dash" component={DashComponent} />
        </Switch>
    </ConnectedRouter>
)

export default Routes