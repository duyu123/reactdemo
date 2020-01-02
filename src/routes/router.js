import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Layout from '../layout/BasicHomeLayout'

import Welcome from '../pages/welcome'


export const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/welcome" component={Welcome} />
                <Redirect from='/' exact to='/welcome'></Redirect>
            </Switch>
        </div>
    </BrowserRouter>
)