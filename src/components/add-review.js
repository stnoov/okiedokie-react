import React from "react";
import {Modal, Button, Container, Row, Col} from "react-bootstrap";
import '../pages/styles/Reviews.css'

export default function AddReview() {
    const [lgShow, setLgShow] = React.useState(false);

    return (
        <>
            <button className='add-review-btn' onClick={() => setLgShow(true)}>Оставить отзыв</button>
            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-md">
                       Оставить отзыв
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <textarea className='review-content' placeholder='Напишите, что вы думаете о нас'>
                                </textarea>
                                <button className='submit-review-btn'>Отправить</button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

