import { useState } from "react";

const useRegister = (initialState = { name: "", email: "", password: "", confirmPassword: "" }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useRegister;
