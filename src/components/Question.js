import React, { Fragment, useState } from 'react';


const Question = () => {
    // Define state for budget
    const [budget, saveBudget] = useState(0);
    
    // Read budget function
    const defineBudget = e => {
        saveBudget(parseInt(e.target.value, 10));
    }
    
    // Submit event for define budget
    const addBudget = e => {
        e.preventDefault();

        // Validate budget

        // After validation
    }

    return ( 
        <Fragment>
            <h2>Enter Your Budget</h2>

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