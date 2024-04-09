import React, { useEffect, useState } from 'react';
import CarouselHome from '../../components/Carousels/CarouselHome';
import DepartmentCard from '../../components/DepartmentCard';
import { HomeContent, SliderContainer } from './styled';
import CarouselProduct from '../../components/Carousels/ProductCarousel';
import dorflex from '../../config/img/dorflex.png';
import {
  getProducts,
  getProductsByCategory,
} from '../../services/requestsProduct';

const OPTIONS = { dragFree: true };

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const products = await getProducts();
      setProducts(products);
    }

    async function getProductByCategory(category) {
      const res = await getProductsByCategory(category);
      console.log(res);
    }

    getProductByCategory('Fitness');
    getProduct();
  }, []);
  return (
    <>
      <HomeContent className="container">
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
