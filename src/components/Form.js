import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ addNewExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [error, saveError] = useState(false);

    // When user adds an expense
    const addExpense = e => {
        e.preventDefault(); 
        
        // Validate
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // Build the expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        // Pass the expense to principal component for list it
        addNewExpense(expense);

        // Reset form 
        setName('');
        setAmount(0);
    }

    return ( 
        <form
        onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            {error 
            ? 
                <Error message='Both fields are required, budget must be greater than 0' />
            : 
                false
            }

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