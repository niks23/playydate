import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewList from '../../Components/review/reviewList';
import AddReview from '../../Components/review/addReview';
import './reviews.scss';

class reviews extends Component {
    render() {
        return (
            <div className="reviews">                                    
                    <AddReview />
                    <ReviewList reviews={this.props.reviews}/>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}
 


export default connect(mapStateToProps)(reviews);

