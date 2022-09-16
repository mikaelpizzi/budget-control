import React, { useEffect, useState } from 'react';
import BudgetControl from './BudgetControl';
import Form from './components/Form';
import List from './components/List';
import Question from './components/Question';

function App() {
  
  // Define state for actual and remaining budget
  const [actualbudget, saveActualbudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateShowquestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createbudget, saveCreatebudget] = useState(false);

  // UseEffect which updates the remaining budget
  useEffect(() => {
    if (createbudget) {
      // Add new expense
      saveExpenses([
        ...expenses,
        expense
      ]);

      // Subtract from remaining budget
      const remainingBudget = remaining - expense.amount;
      saveRemaining(remainingBudget);
    }
    saveCreatebudget(false);

  }, [expense])

  return (
    <div className='container'>
      <header>
        <h1>Weekly Budget</h1>

        <div className='contenido-principal contenido'>
          {showquestion 
          ?
            <Question
              saveActualbudget={saveActualbudget}
              saveRemaining={saveRemaining}
              updateShowquestion={updateShowquestion}
            />
          :  
            <div className='row'>
              <div className='one-half column'>
                <Form 
                  saveExpense={saveExpense}
                  saveCreatebudget={saveCreatebudget}
                />
              </div>

              <div className='one-half column'>
                <List 
                  expenses={expenses}
                />
                <BudgetControl
                  actualbudget={actualbudget}
                  remaining={remaining}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
