import React, { useState } from 'react';
import { InformationLight } from '../../config/colors';
import { Container } from '../../styles/GlobalStyles';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import cpfValidation from '../../config/validation/cpfValidation';
import passwordValidation from '../../config/validation/passwordValidation';
import './ContactRegister.css';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import * as actions from '../../store/modules/auth/actions';

export default function ContactRegister(props) {
  console.log(useSelector((state) => state.auth.user));
  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);
  const emailStored = useSelector((state) => state.auth.user.email);
  const cpfStored = useSelector((state) => state.auth.user.cpf);
  const telephone1Stored = useSelector((state) => state.auth.user.telephone1);
  const telephone2Stored = useSelector((state) => state.auth.user.telephone2);
  const passwordStored = useSelector((state) => state.auth.user.password);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone1, setTelephone1] = useState('');
  const [telephone2, setTelephone2] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [digitValidation, setDigitValidation] = useState('red');
  const [characterValidation, setCharacterValidation] = useState('red');
  const [numberValidation, setNumberValidation] = useState('red');
  const [uppercaseValidation, setUppercaseValidation] = useState('red');
  const [lowecase, setLowercaseValidation] = useState('red');

  React.useEffect(() => {
    if (!id) return;
    setCpf(cpfStored);
    setName(nameStored);
    setEmail(emailStored);
    setTelephone1(telephone1Stored);
    setTelephone2(telephone2Stored || '');
    setPassword(passwordStored);
  }, [
    emailStored,
    id,
    nameStored,
    cpfStored,
    telephone1Stored,
    telephone2Stored,
    passwordStored,
  ]);

  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  const history = get(props, 'history');

  function parametersValidation(e) {
    if (e.match(/^.{8,15}$/)) {
      setDigitValidation('#4ED34E');
    } else {
      setDigitValidation('red');
    }
    if (e.match(/^(?=.*[a-z])/)) {
      setLowercaseValidation('#4ED34E');
    } else {
      setLowercaseValidation('red');
    }
    if (e.match(/^(?=.*[^a-zA-Z0-9])/)) {
      setCharacterValidation('#4ED34E');
    } else {
      setCharacterValidation('red');
    }
    if (e.match(/^(?=.*\d)/)) {
      setNumberValidation('#4ED34E');
    } else {
      setNumberValidation('red');
    }
    if (e.match(/^(?=.*[A-Z])/)) {
      setUppercaseValidation('#4ED34E');
    } else {
      setUppercaseValidation('red');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (!cpfValidation(cpf)) {
      formErros = true;
      toast.error('CPF inválido');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail inválido');
    }
    if (!passwordValidation(password)) {
      if (!id) {
        console.log(password);
        formErros = true;
        toast.error('Senha inválida');
      }
    }

    if (id) {
      return dispatch(
        actions.registerRequest({
          id,
          name,
          cpf,
          telephone1,
          telephone2,
          email,
          password,
          prevPath,
          history,
        }),
      );
    }

    if (formErros) return;

    if (email !== emailConfirmation) {
      formErros = true;
      toast.error('E-mails diferentes foram registrados');
    }

    if (password !== passwordConfirmation) {
      formErros = true;
      toast.error('Senhas diferentes foram registradas');
    }

    if (formErros) return;

    dispatch(
      actions.registerRequest({
        id,
        name,
        cpf,
        telephone1,
        telephone2,
        email,
        password,
        prevPath,
        history,
      }),
    );
  }
  return (
    <div className="h-100">
      <Container
        style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
      >
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="" className="title">
              {id ? 'Atualizar' : 'Cadastro'}
            </label>
          </div>
          <div className="col-md-8">
            <label htmlFor="name" className="form-label">
              Nome Completo
            </label>
            <input
              autoFocus
              type="text"
              className="form-control"
              id="name"
              placeholder="Digite o seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              placeholder="Digite o seu CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="telephone1" className="form-label">
              Telefone 1
            </label>
            <input
              type="tel"
              className="form-control"
              id="telephone1"
              placeholder="Digite um telefone"
              value={telephone1}
              onChange={(event) => setTelephone1(event.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="telephone2" className="form-label">
              Telefone 2
            </label>
            <input
              type="tel"
              className="form-control"
              id="telephone2"
              placeholder="Digite outro telefone"
              value={telephone2}
              onChange={(event) => setTelephone2(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          {id ? null : (
            <div className="col-md-6">
              <label htmlFor="emailConfirmation" className="form-label">
                Confirmação do e-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="emailConfirmation"
                placeholder="Digite o seu e-mail novamente"
                value={emailConfirmation}
                onChange={(event) => setEmailConfirmation(event.target.value)}
                required
              />
            </div>
          )}

          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite uma senha"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value),
                  parametersValidation(event.target.value);
              }}
              required
            />
          </div>
          {id ? null : (
            <div className="col-md-6">
              <label htmlFor="passwordConfirmation" className="form-label">
                Confirmação da senha
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
                placeholder="Digite a senha novamente"
                value={passwordConfirmation}
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
                required
              />
            </div>
          )}

          <div className="d-flex justify-content-start w-100 align-items-center">
            <ul style={{ fontSize: '13px' }}>
              <li style={{ color: digitValidation }}>8 a 15 digitos</li>
              <li style={{ color: characterValidation }}>Caractere especial</li>
              <li style={{ color: numberValidation }}>Numero qualquer</li>
              <li style={{ color: uppercaseValidation }}>Letra maiuscula</li>
              <li style={{ color: lowecase }}>Letra minuscula</li>
            </ul>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Continuar
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
