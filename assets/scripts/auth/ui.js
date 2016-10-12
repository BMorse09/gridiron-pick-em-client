'use strict';

const app = require('../app.js');
const showMatchupsTemplate = require('../templates/matchups-listing.handlebars');
const showLeagueTemplate = require('../templates/league-listing.handlebars');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
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
};

const savePicksSuccess = (data) => {
console.log(data);
  $('#getSavePicksButton');
};

const getMatchupsSuccess = (matchups) => {
  // console.log(data);
  // let matchups = data;
  $('.content').html(showMatchupsTemplate(matchups));
};

const getLeagueSuccess = (matchups) => {
  $('.content').html(showLeagueTemplate(matchups));
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getMatchupsSuccess,
  getLeagueSuccess,
  savePicksSuccess
};
