'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events.js');
const modalEventHandlers = function (){
      $('#sign-up-button').on ('click', function(){
        $('#sign-up-modal').modal('show');
      });

      $('#sign-in-button').on ('click', function(){
        $('#sign-in-modal').modal('show');
      });

      $('#sign-out-button').on('click', authEvents.onSignOut);
      };

      $('#change-password-button').on('click',function(){
        $('#change-password-modal').modal('show');
      });

$(() => {
  modalEventHandlers ();
  authEvents.addHandlers();

});
