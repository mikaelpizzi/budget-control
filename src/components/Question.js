import React, { Fragment } from 'react';

const Question = () => {
    return ( 
        <Fragment>
            <h2>Enter Your Budget</h2>

            <form>
                <input
                type='number'
                className='u-full-width'
                placeholder='Enter Your Budget'
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