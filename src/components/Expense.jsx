import React, { useContext, useState } from 'react';
import { Expenses } from '../context/AllExpense';
import { UserContainer } from './StyleComponent';

const Expense = () => {
  const { getExpenses } = useContext(Expenses);

  const [data, setData] = useState(getExpenses());

  const filter = (e) => {
    const category = e.target.value;
    const filtered = getExpenses().filter(
      (element) => element.category === category
    );
    setData(filtered);
  };

  return (
    <UserContainer>
      <div>
        <h1>Choose Category:</h1>
        <select name='category' className='choose' onChange={filter}>
          <option value='food'>Food</option>
          <option value='transport'>Transport</option>
          <option value='entertainment'>Entertainment</option>
          <option value='other'>Other</option>
        </select>
      </div>

      {data
        ? data.map((element, i) => {
            return (
              <div className='expense' key={i}>
                <h4>{element.name}</h4>
                <p>Category : {element.category}</p>
                <p>Price : {element.price} €</p>
                <p>Date : {element.date}</p>
              </div>
            );
          })
        : 'No hay datos'}
    </UserContainer>
  );
};

export default Expense;
