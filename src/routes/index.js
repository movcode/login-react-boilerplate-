import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { StorageKey } from '../store/commons'
import history from './history'
import { ProtectedRoute } from './ProtectedRoute'

//Components
import LoginComponent from '../components/LoginComponent'
import DashComponent from '../components/DashComponent'
import ErrorComponent from '../components/ErrorComponent'

const Routes = () => (
    <ConnectedRouter history={history} >
        <Switch>
            <Route exact path="/" render={p => <LoginComponent {...p}
                storage={StorageKey} />} />

            <ProtectedRoute exact path="/dash" component={DashComponent} />

            <Route path="*" component={ErrorComponent} />
        </Switch>
    </ConnectedRouter>
)

export default Routes