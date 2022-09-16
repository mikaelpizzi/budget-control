import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error';


const Question = ({ saveInitialbudget, saveRemaining, updateShowquestion }) => {
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
        saveInitialbudget(budget);
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
 
Question.propTypes = {
    saveInitialbudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateShowquestion: PropTypes.func.isRequired
}

export default Question;