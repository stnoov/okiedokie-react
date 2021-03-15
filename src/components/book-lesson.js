import React from "react";
import {Modal, Container, Row, Col} from "react-bootstrap";
import './book-lesson.css'

export default function BookLesson() {
    const [lgShow, setLgShow] = React.useState(false);

    return (
        <>
            <button className='lesson-submit group-sort-btn' onClick={() => setLgShow(true)}>ЗАПИСАТЬСЯ</button>
            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-md">
                        Записаться на занятие
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                            <div className='book-lesson-modal-content'>
                                <div className="lesson-id">
                                    Занятие №1
                                </div>
                                <div className="lesson-description">
                                    <ul>
                                        <li>Ведущий: Антонина Ситнова</li>
                                        <li>Тип занятия: Старшая группа</li>
                                        <li>Стоимость: 1 OC</li>
                                    </ul>
                                </div>
                                <button className='modal-submit-btn'>Оплатить 1 OC</button>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

