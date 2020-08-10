import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import billingCycle from '../billingCycle/billingCycle'
import dashboard from '../dashboard/dashboard'
import Pepple from '../pepple/pepple'
import Visitors from '../visitors/visitors'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={dashboard} />


            <Route path='/billingCycles' component={billingCycle} />
            <Route path='/pepple' component={Pepple} />
            <Route path='/visitors' component={Visitors}/>
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)
