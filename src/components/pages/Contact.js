import React from "react";
import '../../App.css';
import './Contact.css';
import Footer from "../Footer";
import { CardItem } from "../CardItem";

export default function Contact() {
    return (
        <>
        <h1 className="contact">CONTACT</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/contact-phone-on-table.jpg' 
                            text_price=''
                            text='0333 5771250' 
                            label= 'Phone'
                            path='#' 
                        />
                        <CardItem 
                            src='images/contact-mobile-on-table.jpg'
                            text_price=''
                            text='0775 9936863' 
                            label='Mobile' 
                            path='#' 
                        />
                        <CardItem 
                            src='images/contact-email-image.jpg'
                            text_price=''
                            text='contact@thebird.co.uk' 
                            label='E-mail' 
                            path='#' 
                        />
                        <CardItem 
                            src='images/instagram-image.jpg'
                            text_price=''
                            text='@thebirdcleaning' 
                            label='Instagran' 
                            path='#' 
                        />
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    ) 
}