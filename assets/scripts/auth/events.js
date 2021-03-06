'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = () => {
  // event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onGetMatchups = (data) => {
    event.preventDefault();
    api.getMatchups(data)
      .done(ui.getMatchupsSuccess)
      .fail(ui.failure);
};

const onGetLeague = (data) => {
    event.preventDefault();
    api.getMatchups(data)
      .done(ui.getLeagueSuccess)
      .fail(ui.failure);

};

const onSavePicks = (data) => {
    event.preventDefault();
    api.getSavePicks(data)
      .done(ui.savePicksSuccess)
      .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out-button').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#getMatchupsButton').on('click', onGetMatchups);
  $('#getLeagueButton').on('click', onGetLeague);
  $("body").on('click','#getSavePicksButton',onSavePicks);
};

module.exports = {
  addHandlers,
};
