import React from 'react';
import { Switch } from 'react-router-dom';

import ContactRegister from '../pages/ContactRegister';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart';
import MyRoute from './MyRoute';
import OrderComplete from '../pages/OrderComplete';
import FinishingOrder from '../pages/FinishingOrder';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/product" component={Product} />
      <MyRoute exact path="/shopping-cart" component={ShoppingCart} />
      <MyRoute exact path="/contact-register" component={ContactRegister} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/order-complete" component={OrderComplete} />
      <MyRoute exact path="/finishing-order" component={FinishingOrder} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
