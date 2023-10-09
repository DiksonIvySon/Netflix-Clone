import React from 'react';
import HomeScreen from './Screens/HomeScreen.js'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen.js';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
