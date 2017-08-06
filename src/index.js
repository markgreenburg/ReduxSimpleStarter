// Import react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import subcomponents
import SearchBar from './components/searchBar';

// Pull in youtube API key and search lib
import youtube from '../config.js';


// Create new functional component that produces some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
      Hi!
    </div>
  );
};

// Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));