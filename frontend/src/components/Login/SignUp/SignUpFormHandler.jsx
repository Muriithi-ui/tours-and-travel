import { useState, useEffect } from 'react';
import signUpValidation from './signUpValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpFormHandler = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    setErrors(signUpValidation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    const postData = async () => {
      try {
        if (dataIsCorrect) {
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };
          await axios.post(
            'http://localhost:5000/api/user',
            values,
            config
          );
          // Handle successful registration
          console.log('User registered successfully!');
          navigate('/login'); // Redirect to login page
        } 
      } catch (error) {
        console.log('Error creating user:', error);
      }
    };

    postData();
  }, [dataIsCorrect, navigate, values]);

  return { handleChange, handleSignUpSubmit, errors, values };
};

export default SignUpFormHandler;
