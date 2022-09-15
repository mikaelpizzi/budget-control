import React, { useState } from 'react';

const Form = (props) => {

    return ( 
        <form>
            <h2>Add your expenses here</h2>

            <div className='campo'>
                <label>Expense Name</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='e.g. Transport'
                />
            </div>

            <div className='campo'>
                <label>Expense Amount</label>
                <input 
                type='text'
                className='u-full-width'
                placeholder='e.g. 80'
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