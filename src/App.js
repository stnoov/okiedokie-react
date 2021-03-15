import './App.css';
import {Route} from 'react-router-dom'

import {Login, Registration, Welcome, Lessons, Contact, Reviews, Admin, Profile, Shop} from "./pages";
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
                <Route path='/' component={Lessons} exact/>
            :
                <Route path='/' component={Welcome} exact/>
            }
            <Route path='/login' component={Login} exact/>
            <Route path='/registration' component={Registration} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/reviews' component={Reviews} exact/>
            <Route path='/shop' component={Shop} exact/>
            {isLoggedIn &&
            <div>
                <Route path='/lessons' component={Lessons} exact/>
                <Route path='/profile' component={Profile} exact/>
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
