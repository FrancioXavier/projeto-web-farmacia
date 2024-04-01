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
    console.log(response.data);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login feito com sucesso!');
    //adiciona o token de login as headers de authorization
    axios.defaults.headers.authorization = `Bearer ${response.data.token}`;
    //retorna para a rota anterior que foi acessada
    payload.history.push(payload.prevPath);
  } catch (e) {
    console.log(e);
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

function persistRehydrate({ payload }) {
  //funcao get do lodash funciona para "pegar" uma parte especifica de um json
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  console.log(payload);
  const { id, name, cpf, telephone1, telephone2, email, password, history } =
    payload;
  const user = { name, email, password, telephone1, telephone2, cpf };
  console.log(user);
  try {
    if (id) {
      const response = yield call(axios.put, '/users', { ...user });
      console.log(response.data);
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess(user));
      return history.push('/');
    }
    yield call(axios.post, '/users', { ...user });

    toast.success('Conta criada com sucesso!');
    yield put(actions.registerCreatedSuccess(user));

    history.push('/login');
  } catch (e) {
    console.log(e);
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('error desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

//o efeito all recebe um array de resultado de outros efeitos
export default all([
  //takeLeading pega somente a primeira instancia da funcao
  takeLeading(types.LOGIN_REQUEST, loginRequest),
  //takeLatest pega somente a ultima instancia a funcao
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLeading(types.REGISTER_REQUEST, registerRequest),
]);
