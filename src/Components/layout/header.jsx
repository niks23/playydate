import React from 'react'
import logo from '../../assets/logo.png'
import hamburger from '../../assets/hamburger.png';
import './layout.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="headertop">
                <div className="wrapper">
                    <span>Panvel</span>
                </div>    
            </div>
            <div className="wrapper">
                <div className="container">
                    <a href="/" className="logo"><img src={logo}></img></a>            
                    <div className="header-right"> 
                        <span>Sign in</span>
                        <button type="submit">List your class</button>
                        <img src={hamburger}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;