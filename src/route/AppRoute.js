import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';


class AppRoute extends Component {
     render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={UserLoginPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/productdetails" component={ProductDetailsPage} />
                   
                </Switch>
            </BrowserRouter>
        )
     }
}

export default AppRoute
