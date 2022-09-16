import React, { Fragment } from 'react';

const BudgetControl = ({ actualbudget, remaining }) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Budget: $ {actualbudget}
            </div>

            <div className='alert'>
                Remaining: $ {remaining}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;