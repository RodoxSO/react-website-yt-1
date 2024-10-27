import React from 'react';
import './Cards.css';
import { CardItem } from './CardItem';


function Cards() {
  return (
    <div className='cards'>
        <h1>All our services are customised according to your needs</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/card_residence.jpg' 
                        text_price='From £17/h'
                        text='Clean and organised house? We will do it for you.' 
                        label='Residencial' 
                        path='/Services' 
                    />
                    <CardItem 
                        src='images/card_office.jpg'
                        text_price='From £20/h'
                        text='Leave the cleaning of your company in the good hands.' 
                        label='Commercial and Industrial' 
                        path='/Services' 
                    />
                    <CardItem 
                        src='images/card_airbnb.jpg'
                        text_price='From £20/h'
                        text='Offer the best experience to your customer.' 
                        label='AIRBNB' 
                        path='/Services' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
