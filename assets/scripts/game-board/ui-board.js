'use strict'

const store = require('../store')

const createBoardSuccess = function (data) {
  console.log('create board data is', data)
  $('#create-button').hide()
  $('#game-board').show()
  $('#message').text('gamecreated ')
  store.game = data.game
  console.log('game created is', store.game)
  console.log('user is', store.user)
  // store.user = data.user
}

const createBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Error on create game')
}

const updateBoardSuccess = function (data) {
  console.log('update board data is', data)
  $('#message').text('game updated')
}

const updateBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Error on create game')
}

const getGamesSuccess = function (data) {
  console.log('games data is', data)
  store.games = data.games
  console.log('games over =', store.games)
  $('#game-stat').text('You have played ' + store.games.length + ' game(s)!')
}

const getGamesFailure = function (error) {
  console.log(error)
}

module.exports = {
  createBoardSuccess,
  createBoardFailure,
  updateBoardSuccess,
  updateBoardFailure,
  getGamesSuccess,
  getGamesFailure
}
