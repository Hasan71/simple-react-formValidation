import React from 'react';
import '../Form/Form.css';
import image3 from '../../img/img-3.svg';

const FormSuccess = () => {
    return (
            <div className="form-content-right">
                <h1 className="form-success">
                    We Have recieved Your Request!
                </h1>
                <img src={image3} alt="success-img" className="form-img-2"/>
            </div>
    );
};

export default FormSuccess;