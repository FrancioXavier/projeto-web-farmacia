import React from 'react';
import { SliderContainer } from './styled';
import CarouselHome from '../../components/Carousels/CarouselHome';
import DepartmentCard from '../../components/DepartmentCard';
// import ProductCard from '../../components/ProductCard';
import dorflex from '../../config/img/dorflex.png';
import CarouselProduct from '../../components/Carousels/ProductCarousel';

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

export default function Home() {
  return (
    <>
      <div className="container">
        <SliderContainer>
          <CarouselHome />
        </SliderContainer>

        <div className="container">
          <div className="row my-3">
            <h2>Departamentos</h2>
          </div>
          <div className="row justify-content-between fs-3 text-center">
            <DepartmentCard
              departmentName="Nome do departamento"
              imageSrc={dorflex}
            />
            <DepartmentCard
              departmentName="Nome do departamento"
              imageSrc={dorflex}
            />
            <DepartmentCard
              departmentName="Nome do departamento"
              imageSrc={dorflex}
            />
          </div>
        </div>
        <div className="row">
          <h2>Destaque da semana</h2>
        </div>
        <CarouselProduct products={products} />
      </div>
    </>
  );
}
