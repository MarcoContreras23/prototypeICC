import React, { useState } from "react";
import "./RadicationRequest.css";

const RadicationRequest = () => {
  const [items, setItems] = useState([
    { name: "Solicitud de adquisición", file: null, checked: false },
    { name: "Cotizaciones del estudio de mercado", file: null, checked: false },
    { name: "Certificado de disponibilidad presupuestal", file: null, checked: false },
    { name: "El Documento en el que conste el aval de la oficina asesora", file: null, checked: false },
    { name: "Documento en el que conste el aval del comité WEB", file: null, checked: false },
    { name: "Documento en el que conste el aval del comité de infraestructura", file: null, checked: false }
  ]);

  const handleFileChange = (index, file) => {
    const updatedItems = [...items];
    updatedItems[index].file = file;
    updatedItems[index].checked = !!file;
    setItems(updatedItems);
  };

  const handleCancelClick = () => {
    const updatedItems = items.map(item => ({ ...item, file: null, checked: false }));
    setItems(updatedItems);
  };

  const handleSendClick = () => {
    const selectedItems = items.filter(item => item.checked);
    if (selectedItems.length >= 3) {
      // Aquí puedes implementar la lógica para enviar la solicitud
      console.log("Solicitud enviada");
    } else {
      console.log("No cumple con los documentos mínimos requeridos");
    }
  };

  return (
    <div className="radication-container">
      <h2>Radication Request</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="item-checkbox">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}}
                disabled={!!item.file}
              />
              <label>{item.name}</label>
            </div>
            <div className="item-file">
              <label className="file-label">
                {item.file ? item.file.name : "Adjuntar archivo"}
                <input
                  type="file"
                  accept=".png,.jpeg"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  disabled={item.checked}
                />
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button type="button" onClick={handleCancelClick}>
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSendClick}
          disabled={items.filter(item => item.checked).length < 3}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default RadicationRequest;
