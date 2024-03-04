import OrderInfo from '../../components/OrderInfo';
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
          height: '100vh',
        }}
      >
        <h1>Pedido Finalizado com Sucesso</h1>
        <MainContent>
          <h2
            className="fw-bolder"
            style={{
              padding: '2rem 1rem 1rem 1rem',
            }}
          >
            Pedido Finalizado
          </h2>
          <div
            className="container mainContentContainer"
            style={{
              justifyContent: 'space-around',
            }}
          >
            <OrderInfo
              adress="George Washington Rua Dom Pedro Segundo, nº 287 Bairro Vila Sésamo,
          63220-122 Juazeiro do Norte - Ceará"
              payment="Visa, **** **** **** 5612, 01/28 Parcelas: 2 x R$ 38,85 "
            />
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
