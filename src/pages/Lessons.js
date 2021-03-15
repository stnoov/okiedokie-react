import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './styles/Lessons.css'
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Logo from "../images/okie-dokie.logo.png";
import BookLesson from '../components/book-lesson'

const Lessons = () => {

    const [lessons, setLessons] = React.useState([])


    // React.useEffect(() => {
    //     axios.get("http://localhost:8080/api/lessons/get_lessons").then(response => {
    //         setLessons(response.data.message)
    //     });
    // }, [])

    return (
        <div className='geometry-bg lessons-page'>
            <Container>
                <Row className='lessons-sort-row'>
                    <div className='lessons-sort'>
                        <div className="group-sort">
                            <button className='group-sort-btn active-group'>Все</button>
                            <button className='group-sort-btn'>Младшая группа</button>
                            <button className='group-sort-btn'>Старшая группа</button>
                            <button className='group-sort-btn'>Индивидуальные занятия</button>
                        </div>
                        <div className='date-sort'>
                            Сортировка по: Дате <ArrowDownwardIcon />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="lessons-list">
                        <div className="lesson-list-item">
                            <div className="lesson-item-image">
                                <img src={Logo} alt={Logo}
                                     style={{width: '110px', height: '52px'}}/>
                            </div>
                            <div className='lesson-item-text'>
                                <div className="lesson-item-title">
                                    Through the media
                                </div>
                                <div className="lesson-item-description">
                                    Обсудим лексику на тему «Средства массовой информации».
                                </div>
                                <div className='lesson-item-teacher'>
                                    <div className="teacher-text">ВЕДУЩИЙ</div>
                                    <div className="teacher-name">Антонина Ситнова</div>
                                </div>
                            </div>
                            <div className="lesson-item-info">
                                <div className="lesson-item-date">
                                    <div className="lesson-item-time">
                                        09:00
                                    </div>
                                    <div className="lesson-item-day">
                                        Пятница, 5 Марта
                                    </div>
                                </div>
                                <div>
                                    <BookLesson />
                                </div>
                                <div className="lesson-item-places-left">
                                    Осталось мест: 8
                                </div>
                            </div>
                        </div>

                        <div className="lesson-list-item">
                            <div className="lesson-item-image">
                                <img src={Logo} alt={Logo}
                                     style={{width: '110px', height: '52px'}}/>
                            </div>
                            <div className='lesson-item-text'>
                                <div className="lesson-item-title">
                                    Through the media
                                </div>
                                <div className="lesson-item-description">
                                    Обсудим лексику на тему «Средства массовой информации».
                                </div>
                                <div className='lesson-item-teacher'>
                                    <div className="teacher-text">ВЕДУЩИЙ</div>
                                    <div className="teacher-name">Антонина Ситнова</div>
                                </div>
                            </div>
                            <div className="lesson-item-info">
                                <div className="lesson-item-date">
                                    <div className="lesson-item-time">
                                        09:00
                                    </div>
                                    <div className="lesson-item-day">
                                        Пятница, 5 Марта
                                    </div>
                                </div>
                                <div>
                                    <BookLesson />
                                </div>
                                <div className="lesson-item-places-left">
                                    Осталось мест: 8
                                </div>
                            </div>
                        </div>

                        <div className="lesson-list-item">
                            <div className="lesson-item-image">
                                <img src={Logo} alt={Logo}
                                     style={{width: '110px', height: '52px'}}/>
                            </div>
                            <div className='lesson-item-text'>
                                <div className="lesson-item-title">
                                    Through the media
                                </div>
                                <div className="lesson-item-description">
                                    Обсудим лексику на тему «Средства массовой информации».
                                </div>
                                <div className='lesson-item-teacher'>
                                    <div className="teacher-text">ВЕДУЩИЙ</div>
                                    <div className="teacher-name">Антонина Ситнова</div>
                                </div>
                            </div>
                            <div className="lesson-item-info">
                                <div className="lesson-item-date">
                                    <div className="lesson-item-time">
                                        09:00
                                    </div>
                                    <div className="lesson-item-day">
                                        Пятница, 5 Марта
                                    </div>
                                </div>
                                <div>
                                    <BookLesson />
                                </div>
                                <div className="lesson-item-places-left">
                                    Осталось мест: 8
                                </div>
                            </div>
                        </div>

                        <div className="lesson-list-item">
                            <div className="lesson-item-image">
                                <img src={Logo} alt={Logo}
                                     style={{width: '110px', height: '52px'}}/>
                            </div>
                            <div className='lesson-item-text'>
                                <div className="lesson-item-title">
                                    Through the media
                                </div>
                                <div className="lesson-item-description">
                                    Обсудим лексику на тему «Средства массовой информации».
                                </div>
                                <div className='lesson-item-teacher'>
                                    <div className="teacher-text">ВЕДУЩИЙ</div>
                                    <div className="teacher-name">Антонина Ситнова</div>
                                </div>
                            </div>
                            <div className="lesson-item-info">
                                <div className="lesson-item-date">
                                    <div className="lesson-item-time">
                                        09:00
                                    </div>
                                    <div className="lesson-item-day">
                                        Пятница, 5 Марта
                                    </div>
                                </div>
                                <div>
                                    <BookLesson />
                                </div>
                                <div className="lesson-item-places-left">
                                    Осталось мест: 8
                                </div>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default Lessons;
