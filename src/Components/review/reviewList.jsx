import React from 'react';
import user from '../../assets/user1.png';
import { FaStar } from 'react-icons/fa'

const reviewList = props =>  {
    return (
        <div className="comments">
            <div className="wrapper">
                <span>{props.reviews.length} comments</span>               
                <ul>
                { props.reviews.map((review, i) => {
                    return <li key={i}>
                        <div className="userdetail">
                            <img src={user}></img>
                            {console.log(review)}
                            <div>
                                <h4>{review.uname}</h4>
                                <div className="ratingno">
                                {[...Array(5)].map((star, i)=> {
                                        const ratingValue = review.rating;

                                        return (                                
                                            <FaStar color= {i < ratingValue? 'f16a23': '#e4e5e9'} size={12} />
                                        )
                                            
                                        if(ratingValue !== 0) {
                                            ratingValue -= 1
                                        }                                         
                                    })}

                                    <span>{review.date}</span>
                                </div>
                            </div>
                        </div>
                        <p className="userComment">
                            {review.comment}
                        </p>
                    </li>
                })}
            </ul> 
            </div>
        </div>
    )
}

export default reviewList;