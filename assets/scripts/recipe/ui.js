'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateRecipeSuccess = function (event) {
  $('#message').text('yes Create')
  // console.log('are we even getting this event? ', event)
  // console.log('are we even getting this store? ', store)
  // console.log('is store.recipe a thing ', store.recipe)
  // console.log('is event.recipe a thing ', event.recipe)
  // store.recipe = event.recipe
  console.log('is event a thing AFTER', event)
  $('form').trigger('reset')
}
const onEditRecipeSuccess = function (event) {
  $('#message2').text('yes EDIT')
  // console.log('are we even getting this event? EDIT ', event)
  // console.log('are we even getting this store? EDIT ', store)
  // console.log('is store.recipe a thing EDIT ', store.recipe)
  // console.log('is event.recipe a thing EDIT ', event.recipe)
  // // store.recipe = event.recipe
  // console.log('is store.recipe a thing AFTER EDIT ', store.recipe)
  $('form').trigger('reset')
}
const onViewRecipeSuccess = function (event) {
  $('#message2').text('yes View 1')
  console.log('are we even getting this event? ', event) // this works and this event shows the recipe
  $('form').trigger('reset')
}
const onGetRecipesSuccess = function (event) {
  $('#message2').text('yes View Aall')
  console.log('are we even getting this event? ', event) // this works and this shows an array of recipes
}
module.exports = {
  onError,
  onCreateRecipeSuccess,
  onEditRecipeSuccess,
  onViewRecipeSuccess,
  onGetRecipesSuccess
}
