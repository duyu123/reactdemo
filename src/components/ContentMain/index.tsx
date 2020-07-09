import React, {FC} from 'react'
import {
  withRouter,
  Switch,
  Redirect,
  RouteComponentProps,
  Route
} from 'react-router-dom'


import {
  RestrictRoute
} from '../index'

import './index.scss'

const ContentMain: FC<RouteComponentProps>=()=> {
  return (
    <div className="content">
      <div className="main">

      </div>
    </div>
  )
}

export default withRouter(ContentMain)