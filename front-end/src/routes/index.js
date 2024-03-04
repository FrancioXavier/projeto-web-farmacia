import React from 'react';
import { Switch } from 'react-router-dom';

import AddressRegister from '../pages/AddressRegister';
import ContactRegister from '../pages/ContactRegister';
import FinishingOrder from '../pages/FinishingOrder';
import Login from '../pages/Login';
import OrderComplete from '../pages/OrderComplete';
import Page404 from '../pages/Page404';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart';
import YourOrders from '../pages/YourOrders';
import MyRoute from './MyRoute';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/product" component={Product} />
      <MyRoute exact path="/shopping-cart" component={ShoppingCart} />
      <MyRoute exact path="/contact-register" component={ContactRegister} />
      <MyRoute exact path="/your-orders" component={YourOrders} />
      <MyRoute exact path="/address-register" component={AddressRegister} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/order-complete" component={OrderComplete} />
      <MyRoute exact path="/finishing-order" component={FinishingOrder} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
