import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css'
import RegistrationForm from "../../../components/registration-form";

const Registration = () => {
    return (
        <div className='geometry-bg registration-page'>
            <RegistrationForm />
        </div>
    );
};

export default Registration;
