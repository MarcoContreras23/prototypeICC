import React, { useState } from "react";
import "./ConsultarTarifa.css";

const ConsultarTarifa = () => {
  const [items, setItems] = useState([
    { referencia: "001", descripcion: "Item 1", valor: 10, tipo: "Servicios Especiales" },
    { referencia: "002", descripcion: "Item 2", valor: 15, tipo: "Certificados para ESTUDIANTES MATRICULADOS" },
    { referencia: "003", descripcion: "Item 3", valor: 20, tipo: "Certificados para GRADUADOS RETIRADOS O NO MATRICULADOS" },
    { referencia: "004", descripcion: "Item 4", valor: 25, tipo: "GRADUACIONES" },
    // ...otros 16 items
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredItems = items.filter(
    (item) =>
      item.referencia.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "" || item.tipo === selectedType)
  );

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Buscar por referencia"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedType} onChange={handleFilterChange}>
          <option value="">Todos los tipos</option>
          <option value="Servicios Especiales">Servicios Especiales</option>
          <option value="Certificados para ESTUDIANTES MATRICULADOS">Certificados para ESTUDIANTES MATRICULADOS</option>
          <option value="Certificados para GRADUADOS RETIRADOS O NO MATRICULADOS">Certificados para GRADUADOS RETIRADOS O NO MATRICULADOS</option>
          <option value="GRADUACIONES">GRADUACIONES</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Descripción</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.referencia}</td>
              <td>{item.descripcion}</td>
              <td>{item.valor}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultarTarifa;
