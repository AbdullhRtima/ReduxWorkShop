import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'
import Formpost from './components/Formpost'
import { Provider } from 'react-redux';
import store from './store'
// import {createStore , applyMiddleware } from 'redux';

// const  store = createStore( ()=> [] ,{} , applyMiddleware()); 


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
          <div className="App">
          <Formpost/>
            <Posts/>
            </div>
      </Provider>
    
    );
  }
}

export default App;

