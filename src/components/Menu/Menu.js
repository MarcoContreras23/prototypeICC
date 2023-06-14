import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import Home from '../Home/Home';
import Notifications from '../Notifications/notifications';
import AcquisitionRequest from '../Acquisition/AcquisitionRequest';
import RadicationRequest from '../RadicationRequest/RadicationRequest';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Inicio');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClick = () => {
    window.location.href = '/login';
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Inicio':
        return <Home />;
      case 'Notificaciones':
        return <Notifications />;
      case 'Solicitud adquisición':
        return <AcquisitionRequest />;
      case 'Radicación solicitud':
        return <RadicationRequest />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button className="menu-toggle-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`menu ${menuVisible ? '' : 'hidden'}`}>
        <ul className="menu-list">
          <li
            className={selectedItem === 'Inicio' ? 'selected' : ''}
            onClick={() => handleItemClick('Inicio')}
          >
            Inicio
          </li>
          <li
            className={selectedItem === 'Notificaciones' ? 'selected' : ''}
            onClick={() => handleItemClick('Notificaciones')}
          >
            Notificaciones
          </li>
          <li
            className={selectedItem === 'Solicitud adquisición' ? 'selected' : ''}
            onClick={() => handleItemClick('Solicitud adquisición')}
          >
            Solicitud adquisición
          </li>
          <li
            className={selectedItem === 'Radicación solicitud' ? 'selected' : ''}
            onClick={() => handleItemClick('Radicación solicitud')}
          >
            Radicación solicitud
          </li>
          <li
            className={selectedItem === 'Cerrar sesion' ? 'selected' : ''}
            onClick={handleClick}
          >
            Cerrar sesión
          </li>
        </ul>
      </div>
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default Menu;
