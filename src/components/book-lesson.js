import React from "react";
import {Modal, Button} from "react-bootstrap";
import './book-lesson.css'

export default function BookLesson() {
    const [lgShow, setLgShow] = React.useState(false);

    return (
        <>
            <button className='lesson-submit group-sort-btn' onClick={() => setLgShow(true)}>ЗАПИСАТЬСЯ</button>
            <Modal
                size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}

