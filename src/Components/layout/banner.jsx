import React from 'react'
import './layout.scss';
import banner from '../../assets/banner.jpg'
import play from '../../assets/play.png'
import gallery from '../../assets/gallery.png';
import phone from '../../assets/phone.png';
import share from '../../assets/share.png';

const Banner = () =>  {
    return (
        <div className="banner">
            <img src={banner} className="banner-img"></img>     
            <div className="wrapper">                
            </div>            
            <div className="bannershare">
                <span><img src={phone}></img></span>
                <span><img src={share}></img></span>
            </div>
            <img src={play} className="play"></img>     
            <div className="gallery">
                <img src={gallery}></img>                 
                <span>+12</span>
            </div>    
        </div>
    )
}

export default Banner;
