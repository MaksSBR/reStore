import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { bindActionCreators } from 'redux';

import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
// import BookStoreUseContext from '../bookstore-service-usecontext';

import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className= "book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id) }/>
            </li>
          )
        })
      }
    </ul>
  )
};

const BookListContainer = ( {
                    books,
                    loading,
                    error,
                    fetchBooks,
                    onAddedToCart, } ) => {

  useEffect ( () => {
    fetchBooks()
  }, [])

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  return < BookList books={books} onAddedToCart={onAddedToCart}/>
};
//Полная форма mapStateToProps
// const mapStateToProps = (state) => {
//   return {
//     books:state.books
//   };
// };

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return {
    books,
    loading,
    error,
  };
};


const mapDispatchToprops = ( dispatch, { bookstoreService } ) => {
  // const mapDispatchToprops = ( dispatch, ownProps ) => {
  //   const { bookstoreService } =ownProps;

   //   БЕЗ bindActionCreators
  // return {

  //версия БЕЗ meddlewave - Thunk из 'redux-thunk и БЕЗ bindActionCreators
  //fetchBooks: fetchBooks(bookstoreService,dispatch),

  //версия   Thunk из 'redux-thunk и БЕЗ bindActionCreators
  //fetchBooks: () => dispatch( fetchBooks(bookstoreService)() ),

  //     // onAddedToCart:(bookId) => dispatch (bookAddedToCart(bookId)),
  //   }

  // bindActionCreators Thunk из 'redux-thunk'
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
  };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToprops)
)(BookListContainer);
