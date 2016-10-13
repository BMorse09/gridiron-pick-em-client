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

const onGetMyPicks = () => {
    event.preventDefault();
    api.getMyPicks()
      .done(ui.getMyPicksSuccess)
      .fail(ui.failure);
};

const onSavePicks = (event) => {
    event.preventDefault();
    let data = getFormFields(event.target);
    console.log(data);
    let matchupId = $(event.target).data('id');
    console.log(matchupId);
    data.matchupId = matchupId;
    console.log(data.matchupId);
    api.getSavePicks(data)
      .done(ui.savePicksSuccess)
      .fail(ui.failure);
};

// const onUpdatePicks = (event) => {
//     event.preventDefault();
//     let data = getFormFields(event.target);
//     console.log(data);
//     let matchupId = $(event.target).data('id');
//     data.matchupId = matchupId;
//     api.getUpdatePicks(data)
//       .done(ui.updatePicksSuccess)
//       .fail(ui.failure);
// };


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out-button').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#getMatchupsButton').on('click', onGetMatchups);
  $('#getMyPicksButton').on('click', onGetMyPicks);
  // $('matchupId').on('click', onSavePicks);
  // $("body").on('click','#getSavePicksButton', onSavePicks);
  $("body").on('submit','.picks-form', onSavePicks);
  // $("body").on('submit','.update-picks-form', onUpdatePicks);
};

module.exports = {
  addHandlers,
};
