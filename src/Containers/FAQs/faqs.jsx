import { connect } from 'react-redux';
import React, { Component } from 'react';
import FAQ from '../../Components/faq/faq';
import faq from '../../Components/faq/faq';
import { toggle } from '../../store/actions/faq';
import './faqs.scss';
class faqs extends Component {

    toggleFAQ = (index) => {
        const newFAQ = this.props.faqs.map((faq, i) => {
            if(i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false; 
            }
                                
            return faq;
        });

        this.props.toggleAction(newFAQ);
    }

    render() {
        return (
            <div className="faqs">
                <div className="wrapper">
                    <h2>FAQ's</h2>
                    {this.props.faqs.map((faq, i) => {
                        return <FAQ 
                            faq={faq}
                            index={i}
                            toggleFAQ={this.toggleFAQ}
                        />
                    })}
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        faqs: state.faqs
    }
}
 
const mapDispatchToProps = dispatch => {
    return {        
        toggleAction: (faq) => dispatch(toggle(faq, 'faqs')) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(faqs);

