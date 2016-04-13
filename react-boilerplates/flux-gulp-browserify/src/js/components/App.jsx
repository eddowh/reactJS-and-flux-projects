/**
 * Main application
 */

var React = require('react');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({

    render: function() {
        return (
            <div>
                Hello World!
            </div>
        );
    }

});

module.exports = App;
