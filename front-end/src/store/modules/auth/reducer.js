import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
};

export default function (state = initialState, action) {
  //Define o switch para cada tipo de action
  switch (action.type) {
    //caso seja o tipo especifico, altera o estado global da aplicacao e retorna essa novo estado
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user = action.payload.user;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    default:
      return state;
  }
}
