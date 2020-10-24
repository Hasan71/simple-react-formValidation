import React, { useState } from 'react';
import FormSignUp from '../FormSignUp/FormSignUp';
import FormSuccess from '../FormSuccess/FormSuccess';
import './Form.css'
import image2 from '../../img/img-2.svg'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src={image2} alt="spaceship" className="form-img"/>
                </div>
                {
                    !isSubmitted ? (<FormSignUp submitForm = {submitForm}/>)
                    : 
                    (<FormSuccess/>)
                }
            </div>
        </>
    );
};

export default Form;