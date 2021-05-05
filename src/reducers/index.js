import updateSpoppingCart from './reducer-shoppingcart';
import updateBookList from './reducer-booklist';

const reducer = ( state , action) => {

  return {
    shoppingCart: updateSpoppingCart(state, action),
    bookList: updateBookList(state,action),
  }
};

export default reducer;
