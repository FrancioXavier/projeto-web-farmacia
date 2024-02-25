import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';
import ShoppingCart from '../pages/ShoppingCart';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/shopping-cart" component={ShoppingCart} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
