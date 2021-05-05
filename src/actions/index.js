// создаем action creator

const booksLoaded = (newBooks) => {
  return {
    type: 'FETC_BOOKS_SUCCESS',
    payload: newBooks,
  }
};

const booksRequested = () => {
  return {
    type: 'FETC_BOOKS_REQUESTED'
  }
};
const bookError = (error) => {
  return {
    type: 'FETC_BOOKS_FAILURE',
    payload: error,
  }
};
const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

const bookRemovedFromCart = (id) => {
  return {
    type: 'BOOK_REMOVED_TO_CART',
    payload: id
  }
}
const allBooksREmovedCart = (id) => {
  return {
    type: 'ALL_BOOK_REMOVED_FROM_CART',
    payload: id
  }
}
// версия без meddlewave - Thunk из 'redux-thunk
// const fetchBooks = (bookstoreService,dispatch) => () => {
//   dispatch(booksRequested());
//   bookstoreService.getBooks()
//     .then( ( data ) => dispatch(booksLoaded( data )) )
//     .catch( (err) => dispatch(bookError( err )) )
// }

// версия  meddlewave - Thunk из 'redux-thunk
const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(bookError(err)));
}


export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksREmovedCart,
};
