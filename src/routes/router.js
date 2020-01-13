import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Layout from '../layout/BasicHomeLayout'

import Welcome from '../pages/welcome'


export const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                {/* <Route path="/welcome" component={Welcome} /> */}
                <Route path="/home" component={Layout} />
                <Redirect from='/' exact to='/home'></Redirect>
            </Switch>
        </div>
    </BrowserRouter>
)