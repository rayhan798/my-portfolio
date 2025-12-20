import { useState } from "react";

const useLogin = (initialState = { email: "", password: "" }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useLogin;
