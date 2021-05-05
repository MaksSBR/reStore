import React from 'react';

import './book-list-item.css';
import * as imageSrc from '../../services/book-img';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title,author,price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className='book-cover'>
        <img src={imageSrc[coverImage] } alt={title}/>
      </div>
      <div className ='book-details'>
        <span  className='book-title'>{title}</span>
        <div  className='book-author'>{author}</div>
        <div href='#' className='book-price'>${price}</div>
        <button
          onClick = {onAddedToCart}
          className="btn btn-info add-to-cart">
            Add to cart
        </button>
      </div>
    </div>
  )
};

export default BookListItem;

// C:\Users\София\react-apps\re-store\src\services\book-img\Production.jpg
// src\services\book-img\Release.jpg
// import ds from '../../services/book-img/Release.jpg'
