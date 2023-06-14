import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Menu/Menu';

import Home from '../Home/Home';
import Notifications from '../Notifications/notifications';
import Minuta from '../Minuta/Minuta';
import Login from '../login/Login';

const handleClick = () => {
    window.location.href = '/login';
};

const MenuContratc = () => {
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
            case 'Minuta':
                return <Minuta />;
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
                        className={selectedItem === 'Minuta' ? 'selected' : ''}
                        onClick={() => handleItemClick('Minuta')}
                    >
                        Minuta contrato
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

export default MenuContratc;
