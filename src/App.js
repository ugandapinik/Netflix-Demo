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
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/userSlice";


function App() {
    const user = useSelector(selectUser)
     const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth){
                console.log(userAuth)
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            }else{
                // Logged out
                dispatch(logout)
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
