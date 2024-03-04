import Carousel from 'react-bootstrap/Carousel';
import image from '../../../config/img/homeSlide.svg';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
