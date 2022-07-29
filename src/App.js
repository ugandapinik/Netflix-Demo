import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen' 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <HomeScreen />

        <Router>
            <Switch>
                <Route path="/about"><About /></Route>
                <Route path="/users"><Users /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
