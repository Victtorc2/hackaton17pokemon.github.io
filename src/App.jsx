import React from 'react';
import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar';
import './styles/app.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;