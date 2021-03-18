import React from 'react';

import DateTimePicker from 'react-datetime-picker';
import {Modal, Button, Container, Row, Col} from "react-bootstrap";

import {useFormik} from "formik";
import * as Yup from "yup";

import './LessonModal.css'
import ReportProblemIcon from "@material-ui/icons/ReportProblem";

const LessonModal = () => {

    const [show, setShow] = React.useState(false);
    const [dateValue, setDateValue] = React.useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {handleSubmit, handleChange, values, touched, errors, handleBlur, resetForm} = useFormik({
        initialValues: {
            title: '',
            lesson_type: '',
            num_participants: '',
            description: '',
            price: '',
            teacher: '',
            link: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Это поле обязательно'),
            num_participants: Yup.string().required('Это поле обязательно'),
            description: Yup.string().required('Это поле обязательно'),
            price: Yup.string().required('Это поле обязательно'),
            teacher: Yup.string().required('Это поле обязательно'),
            link: Yup.string().required('Это поле обязательно'),
        }),
        onSubmit: () => {
            resetForm()
            console.log('form submitted')
        }
    })



    return (
        <>
            <button className='transparent-button' onClick={handleShow} >
                Добавить занятие
            </button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Добавить занятие</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Container className="add-lesson-container">
                        <Row>
                        <Col className='add-lesson-col' >
                            <label htmlFor="">Заголовок</label>
                            <input
                                onBlur={handleBlur}
                                value={values.title}
                                id="title"
                                onChange={handleChange}
                                type="text"
                                className="add-lesson-input"
                            />
                            {touched.title && errors.title && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.title}
                                </div>
                            )}
                            <label htmlFor="">Тип урока</label>
                            <select
                                name="lessons"
                                onBlur={handleBlur}
                                value={values.lesson_type}
                                id="lesson_type"
                                onChange={handleChange}
                                className='add-lesson-input'>
                                <option value="volvo">Старшая группа</option>
                                <option value="saab">Младшая группа</option>
                                <option value="opel">Индивидуальное занятие</option>
                            </select>

                            <label htmlFor="">Количество участников</label>
                            <input
                                onBlur={handleBlur}
                                value={values.num_participants}
                                id="num_participants"
                                onChange={handleChange}
                                type="text"
                                className="add-lesson-input"
                            />
                            {touched.num_participants && errors.num_participants && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.num_participants}
                                </div>
                            )}

                            <label htmlFor="">Описание урока</label>
                            <textarea
                                className='lesson-description-textarea'
                                onBlur={handleBlur}
                                value={values.description}
                                id="description"
                                onChange={handleChange}
                                cols="30"
                                rows="10" />
                            {touched.description && errors.description && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.description}
                                </div>
                            )}


                        </Col>
                        <Col className='add-lesson-col'>

                            <label htmlFor="">Цена в ОС</label>
                            <input
                                onBlur={handleBlur}
                                value={values.price}
                                id="price"
                                onChange={handleChange}
                                type="text"
                                className="add-lesson-input"
                            />
                            {touched.price && errors.price && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.price}
                                </div>
                            )}

                            <label htmlFor="">Учитель</label>
                            <input
                                onBlur={handleBlur}
                                value={values.teacher}
                                id="teacher"
                                onChange={handleChange}
                                type="text"
                                className="add-lesson-input"
                            />
                            {touched.teacher && errors.teacher && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.teacher}
                                </div>
                            )}

                            <label htmlFor="">Ссылка на урок</label>
                            <input
                                onBlur={handleBlur}
                                value={values.link}
                                id="link"
                                onChange={handleChange}
                                type="text"
                                className="add-lesson-input"/>
                            {touched.link && errors.link && (
                                <div className=''><ReportProblemIcon
                                    className=''/>{errors.link}
                                </div>
                            )}

                            <label htmlFor="">Дата и время</label>
                            <DateTimePicker
                                locale={'ru-ru'}
                                onChange={setDateValue}
                                value={dateValue}
                            />
                        </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onSubmit={handleSubmit} type="submit">
                        Сохранить
                    </Button>
                </Modal.Footer>
            </form>
            </Modal>
        </>
    );
}

export default LessonModal;
