import { all, call, put, takeLeading } from 'redux-saga/effects';
import axios from '../../../services/axios';
import * as actions from './actions';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as types from '../types';

function* orderRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/orders', payload);
    yield put(actions.orderSuccess({ ...response.data }));
    toast.success('Pedido feito com sucesso');
    payload.history.push(payload);
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('error desconhecido');
    }
    //chama action de loginFailure
    yield put(actions.loginFailure());
  }
}

export default all([takeLeading(types.ORDER_REQUEST, orderRequest)]);