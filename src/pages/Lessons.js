import React from 'react';

import './Lessons.css'
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";

const Lessons = () => {

    const [lessons, setLessons] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/lessons/get_lessons").then(response => {
            setLessons(response.data.message)
        });
    }, [])

    return (
        <div className='geometry-bg lessons-page'>
            <Container>
                {lessons.map(lesson => {
                    return (
                        <div>
                            <h2>{lesson.title}</h2>
                            <p>{lesson.teacher}</p>
                            <small>{lesson.price}</small>
                        </div>
                    )
                })}
            </Container>

        </div>
    );
};

export default Lessons;
