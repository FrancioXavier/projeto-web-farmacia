import * as types from '../types';

export function addToCart(payload) {
  return {
    type: types.ADD_TO_CART,
    payload,
  };
}

export function deleteFromCart(payload) {
  return {
    type: types.DELETE_FROM_CART,
    payload,
  };
}
