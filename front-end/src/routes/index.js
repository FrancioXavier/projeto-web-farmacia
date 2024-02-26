import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart';
import OrderComplete from '../pages/OrderComplete';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/product" component={Product} />
      <MyRoute exact path="/shopping-cart" component={ShoppingCart} />
      <MyRoute exact path="/order-complete" component={OrderComplete} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
