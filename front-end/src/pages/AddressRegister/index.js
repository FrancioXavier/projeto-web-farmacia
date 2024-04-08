import React, { useState } from 'react';
import { InformationLight } from '../../config/colors';
import { Container } from '../../styles/GlobalStyles';

import { toast } from 'react-toastify';
import { states } from '../../config/states';
import './AddressRegister.css';

export default function AddressRegister() {
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [state, setState] = useState('');
  const [termConditions, setTermConditions] = useState(false);

  function handlePressTerms() {
    const result = termConditions ? false : true;
    setTermConditions(result);
    console.log(result);
  }

  function zipCodeDate() {
    console.log('Requisição do dados do cep (cidade, estado, rua ,bairro)');
  }

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;
    if (!termConditions) {
      formErrors = true;
      toast.error('Você deve concordar antes de finalizar o cadastro.');
    }

    if (formErrors) return;
  }
  return (
    <div className="h-100">
      <Container
        style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
      >
        <form
          id="addressRegister"
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-12">
            <h1 className="title_form">Cadastro</h1>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom05" className="form-label">
              CEP
            </label>
            <input
              autoFocus
              onBlur={zipCodeDate}
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              placeholder="Digite o seu CEP"
              type="text"
              className="form-control"
              id="validationCustom05"
              required
            />
            <div className="invalid-feedback">
              Por favor digite um CEP valido.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom04" className="form-label">
              Estado
            </label>
            <select
              value={state}
              onChange={(event) => setState(event.target.value)}
              className="form-select"
              id="validationCustom04"
              required
            >
              <option selected disabled value="">
                Escolha seu estado
              </option>
              {states.map((item) => (
                <option value={item.name} key={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              Por favor selecione um estado Valido.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom03" className="form-label">
              Cidade
            </label>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Digite a sua cidade"
              type="text"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">
              Por Favor digite uma cidade valida.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom06" className="form-label">
              Logradoro
            </label>
            <input
              value={address1}
              onChange={(event) => setAddress1(event.target.value)}
              placeholder="Digite o seu logradoro (Rua, Avenida)"
              type="text"
              className="form-control"
              id="validationCustom06"
              required
            />
            <div className="invalid-feedback">
              Por Favor digite uma Logradoro valida.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom07" className="form-label">
              Número
            </label>
            <input
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              placeholder="Digite o seu número"
              type="text"
              className="form-control"
              id="validationCustom07"
              required
            />
            <div className="invalid-feedback">
              Por Favor digite um número valida.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom08" className="form-label">
              Bairro
            </label>
            <input
              value={address2}
              onChange={(event) => setAddress2(event.target.value)}
              placeholder="Digite o seu bairro"
              type="text"
              className="form-control"
              id="validationCustom08"
              required
            />
            <div className="invalid-feedback">
              Por Favor digite um bairro valida.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom09" className="form-label">
              Complemento
            </label>
            <input
              value={complement}
              onChange={(event) => setComplement(event.target.value)}
              placeholder="Digite um complemento (Referencia, Apartamento)"
              type="text"
              className="form-control"
              id="validationCustom09"
              required
            />
            <div className="invalid-feedback">
              Por Favor digite um complemento valida.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handlePressTerms}
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Condordo com os termos e condições.
              </label>
              <div className="invalid-feedback">
                Você deve concordar antes de finalizar o cadastro.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Finalizar Cadastro
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
