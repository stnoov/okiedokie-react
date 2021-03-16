import React from "react";
import {Modal, Container, Row, Col} from "react-bootstrap";
import '../pages/styles/Reviews.css'
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import axios from "axios";

export default function AddReview(props) {

    const [lgShow, setLgShow] = React.useState(false);
    const [message, setMessage] = React.useState('')
    const {user, isLoggedIn} = useSelector(state => state.auth);

    const notifyError = () => toast.error("Оставлять отзывы могут только зарегистрированные пользователи!");
    const notify = () => toast("Спасибо за ваш отзыв!");

    const showModal = () => {
        if(isLoggedIn) {
            setLgShow(true)
        } else {
            notifyError()
        }
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => {
        axios.post("http://localhost:8080/api/reviews/create_review", {
            message: message
        }, {
            headers: {
                'x-access-token': user.accessToken
            }
        }).then((response) => {
            if(response.data.message === 1) {
                setLgShow(false);
                notify()
                props.updateReviewsList()
            }
        })
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
                                <textarea className='review-content' placeholder='Напишите, что вы думаете о нас' value={message} onChange={handleChange}>
                                </textarea>
                                <button className='submit-review-btn' onClick={() => handleSubmit()}>Отправить</button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

