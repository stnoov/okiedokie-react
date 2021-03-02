import React from 'react';

import './Lessons.css'
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

const Lessons = () => {

    const [lessons, setLessons] = React.useState([])

    const getDate = () => {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10)
        {
            dd='0'+dd;
        }

        if(mm<10)
        {
            mm='0'+mm;
        }
        today = yyyy+'-'+mm+'-'+dd;
        return today
    }

    // React.useEffect(() => {
    //     axios.get("http://localhost:8080/api/lessons/get_lessons").then(response => {
    //         setLessons(response.data.message)
    //     });
    // }, [])

    return (
        <div className='geometry-bg lessons-page'>
            <Container>
                <Row>
                    <Col xs={3} className='sort_column'>
                        <div className="sort_header">
                            <h4>Сортировка занятий</h4>
                        </div>
                        <div className='sort_body'>
                            <div className='sort_group'>
                                <h5>Группа</h5>
                                <div>
                                    <input type="radio" id="male" name="gender" value="male"/>
                                    <label htmlFor="male">Старшая</label>
                                    <input type="radio" id="female" name="gender" value="female"/>
                                    <label htmlFor="female">Младшая</label>
                                </div>
                            </div>
                            <div className="sort_date">
                                <h5>Дата</h5>
                                <div>
                                    <input type="date" id="from" name="from"
                                           value={getDate()}
                                           min={getDate()} max="2030-12-31" />
                                    <input type="date" id="from" name="from"
                                           value={getDate()}
                                           min={getDate()} max="2030-12-31" />
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xs={9}>
                        DATA
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Lessons;
