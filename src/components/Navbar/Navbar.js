import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
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

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <img src={Logo} alt={Logo}
                             style={{width: '110px', height: '52px'}}/>
                    </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/lessons" style={{textDecoration: 'none'}}>
                                <span className='main-links'>Занятия</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact" style={{textDecoration: 'none'}}>
                                <span className='main-links'>Связаться</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/reviews" style={{textDecoration: 'none'}}>
                                <span className='main-links'>Отзывы</span>
                            </Link>
                        </Nav.Link>
                    </Nav>
                    {user ?
                        <div className='user-info'>
                            <div className='user-balance'>
                                {user && user.balance}₽
                            </div>
                            <span>{user && user.first_name} {user && user.last_name}</span>
                            <ExitToAppIcon className='logout-button' onClick={logOut}/>
                        </div>
                        :
                        <div className='user-info'>
                            <Nav.Link>
                                <Link to="/login" style={{textDecoration: 'none'}}>
                                    <span className='auth-button'>Войти</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/registration" style={{textDecoration: 'none'}}>
                                    <span className='auth-button'>Зарегистрироваться</span>
                                </Link>
                            </Nav.Link>
                        </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
