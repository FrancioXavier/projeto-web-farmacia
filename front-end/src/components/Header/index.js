import React from 'react';
import { FaUserAlt, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import NavButton from '../NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const id = useSelector((state) => state.auth.user.id);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function logout() {
    if (isLogged) {
      dispatch(actions.loginFailure({}));
    }
  }
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
              className="form-control rounded p-2 "
              placeholder="Encontre o que deseja "
              aria-label="Search"
            />
            <span
              className="input-group-text border border-0 "
              id="search-addon"
              style={{ marginLeft: '10px' }}
            >
              <i>
                <FaSearch size={18} />
              </i>
            </span>
          </div>
          <div className="col d-flex flex-row justify-content-center align-items-center ">
            <div className="d-flex flex-row md-2" style={{ color: 'black' }}>
              {id ? (
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ background: 'none', border: 'none' }}
                  >
                    <FaUserAlt size={24} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as="button">
                      <Link to="/contact-register" style={{ color: 'black' }}>
                        Atualizar conta
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      <Link to="/your-orders" style={{ color: 'black' }}>
                        Meus pedidos
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      <Link to="/address-register" style={{ color: 'black' }}>
                        Atualizar endereço
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      style={{ color: 'red' }}
                      onClick={() => logout()}
                    >
                      <Link to="/" style={{ color: 'red' }}>
                        Sair
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <a href="#">
                    <FaUserAlt className="m-1" size={24} />
                  </a>
                  <p className="m-1 d-flex">
                    <a href="/login">entrar</a>
                    <a href="/contact-register">cadastrar</a>
                  </p>
                </>
              )}
            </div>
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
