import React from 'react';
import { PrincipalContainer, UserContainer } from './StyleComponent';

export const CreateExpense = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      date: e.target.date.value,
    };

    if (localStorage.getItem('expense')) {
      const expense = JSON.parse(localStorage.getItem('expense'));
      expense.push(data);
      localStorage.setItem('expense', JSON.stringify(expense));
    } else {
      localStorage.setItem('expense', JSON.stringify([data]));
    }
  };

  return (
    <>
      <PrincipalContainer>
        <UserContainer>
          <form onSubmit={onSubmit}>
            <h1>New Expense</h1>
            <div>
              <label htmlFor=''>Name</label>
              <input name='name' type='text' />
            </div>
            <div>
              <label htmlFor=''>Category</label>
              <select name='category' id='' required>
                <option value='food'>Food</option>
                <option value='transport'>Transport</option>
                <option value='entertainment'>Entertainment</option>
                <option value='other'>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor=''>Price</label>
              <input name='price' type='text' />
            </div>
            <div>
              <label htmlFor=''>Date</label>
              <input name='date' type='date' required />
            </div>
            <button>Register</button>
          </form>
        </UserContainer>
      </PrincipalContainer>
    </>
  );
};

export default CreateExpense;
