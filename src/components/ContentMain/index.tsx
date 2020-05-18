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
} from '@/components'

const ContentMain: FC<RouteComponentProps>=()=> {
  return (
    <div></div>
  )
}

export default withRouter(ContentMain)