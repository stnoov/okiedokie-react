import React from 'react';
import {Container} from "react-bootstrap";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Navbar.css'

import Logo from '../../images/okie-dokie.logo.png'

import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {logout} from "../../redux/actions/auth";

const Header = () => {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        dispatch(logout());
        history.push("/");
    };

    return (
        <div className="navbar">
            <Container className='header-container'>
                <Link to="/home" style={{textDecoration: 'none'}}>
                    <img src={Logo} alt={Logo} style={{width: '110px', height: '52px'}}/>
                </Link>
                <div className='nav-links'>
                    <Link to="/lessons" style={{textDecoration: 'none'}}>
                        <span className='main-links'>Занятия</span>
                    </Link>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                        <span className='main-links'>Связаться</span>
                    </Link>
                    <Link to="/reviews" style={{textDecoration: 'none'}}>
                        <span className='main-links'>Отзывы</span>
                    </Link>
                    {user.roles.includes("ROLE_ADMIN") &&
                    <Link to="/admin" style={{textDecoration: 'none'}}>
                        <span className='main-links'>Администратор</span>
                    </Link>
                    }


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
