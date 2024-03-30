import axios from '../../../services/axios';
import { call, put, all, takeLatest, takeLeading } from 'redux-saga/effects';
import { get } from 'lodash';
import * as actions from './actions';
import { toast } from 'react-toastify';
import * as types from '../types';

//funcao geradora para manipulacao das requests e actions de cada contexto
function* loginRequest({ payload }) {
  try {
    //a funcao call recebe a conclusao de uma funcao assincrona, que no caso eh o acesso a rota do tipo POST para login
    const response = yield call(axios.post, '/tokens', payload);
    //o put instrui o middleware para fazer uma action
    yield put(actions.loginRequest({ ...response.data }));

    toast.success('Login feito com sucesso!');
    //adiciona o token de login as headers de authorization
    axios.defaults.headers.authorization = `Bearer ${response.data.token}`;
    //retorna para a rota anterior que foi acessada
    payload.history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuario ou senha invalidos');
    //chama action de loginFailure
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  //funcao get do lodash funciona para "pegar" uma parte especifica de um json
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}
//o efeito all recebe um array de resultado de outros efeitos
export default all([
  //takeLeading pega somente a primeira instancia da funcao
  takeLeading(types.LOGIN_REQUEST, loginRequest),
  //takeLatest pega somente a ultima instancia a funcao
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
