import React, { useState, useEffect } from "react";
import validation from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpFormHandler = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
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
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/create",
          values
        );
        // Handle successful registration
        console.log("User registered successfully!");
        navigate("/login"); // Redirect to login page
      } catch (error) {
        console.log("Error creating user:", error);
      }
    };

    if (dataIsCorrect) {
      postData();
    }
  }, [dataIsCorrect, navigate, values]);

  return { handleChange, handleSignUpSubmit, errors, values };
};

export default SignUpFormHandler;
