import React, { useState } from 'react';
import Question from './components/Question';

function App() {
  // Define state for actual and remaining budget
  const [actualbudget, saveActualbudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);

  return (
    <div className='container'>
      <header>
        <h1>Weekly Budget</h1>

        <div className='contenido-principal contenido'>
          <Question
          saveActualbudget={saveActualbudget}
          saveRemaining={saveRemaining}
          />

          <div className='row'>

            <div className='one-half column'>
              1
            </div>

            <div className='one-half column'>
              2
            </div>
            
          </div>


        </div>
      </header>
    </div>
  );
}

export default App;
