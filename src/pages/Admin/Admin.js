import React from 'react';

import './Admin.css'
import {Container, Row, Col} from "react-bootstrap";

import UserModal from "./Modals/UserModal";
import LessonModal from "./Modals/LessonModal";

const Admin = () => {
    return (
        <div className='geometry-bg admin-page'>
            <Container>
                <Row>
                    <Col>
                        <LessonModal/>
                        <button className='transparent-button'>Добавить новость</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserModal/>
                        <button className='transparent-button'>Список платежей</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;
