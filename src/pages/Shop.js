import React from 'react';
import './styles/Shop.css';
import {Container, Row, Col} from "react-bootstrap";

const Shop = () => {
    return (
        <div className='geometry-bg shop-page'>
            <Container>
                <Row>
                    <Col>
                        <h1>Пополнить счёт</h1>
                        <p className='shop-header-description'>Оплачивая данный товар, вы получаете Okie Classes, за которые вы можете забронировать себе место на занятие. Цены на занятия могут варироваться в зависимости от типа занятия.</p>
                    </Col>
                </Row>
                <Row style={{marginTop: 50}}>
                    <Col xs={12} md={4}>
                        <div className="shop-elem">
                            <div className="shop-elem-header">
                                1 Okie Class
                            </div>
                            <div className="shop-elem-description">
                                Оплачивая данный пакет, вы получаете 1 занятие по цене 160₽, а также поддерживаете нашу команду
                            </div>
                            <div className="shop-elem-btn">
                                <button className='submit-order-btn'>Оплатить</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="shop-elem">
                            <div className="shop-elem-header">
                                5 Okie Classes
                            </div>
                            <div className="shop-elem-description">
                                Оплачивая данный пакет, вы получаете 1 занятие по цене 160₽, а также поддерживаете нашу команду
                            </div>
                            <div className="shop-elem-btn">
                                <button className='submit-order-btn'>Оплатить</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="shop-elem">
                            <div className="shop-elem-header">
                                10 Okie Classes
                            </div>
                            <div className="shop-elem-description">
                                Оплачивая данный пакет, вы получаете 1 занятие по цене 160₽, а также поддерживаете нашу команду
                            </div>
                            <div className="shop-elem-btn">
                                <button className='submit-order-btn'>Оплатить</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;
