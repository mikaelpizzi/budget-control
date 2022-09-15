import React, { Fragment, useState } from 'react';
import Error from './Error';


const Question = ({ saveActualbudget, saveRemaining, updateShowquestion }) => {
    // Define state for the budget that user put in
    const [budget, saveBudget] = useState(0);
    const [error, saveError] = useState(false);
    
    // Read budget function
    const defineBudget = e => {
        saveBudget(parseInt(e.target.value, 10));
    }
    
    // Submit event for define budget
    const addBudget = e => {
        e.preventDefault();

        // Validate budget
        if (budget < 1 || isNaN(budget)) {
            saveError(true);
            return;
        }

        // After validation
        saveError(false);
        saveActualbudget(budget);
        saveRemaining(budget);
        updateShowquestion(false);
    }

    return ( 
        <Fragment>
            <h2>Enter Your Budget</h2>

            { error ? <Error message='Wrong Budget'/> : null }

            <form
                onSubmit={addBudget}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Enter Your Budget'
                    onChange={defineBudget}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Define Budget'
                />
            </form>
        </Fragment>
     );
}
 
export default Question;