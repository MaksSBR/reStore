import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HeaderShop from '../header-shop';

import {
  HomePage,
  CartPage,
} from '../pages'

import './app.css';

const App = () => {
  return (
    <main role="main" className= "container">
      <HeaderShop numItems={5} total={210}/>
      <Switch>
        <Route path='/'component= {HomePage} exact/>
        <Route path='/cart'component= {CartPage} />
        <Route render= {() =><h2>Page not found</h2>} />
      </Switch>
    </main>
  )
}
export default App;
