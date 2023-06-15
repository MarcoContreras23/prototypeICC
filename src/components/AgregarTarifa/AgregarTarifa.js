import React, { useState } from "react";
import "./AgregarTarifa.css";

const AgregarTarifa = () => {
  const [showForm, setShowForm] = useState(false);
  const [referencia, setReferencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");

  const handleAgregarTarifa = () => {
    // Validar los campos requeridos
    if (referencia.trim() === "" || descripcion.trim() === "" || valor.trim() === "") {
      alert("Por favor completa todos los campos requeridos.");
      return;
    }

    // Realizar la lógica para agregar la tarifa (ejemplo: enviar una solicitud al servidor)

    // Limpiar los campos y ocultar el formulario
    setReferencia("");
    setDescripcion("");
    setValor("");
    setShowForm(false);

    // Mostrar el mensaje de éxito
    alert("Tarifa creada con éxito.");
  };

  const handleDescartar = () => {
    // Limpiar los campos y ocultar el formulario
    setReferencia("");
    setDescripcion("");
    setValor("");
    setShowForm(false);
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(true)}>Agregar tarifa nueva</button>
      {showForm && (
        <form className="form">
          <label>
            Referencia:
            <input type="text" value={referencia} onChange={(e) => setReferencia(e.target.value)} required />
          </label>
          <label>
            Descripción:
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
          </label>
          <label>
            Valor:
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} required />
          </label>
          <button type="button" onClick={handleDescartar}>Descartar</button>
          <button type="button" onClick={handleAgregarTarifa}>Agregar</button>
        </form>
      )}
    </div>
  );
};

export default AgregarTarifa;
