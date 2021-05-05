import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

// лог и стринг на Middleware
const logMiddleware =() => (dispatch) => (action) => {
//const logMiddleWare =(store,dispatch) => (action) => {

  console.log(action.type);
  return dispatch(action);
}

// в документациях часто dispatch заменяют на next
const stringMiddleware = () => (dispatch) => (action) => {
  //const stringMiddleware = (store) => (next) => (action) => {

  if (typeof action === 'string') {
    return dispatch ({
    // retutn next ({
      type: action
    })
  }
  return dispatch(action);
  //return next (action);
}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware
  )
);

// const myAction = (dispatch) => {
//   setTimeout (() => dispatch({  type: 'DELAYED_ACTION'}),2000)
// }

// store.dispatch(myAction);

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
};

store.dispatch(delayedActionCreator(3000));


export default store;

// лог и стринг на Enhancer
//import { createStore,compose } from 'redux';
// const logEnhancer = (createStore) => (...args) => {
//   const store = createStore (...args);

//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     console.log(action.type);
//     originalDispatch(action);
//   };
//   return store;
// };

// const stringEnhancer = (createStore) => (...args) => {
//   const store = createStore (...args);

//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     if (typeof action === 'string') {
//       return originalDispatch ({
//         type: action
//       })
//     }
//     originalDispatch(action);
//   };
//   return store;
// };

// const store = createStore(reducer,compose(stringEnhancer, logEnhancer));
// store.dispatch('HELLO_WORLD')
//export default store;
