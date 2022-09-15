import React, { useState } from 'react';
import Form from './components/Form';
import Question from './components/Question';

function App() {
  // Define state for actual and remaining budget
  const [actualbudget, saveActualbudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateShowquestion] = useState(true);

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
                <Form />
              </div>

              <div className='one-half column'>
                2
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
