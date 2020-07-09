import React from 'react'

import {
  HashRouter as Router
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ConfigProvider  } from 'antd'

import zhCN from 'antd/es/locale/zh_CN';
import Routes from '../routes'

import * as store from '../store'

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Provider {...store}>
          <Routes />
        </Provider>
      </Router>
    </ConfigProvider>
  )
}

export default App