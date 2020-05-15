import React from 'react'
import {
  Switch, Redirect, Route
} from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import { Login } from '../pages'
import Main from '../components/Main/index'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute component={Main} path="/home"></PrivateRoute>

    <Redirect exact from="/" to="/home"></Redirect>
  </Switch>
)

export default Routes