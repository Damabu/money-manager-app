import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './StyleComponent';

const Footer = () => {
  return (
    <div>
      <NavBar>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/expensebycategory'>Expense By Category</Link>
          </li>
          <li>
            <Link to='/expensebydate'>Expense By Date</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </NavBar>
    </div>
  );
};

export default Footer;
