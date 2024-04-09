import * as types from '../types';

const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const newState = { ...state };
      newState.cartItems.push(action.payload);

      console.log(newState);
      return newState;
    }
    case types.DELETE_FROM_CART: {
      const newState = { ...state };
      newState.cartItems.filter((item) => item.id != action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}
