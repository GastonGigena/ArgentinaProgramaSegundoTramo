import React, { useState } from "react";
import ReactDOM from "react-dom";


const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmarPassword: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de validación o envío del formulario
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formulario.telefono}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formulario.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Confirmar Password:
          <input
            type="password"
            name="confirmarPassword"
            value={formulario.confirmarPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Registro />, rootElement);
