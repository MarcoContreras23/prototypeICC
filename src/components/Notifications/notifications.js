import React, { useState } from 'react';
import './notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Autorización de la solicitud N°123458', status: 'visto', important: true },
    { id: 2, title: 'Actualización de la reunión', status: 'sin ver', important: false },
    { id: 3, title: 'Actualización de la reunión N°565', status: 'sin ver', important: false },
    { id: 4, title: 'Actualización de la reunión N°56500', status: 'sin ver', important: false },
    { id: 5, title: 'Actualización de la reunión N°56557', status: 'sin ver', important: false },
  ]);

  const [filter, setFilter] = useState('todos');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleToggleStatus = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, status: notification.status === 'visto' ? 'sin ver' : 'visto' } : notification
      )
    );
  };

  const handleToggleImportant = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, important: !notification.important } : notification
      )
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'todos') {
      return true;
    }
    return notification.status === filter;
  });

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = notifications.filter((notification) =>
      notification.title.toLowerCase().includes(searchTerm)
    );
    setNotifications(filtered);
  };

  return (
    <div className='container'>
      
      <div className='search-bar'>
        <input type="text" placeholder="Buscar..." onChange={handleSearch} />
        <div className='filter-buttons'>
        <button onClick={() => handleFilterChange('todos')}>Todos</button>
        <button onClick={() => handleFilterChange('sin ver')}>Sin Ver</button>
        <button onClick={() => handleFilterChange('visto')}>Visto</button>
      </div>
      </div>
      <ul className='notification-list'>
        {filteredNotifications.map((notification) => (
          <li className='notification-item' key={notification.id}>
            <span onClick={() => handleToggleStatus(notification.id)}>
              {notification.status === 'visto' ? '✔️' : '❌'}
            </span>
            <span>{notification.title}</span>
            <span onClick={() => handleToggleImportant(notification.id)}>
              {notification.important ? '⭐' : '☆'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
