import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AcquisitionRequest.css';
const AcquisitionRequest = () => {
  const [formValues, setFormValues] = useState({
    documentType: '',
    store: '',
    budgetArea: '',
    department: '',
    projectCode: '',
    justification: ''
  });

  const [showConfirmationForm, setShowConfirmationForm] = useState(false);
  const history = useHistory();

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationForm(true);
  };

  const handleConfirmationFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario de confirmación
    // y realizar cualquier otra acción necesaria
    // ...

    // Después de enviar, redirige a la vista principal del componente de Solicitud de Adquisición
    history.push('/solicitud-adquisicion');
  };

  const handleCancel = () => {
    history.push('/solicitud-adquisicion');
  };

  return (
    <div className="acquisition-request-container">
      {showConfirmationForm ? (
        <div className="confirmation-form">
          <h2>Confirmación de envío</h2>
          <p>Completa los siguientes campos para enviar la solicitud:</p>
          <form onSubmit={handleConfirmationFormSubmit}>
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Asunto:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>

            <label htmlFor="attachments">Adjuntar archivos:</label>
            <input type="file" id="attachments" name="attachments" accept=".png, .jpg" multiple required />

            <div className="button-group">
              <button type="button" onClick={handleCancel}>Cancelar</button>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="acquisition-form">
          <h2>Universidad de Caldas</h2>
          <h3>Formato Solicitud de Adquisición - Sistema General de Regalías</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="form-section">
              <h4>Información General</h4>
              <div className="form-group">
                <label>Tipo de documento:</label>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="SC"
                      checked={formValues.documentType === 'SC'}
                      onChange={handleFormChange}
                      required
                    />
                    SC
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="SDS"
                      checked={formValues.documentType === 'SDS'}
                      onChange={handleFormChange}
                      required
                    />
                    SDS
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="SDC"
                      checked={formValues.documentType === 'SDC'}
                      onChange={handleFormChange}
                      required
                    />
                    SDC
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="Noc"
                      checked={formValues.documentType === 'Noc'}
                      onChange={handleFormChange}
                      required
                    />
                    Noc
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="store">Almacén:</label>
                <input type="text" id="store" name="store" value={formValues.store} onChange={handleFormChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="budgetArea">Área de Presupuesto:</label>
                <input type="text" id="budgetArea" name="budgetArea" value={formValues.budgetArea} onChange={handleFormChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="department">Dependencia:</label>
                <input type="text" id="department" name="department" value={formValues.department} onChange={handleFormChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="projectCode">Código de Proyecto:</label>
                <input type="text" id="projectCode" name="projectCode" value={formValues.projectCode} onChange={handleFormChange} required />
              </div>
            </div>

            <div className="form-section">
              <h4>Justificación</h4>
              <div className="form-group">
                <label htmlFor="justification">Descripción de la necesidad:</label>
                <textarea id="justification" name="justification" value={formValues.justification} onChange={handleFormChange} required></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Listado de Firmas</h4>
              <div className="form-group">
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signature">Firma:</label>
                    <div className="file-input">
                      <input type="file" id="signature" accept=".png,.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="button-group">
              <button type="button" onClick={handleCancel}>Cancelar</button>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AcquisitionRequest;
