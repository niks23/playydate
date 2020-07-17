import { connect } from 'react-redux';
import React, { Component } from 'react';
import { toggle } from '../../store/actions/faq';
import Batch from '../../Components/batch/batch'
import './batches.scss';

class batches extends Component {
    
    toggleBatch = (index) => {

        console.log(index);
        return;
        const newBatch = this.props.batches.map((batch, i) => {
            if(i === index) {
                batch.open = !batch.open;
            } else {
                batch.open = false; 
            }

            return batch;
        });

        this.props.toggleAction(newBatch);
    }

    render() {
        return (
            <div className="batches">
                <div className="wrapper">
                    <h2>Batches</h2>
                    {this.props.batches.map((batch, index) => {
                        return <Batch 
                            batch={batch}
                            index={index}
                            toggleBatch={this.toggleBatch}
                            
                        />
                    })}
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        batches: state.batches
    }
}
 
const mapDispatchToProps = dispatch => {
    return {        
        toggleAction: (batch) => dispatch(toggle(batch, 'batches')) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(batches);
