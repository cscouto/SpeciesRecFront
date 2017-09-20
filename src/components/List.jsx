var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

<<<<<<< HEAD
var List = React.createClass({
    getInitialState: function() {
        return {items: []};
    },
    componentWillMount: function() {
      HTTP.get('/getSpecies')
      .then(function(data){
          this.setState({items: data});
      }.bind(this));
    },
    render: function() {
        var listItems = this.state.items.list.map(function(item) {
            return <ListItem key={item} text={item} />;
        });
        return (<u>{listItems}</u>);
=======
var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
>>>>>>> 86b00d830372c7f90218ad5ab6a9fa517243e347
    }
});

module.exports = List;