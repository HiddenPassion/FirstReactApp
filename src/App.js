import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import classes from './App.css';
import MainPage from './containers/MainPage/MainPage';
import cartReducer from './store/reducers/cart';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
})

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] Dispatching ', action);
//       const result = next(action);
//       console.log('[Middleware] next state ', store.getState());
//     };
//   };
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(/*logger, */thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={classes.App}>  
            <MainPage />      
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
