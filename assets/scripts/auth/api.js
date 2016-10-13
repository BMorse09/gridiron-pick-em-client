'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const getMatchups = () => {
  return $.ajax({
    url: app.host +'/matchups/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getMyPicks = () => {
  return $.ajax({
    url: app.host +'/predictions',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getPrediction = (id) => {
  return $.ajax({
    url: app.host +'/predictions/' + id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getSavePicks = (data) => {
  return $.ajax({
    url: app.host +'/predictions',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      prediction: {
        user_id: app.user.id,
        matchup_id: data.matchupId,
        pick: data.pick,
      },
    },
  });
};

const getUpdatePicks = (data, id) => {
  console.log(data);
  return $.ajax({
    url: app.host +'/predictions/' + id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
    // {
    //   prediction: {
    //     user_id: app.user.id,
    //     matchup_id: app.matchup.id,
    //     pick: data.pick,
    //   },
    // },
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getMatchups,
  getSavePicks,
  getUpdatePicks,
  getMyPicks,
  getPrediction
};
