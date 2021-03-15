import './styles/Welcome.css'
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function WelcomePage() {
    return (
        <div className='welcome-page geometry-bg'>
            <Container>
                <Row>
                    <Col>
                        <div className='welcome-main-text'>
                            <span className='first-line'>OKIE</span> <span className='second-line'>DOKIE</span>
                        </div>
                        <div className='welcome-buttons'>
                            <Link to="/login">
                                <button className='welcome-button login-btn'>Войти</button>
                            </Link>
                            <Link to="/registration">
                                <button className='welcome-button'>Зарегистрироваться</button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className='welcome-about-text'>
                            <ul>
                                <li><h2><b>Английский разговорный клуб для детей и подростков</b></h2></li>
                                <div className='about-list'>
                                    <li><b>Okie Dokie!</b> – это отличный способ улучшить навыки говорения на английском
                                        языке!
                                    </li>

                                    <li><b>Okie Dokie!</b> – это непринужденная дружеская атмосфера, где в игровой форме
                                        мы
                                        поможем
                                        тебе пополнить словарный запас, подсказжем, как правильно строятся английские
                                        предложения и что именно нужно говорить в тех или иных ситуациях.
                                    </li>

                                    <li><b>Okie Dokie!</b> – это возможность использования английского языка! Практика
                                        поможет
                                        вам
                                        чувствовать себя более уверенно и комфортно на уроках, экзаменах и реальных
                                        жизненных ситуациях.
                                    </li>
                                    <li>
                                        <Link to="/login">
                                            <button className='welcome-learnmore-button'> Узнать больше</button>
                                        </Link>
                                    </li>
                                </div>
                            </ul>


                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
