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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    const postData = async () => {
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
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (dataIsCorrect) {
      postData();
    }
  }, [dataIsCorrect, values]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      navigate("/dashboard");
      console.log("Switching now");
    }
  }, [errors, dataIsCorrect, navigate]);

  return { handleChange, handleFormSubmit, errors, values };
};

export default useForm;
