import React from "react";
import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.firstName.length < 5) {
      setErrorMessage("Ingrese un nombre válido");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Ingrese un email válido");
      return;
    }

    console.log("Datos del formulario:", formData);

    const successMessage = `Gracias ${formData.firstName}, te contactaremos lo antes posible vía email.`;
    alert(successMessage);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setErrorMessage("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Contact me!</h1>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
