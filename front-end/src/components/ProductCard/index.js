import PropTypes from 'prop-types';
import { Price } from './styled';
import { InformationDark, InformationLight } from '../../config/colors';

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: '400px',
          height: '400px',
          background: InformationLight,
          border: 'none',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={props.productImg}
            className="card-img-top"
            alt="..."
            style={{
              width: '90%',
              height: '90%',
            }}
          />
        </div>
        <div
          className="card-body"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            background: InformationLight,
          }}
        >
          <h5
            className="card-title"
            style={{ fontSize: '25px', fontWeight: 700 }}
          >
            {props.productName}
          </h5>
          <Price className="card-text">{props.productPrice}</Price>
          <a
            href="#"
            className="btn btn-primary"
            style={{
              backgroundColor: InformationDark,
              border: 'none',
              padding: '15px 30px',
            }}
          >
            ADICIONAR
          </a>
        </div>
      </div>
    </>
  );
};
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
};
export default ProductCard;
