import React, { useEffect, useState } from 'react';
import BudgetControl from './components/BudgetControl';
import Form from './components/Form';
import List from './components/List';
import Question from './components/Question';

function App() {
  
  // Define state for actual and remaining budget
  const [initialbudget, saveInitialbudget] = useState(0);
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

  }, [expense, createbudget, expenses, remaining])

  return (
    <div className='container'>
      <header>
        <h1>Weekly Budget</h1>

        <div className='contenido-principal contenido'>
          {showquestion 
          ?
            <Question
              saveInitialbudget={saveInitialbudget}
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
                  initialbudget={initialbudget}
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
