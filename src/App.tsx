import React from 'react';
import './App.css';
import {Router} from './routes/router'
// import store from './store'
// import { Provider } from 'react-redux'

function App() {
  return (

    // <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    // </Provider>
    
  );
}

export default App;
