import React from "react";
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";
import './About.css'
import { CardAbout } from '../CardAbout';

export default function About() {
    
    return (
        <>
        <h1 className="about">Who are us?</h1>


        <div className='cards'>
        <h1>All our services are customised according to your needs</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardAbout 
                        src='images/about.jpg' 
                        text_price=''
                        line1 = 'As a professional cleaning company, our goal is to deliver impeccable results, ensuring our customers feel confident and fully satisfied.'
                        line2 = 'With expertise in commercial, industrial, Airbnb, and residential cleaning, our team of highly trained professionals is equipped with top-quality materials to achieve outstanding outcomes.'
                        line3 = 'We believe a clean environment promotes physical and mental well-being, offering lasting benefits to our clients.'
                        label='The Bird Cleaning Services' 
                        path='#' 
                    />
       </ul>
            </div>
        </div>
    </div>


{/* 
        <div className="grid-container">
            <div className="div_image">
                
            </div>           
            <div className="div_text">
                <div className="info">
                    We are The Bird Cleaning Services!
                </div>
                <div className='text'>
                    As a professional cleaning company, our goal is to deliver impeccable results, ensuring our customers feel confident and fully satisfied. <br/><br/>
                    With expertise in commercial, industrial, Airbnb, and residential cleaning, our team of highly trained professionals is equipped with top-quality materials to achieve outstanding outcomes.<br/><br/>
                    We believe a clean environment promotes physical and mental well-being, offering lasting benefits to our clients.
                </div>
            </div>
        </div>
*/}
        <Footer/>  
        </>
    ) 
}