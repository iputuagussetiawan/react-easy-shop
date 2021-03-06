import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';


class AppRoute extends Component {
     render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/login" component={UserLoginPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/productdetails" component={ProductDetailsPage} />
                    <Route exact path="/notification" component={NotificationPage} />
                    <Route exact path="/favourite" component={FavouritePage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/productcategory/:category" component={ProductCategoryPage} />
                    <Route exact path="/productsubcategory/:category/:subcategory" component={ProductSubCategoryPage} />
                </Switch>
            </BrowserRouter>
        )
     }
}

export default AppRoute
