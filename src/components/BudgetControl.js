import React, { Fragment } from 'react';
import { checkBudget } from '../helpers'

const BudgetControl = ({ actualbudget, remaining }) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Budget: $ {actualbudget}
            </div>

            <div className={checkBudget(actualbudget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;