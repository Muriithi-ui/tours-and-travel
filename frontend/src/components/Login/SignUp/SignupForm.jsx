import React from 'react';
import SignUpFormHandler from './SignUpFormHandler';

import '../App.css';

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSignUpSubmit, values, errors } = SignUpFormHandler(submitForm);

  return (
    <div className="login-container">
      <div className="login-app-wrapper">
        <div>
          <h2 className="login-title">Create Account</h2>
        </div>
        <form className="form-wrapper" onSubmit={handleSignUpSubmit}>
          <div className="login-name">
            <label className="label">Full Name</label>
            <input
              className="login-input"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
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
            {errors.email && <p className="error">{errors.email}</p>}
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
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button 
              className="login-submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
