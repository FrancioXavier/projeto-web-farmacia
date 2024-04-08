import React from 'react';
import { FaSearch } from 'react-icons/fa';
import YourOrders from '../../components/YourOrders';
import { highPure, primaryDark } from '../../config/colors';

import './style.css';

export default function ContactRegister() {
  return (
    <div className="container my-3">
      <div className="row">
        <h1 className="col-12 col-lg-4">Seus Pedidos</h1>
        <div className="col-12 col-lg-4 input-group rounded searchInput">
          <input
            type="search"
            className="form-control rounded p-2"
            placeholder="Procure o seus pedidos"
            aria-label="Search"
          />
          <button
            style={{ backgroundColor: primaryDark, color: highPure }}
            type="button"
            className="btn"
          >
            <i>
              <FaSearch size={18} />
            </i>
          </button>
        </div>
        <YourOrders />
        <YourOrders />
        <YourOrders />
      </div>
    </div>
  );
}
