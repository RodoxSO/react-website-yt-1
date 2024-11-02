import React from 'react';
import { Link } from 'react-router-dom';


export const CardAbout = (props) => {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                  <img src={props.src} alt='' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__price'>{props.text_price}</h5>
                  <h5 className='cards__about__text'>{props.line1}<br /><br /></h5>
                  <h4 className='cards__about__text'>{props.line2}<br /><br /></h4>
                  <h4 className='cards__about__text'>{props.line3}<br /><br /></h4>
                </div>
            </Link>
        </li>
    </>
  )
}
