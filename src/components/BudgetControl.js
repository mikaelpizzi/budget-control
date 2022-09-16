import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
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

BudgetControl.propTypes = {
    initialbudget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
 
export default BudgetControl;