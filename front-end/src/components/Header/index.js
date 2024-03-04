import React from 'react';
import { FaUserAlt, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import NavButton from '../NavButton';

export default function Header() {
  return (
    <>
      <Nav className="">
        <div className="row align-items-center w-100">
          <div className="col pharTitle">
            <h2
              className="d-flex text-center justify-content-center"
              style={{ color: 'white' }}
            >
              <a href="/"> University Pharmacy</a>
            </h2>
          </div>
          <div className="col-3 input-group rounded searchInput">
            <input
              type="search"
              className="form-control rounded p-2"
              placeholder="Encontre o que deseja "
              aria-label="Search"
            />
            <span
              className="input-group-text border border-0 "
              id="search-addon"
            >
              <i>
                <FaSearch size={18} />
              </i>
            </span>
          </div>
          <div className="col d-flex flex-row justify-content-center align-items-center ">
            <Link to="/login" className="d-flex flex-row md-2">
              <FaUserAlt className="m-1" size={24} />
              <p className="m-1">Entrar/Cadastrar</p>
            </Link>
            <Link to="/shopping-cart" className="d-flex flex-row">
              <FaShoppingBasket className="m-1" size={24} />
              <p className="m-1">Carrinho</p>
            </Link>
          </div>
        </div>

        <div className="categoriesButton">
          <NavButton />
        </div>
      </Nav>
    </>
  );
}
