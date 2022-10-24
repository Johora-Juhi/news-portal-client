import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>This is Terms and Conditionn</h3>
            <p>Return to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;