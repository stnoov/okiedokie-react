import React from 'react';
import './styles/Profile.css'
import {Container, Row, Col, Table} from "react-bootstrap";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HistoryIcon from '@material-ui/icons/History';

const Profile = () => {


    const [activeTab, setActiveTab] = React.useState(0)
    return (
        <div className='geometry-bg profile-page'>
            <Container>
                <div className="profile-header">
                    <div className={`profile-tab ${activeTab === 0 ? 'active-tab' : ''}`} onClick={() => setActiveTab(0)}><AccountCircleIcon fontSize={"large"}/>Профиль</div>
                    <div className={`history-tab ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => setActiveTab(1)}><HistoryIcon fontSize={"large"}/>История</div>
                </div>
                {activeTab === 0 ?
                    <div className="profile-details">
                        <div className="details-okie-points">
                            Мои OkieDokie points: 0 <button className='swap-okie-btn'><SwapHorizIcon /> Обменять</button>
                        </div>
                        <div className="details-email">
                            <span className="current-email">Почта:</span>
                            <input className="change-email" type="text" value='stnoov@gmail.com'/>
                            <button className='change-email-btn'>Изменить</button>
                        </div>
                        <div className="update-password">
                            Обновить пароль
                            <input className='update-password-input' type="password" placeholder="Старый пароль"/>
                            <input className='update-password-input' type="password" placeholder="Новый пароль"/>
                            <button className='update-password-btn'>Обновить</button>
                        </div>
                    </div>
                :
                <div className='profile-history'>
                    <Table striped responsive borderless hover variant="light">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Продукт</th>
                            <th>Дата</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>1 OC</td>
                            <td>4 Марта</td>
                            <td>Оплачено</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>5 OC</td>
                            <td>4 Марта</td>
                            <td>Оплачено</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>10 OC</td>
                            <td>4 Марта</td>
                            <td>Оплачено</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                }

            </Container>
        </div>
    );
};

export default Profile;
