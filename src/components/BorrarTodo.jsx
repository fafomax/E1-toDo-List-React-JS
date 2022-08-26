import React from "react";
import "../styles/BorrarTodo.css"

function BorrarTodo() {
    return (
        <div className="contenedor-boton-borrar">
        <button className="boton-borrar" onClick={() => window.location.reload()}>Borrar Todo</button>
        </div>
        
    )
  }
  
export default BorrarTodo