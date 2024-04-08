// import Dorflex from '../../config/img/dorflex.png';

import './styleCart.css';
import { FaShoppingBasket, FaStore } from 'react-icons/fa';
import AllOrdes from '../../components/AllOrders';

export default function ShoppingCart() {
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
        <button type="button" className="btn btn-primary btn-lg col-sm-5  ">
          Fechar Pedido
        </button>
      </div>
    </div>
  );
}
