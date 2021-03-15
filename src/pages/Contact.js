import React from 'react';

import './styles/Contact.css'
import {Container, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";

const Contact = () => {

    const {user} = useSelector(state => state.auth);

    return (
        <div className='geometry-bg contact-page'>
            <Container>
                <h3>Напишите нам</h3>
                <Row>
                    <Col>
                        <div>
                            <input className='contact-input-field' placeholder={user ? user.email : 'Ваша почта'}/>
                            <input className='contact-input-field' placeholder={user ? user.first_name : 'Ваше имя'}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea className='message-text' placeholder='Ваше сообщение' />
                    </Col>
                </Row>
                <Row className='last-row'>
                    <Col>
                        <button className='send-button'>Отправить</button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Contact;
