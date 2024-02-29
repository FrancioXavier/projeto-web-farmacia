import React from 'react';
// import { SliderContainer } from './styled';
import ProductCard from '../../components/ProductCard';
import dorflex from '../../config/img/dorflex.png';

export default function Home() {
  return (
    // <div className="container">
    //   <SliderContainer>
    //     <div
    //       id="carouselExampleIndicators"
    //       className="carousel slide"
    //       data-bs-ride="true"
    //     >
    //       <div className="carousel-indicators">
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="0"
    //           className="active"
    //           aria-current="true"
    //           aria-label="Slide 1"
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="1"
    //           aria-label="Slide 2"
    //         ></button>
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to="2"
    //           aria-label="Slide 3"
    //         ></button>
    //       </div>
    //       <div className="carousel-inner">
    //         <div className="carousel-item active">
    //           <img
    //             src="../../config/img/homeSlide.svg"
    //             className="d-block w-100 h-100"
    //             alt="..."
    //           />
    //         </div>
    //         <div className="carousel-item">
    //           <img
    //             src="../../config/img/homeSlide.svg"
    //             className="d-block w-100"
    //             alt="..."
    //           />
    //         </div>
    //         <div className="carousel-item">
    //           <img
    //             src="../../config/img/homeSlide.svg"
    //             className="d-block w-100"
    //             alt="..."
    //           />
    //         </div>
    //       </div>
    //       <button
    //         className="carousel-control-prev"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="prev"
    //       >
    //         <span
    //           className="carousel-control-prev-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button
    //         className="carousel-control-next"
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide="next"
    //       >
    //         <span
    //           className="carousel-control-next-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //     </div>
    //   </SliderContainer>
    // </div>
    <ProductCard
      productImg={dorflex}
      productName="Dorflex"
      productPrice="R$69,69"
    />
  );
}
