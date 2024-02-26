import { primaryDark } from '../../config/colors';
import { MainContent, OrderInfos } from './styled';

export default function OrderComplete() {
  return (
    <>
      <div
        className="container mt-5"
        style={{
          background: 'none',
          width: '80%',
        }}
      >
        <h1>Pedido Finalizado com Sucesso</h1>
        <MainContent>
          <h2
            className="fw-bolder"
            style={{
              margin: '2rem 0 1rem 1rem',
            }}
          >
            Pedido Finalizado
          </h2>
          <div
            className="container d-flex"
            style={{
              justifyContent: 'space-around',
            }}
          >
            <OrderInfos>
              <h4 className="fw-bolder textOrder">Endereço de entrega</h4>
              <p className="textOrder">
                George Washington Rua Dom Pedro Segundo, nº 287 Bairro Vila
                Sésamo, 63220-122 Juazeiro do Norte - Ceará
              </p>
              <h4 className="fw-bolder textOrder">Dados de pagamento</h4>
              <p className="textOrder">
                Visa, **** **** **** 5612, 01/28 Parcelas: 2 x R$ 38,85
              </p>
            </OrderInfos>
            <OrderInfos
              style={{
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p className="fw-bolder fs-3">Valor total: R$ 35,00</p>
              <p className="fw-bolder fs-5 mt-5">
                Acompanhe o Status do seu Pedido
              </p>
              <button
                style={{
                  background: primaryDark,
                }}
              >
                Verificar pedido
              </button>
            </OrderInfos>
          </div>
        </MainContent>
      </div>
    </>
  );
}
