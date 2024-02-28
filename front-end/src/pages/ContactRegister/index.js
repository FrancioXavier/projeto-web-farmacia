import React, { useState } from 'react';
import { InformationLight } from '../../config/colors';
import { Container } from '../../styles/GlobalStyles';

import './ContactRegister.css';

export default function ContactRegister() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone1, setTelephone1] = useState('');
  const [telephone2, setTelephone2] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <Container
      style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
    >
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="" className="title">
            Cadastro
          </label>
        </div>
        <div className="col-md-8">
          <label htmlFor="validationDefault01" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite o seu CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Telefone 1
          </label>
          <input
            type="tel"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite um telefone"
            value={telephone1}
            onChange={(event) => setTelephone1(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Telefone 2
          </label>
          <input
            type="tel"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite outro telefone"
            value={telephone2}
            onChange={(event) => setTelephone2(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Confirmação do e-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite o seu e-mail novamente"
            value={emailConfirmation}
            onChange={(event) => setEmailConfirmation(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite uma senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Confirmação da senha
          </label>
          <input
            type="password"
            className="form-control"
            id="validationDefault01"
            placeholder="Digite a senha novamente"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </Container>
  );
}