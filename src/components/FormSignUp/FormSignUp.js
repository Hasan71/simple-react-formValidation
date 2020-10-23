import React from 'react';
// import '../Form/Form.css';
import '../FormHooks/useForm';
import useForm from '../FormHooks/useForm';
import validate from '../FormHooks/validateInfo';


const FormSignUp = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit = {handleSubmit}>
                <h1>
                    Get Started With US Today. Create Your Account 
                     By Filing out the the 
                     Information Bellow.
                </h1>
                <div className="form-input">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        className="form-label"
                        placeholder="Enter Your Name: "
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    {errors.username && <p>{errors.username}</p> }
                </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        className="form-label"
                        placeholder="Enter Your Email: "
                        value = {values.email}
                        onChange = {handleChange}
                    />
                    {errors.email && <p>{errors.email}</p> }
                </div>
                <div className="form-input">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        className="form-label"
                        placeholder="Enter Your Password: "
                        value = {values.password}
                        onChange = {handleChange}
                    />
                    {errors.passowrd && <p>{errors.passowrd}</p> }
                </div>
                <div className="form-input">
                    <label htmlFor="password2" className="form-label">
                        Confirm Your Password:
                    </label>
                    <input 
                        type="password"
                        id="password2"
                        name="password2"
                        className="form-label"
                        placeholder="Enter Your password2: "
                        value = {values.password2}
                        onChange = {handleChange}
                    />
                    {errors.passowrd2 && <p>{errors.passowrd2}</p> }
                </div>
                <button className="form-input-btn"
                    type="submit"
                    >
                    Sign Up
                </button>
                <span className="form-input-lo">
                    Already Have an Account? Log in <a href="#">Here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;