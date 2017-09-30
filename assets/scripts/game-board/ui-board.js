'use strict'

const store = require('../store')

const createBoardSuccess = function (data) {
  console.log('create board data is', data)
  store.game = data.game
  $('#create-button').hide()
  $('#game-board').show()
  console.log('game created is', store.game)
  console.log('user is', store.user)
}

const createBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

const updateBoardSuccess = function (data) {
  console.log('update board data is', data)
}

const updateBoardFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

const getGamesSuccess = function (data) {
  console.log('games data is', data)
  store.games = data.games
  console.log('games over =', store.games)
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
