import React from 'react';

import FirstSlide from '../images/bring_a_friend.png'
import SecondSlide from '../images/free_lesson.png'
import ThirdSlide from '../images/reg_free.png'

import './Home.css'
import {Container, Row, Col, Carousel} from "react-bootstrap";


const Home = () => {

    return (
        <>

            <div className='geometry-bg home-page'>
                    <Container>
                        <Row className='home-content'>

                        </Row>
                        <Row>
                            <Col>
                                <div className="home-news">
                                    <h2>Актуальные новости</h2>
                                    <div className="news-content">
                                        <div className='news-block'>
                                            <h4>Расписание занятий</h4>
                                            <p>Младшая группа, 10-13 лет Пн. 17:30, Вт. - 10:00, Пт. 15:00 Старшая группа, 13+ Пн. 19:00, Ср. 19:00</p>
                                            <small>30/08/2020 11:08 </small>
                                        </div>
                                        <div className='news-block'>
                                            <h4>Запись на занятие</h4>
                                            <p>Запись на занятия доступна только зарегистрированным участникам. Зарегистрировавшись, вы получаете одно бесплатное занятие в подарок!</p>
                                            <small>30/08/2020 11:08 </small>
                                        </div>
                                        <div className='news-block'>
                                            <h4>Расписание занятий</h4>
                                            <p>Младшая группа, 10-13 лет Пн. 17:30, Вт. - 10:00, Пт. 15:00 Старшая группа, 13+ Пн. 19:00, Ср. 19:00</p>
                                            <small>24/08/2020 21:08  </small>
                                        </div>
                                        <div className='news-block'>
                                            <h4>Дорогой друг!</h4>
                                            <p>Рады приветствовать тебя на новом сайте Okie Dokie! Выбирай занятие и приходи практиковать разговорный английский вместе с нами!</p>
                                            <small>11/08/2020 20:08  </small>
                                        </div>
                                        <div className='news-block'>
                                            <h4>Расписание занятий</h4>
                                            <p>Младшая группа, 10-13 лет Пн. 17:30, Вт. - 10:00, Пт. 15:00 Старшая группа, 13+ Пн. 19:00, Ср. 19:00</p>
                                            <small>30/08/2020 11:08 </small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

            </div>
        </>

    );
};

export default Home;
