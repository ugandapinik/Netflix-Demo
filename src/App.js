import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {auth} from './firebase'

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
                    <Route exact path="/profile" element={<ProfileScreen />} />
                </Switch>
            )}
        </Router>
    </div>
    );
}

export default App;
