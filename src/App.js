import './App.css';
import {Route} from 'react-router-dom'

import {Login, Registration, Welcome, Home, Lessons, Contact, Reviews, Admin} from "./pages";
import {ToastContainer} from 'react-toastify';

import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Navbar/Navbar";
import React from "react";

function App() {

    const {user, isLoggedIn} = useSelector(state => state.auth);

    return (
        <div className="App">
            <Header/>
            {isLoggedIn ?
                <Route path='/' component={Home} exact/>
            :
                <Route path='/' component={Welcome} exact/>
            }
            <Route path='/login' component={Login} exact/>
            <Route path='/registration' component={Registration} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/reviews' component={Reviews} exact/>
            {isLoggedIn &&
            <div>
                <Route path='/home' component={Home} exact/>
                <Route path='/lessons' component={Lessons} exact/>

                {user.roles.includes("ROLE_ADMIN") &&
                <Route path='/admin' component={Admin} exact/>
                }
            </div>
            }
            <ToastContainer/>
        </div>
    );
}

export default App;
