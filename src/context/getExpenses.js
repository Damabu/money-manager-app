export const getExpenses = () => {
  const expenses = JSON.parse(localStorage.getItem('expense'));
  return expenses;
};
