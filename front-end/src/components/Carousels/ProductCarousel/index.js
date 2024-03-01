import PropTypes from 'prop-types';
import { Stack, Carousel } from 'react-bootstrap';
import ProductCard from '../../ProductCard';

function CarouselProduct(props) {
  let page1 = [];
  let page2 = [];
  let page3 = [];
  props.products.map((product, index) => {
    if ((index + 1) % 3 === 0) {
      page1.push(product);
    } else if ((index + 1) % 3 === 1) {
      page2.push(product);
    } else if ((index + 1) % 3 === 2) {
      page3.push(product);
    }
  });

  let pages = [page1, page2, page3];

  console.log(pages);

  return (
    <Carousel>
      {pages.map((page, index) => (
        <Carousel.Item style={{ height: 500 }} key={index}>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={4}
          >
            {page.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.name}
                productImg={product.img}
                productPrice={product.price}
              />
            ))}
          </Stack>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

CarouselProduct.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CarouselProduct;
