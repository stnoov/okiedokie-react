import './App.css';
import {Route} from 'react-router-dom'

import {Login, Registration, Welcome, Home} from "./pages";
import {ToastContainer} from 'react-toastify';

import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Navbar/Navbar";

function App() {

    const {isLoggedIn} = useSelector(state => state.auth);

    return (
        <div className="App">
            <Route path='/' component={Welcome} exact/>
            <Route path='/login' component={Login} exact/>
            <Route path='/registration' component={Registration} exact/>
            {isLoggedIn &&
            <div>
                <Header/>
                <Route path='/home' component={Home} exact/>
            </div>
            }
            <ToastContainer/>
        </div>
    );
}

export default App;
