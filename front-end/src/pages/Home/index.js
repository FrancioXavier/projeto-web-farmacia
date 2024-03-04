import React from 'react';
import { HomeContent, SliderContainer } from './styled';
import CarouselHome from '../../components/Carousels/CarouselHome';
import DepartmentCard from '../../components/DepartmentCard';
// import ProductCard from '../../components/ProductCard';
import dorflex from '../../config/img/dorflex.png';
import CarouselProduct from '../../components/Carousels/ProductCarousel';
import { toast } from 'react-toastify';

const OPTIONS = { dragFree: true };
const products = [
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
  { name: 'Nome do produto', price: '23,99', img: dorflex },
];

function handleLoad() {
  //validacao de login.
  setTimeout(() => {
    toast.info('Nao tem uma conta? Crie agora!');
  }, 60000);
}

export default function Home() {
  return (
    <>
      <HomeContent className="container" onLoad={handleLoad()}>
        <SliderContainer>
          <CarouselHome />
        </SliderContainer>

        <div className="container">
          <div className="row my-3">
            <h2>Departamentos</h2>
          </div>
          <div className="row justify-content-between fs-3 text-center">
            <div className="col-sm-3 d-flex justify-content-center">
              <DepartmentCard
                departmentName="Nome do departamento"
                imageSrc={dorflex}
              />
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <DepartmentCard
                departmentName="Nome do departamento"
                imageSrc={dorflex}
              />
            </div>
            <div className="col-sm-3 d-flex justify-content-center">
              <DepartmentCard
                departmentName="Nome do departamento"
                imageSrc={dorflex}
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="row">
            <h2>Destaque da semana</h2>
          </div>
          <CarouselProduct products={products} options={OPTIONS} />
        </div>
        <div className="row my-5">
          <div className="row">
            <h2>Destaque da semana</h2>
          </div>
          <CarouselProduct products={products} options={OPTIONS} />
        </div>
      </HomeContent>
    </>
  );
}
