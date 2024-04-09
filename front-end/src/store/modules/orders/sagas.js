import { all, call, put, takeLeading } from 'redux-saga/effects';
import axios from '../../../services/axios';
import * as actions from './actions';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as types from '../types';

function* orderRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/orders', payload);
    const orders = yield call(axios.get, '/orders');
    response.data.orders = orders;
    console.log(response.data);
    yield put(actions.orderSuccess({ ...response.data }));
    console.log(response.data);
    toast.success('Pedido feito com sucesso');
    return payload.history.push('/order-complete');
  } catch (e) {
    console.log(e);
    const errors = get(e, 'response.data.errors', []);
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('error desconhecido');
    }
    //chama action de loginFailure
    yield put(actions.orderFailure());
  }
}

function* orderFinish({ payload }) {
  try {
    yield call(axios.put, '/orders', payload);
    yield call(axios.get, '/orders');
    yield put(actions.orderFinish());
    toast.success('Pedido finaizado, obrigado pela compra!');
    return history.push('/');
  } catch (error) {
    yield put(actions.orderFailure());
  }
}

export default all([
  takeLeading(types.ORDER_REQUEST, orderRequest),
  takeLeading(types.ORDER_FINISH, orderFinish),
]);
