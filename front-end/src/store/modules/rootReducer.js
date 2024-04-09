import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cartReducer from './ShoppingCart/reducer';
import orders from './orders/reducer';

export default combineReducers({
  auth,
  cartReducer,
  orders,
});
