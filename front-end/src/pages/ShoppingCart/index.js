// import Dorflex from '../../config/img/dorflex.png';
import Order from '../../components/Order/index';
import './styleCart.css';
import { FaShoppingBasket, FaStore } from 'react-icons/fa';

export default function ShoppingCart() {
  const listProducts = [
    {
      productImg: require('../../config/img/dorflex.png'),
      productName: 'Dorflex 50 cápsulas',
      productDecription: 'Dorflex 50 cápsulas',
      productGrams: '450g',
      productPromotion: 'R$ 35,90',
      productPrice: 'R$ 25,90',
    },
    {
      productImg: require('../../config/img/dorflex.png'),
      productName: 'Dorflex 50 cápsulas',
      productDecription: 'Dorflex 50 cápsulas',
      productGrams: '450g',
      productPromotion: 'R$ 35,90',
      productPrice: 'R$ 25,90',
    },
    {
      productImg: require('../../config/img/dorflex.png'),
      productName: 'Dorflex 50 cápsulas',
      productDecription: 'Dorflex 50 cápsulas',
      productGrams: '450g',
      productPromotion: 'R$ 35,90',
      productPrice: 'R$ 25,90',
    },
  ];
  return (
    <div className="container">
      <div className="border-top border-bottom pt-2 pb-2 ">
        <div className="title-icon d-flex">
          <FaShoppingBasket className="m-1" size={32} />
          <h2 className="title">Carrinho de Compras</h2>
        </div>
        <div className=" d-flex px-4 m-2 justify-content-center ">
          <h4 className=" col-5 prodInfo">Produto</h4>
          <h4 className=" col-2 justify-content-center prodInfo">Quantidade</h4>
          <h4 className=" col-2 justify-content-start prodInfo">
            Valor Unitário
          </h4>
          <h4 className=" col-2 justify-content-start   prodInfo">
            Valor Total
          </h4>
        </div>
        {listProducts.map((item, index) => (
          <Order
            key={index}
            productImg={item.productImg}
            productName={item.productName}
            productDecription={item.productDecription}
            productGrams={item.productGrams}
            productPromotion={item.productPromotion}
            productPrice={item.productPrice}
          />
        ))}
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
            className="btn btn-outline-primary btn-lg col-5 "
          >
            Continuar Comprando
          </button>
          <button type="button" className="btn btn-primary btn-lg col-5  ">
            Fechar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
