import Order from '../../components/Order/index';
import './styleCart.css';

export default function AllOrdes() {
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
      </div>
    </div>
  );
}
