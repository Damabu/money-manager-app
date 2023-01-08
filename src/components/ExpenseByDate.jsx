import React, { useContext, useEffect, useState } from 'react';
import { Expenses } from '../context/AllExpense';
import { UserContainer } from './StyleComponent';

const ExpenseByDate = () => {
  const { getExpenses } = useContext(Expenses);

  const [data, setData] = useState(getExpenses());
  const [onlyDates, setOnlyDates] = useState([]);

  useEffect(() => {
    if (getExpenses()) {
      const dates = getExpenses().map((element) => element.date);
      const newDates = new Set(dates);
      setOnlyDates([...newDates]);
    }
  }, []);

  const filter = (e) => {
    const date = e.target.value;
    const filtered = getExpenses().filter((element) => element.date === date);
    setData(filtered);
  };

  return (
    <UserContainer>
      <div>
        <h1>Choose Date:</h1>
        <select name='' className='choose' onChange={filter}>
          {onlyDates &&
            onlyDates.map((element, i) => {
              return <option key={i}>{element}</option>;
            })}
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
        : 'Empty'}
    </UserContainer>
  );
};

export default ExpenseByDate;
