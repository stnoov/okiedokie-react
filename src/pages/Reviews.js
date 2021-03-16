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

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/reviews/get_reviews").then((response) => {
            setReviews(response.data.message)
            console.log(reviews)
        })
    }, [])

    return (
        <div className='geometry-bg reviews-page'>
            <Container >
                <Row>
                    <Col>
                        <div className="reviews-list">
                            <AddReview />
                            {reviews && reviews.map((elem) => {
                                return <div className="review-item">
                                    <div className="review-name">
                                        {elem.author.first_name} {elem.author.last_name}
                                    </div>
                                    <div className="review-date">
                                        {elem.createdAt}
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
