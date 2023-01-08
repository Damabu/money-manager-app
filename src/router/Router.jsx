import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateExpense } from '../components/CreateExpense';
import Expense from '../components/Expense';
import ExpenseByDate from '../components/ExpenseByDate';
import Nav from '../components/Nav';
import Profile from '../components/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path='/' element={<CreateExpense />} />
          <Route path='/expensebycategory' element={<Expense />} />
          <Route path='/expensebydate' element={<ExpenseByDate />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
