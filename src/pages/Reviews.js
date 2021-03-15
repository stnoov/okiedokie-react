import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination'
import './styles/Reviews.css'

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

const Reviews = () => {

    const classes = useStyles();

    return (
        <div className='geometry-bg reviews-page'>
            <Container >
                <Row>
                    <Col>
                        <div className="reviews-list">
                            <button className='add-review-btn'>Оставить отзыв</button>
                            <div className="review-item">
                                <div className="review-name">
                                    Artem Sitnov
                                </div>
                                <div className="review-date">
                                    15 Марта, 2021
                                </div>
                                <div className="review-text">
                                    Всего за месяц участия в разговорном клубе я преодолела языковой барьер, теперь не
                                    страшно говорить на любые темы. И отдельное спасибо за драйв в викторинах Kahoot!
                                </div>
                            </div>

                            <div className="review-item">
                                <div className="review-name">
                                    Artem Sitnov
                                </div>
                                <div className="review-date">
                                    15 Марта, 2021
                                </div>
                                <div className="review-text">
                                    Всего за месяц участия в разговорном клубе я преодолела языковой барьер, теперь не
                                    страшно говорить на любые темы. И отдельное спасибо за драйв в викторинах Kahoot!
                                </div>
                            </div>

                            <div className="review-item">
                                <div className="review-name">
                                    Artem Sitnov
                                </div>
                                <div className="review-date">
                                    15 Марта, 2021
                                </div>
                                <div className="review-text">
                                    Всего за месяц участия в разговорном клубе я преодолела языковой барьер, теперь не
                                    страшно говорить на любые темы. И отдельное спасибо за драйв в викторинах Kahoot!
                                </div>
                            </div>
                            <Pagination classes={{ ul: classes.ul }} count={10} color="secondary"/>
                        </div>
                    </Col>
                </Row>




            </Container>
        </div>
    );
};

export default Reviews;
