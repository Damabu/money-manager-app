import './App.css';
import { Expenses } from './context/AllExpense';
import { getExpenses } from './context/getExpenses';
import Router from './router/Router';

function App() {
  return (
    <Expenses.Provider value={{ getExpenses }}>
      <Router />
    </Expenses.Provider>
  );
}

export default App;
