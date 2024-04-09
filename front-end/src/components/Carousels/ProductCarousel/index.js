import PropTypes from 'prop-types';
import React from 'react';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from '../../ProductCard';
import { CarouselContainer } from './styled';
import img from '../../../config/img/pampers-teste.png';

function CarouselProduct(props) {
  const { products, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  console.log('aq');
  console.log(products);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <CarouselContainer>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product, index) => (
            <div className="embla__slide" key={index}>
              <ProductCard
                productImg={img}
                productName={product.productName}
                productPrice={`R$${product.priceProduct}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </CarouselContainer>
  );
}

CarouselProduct.propTypes = {
  products: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};

export default CarouselProduct;
