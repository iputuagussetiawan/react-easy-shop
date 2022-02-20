import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

class AppRoute extends Component {
     render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact to="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
     }
}

export default AppRoute
