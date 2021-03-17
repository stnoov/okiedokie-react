import React from 'react';

import DateTimePicker from 'react-datetime-picker';
import {Modal, Button, Container, Row, Col} from "react-bootstrap";

import './LessonModal.css'

const LessonModal = () => {

    const [show, setShow] = React.useState(false);

    const [value, onChange] = React.useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(value.toLocaleString().slice(0, 21).replace(',', ' ').replace(/\//g, '-'));

    return (
        <>
            <button className='transparent-button' onClick={handleShow} >
                Добавить занятие
            </button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Добавить занятие</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="add-lesson-container">
                        <Row>
                        <Col className='add-lesson-col' >
                            <label htmlFor="">Заголовок</label>
                            <input type="text" className="add-lesson-input"/>
                            <label htmlFor="">Тип урока</label>
                            <select name="lessons" id="lessons" className='add-lesson-input'>
                                <option value="volvo">Старшая группа</option>
                                <option value="saab">Младшая группа</option>
                                <option value="opel">Индивидуальное занятие</option>
                            </select>
                            <label htmlFor="">Количество участников</label>
                            <input type="text" className="add-lesson-input"/>
                            <label htmlFor="">Описание урока</label>
                            <textarea className='lesson-description-textarea' name="" id="" cols="30" rows="10"></textarea>
                        </Col>
                        <Col className='add-lesson-col'>
                            <label htmlFor="">Цена в ОС</label>
                            <input type="text" className="add-lesson-input"/>
                            <label htmlFor="">Учитель</label>
                            <input type="text" className="add-lesson-input"/>
                            <label htmlFor="">Ссылка на урок</label>
                            <input type="text" className="add-lesson-input"/>
                            <label htmlFor="">Дата и время</label>
                            <DateTimePicker
                                locale={'ru-ru'}
                                onChange={onChange}
                                value={value}
                            />
                        </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LessonModal;
