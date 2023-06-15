import React, { useState } from 'react';
import Login from './components/login/Login';
import Menu from './components/Menu/Menu';
import MenuContratc from './components/ContratcMenu/ContratcMenu';
import MenuTarifa from './components/MenuTarifa/MenuTarifa'

const App = () => {
  const [role, setRole] = useState('');

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div>
      {role === '' && <Login onLogin={handleLogin} />}
      {role === 'user' && <Menu />}
      {role === 'admin' && <MenuContratc />}
      {role === 'user2' && <MenuTarifa />}
    </div>
  );
};

export default App;
