import React from 'react';
import useForm from '../FormHooks/useForm';
import validate from '../FormHooks/validateInfo';
import '../Form/Form.css';


const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);
    return (
        <div className="form-content-right">
            <form onSubmit = {handleSubmit} className="form" noValidate>
                <h1>
                    Get Started With Us Today. Create Your Account 
                     By Filing out the the 
                     Information Bellow.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        className="form-input"
                        placeholder="Enter Your Name "
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p> }
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter Your Email "
                        value = {values.email}
                        onChange = {handleChange}
                    />
                    {errors.email && <p>{errors.email}</p> }
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input 
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter Your Password "
                        value = {values.password}
                        onChange = {handleChange}
                    />
                    {errors.password && <p>{errors.password}</p> }
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Your Password:
                    </label>
                    <input 
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter Your password again "
                        value = {values.password2}
                        onChange = {handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn"
                    type="submit"
                    >
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already Have an Account? Log in <a href="#">Here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;