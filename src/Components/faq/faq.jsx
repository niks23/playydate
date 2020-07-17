import React from 'react';
import './faq.scss'
import arrowup from '../../assets/arrowup.png';

const faq = (props) => {
    return (
        <div 
            className={"faq " + (props.faq.open ? 'open': '')} 
            key={props.index}
            onClick={() => props.toggleFAQ(props.index)}
        >
            <div className="faq-question">
               <h4>{props.faq.ques}</h4>               
               <span><img src={arrowup}></img></span>
            </div>            
            <div className="faq-answer">
                <p>{props.faq.ans}</p>
                <span><img src={arrowup}></img></span>
            </div>            
        </div>
    )
}

export default faq;