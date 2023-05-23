import React from 'react';
import useForm from '../useForm';
import '../App.css';

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

  return (
    <div className="login-container">
      <div className="login-app-wrapper">
        <div>
          <h2 className="login-title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="login-name">
            <label className="label">Full Name</label>
            <input
              className="login-input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>
          <div className="login-email">
            <label className="label">Email</label>
            <input
              className="login-input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className="login-password">
            <label className="label">Password</label>
            <input
              className="login-input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div>
            <button className='login-submit' onClick={handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
