import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination'
import './styles/Reviews.css'
import AddReview from "../components/add-review";
import axios from "axios";

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

    const [reviews, setReviews] = React.useState()


    const updateReviewsList = () => {
        axios.get("http://localhost:8080/api/reviews/get_reviews").then((response) => {
            setReviews(response.data.message)
            console.log(reviews)
        })
    }

    React.useEffect(() => {
        updateReviewsList()
    }, [])

    return (
        <div className='geometry-bg reviews-page'>
            <Container >
                <Row>
                    <Col>
                        <div className="reviews-list">
                            <AddReview updateReviewsList={updateReviewsList}/>
                            {reviews && reviews.slice(0,4).map((elem) => {
                                return <div className="review-item">
                                    <div className="review-name">
                                        {elem.author.first_name} {elem.author.last_name}
                                    </div>
                                    <div className="review-date">
                                        {(new Date(Date.parse(elem.createdAt))).toLocaleString('ru-ru', {  day: 'numeric', month: 'long' })}
                                    </div>
                                    <div className="review-text">
                                        {elem.message}
                                    </div>
                                </div>
                            })}

                            <Pagination classes={{ ul: classes.ul }} count={10} color="secondary"/>
                        </div>
                    </Col>
                </Row>




            </Container>
        </div>
    );
};

export default Reviews;
