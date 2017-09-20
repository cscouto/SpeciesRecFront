var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: ["casa", "test", "fdp"], newItemText:''};
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        
        var currentItems = this.state.items;
        
        currentItems.push(this.state.newItemText);
        
        this.setState({items: currentItems, newItemText:''});
    }, 
    render: function() {
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <dl class="dl-horizontal">
                            <List items={this.state.items} />
                        </dl>
                    </div>
                </div>
        );
    }
});

module.exports = ListManager;