import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {auth} from './firebase'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";


function App() {
    const user = null

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth){
                console.log(userAuth)
            }else{
                // Logged out
            }
        })

        return unsubscribe
    }, [])


    return (
    <div className="app">
        <Router>
            {! user ? (
                <LoginScreen />
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
