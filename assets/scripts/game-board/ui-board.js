'use strict'

const store = require('../store')

const createBoardSuccess = function (data) {
  store.game = data.game
  console.log('create board data is', data)
  $('#message').text('New game started')
  $('#create-button').hide()
  $('#game-board').show('slow')
  console.log('store game is', store.game)
  console.log('store user is', store.user)
}

const createBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

const updateBoardSuccess = function (data) {
  store.game = data.game
  $('#message').text('')
  console.log('update board data is', data)
  console.log('store game data is', store.game)
}

const updateBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

const getGamesSuccess = function (data) {
  store.games = data.games
  console.log('games data is', data)
  console.log('store games = over is', store.games)
  $('#game-stat').text('You have played ' + store.games.length + ' game(s)!')
}

const getGamesFailure = function (error) {
  console.log(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

module.exports = {
  createBoardSuccess,
  createBoardFailure,
  updateBoardSuccess,
  updateBoardFailure,
  getGamesSuccess,
  getGamesFailure
}
