import AllOrdes from '../../components/AllOrders';
import { OrderInfos } from '../OrderComplete/styled';
import { primaryDark } from '../../config/colors';

export default function FinishingOrder() {
  return (
    <div>
      <div className="container">
        <div className="title-icon d-flex">
          <h2 className="title">Finalizar Pedido</h2>
        </div>
        <AllOrdes />
        <div className="d-flex f-row justify-content-between p-3 px-5 row ">
          <div className="col mb-3">
            <OrderInfos className="d-flex p-5 w-100 h-100 ">
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
          </div>
          <div className="col mb-3">
            <OrderInfos className="d-flex p-5 w-100 h-100 ">
              <h4>Total</h4>
              <div className="d-flex justify-content-between">
                <p>Subtotal:</p>
                <h5>R$ 77,70</h5>
              </div>
              <div className="d-flex justify-content-between">
                <p>Taxa de Envio (Frete):</p>
                <h5>R$ 0,00</h5>
              </div>
              <div className="d-flex justify-content-between">
                <p>Descontos (Cupons):</p>
                <h5>R$ 0,00</h5>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total do Pedido:</p>
                <h5>R$ 77,70</h5>
              </div>
              <button
                style={{
                  background: primaryDark,
                }}
              >
                Fazer o Pedido
              </button>
            </OrderInfos>
          </div>
        </div>
      </div>
    </div>
  );
}
