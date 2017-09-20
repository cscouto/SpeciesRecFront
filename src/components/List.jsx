var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

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
    }
});

module.exports = List;