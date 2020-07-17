import React from 'react'
import Ratings from './ratings'

export default function addReview() {
    return (
        <div className="addreview">
            <div className="wrapper">
                <h2>Reviews</h2>
                <Ratings />
                <div className="review-text">        
                    <label>Write a Review</label>
                    <textarea
                        // value={this.state.textAreaValue}
                        // onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Post</button>            
            </div>
        </div>
    )
}
