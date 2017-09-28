'use strict'

const store = require('../store')

const createBoardSuccess = function (data) {
  console.log('create board data is', data)
  $('#message').text('gamecreated ')
  store.game = data.game
  console.log('game is', store.game)
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
//
// const signInSuccess = function (data) {
//   console.log(data)
//   $('#message').text('Signed in successfully!')
//   store.user = data.user
// }
//
// const signInFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error on sign in')
// }
//
// const changePasswordSuccess = function () {
//   console.log('Changed Password successfully!')
//   $('#message').text('Changed Password successfully!')
// }
//
// const changePasswordFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error Change Password')
// }
//
// const signOutSuccess = function () {
//   console.log('Signed Out successfully!')
//   $('#message').text('Signed Out successfully!')
//   store.user = null
//   console.log(store.user)
// }
//
// const signOutFailure = function (error) {
//   console.log(error)
//   $('#message').text('Error on sign out')
// }

module.exports = {
  createBoardSuccess,
  createBoardFailure,
  updateBoardSuccess,
  updateBoardFailure
}
