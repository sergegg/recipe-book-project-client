'use strict'

const authEvents = require('./auth/events')
const recipeEvents = require('./recipe/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.auth-sign-in').hide()
  $('.unconfirmed').show()
  // set up the sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // set up the sign up
  $('#sign-in').on('submit', authEvents.onSignIn)
  // set up the sign up
  $('#change-pw').on('submit', authEvents.onChangePw)
  // set up the sign up
  $('#sign-out').on('click', authEvents.onSignOut)
})
