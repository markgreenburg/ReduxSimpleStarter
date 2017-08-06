// Import react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create new functional component that produces some HTML
const App = () => <div>Hi!</div>;

// Take component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));