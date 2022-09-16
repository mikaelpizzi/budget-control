import React from 'react';
import Expense from './Expense';

const List = ({ expenses }) =>  ( 
    <div className='gastos-realizados'>
        <h2>Expenses made so far</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
 );

 
export default List;