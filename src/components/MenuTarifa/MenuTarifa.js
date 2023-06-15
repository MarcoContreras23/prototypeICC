import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Menu/Menu';

import Home from '../Home/Home';
import Notifications from '../Notifications/notifications';
import ConsultarTarifa from '../ConsultarTarifa/ConsultarTarifa';
import AgregarTarifa from '../AgregarTarifa/AgregarTarifa';
import ModificacionTarifa from '../ModificacionTarifa/ModificacionTarifa';
import PropuestaResolucion from '../PropuestaResolucion/PropuestaResolucion';
const handleClick = () => {
    window.location.href = '/login';
};

const MenuTarifa = () => {
    const [menuVisible, setMenuVisible] = useState(true);
    const [selectedItem, setSelectedItem] = useState('Inicio');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const renderComponent = () => {
        switch (selectedItem) {
            case 'Inicio':
                return <Home />;
            case 'Notificaciones':
                return <Notifications />;
            case 'Consultar tarifa':
                return <ConsultarTarifa />;
            case 'Modificacion tarifa':
                return <ModificacionTarifa />;
            case 'Agregar tarifa':
                return <AgregarTarifa />;
            case 'Propuesta resolución':
                return <PropuestaResolucion />;
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
                        className={selectedItem === 'Consultar tarifa' ? 'selected' : ''}
                        onClick={() => handleItemClick('Consultar tarifa')}
                    >
                        Consultar tarifa
                    </li>
                    <li
                        className={selectedItem === 'Modificacion tarifa' ? 'selected' : ''}
                        onClick={() => handleItemClick('Modificacion tarifa')}
                    >
                        Modificar tarifa
                    </li>
                    <li
                        className={selectedItem === 'Agregar tarifa' ? 'selected' : ''}
                        onClick={() => handleItemClick('Agregar tarifa')}
                    >
                        Agregar tarifa
                    </li>
                    <li
                        className={selectedItem === 'Analisis de costos' ? 'selected' : ''}
                        onClick={() => handleItemClick('Analisis de costos')}
                    >
                        Analisis de costos
                    </li>
                    <li
                        className={selectedItem === 'Propuesta resolución' ? 'selected' : ''}
                        onClick={() => handleItemClick('Propuesta resolución')}
                    >
                        Propuesta resolución
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

export default MenuTarifa;
