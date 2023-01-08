import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { NavBar } from './StyleComponent';

const Nav = () => {
  return (
    <>
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
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Nav;
