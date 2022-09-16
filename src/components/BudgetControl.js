import React, { Fragment } from 'react';
import { checkBudget } from '../helpers'

const BudgetControl = ({ initialbudget, remaining }) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Budget: $ {initialbudget}
            </div>

            <div className={checkBudget(initialbudget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;