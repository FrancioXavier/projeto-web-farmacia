import React from 'react';
import {
  AlertDefault,
  InformationLight,
  highPure,
  primaryDark,
} from '../../config/colors';
import productImage from '../../config/img/dorflex.png';
import { Container } from '../../styles/GlobalStyles';

export default function YourOrders() {
  return (
    <Container
      style={{ background: InformationLight, maxWidth: 'none', width: '90%' }}
    >
      <section className="row">
        <div className="col-12 col-lg-3 text-center">
          <img src={productImage} alt="product image" srcSet="" />
        </div>
        <div className="col-12 col-lg-5 my-1 text-center">
          <h2>Entregue no dia 5 de Janeiro</h2>
          <h4>Analgésico Dorflex 50 comprimidos</h4>
          <button
            style={{ backgroundColor: AlertDefault }}
            type="button"
            className="btn my-1"
          >
            Comprar Novamente
          </button>
        </div>
        <div className="col-12 col-lg-4">
          <button
            style={{
              backgroundColor: primaryDark,
              color: highPure,
              width: '100%',
            }}
            type="button"
            className="btn"
          >
            Rastrear Produtos
          </button>
          <button
            style={{
              backgroundColor: primaryDark,
              color: highPure,
              width: '100%',
            }}
            type="button"
            className="btn my-1"
          >
            Devolver ou Substituir Item
          </button>
          <button
            style={{
              backgroundColor: primaryDark,
              color: highPure,
              width: '100%',
            }}
            type="button"
            className="btn my-1"
          >
            Compartilhar Recibo
          </button>
          <button
            style={{
              backgroundColor: primaryDark,
              color: highPure,
              width: '100%',
            }}
            type="button"
            className="btn my-1"
          >
            Avaliar Produto
          </button>
        </div>
      </section>
    </Container>
  );
}
