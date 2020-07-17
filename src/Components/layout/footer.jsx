import React from 'react';
import logo from '../../assets/logo.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import './layout.scss';

function footer() {
    return (
        <footer>
            <div className="wrapper">
                <div class="about">
                    <img src={logo} alt="playydate" className="logo"/>
                    <p>Playydate is a platform for parents to find and book kids' activity classes in their neighbourhood. If you are a teacher, you can use the platform to list your class, reach out to more moms and allow them to book your class online. Just click on List your class to get started</p>
                </div>

                <div className="extra">
                    <div className="linkcontainer">
                        <h3>Useful Links</h3>
                        <ul className="links">
                            <li><a>Home</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>terms & conditions</a></li>
                        </ul>
                    </div>
                    <div className="upperclasscontainer">
                        <h3>Classes</h3>
                        <ul className="classes">
                            <li><a>Piano</a></li>
                            <li><a>Guitar</a></li>
                            <li><a>Craft</a></li>
                            <li><a>Yoga</a></li>
                        </ul>
                    </div>                    
                </div>   
                <div className="extra">       
                    <div className="extracontainer">
                        <h3>Classes</h3>
                        <div className="classcontainer">
                            <ul className="classes">
                                <li><a>Piano</a></li>
                                <li><a>Guitar</a></li>
                                <li><a>Craft</a></li>
                                <li><a>Yoga</a></li>
                            </ul>
                            <ul className="classes">                             
                                <li><a>Piano</a></li>
                                <li><a>Guitar</a></li>
                                <li><a>Craft</a></li>
                                <li><a>Yoga</a></li>
                            </ul>
                        </div>
                    </div>                                        
                </div>
                <div className="copyright">
                    <span>Playydate. All rights reserved</span>
                    <ul>
                        <li><img src={fb}></img></li>
                        <li><img src={insta}></img></li>
                    </ul>
                </div>
            </div>            
        </footer>
    )
}

export default footer
