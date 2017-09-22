var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
                <a  className="list-group-item ">{this.props.text}</a>
        );
    }
});

module.exports = ListItem;

