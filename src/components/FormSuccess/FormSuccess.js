import React from 'react';
import '../Form/Form.css';
import image3 from '../../img/img-3.svg';
const FormSuccess = () => {
    return (
        <div>
            <div className="form-content-right">
                <div className="form-content-success">
                    We Have recieved Your Request!
                </div>
                <img src={image3} alt="success-img" className="form-img-2"/>
            </div>
        </div>
    );
};

export default FormSuccess;