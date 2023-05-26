import React from 'react';
import './App.css';
import useForm from './LoginHandler';
import { Link } from 'react-router-dom';

const Login = ({ submitForm }) => {
  const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleFormSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-icon">
                    <i className='bx bxl-facebook-circle'></i>
                  </button>

                  <button type="button" className="btn btn-icon btn-floating mx-1">
                    <i className='bx bxl-twitter'></i>
                  </button>

                  <button type="button" className="btn btn-icon btn-floating mx-1">
                    <i className='bx bxl-linkedin-square'></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>


                <div className="form-outline mb-4">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg login-input"
                    placeholder="Enter a valid email address"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className='login-error'>{errors.email}</p>}
                </div>


                <div className="form-outline mb-3">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg login-input"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className='login-error'>{errors.password}</p>}
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div>
                  <button
                    className='btn-login btn-lg'
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/signup" className="link-danger">Register</Link>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
