import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/TareaFormulario.css";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => {
    setInput(e.target.value);
    /* console.log(e.target.value); */
  };
  const manejarEnvio = (e) => {
    e.preventDefault();
    /* console.log("Enviando"); */
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    console.log(tareaNueva);
    props.onSubmit(tareaNueva);
  };
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-imput"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
