import { OrderInfos } from './styled';
import PropTypes from 'prop-types';

const OrderInfo = (props) => {
  return (
    <>
      <OrderInfos>
        <h4 className="fw-bolder textOrder">Endereço de entrega</h4>
        <p className="textOrder">{props.adress}</p>
        <h4 className="fw-bolder textOrder">Dados de pagamento</h4>
        <p className="textOrder">{props.payment}</p>
      </OrderInfos>
    </>
  );
};

OrderInfo.propTypes = {
  adress: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
};

export default OrderInfo;
