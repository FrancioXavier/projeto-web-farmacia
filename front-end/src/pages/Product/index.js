import { useState } from 'react';
import { InformationLight, primaryDark } from '../../config/colors';
import imageTest from '../../config/img/pampers-teste.png';
import { InputWrapper } from './styled';
export default function Product() {
  const [value, setValue] = useState(0);
  return (
    <div className="container-fluid w-75 d-flex align-items-center justify-content-center">
      <div className="row m-5">
        <div className="col-sm">
          <div
            className="card border border-0"
            style={{ backgroundColor: InformationLight }}
          >
            <div className="card-body">
              <img
                src={imageTest}
                alt=""
                style={{ width: '100%' }}
                className="img-fluid"
              />
            </div>
          </div>
          <div
            className="card mt-5 p-3 border border-0"
            style={{ backgroundColor: InformationLight }}
          >
            <div className="card-title fw-bolder fs-2">Descrição</div>
            <div className="card-body">Descrição do produto</div>
          </div>
        </div>

        <div className="col-sm mt-5">
          <div
            className="card border border-0"
            style={{ width: '100%', backgroundColor: InformationLight }}
          >
            <div className="card-body">
              <div className="card-title">
                <div
                  className="alert alert-danger w-50 text-center fw-bolder border border-0"
                  role="alert"
                  style={{ color: '#FF0000' }}
                >
                  Promoção
                </div>
                <div className="card-title fw-bolder fs-2">
                  Titulo do produto
                </div>
              </div>
              <div className="card-text">
                <span className="fs-1 fw-bolder" style={{ color: primaryDark }}>
                  R$ 45,00
                </span>
                <div className="d-flex w-100 justify-content-evenly p-3">
                  <InputWrapper>
                    <div
                      className="btn plusminus"
                      onClick={() => {
                        if (value === 0) {
                          setValue(0);
                        } else {
                          setValue(value - 1);
                        }
                      }}
                    >
                      -
                    </div>
                    <div className="d-flex" style={{ width: '30%' }}>
                      <input
                        type="number"
                        className="border border-0 w-100"
                        value={value}
                        min="0"
                        style={{
                          fontSize: '30px',
                          width: '100%',
                          background: 'none',
                        }}
                      />
                    </div>
                    <div
                      className="btn plusminus"
                      onClick={() => {
                        setValue(value + 1);
                      }}
                    >
                      +
                    </div>
                  </InputWrapper>
                  <button
                    type="submit"
                    className="btn w-50"
                    style={{ backgroundColor: primaryDark, color: '#fff' }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card mt-5 p-3 border border-0"
            style={{ width: '100%', backgroundColor: InformationLight }}
          >
            <div className="card-body">
              <div className="card-title fw-bolder fs-4">
                Informações de entrega
              </div>
              <div className="card-text">
                <input
                  type="number"
                  name="deliverySearch"
                  id="deliverySearch"
                  placeholder="Digite seu cep..."
                  style={{ height: '40px' }}
                  className="border border-0"
                />
                <button
                  type="submit"
                  className="btn m-1"
                  style={{
                    height: '40px',
                    width: '50px',
                    backgroundColor: primaryDark,
                    color: '#fff',
                    fontSize: '15px',
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
