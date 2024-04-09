import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cartReducer from './ShoppingCart/reducer';

export default combineReducers({
  auth,
  cartReducer,
});
