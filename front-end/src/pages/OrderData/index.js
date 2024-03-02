import React, { useState } from 'react';
import { InformationLight, highPure, primaryDark } from '../../config/colors';
import { Container } from '../../styles/GlobalStyles';

import { states } from '../../config/states';
import './OrderData.css';

export default function ContactRegister() {
  const [zip, setZip] = useState('CEP');
  const [city, setCity] = useState('Cidade');
  const [address1, setAddress1] = useState('Rua');
  const [address2, setAddress2] = useState('Bairro');
  const [number, setNumber] = useState('Número');
  const [complement, setComplement] = useState('Complemento');
  const [state, setState] = useState('Escolha seu estado');

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCod, setCardCod] = useState('');

  return (
    <Container
      style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Informações do Cliente
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body row">
              <h6 className="col-12">Nome Completo</h6>
              <h6 className="col-4">CPF</h6>
              <h6 className="col-4">Telefone</h6>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Informações de Entrega
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="row accordion-body">
              <h6 className="col-12 col-sm-8">{address1}</h6>
              <h6 className="col-12 col-sm-4">{number}</h6>
              <h6 className="col-12 col-sm-6">{address2}</h6>
              <h6 className="col-12 col-sm-6">{complement}</h6>
              <h6 className="col-12 col-sm-4">{city}</h6>
              <h6 className="col-12 col-sm-4">{state}</h6>
              <h6 className="col-12 col-sm-4">{zip}</h6>
              <div className="col-12 d-flex align-items-end justify-content-end">
                <button type="button" className="btn text-right">
                  Alterar
                </button>
              </div>
            </div>
            <div className="registered_delivery accordion-body">
              <h5>Adicione um Novo endereço</h5>
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
              <div className="col-4 my-2">
                <button
                  style={{ backgroundColor: primaryDark, color: highPure }}
                  type="button"
                  className="btn"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Método de pagamento
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="row accordion-body">
              <h5>Adicione os dados do cartão</h5>
              <div className="col-12 col-sm-6">
                <label htmlFor="validationCustom15" className="form-label">
                  Número do cartão
                </label>
                <input
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                  placeholder="Digite o número do cartão"
                  type="text"
                  className="form-control"
                  id="validationCustom15"
                  required
                />
                <div className="invalid-feedback">
                  Por favor digite um cartão valido.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="validationCustom17" className="form-label">
                  Data de expiração
                </label>
                <input
                  value={cardDate}
                  onChange={(event) => setCardDate(event.target.value)}
                  placeholder="Digite a data de expiração do cartão"
                  type="text"
                  className="form-control"
                  id="validationCustom17"
                  required
                />
                <div className="invalid-feedback">
                  Por Favor digite uma data valida.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="validationCustom16" className="form-label">
                  Nome do cartão
                </label>
                <input
                  value={cardName}
                  onChange={(event) => setCardName(event.target.value)}
                  placeholder="Digite o nome do cartão"
                  type="text"
                  className="form-control"
                  id="validationCustom16"
                  required
                />
                <div className="invalid-feedback">
                  Por Favor digite um nome valida.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="validationCustom18" className="form-label">
                  Código de segurança (CVV)
                </label>
                <input
                  value={cardCod}
                  onChange={(event) => setCardCod(event.target.value)}
                  placeholder="Digite o código de segurança do cartão"
                  type="text"
                  className="form-control"
                  id="validationCustom18"
                  required
                />
                <div className="invalid-feedback">
                  Por Favor digite um código valida.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
