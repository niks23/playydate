import React from 'react'
import { connect } from 'react-redux';
import { Component } from 'react';
import close from '../../assets/close.png'
import './login.scss';

class Login extends Component {
    state = {
		uname: '',
		password: '',
		formErrors: {
			uname: "",
			password: ""
		}
    }

    render() {
        return (			
            <div className="formcontainer">
				<div className="wrapper">
				<img src={close} alt="boohoo" className="close"/>
					<div className="formhead">
						<h2>Login</h2>
						<p>Please provide information to help us serve you better</p>
					</div>
					<form>
						<div className="uname">
							<label htmlFor="uname">Mobile Number / Email ID</label>
							<input 
								type="text" 
								name="uname"
							/>
						</div>
						<div className="password">
							<label htmlFor="pwd">Password</label>
							<input 
								type="password" 
								name="pwd"
							/>
						</div>
						<div className="formhelpers">					                                
							<div className="remember">
								{/* <input type="checkbox" value="remember-me" name="rememberMe"/> */}
								<span></span>
								<label htmlFor="rememberMe">Remember me</label> 
							</div>
							<span>Forgot Password?</span>
						</div>
						<div className="logincta">
							<button className="signin">Sign in</button>
							<span>OR</span>
							<button className="facebook">Continue with Facebook</button>
						</div>
					</form>
					<div className="register">
					<span>Don't have and account?</span>
					<a className="newaccount">Create Account</a>
				</div>
				</div>
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

