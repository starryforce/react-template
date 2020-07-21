import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
// import AppCash from './features/AppCash';
import AppLogin from './features/AppLogin';

function App() {
  return (
    <Router>
      <AppLogin></AppLogin>
    </Router>
  );
}

export default App;
