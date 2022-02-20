import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
     render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={UserLoginPage} />
                </Switch>
            </BrowserRouter>
        )
     }
}

export default AppRoute
