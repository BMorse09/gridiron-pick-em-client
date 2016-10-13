'use strict';

const app = require('../app.js');
const showMatchupsTemplate = require('../templates/matchups-listing.handlebars');
const myPicksListing = require('../templates/my-picks-listing.handlebars');
const showLeagueTemplate = require('../templates/league-listing.handlebars');
const editPickListing = require('../templates/edit-pick-listing.handlebars');
const api = require('./api.js');
const getFormFields = require('../../../lib/get-form-fields');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
  $('.alert').alert();
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#sign-in-modal').modal('hide');
  // console.log(app.user);
};

const signOutSuccess = () => {
  app.user = null;
  $('#getMatchupsButton').modal('hide');
  $('#getLeagueButton').modal('hide');
  $('.content').html('');
};

const getMatchupsSuccess = (matchups) => {
  // console.log(data);
  // let matchups = data;
  $('.content').html('');
  $('.content').html(showMatchupsTemplate(matchups));
};

const onUpdatePick = (event) => {
    event.preventDefault();
    let data = getFormFields(event.target);
    // console.log(data);
    let pickId = $(event.target).find('.updatePickButton').data('id');
    api.getUpdatePicks(data, pickId)
      .done(updatePickSuccess)
      .fail(failure);
};

const onGetPredictionSuccess = (prediction) => {
  console.log(prediction);
  app.matchup = prediction.matchup;
  $('.content').html('');
  $('.content').html(editPickListing(prediction));
  $('.update-pick-form').on('submit', onUpdatePick);
};

// const getLeagueSuccess = (matchups) => {
//   $('.content').html(showLeagueTemplate(matchups));
// };

const onEditPick = (event) => {
  event.preventDefault();
  let predictionId = $(event.target).data('id');
  api.getPrediction(predictionId)
  .done(onGetPredictionSuccess)
  .fail(failure);

};

const getMyPicksSuccess = (predictions) => {
  // let picks = data.predictions;
  $('.content').html('');
  $('.content').html(myPicksListing(predictions));
  $('.edit-pick-button').on('click', onEditPick);
};


const savePicksSuccess = () => {
// // console.log(data);
//   $('#getSavePicksButton');
};

const updatePickSuccess = () => {
  $('.content').html('');
  api.getMyPicks()
  .done(getMyPicksSuccess)
  .fail(failure);
};


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getMatchupsSuccess,
  // getLeagueSuccess,
  savePicksSuccess,
  // getUpdatePickSuccess,
  getMyPicksSuccess
};
