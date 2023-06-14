/*import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './components/Menu/Menu'
import './App.css';
import "@fortawesome/fontawesome-free/css/all.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
      </div>
    </Router>
  );
};

export default App;*/
import React, { useState } from 'react';
import Login from './components/login/Login';
import Menu from './components/Menu/Menu';
import MenuContratc from './components/ContratcMenu/ContratcMenu';


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
    </div>
  );
};

export default App;
