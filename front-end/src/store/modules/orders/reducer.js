import * as types from '../types';

const initialState = {
  quantOrders: 0,
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ORDER_SUCCESS: {
      const newState = { ...state };
      newState.orders.push(action.payload.order);
      newState.quantOrders = newState.orders.length;

      console.log(newState);

      return newState;
    }

    case types.ORDER_FAILURE: {
      return state;
    }

    case types.ORDER_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.ORDER_FINISH: {
      const newState = { ...state };
      newState.quantOrders = newState.orders.length;
      return newState;
    }

    default:
      return state;
  }
}
