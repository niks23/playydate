import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Ratings = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="star-rating">   
            <h3>Rate this course</h3>         
            {[...Array(5)].map((star, i)=> {
                const ratingValue = i + 1;
                return (                                
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            />
                        <FaStar color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={25} />
                    </label>
                )
            })}
        </div>
    )
}

export default Ratings;