import PropTypes from 'prop-types';
import { AddButton, Price } from './styled';
import { InformationLight } from '../../config/colors';

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: '90%',
          height: '90%',
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
          <div className="col d-flex align-items-center justify-content-center flex-column">
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
        </div>
        <div
          className="card-body"
          style={{
            background: InformationLight,
            maxWidth: '100%',
          }}
        >
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h5 className="card-title fs-4 fw-bold text-center">
              {props.productName}
            </h5>
            <Price className="card-text">{props.productPrice}</Price>
            <AddButton href="#" className="btn btn-primary">
              ADICIONAR
            </AddButton>
          </div>
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
