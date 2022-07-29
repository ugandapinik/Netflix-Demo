import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


function App() {

    const user = null

    return (
    <div className="app">
        <Router>
            {! user ? (
                <Login />
            ) : (
                <Switch>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/text" element={<h1>WRLCOME</h1>} />
                </Switch>
            )}
        </Router>
    </div>
    );
}

export default App;
