var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppAPI = require('../utils/appAPI.js');
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

// define where to store your fetched data
// initialize as empty
// var obj = [] | {} | ''


var AppStore = assign({}, EventEmitter.prototype, {

    // define getter and setter methods
    setObj: function(argument) {
        return;
    },

    getObj: function() {
        return;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});


AppDispatcher.register(function(payload) {

    var action = payload.action;

    switch (action.actionType) {

        // case AppConstants.A_CONSTANT:
        // ...

    }

    return true;

});


module.exports = AppStore;
