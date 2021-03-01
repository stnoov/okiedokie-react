import React from 'react';


import {Modal, Button, Container, Row, Col} from "react-bootstrap";

const LessonModal = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                    <Container>
                        <Row>
                            <Col><input/></Col>
                            <Col><input/></Col>
                        </Row>
                        <Row>
                            <Col><input/></Col>
                            <Col><input/></Col>
                        </Row>
                        <Row>
                            <Col><input/></Col>
                            <Col><input/></Col>
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
