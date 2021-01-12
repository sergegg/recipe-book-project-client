'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#message').text('Failed to execute, please try again or fix the code. ', error)
}
const signUpSuccess = function (response) {
  $('#message').text('User signed up successfully!! :) welcome to the website')
  // reset form
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#message').text('Signed in successfully, enjoy your time! ')
  // show all the hidden fields once the user signs in
  $('.unconfirmed').hide()
  $('#example-sign-up').hide()
  $('#if-signed-in').hide()
  $('#after-sign-in').show()
  $('.auth-sign-in').show()
  // store the token which was assigned to the user upon sign in.
  store.user = response.user
  const recipeHTML = `
  <h2>This is a template on how the System expects the information inputted in above form</h2>
  <h6>The name is the name of the recipe that you're creating</h6>
  <h6>The category of food is "Breakfast, Lunch, Dinner, or All"</h6>
  <h6>The type of cuisine is whatever cuisine the food is, if none really then enter "All"</h6>
  <h6>The ingredients section expects the ingredient name AND the quanitity needed</h6>
  <h6>The prep time expects a number of estimated time to make meal IN MINUTES</h6>
`
  $('#display-recipe-template').html(recipeHTML)
  // reset form
  $('form').trigger('reset')
}
const changePwSuccess = function (response) {
  $('#message').text('Changed Password Successfully. ')
  // reset form again
  $('form').trigger('reset')
}
const signOutSuccess = function (response) {
  $('#message').text('Signed out successfully, come back soon! ')
  // erase user token
  store.user = null
  $('.auth-sign-in').hide()
  $('#display-recipe').hide()
  $('#after-sign-in').hide()
  $('.unconfirmed').show()
  $('#example-sign-up').show()
  $('#if-signed-in').show()
  // hide the confirmed fields and show the unconfirmed agian
  // reset
  $('form').trigger('reset')
}

module.exports = {
  onError,
  signUpSuccess,
  signInSuccess,
  changePwSuccess,
  signOutSuccess
}
