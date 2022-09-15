import React, { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    // When user adds an expense
    const addExpense = e => { 
        // Validate

        // Build the expense

        // Pass the expense to principal component for list it

        // Reset form 
    }

    return ( 
        <form
        onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            <div className='campo'>
                <label>Expense Name</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='e.g. Transport'
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Expense Amount</label>
                <input 
                type='number'
                className='u-full-width'
                placeholder='e.g. 80'
                value={amount}
                onChange={e => setAmount(parseInt(e.target.value))}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Add Expense'
            />
        </form>
     );
}
 
export default Form;