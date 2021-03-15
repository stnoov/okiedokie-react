import React from 'react';
import './styles/Profile.css'
import {Container, Row, Col} from "react-bootstrap";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const Profile = () => {



    return (
        <div className='geometry-bg profile-page'>
            <Container>
                <div className="profile-name">
                    <h2>Artem Sitnov</h2>
                </div>
                <div className="profile-details">
                    <div className="details-okie-points">
                        Мои OkieDokie points: 0 <button className='swap-okie-btn'><SwapHorizIcon /> Обменять</button>
                    </div>
                    <div className="details-email">
                        <span className="current-email">Почта: <input className="change-email" type="text" value='stnoov@gmail.com'/></span> <button className='change-email-btn'>Изменить</button>
                    </div>
                    <div className="update-password">
                        Обновить пароль
                        <input className='update-password-input' type="password" placeholder="Старый пароль"/>
                        <input className='update-password-input' type="password" placeholder="Новый пароль"/>
                        <button className='update-password-btn'>Обновить</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Profile;
