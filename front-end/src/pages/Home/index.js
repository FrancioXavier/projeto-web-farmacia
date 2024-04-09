import React from 'react';
import CarouselHome from '../../components/Carousels/CarouselHome';
import DepartmentCard from '../../components/DepartmentCard';
import { HomeContent, SliderContainer } from './styled';
// import ProductCard from '../../components/ProductCard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CarouselProduct from '../../components/Carousels/ProductCarousel';
import dorflex from '../../config/img/dorflex.png';
import {
  getProducts,
  getProductsByCategory,
} from '../../services/requestsProduct';

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

export default function Home() {
  async function getProduct() {
    const res = await getProducts();
    console.log(res);
  }

  // async function getProductById() {
  //   const res = await getProductsById();
  //   console.log(res);
  // }

  async function getProductByCategory(category) {
    const res = await getProductsByCategory(category);
    console.log(res);
  }

  getProduct();
  // getProductById('661487439b02205029082ebc');
  getProductByCategory('Fitness');
  console.log(useSelector((state) => state.auth.user));

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function handleLoad() {
    if (!isLoggedIn) {
      setTimeout(() => {
        toast.info('Nao tem uma conta? Crie agora!');
      }, 60000);
    }
  }
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
