import { useState, useEffect } from "react";
import validation from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [values, setValues] = useState({
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        values,
        config
      );

      const data = response.data;
      console.log("Login data:", data);

      // Check if the login was successful (modify this condition based on your response structure)
      if (data.token && data._id) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data._id);
        setDataIsCorrect(true);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (dataIsCorrect) {
      navigate("/dashboard");
      console.log("Switching now");
    }
  }, [dataIsCorrect, navigate]);

  return { handleChange, handleFormSubmit, errors, values };
};

export default useForm;
