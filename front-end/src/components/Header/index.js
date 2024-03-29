import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/adasd">
        <FaSignInAlt size={24} />
      </Link>

      <button className="btn btn-primary">Teste</button>

      <strong>{botaoClicado ? 'Clicado' : 'Não clicado'}</strong>
    </Nav>
  );
}
