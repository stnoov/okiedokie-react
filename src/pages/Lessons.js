import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './styles/Lessons.css'
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Logo from "../images/okie-dokie.logo.png";
import BookLesson from '../components/book-lesson'
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "#fff",
            ":focus": {
                outline: 0
            }
        }
    }
}));

const Lessons = () => {
    const classes = useStyles();
    const [lessons, setLessons] = React.useState([])
    const [activeType, setActiveType] = React.useState(0)

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
                            <button onClick={() => setActiveType(0)} className={`group-sort-btn ${activeType === 0 ? 'active-group': ''}`}>Все</button>
                            <button onClick={() => setActiveType(1)} className={`group-sort-btn ${activeType === 1 ? 'active-group': ''}`}>Младшая группа</button>
                            <button onClick={() => setActiveType(2)} className={`group-sort-btn ${activeType === 2 ? 'active-group': ''}`}>Старшая группа</button>
                            <button onClick={() => setActiveType(3)} className={`group-sort-btn ${activeType === 3 ? 'active-group': ''}`}>Индивидуальные занятия</button>
                        </div>
                        <div className='date-sort'>
                            Сортировка по: Дате <ArrowUpwardIcon />
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
                        <Pagination classes={{ ul: classes.ul }} count={1} color="secondary"/>
                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default Lessons;
