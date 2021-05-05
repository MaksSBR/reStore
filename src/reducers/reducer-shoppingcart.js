
const updateCartItems = (cartItems, item, idx) => {
  if (item.count ===0) {
    return [
      ...cartItems.splice(0,idx),
      ...cartItems.splice(idx+1),]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  } else {
    // let arr = [...cartItems]
    // arr[idx]=item
    // console.log(arr)
    // return arr
    return [
      ...cartItems.splice(0,idx),
      item,
      ...cartItems.splice(idx+1),]
  }
};

const updateCartItem = (book, item = {}, quantify) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0 } = item;

  return  {
    id,
    title,
    count: count + quantify,
    total: total + book.price * quantify,
  }
};

const updateOrder = (state, bookId, quantify) => {

  const { shoppingCart: { cartItems }, bookList: { books }  } = state;
  const book = books.find( (book) => book.id ===bookId);
  const itemIndex = cartItems.findIndex( ({id}) => id ===bookId);
  const item =cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantify)

  return {
    orderTotal: 0,
    cartItems: updateCartItems( cartItems, newItem, itemIndex)
  }
};

const updateSpoppingCart = (state,action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  };
  switch (action.type) {
    case 'BOOK_REMOVED_TO_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOK_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find( ({id}) => id ===action.payload );
      return updateOrder(state,action.payload, -item.count);
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    default :
      return state.shoppingCart;
  };
};

export default updateSpoppingCart;
