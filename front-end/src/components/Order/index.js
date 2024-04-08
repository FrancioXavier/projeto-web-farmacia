import React from 'react';
import Stock from './stock';
import { FaTrashAlt, FaWindowClose } from 'react-icons/fa';
import { InformationLight } from '../../config/colors';
import PropTypes from 'prop-types';
import './style.css';
// import Dorflex from '../../config/img/dorflex.png';

export default function Order(props) {
  return (
    <section className="mt-2 mb-2">
      <div className="container ">
        <div style={{ backgroundColor: InformationLight }}>
          <a href="" className="d-flex justify-content-end m-2 close-element">
            <i className="close-element">
              <FaWindowClose size={22} color="gray" />
            </i>
          </a>

          <div className="d-flex f-row justify-content-between rounded align-items-center p-3 px-4 row product-elements">
            <div className=" d-flex flex-row col img- row">
              <div className="img-product  col-sm-6">
                <img className="img  w-100" src={props.productImg} alt="" />
              </div>

              <div className="d-flex flex-column  col-sm-6 p-2 ">
                <h3 className="product-name ">{props.productName}</h3>
                <p className="mb-0 text-secondary ">
                  {props.productDecription}
                </p>
                <p className="text-secondary ">{props.productGrams}</p>
              </div>
            </div>
            {/* <div className="  col">
          </div> */}
            <div className=" d-flex product-information col justify-content-between">
              <form action="#">
                <select
                  className="px-3 pt-1 pb-1 rounded"
                  name="numbers"
                  id="num"
                >
                  <Stock />
                </select>
              </form>
              <div>
                <h5>
                  <s className="mb-0">{props.productPromotion}</s>
                </h5>
                <h4>{props.productPrice}</h4>
              </div>
              <h4 className=" total-price">{props.productPrice}</h4>
              <div className="   trash">
                <FaTrashAlt size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Order.propTypes = {
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDecription: PropTypes.string.isRequired,
  productGrams: PropTypes.string.isRequired,
  productPromotion: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};
