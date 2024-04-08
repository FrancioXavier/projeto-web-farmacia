import * as types from '../types';

//Funcao que define o tipo e descreve a action
export function orderRequest(payload) {
  return {
    type: types.ORDER_REQUEST,
    payload,
  };
}

export function orderSuccess(payload) {
  return {
    type: types.ORDER_SUCCESS,
    payload,
  };
}

export function orderFailure(payload) {
  return {
    type: types.ORDER_FAILURE,
    payload,
  };
}
