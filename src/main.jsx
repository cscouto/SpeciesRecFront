var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/List.jsx');
var LoadImage = require('./components/LoadImage.jsx');

ReactDOM.render(<LoadImage />, document.getElementById('loadimage'));
ReactDOM.render(<ListManager title="Especies" />, document.getElementById('especies'));

