import React from 'react';
import './Cards.css';
import { CardItem } from './CardItem';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg' 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/Services' 
                    />
                    <CardItem 
                        src='images/img-2.jpg' 
                        text='Travel to  the beautiful islands of Greece' 
                        label='Luxury' 
                        path='/Services' 
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-3.jpg' 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/Services' 
                    />
                    <CardItem 
                        src='images/img-4.jpg' 
                        text='Travel to  the beautiful islands of Greece' 
                        label='Luxury' 
                        path='/Services' 
                    />
                    <CardItem 
                        src='images/img-8.jpg' 
                        text='Travel to  the beautiful islands of Greece' 
                        label='Luxury' 
                        path='/Sign-up' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
