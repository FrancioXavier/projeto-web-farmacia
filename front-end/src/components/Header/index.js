import React from 'react';
import { FaUserAlt, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Paragraph } from './styled';
// import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav className="align-items-center">
      <div className="col-4 ">
        <h2 className="d-flex text-center justify-content-center">
          University Pharmacy
        </h2>
      </div>
      <div className="input-group rounded ">
        <input
          type="search"
          className="form-control rounded p-2"
          placeholder="Encontre o que deseja "
          aria-label="Search"
        />
        <span className="input-group-text botder-0 " id="search-addon">
          <i>
            <FaSearch size={18} />
          </i>
        </span>
      </div>
      {/* <Link to="/">
        <FaHome size={24} />'
      </Link> */}
      <div className="col-4 d-flex flex-row justify-content-center align-items-center ">
        <Link to="/login" className="d-flex flex-row md-2">
          <FaUserAlt className="m-1" size={24} />
          <Paragraph className="m-1">Entrar/Cadastrar</Paragraph>
        </Link>
        <Link to="/adasd" className="d-flex flex-row">
          <FaShoppingBasket className="m-1" size={24} />
          <Paragraph className="m-1">Carrinho</Paragraph>
        </Link>
      </div>

      {/* <strong>{botaoClicado ? 'Clicado' : 'Não clicado'}</strong> */}
    </Nav>
  );
}
