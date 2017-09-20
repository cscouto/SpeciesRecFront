var React = require('react');
var List = require('./List.jsx');
var HTTP = require('../services/httpservice');

var ListManager = React.createClass({
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
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <dl className="dl-horizontal">
                            <List items={this.state.items} />
                        </dl>
                    </div>
                </div>
        );
    }
});

module.exports = ListManager;