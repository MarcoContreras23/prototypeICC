import React, { useState } from "react";
import "./Minuta.css";

const Minuta = () => {
  const [editable, setEditable] = useState(false);
  const [contratoNo, setContratoNo] = useState("");
  const [contratante, setContratante] = useState("");
  const [representanteCamara, setRepresentanteCamara] = useState("");
  const [nit, setNit] = useState("");
  const [contratista, setContratista] = useState("");
  const [representanteLegal, setRepresentanteLegal] = useState("");
  const [objeto, setObjeto] = useState("");
  const [camaraDocument, setCamaraDocument] = useState(null);
  const [contratistaDocument, setContratistaDocument] = useState(null);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes implementar la lógica para guardar los datos del formulario
    setEditable(false);
  };

  const handleDiscardClick = () => {
    setEditable(false);
    setContratoNo("");
    setContratante("");
    setRepresentanteCamara("");
    setNit("");
    setContratista("");
    setRepresentanteLegal("");
    setObjeto("");
    setCamaraDocument(null);
    setContratistaDocument(null);
  };

  return (
    <div className="minuta-container">
      <div className="header">
        <h2>Anexo 6 proyecto de minuta de contrato</h2>
        {editable ? (
          <>
            <button type="button" onClick={handleSaveClick}>
              Guardar
            </button>
            <button type="button" onClick={handleDiscardClick}>
              Descartar
            </button>
          </>
        ) : (
          <button type="button" onClick={handleEditClick}>
            Editar
          </button>
        )}
      </div>
      <form>
        <div>
          <label htmlFor="contratoNo">Contrato No.</label>
          <input
            type="text"
            id="contratoNo"
            value={contratoNo}
            onChange={(e) => setContratoNo(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="contratante">Contratante</label>
          <input
            type="text"
            id="contratante"
            value={contratante}
            onChange={(e) => setContratante(e.target.value)}
            placeholder="CÁMARA DE COMERCIO DE BOGOTÁ Entidad sin ánimo de lucro, creada mediante Decreto 62 del 11 de febrero de 1891"
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="representanteCamara">Representante de la cámara</label>
          <input
            type="text"
            id="representanteCamara"
            value={representanteCamara}
            onChange={(e) => setRepresentanteCamara(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="nit">NIT</label>
          <input
            type="text"
            id="nit"
            value={nit}
            onChange={(e) => setNit(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="contratista">Contratista</label>
          <input
            type="text"
            id="contratista"
            value={contratista}
            onChange={(e) => setContratista(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="representanteLegal">Representante legal</label>
          <input
            type="text"
            id="representanteLegal"
            value={representanteLegal}
            onChange={(e) => setRepresentanteLegal(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label htmlFor="objeto">Objeto</label>
          <input
            type="text"
            id="objeto"
            value={objeto}
            onChange={(e) => setObjeto(e.target.value)}
            required
            disabled={!editable}
          />
        </div>
        <div>
          <label>
            Perfeccionamiento y ejecución: El presente contrato se perfecciona con la suscripción del mismo por las partes, para su ejecución se requiere de la aprobación de las pólizas, la presentación del documento que acredite la afiliación y pago a régimen de Seguridad Social integral.
          </label>
        </div>
        <div>
          <label>La Cámara</label>
          <input
            type="file"
            accept=".png,.jpeg"
            onChange={(e) => setCamaraDocument(e.target.files[0])}
            disabled={!editable}
          />
        </div>
        <div>
          <label>El Contratista</label>
          <input
            type="file"
            accept=".png,.jpeg"
            onChange={(e) => setContratistaDocument(e.target.files[0])}
            disabled={!editable}
          />
        </div>
      </form>
    </div>
  );
};

export default Minuta;
