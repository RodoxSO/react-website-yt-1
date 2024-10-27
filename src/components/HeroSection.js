import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
        <h1>Enjoy! We will take care of the rest.</h1>
        <p>Contact us NOW</p>
        
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><i className='fa fa-phone' /> 0333 577 1250</Button>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><i className='fa fa-mobile' /> 07759 936863 </Button>
        </div>
    </div>
  )
}

export default HeroSection