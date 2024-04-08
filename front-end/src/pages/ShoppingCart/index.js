// import Dorflex from '../../config/img/dorflex.png';

import './styleCart.css';
import { FaShoppingBasket, FaStore } from 'react-icons/fa';
import AllOrdes from '../../components/AllOrders';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/orders/actions';
import { get } from 'lodash';

export default function ShoppingCart(props) {
  const dispatch = useDispatch();
  const history = get(props, 'history');
  function handleClick(e) {
    e.preventDefault();
    const products = ['6612ad1a9673c9f94b5f63d3'];
    const invoiceNumber = 123123;
    const userId = '660a40bf8a43ff3774d22143';
    const totalPrice = 500;
    const isOpen = true;

    dispatch(
      actions.orderRequest({
        products,
        invoiceNumber,
        userId,
        totalPrice,
        isOpen,
        history,
      }),
    );
  }
  return (
    <div className="container">
      <div className="title-icon d-flex">
        <div>
          <FaShoppingBasket className="m-1 icon" size={32} />
        </div>
        <h2 className="title">Carrinho de Compras</h2>
      </div>
      <AllOrdes />
      <div className="text-icon d-flex ">
        <FaStore size={20} />
        <h5 className="text">Vendido e entregue por UniPharme</h5>
      </div>
      <div className="d-flex align-items-center m-4 justify-content-end">
        <h3>Total: </h3>
        <h4>R$ 25,90</h4>
      </div>
      <div className=" d-flex justify-content-between m-4 mb-5 mt-5 buttons row">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg col-sm-5"
        >
          Continuar Comprando
        </button>
        <Link to="/order-data" className="col-sm-5 p-0  ">
          <button
            type="button"
            className="btn btn-primary btn-lg w-100 "
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Fechar Pedido
          </button>
        </Link>
      </div>
    </div>
  );
}
