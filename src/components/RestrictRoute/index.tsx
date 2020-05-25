import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { message } from 'antd'

interface IProps {
  component: any,
  path: string,
  exact: boolean
}

const RestrictRoute = ({ component: Component, path }: IProps) => {
  return (
    <Route 
      path={path}
      render={(props) => (
        <Redirect to={{
          pathname: '',
          state: { from: props.location },
        }}
        />
      )}
    />
  )
}

export default RestrictRoute