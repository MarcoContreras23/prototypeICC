import React, { useState } from "react";
import "./ModificacionTarifa.css"; 

const ModificacionTarifa = () => {
  const [items, setItems] = useState([
    { referencia: "001", descripcion: "Tarifa 1", valor: "10.00" },
    { referencia: "002", descripcion: "Tarifa 2", valor: "20.00" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [referencia, setReferencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleModificar = (item) => {
    setSelectedItem(item);
    setReferencia(item.referencia);
    setDescripcion(item.descripcion);
    setValor(item.valor);
    setShowModal(true);
  };

  const handleDescartar = () => {
    setShowModal(false);
    setReferencia("");
    setDescripcion("");
    setValor("");
  };

  const handleGuardar = () => {
    // Validar los campos requeridos
    if (referencia.trim() === "" || descripcion.trim() === "" || valor.trim() === "") {
      alert("Por favor completa todos los campos requeridos.");
      return;
    }

    // Actualizar el item en la lista
    const updatedItems = items.map((item) => {
      if (item.referencia === selectedItem.referencia) {
        return {
          ...item,
          referencia: referencia,
          descripcion: descripcion,
          valor: valor,
        };
      }
      return item;
    });

    setItems(updatedItems);
    setShowModal(false);
    setReferencia("");
    setDescripcion("");
    setValor("");
  };

  const filteredItems = items.filter((item) =>
    item.referencia.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar por referencia"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.map((item) => (
          <li key={item.referencia} className="item">
            <span className="item-info">{item.referencia}</span>
            <span className="item-info">{item.descripcion}</span>
            <span className="item-info">{item.valor}</span>
            <button className="modify-button" onClick={() => handleModificar(item)}>
              Modificar
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <form>
            <label>
              Referencia:
              <input
                type="text"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                required
                className="input-field"
              />
            </label>
            <label>
              Descripción:
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
                className="input-field"
              />
            </label>
            <label>
              Valor:
              <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
                className="input-field"
              />
            </label>
            <div className="modal-buttons">
              <button type="button" onClick={handleDescartar} className="cancel-button">
                Descartar
              </button>
              <button type="button" onClick={handleGuardar} className="save-button">
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModificacionTarifa;
