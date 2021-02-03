import React from 'react';
import { Container } from "react-bootstrap";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Navbar.css'

import Logo from '../../images/okie-dokie.logo.png'

import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {logout} from "../../redux/actions/auth";

const Header = () => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        dispatch(logout());
        history.push("/");
    };

    return (
        <div className="navbar">
            <Container className='header-container'>
                <img src={Logo} alt={Logo} style={{ width: '110px', height: '52px'}}/>
                <div className='nav-links'>
                    <a href="#">Занятия</a>
                    <a href="#">Прайс</a>
                    <a href="#">Связаться</a>
                    <a href="#">Отзывы</a>
                    <div className='user-info'>
                        <div className='user-balance'>
                            {user.balance}₽
                        </div>
                        <span>{user.first_name} {user.last_name}</span>
                        <ExitToAppIcon className='logout-button' onClick={logOut}/>
                    </div>

                </div>
                <div className='header-profile'>

                </div>
            </Container>

        </div>
    );
};

export default Header;
