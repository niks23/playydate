import React from 'react'
import './batch.scss';
import arrowup from '../../assets/arrowup.png';

const batch = props =>  {
    return (
        <div 
            className={"batch " + (props.batch.open ? 'open': '')} 
            key={props.index}
            onClick={() => props.toggleBatch(props.index)}
        >
            <div className="batch-name">
               <h4>{props.batch.batchName}</h4>               
               <span><img src={arrowup}></img></span>
            </div>            
            <div className="batch-desc">
                <p>{props.batch.batchAddr}</p>
                <span>Get Direction</span>
                <div className="batchday"> 
                    <div className="mwf-batch">
                        <h5>M W F Batch</h5>
                        <ul >
                        { props.batch.mwfBatch.map((batch, i) => {
                            return <li key={i}>{batch}</li>
                        })}     
                        </ul>    
                    </div>
                    <div className="sunday-batch">
                        <h5>Sunday Batch</h5>
                        <ul>
                            { props.batch.sundayBatch.map((batch, i) => {
                            return <li key={i}>{batch}</li>
                            })}     
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default batch;
