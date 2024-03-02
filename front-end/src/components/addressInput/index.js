import React from 'react';

import { states } from '../../config/states';

export default function addressInput(
  zip,
  setZip,
  city,
  setCity,
  address1,
  setAddress1,
  address2,
  setAddress2,
  number,
  setNumber,
  complement,
  setComplement,
  state,
  setState,
) {
  return (
    <div>
      <form
        id="addressRegister"
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-md-12">
          <h1 className="title_form">Cadastro</h1>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            CEP
          </label>
          <input
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
          <button className="btn btn-primary" type="submit">
            Finalizar Cadastro
          </button>
        </div>
      </form>
    </div>
  );
}
