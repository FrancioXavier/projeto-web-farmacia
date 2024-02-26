import { FaUserCircle } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { InformationLight, primaryDark } from '../../config/colors';
import { InputLogin } from './styled';

export default function Login() {
  return (
    <Container style={{ background: InformationLight, borderRadius: '10px' }}>
      <form className="justify-content-center align-items-center d-flex flex-column">
        <h3 className="mt-4 mb-4">Fazer Login</h3>
        <div className="mb-3 w-100 mt-3">
          <InputLogin>
            <FaUserCircle size={20} />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </InputLogin>
        </div>
        <div className="mb-3 w-100">
          <InputLogin>
            <FaLock size={20} />
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </InputLogin>
          <div className="d-flex justify-content-end w-100 align-items-center">
            <a href="" style={{ color: primaryDark, fontSize: '13px' }}>
              Esqueceu sua senha?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3 mb-3 w-100"
          style={{
            textAlign: 'center',
            background: primaryDark,
            padding: '0.65rem',
          }}
        >
          Entrar
        </button>
        <hr />
        <p className="mb-0">
          Ainda não tem uma conta?{' '}
          <a href="" style={{ color: primaryDark }}>
            Cadastre-se
          </a>
        </p>
      </form>
    </Container>
  );
}
