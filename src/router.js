import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './layout/BasicHomeLayout';
import welcome from './pages/welcome'

export default class BasicRouter extends Component{
    render() {
        return (
            // <BrowserRouter>
                <Switch>
                    <Route path='/' component={
                        <Home>
                            <Route exact path="/welcome" component={welcome}/>
                        </Home>
                    }/>         
                </Switch>
            // </BrowserRouter>
        )
    }
    
};