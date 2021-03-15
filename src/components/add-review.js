import React from "react";
import {Modal, Container, Row, Col} from "react-bootstrap";
import '../pages/styles/Reviews.css'
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export default function AddReview() {

    const [lgShow, setLgShow] = React.useState(false);

    const {user, isLoggedIn} = useSelector(state => state.auth);

    const notifyError = () => toast.error("Оставлять отзывы могут только зарегистрированные пользователи!");

    const showModal = () => {
        if(isLoggedIn) {
            setLgShow(true)
        } else {
            notifyError()
        }

    }
    return (
        <>
            <button className='add-review-btn' onClick={() => showModal()}>Оставить отзыв</button>
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

