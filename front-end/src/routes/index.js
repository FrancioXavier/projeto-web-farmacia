import React from 'react';
import { Switch } from 'react-router-dom';

import ContactRegister from '../pages/ContactRegister';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart';
import MyRoute from './MyRoute';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/product" component={Product} />
      <MyRoute exact path="/shopping-cart" component={ShoppingCart} />
      <MyRoute exact path="/contactRegister" component={ContactRegister} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
