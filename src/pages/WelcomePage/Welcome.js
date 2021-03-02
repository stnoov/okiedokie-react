import './Welcome.css'
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function WelcomePage() {
    return (
        <div className='welcome-page geometry-bg'>
            <Container>
                <Row>
                    <Col>
                        <div className='welcome-main-text'>
                            OKIE DOKIE
                        </div>
                        <div className='welcome-buttons'>
                            <Link to="/login">
                                <button className='welcome-login-button'> Войти</button>
                            </Link>
                            <Link to="/registration">
                                <button className='welcome-register-button'> Зарегистрироваться</button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className='welcome-about-text'>
                            <ul>
                                <li>Okie Dokie! - это английский разговорный клуб для детей и подростков.</li>

                                <li>Okie Dokie! – это отличный способ улучшить навыки говорения на английском языке!
                                </li>

                                <li>Okie Dokie! – это непринужденная дружеская атмосфера, где в игровой форме мы поможем
                                    тебе пополнить словарный запас, подсказжем, как правильно строятся английские
                                    предложения и что именно нужно говорить в тех или иных ситуациях.
                                </li>

                                <li>Okie Dokie! – это возможность использования английского языка! Практика поможет вам
                                    чувствовать себя более уверенно и комфортно на уроках, экзаменах и реальных
                                    жизненных ситуациях.
                                </li>
                            </ul>
                            <Link to="/login">
                                <button className='welcome-learnmore-button'> Узнать больше </button>
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
