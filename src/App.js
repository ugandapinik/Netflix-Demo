import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen' 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
              <Route path="/text" element={<h1>WRLCOME</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
