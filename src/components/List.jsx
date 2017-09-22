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
          this.setState({items: data.list});
      }.bind(this));
    },
    render: function() {
        var listItems = this.state.items.map(function(item) {
            return <ListItem key={item} text={item} />;
        });
        return (<ul className="list-group">{listItems}</ul>);
    }
});

module.exports = List;