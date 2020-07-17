import React from 'react';
import './aboutclass.scss';

const Aboutclass = () => {
    return (
        <div className="aboutclass"> 
            <div className="wrapper">
                <div className="class-top">
                    <span>Music</span>
                    <h2>Classical and Folk Guitar</h2>                    
                    <div className="reference">
                        <span className="rate">4.5</span>
                        <ul>
                            <li><span>84 reviews</span></li>
                            <li><span>By <b style={{color: '#f16a23'}}>Navneet Kaur</b></span></li>
                            <li><span>600 m</span></li>
                        </ul>
                    </div>
                </div>
                <div className="class-add">
                    <p>
                    3rd, 15th Road, Oppsite to Casper Mumbai Properties, Oppsite to Casper Mumbai Properties, Khar West, Mumbai- 400052
                    </p>
                </div>
                <div className="pricing">
                    <p><span>Rs. 1000</span><span>/ week</span><span>25% OFF</span></p>
                    <span className="price">Rs. 1500 / week</span>
                    <p>(Buy Minimum 1 week, book multiple week at this place)</p>
                </div>

                <ul className="date">
                    <li>
                        <span>Start Date</span>
                        <span>10.04.2029</span>
                    </li>
                    <li> <span>End date</span>
                        <span>15.04.2029</span></li>
                    <li> <span>Age req.</span>
                        <span>10 -16 yrs</span></li>
                    <li> <span>Batches</span>
                        <span>03</span></li>
                </ul>
            </div>    
        </div>
    )
}

export default Aboutclass;