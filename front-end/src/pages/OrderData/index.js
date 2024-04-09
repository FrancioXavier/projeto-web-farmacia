import React, { useState } from 'react';
import { InformationLight } from '../../config/colors';
import { Container } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './OrderData.css';

export default function ContactRegister() {
  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);
  const cpfStored = useSelector((state) => state.auth.user.cpf);
  const telephone1Stored = useSelector((state) => state.auth.user.telephone1);
  const addressCepStored = useSelector((state) => state.auth.user.addressCep);
  const addressStateStored = useSelector(
    (state) => state.auth.user.addressState,
  );
  const addressNumberStored = useSelector(
    (state) => state.auth.user.addressNumber,
  );
  const addressCityStored = useSelector((state) => state.auth.user.addressCity);
  const addressNeighborhood = useSelector(
    (state) => state.auth.addressNeighborhood,
  );
  const addressComplement = useSelector(
    (state) => state.auth.user.addressComplement,
  );
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone1, setTelephone1] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCod, setCardCod] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setCpf(cpfStored);
    setName(nameStored);
    setTelephone1(telephone1Stored);
  }, [id, nameStored, cpfStored, telephone1Stored]);

  return (
    <Container
      style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
    >
      <div className="accordion container" id="accordionExample">
        <h1>Dados do Pedido</h1>
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
              <h6 className="col-12">
                Nome Completo {name ? `: ${name}` : null}
              </h6>
              <h6 className="col-4">CPF {cpf ? `: ${cpf}` : null}</h6>
              <h6 className="col-4">
                Telefone {telephone1 ? `: ${telephone1}` : null}
              </h6>
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
            <div className="row accordion-body" id="show_address">
              <h6 className="col-12 col-sm-8">Bairro: {addressNeighborhood}</h6>
              <h6 className="col-12 col-sm-4">Numero: {addressNumberStored}</h6>
              <h6 className="col-12 col-sm-6">
                Complemento: {addressComplement}
              </h6>
              <h6 className="col-12 col-sm-4">Cidade: {addressCityStored}</h6>
              <h6 className="col-12 col-sm-4">Estado: {addressStateStored}</h6>
              <h6 className="col-12 col-sm-4">CEP: {addressCepStored}</h6>
              <div className="col-12 d-flex align-items-end justify-content-end">
                <Link to="/address-register">
                  <button type="button" className="btn btn-primary text-right">
                    Alterar
                  </button>
                </Link>
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
        <div className="mt-5 d-flex justify-content-end">
          <Link to="/finishing-order" className="col-sm-5 p-0  ">
            <button type="button" className="btn btn-primary btn-lg w-100 ">
              Confirmar Dados
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
