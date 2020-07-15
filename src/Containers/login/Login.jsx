import React from 'react'
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Component } from 'react';

class Login extends Component {
    state = {
        email: '',

    }

    render() {
        return (
            <div className="form-container">
                <div className="form-head">
                    <span>Login</span>
                    <p>Please provide information to help us serve you better</p>
                </div>
                <form>
                    <div className="">
                    <label>Mobile Number / Email ID</label>
                    <input type="text" />                    
                </form>
            </div>
        )
    }    
}

const mapStateToProps = state => {
    return {
        ctr: "dd"
    }
}
   
export default connect(mapStateToProps)(Login);

