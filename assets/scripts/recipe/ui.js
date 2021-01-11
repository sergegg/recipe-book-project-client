'use strict'

// const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateRecipeSuccess = function (event) {
  $('#message').text('You have created your recipe successfully!')
  $('#display-recipe').hide()
  $('#display-recipe').show()
  const recipeHTML = `
  <h4>The recipe name is: ${event.recipe.name}</h4>
  <h6>This is the recipe ID: ${event.recipe._id}</h6>
  <h6>The category of food is:  ${event.recipe.category}</h6>
  <h6>The type of cuisine is: ${event.recipe.cuisine}</h6>
  <h6>The ingredients are: ${event.recipe.ingredients}</h6>
  <h6>The prep time for this meal is: ${event.recipe.prepTime}</h6>
`
  $('#display-recipe').html(recipeHTML)
  $('form').trigger('reset')
}
const onEditRecipeSuccess = function (event) {
  $('#message2').text('The edit was a success, view new recipe using the view recipe option')
  $('#display-recipe').hide()
  $('form').trigger('reset')
}

const onViewRecipeSuccess = function (event) {
  $('#message2').text('Here is the requested recipe')
  $('#display-recipe').hide()
  $('#display-recipe').show()
  const recipeHTML = `
  <h4>The recipe name is: ${event.recipe.name}</h4>
  <h6>This is the recipe ID: ${event.recipe._id}</h6>
  <h6>The recipe name is: ${event.recipe.name}</h6>
  <h6>The category of food is:  ${event.recipe.category}</h6>
  <h6>The type of cuisine is: ${event.recipe.cuisine}</h6>
  <h6>The ingredients are: ${event.recipe.ingredients}</h6>
  <h6>The prep time for this meal is: ${event.recipe.prepTime} Minutes</h6>
`
  $('#display-recipe').html(recipeHTML)
  $('form').trigger('reset')
}
const onGetRecipesSuccess = function (event) {
  $('#message2').text('Below are all of the recipes')
  // console.log('are we even getting this event? ', event) // this works and this shows an array of recipes
  $('#display-recipe').hide()
  $('#display-recipe').show()
  for (let i = 0; i < event.recipe.length; i++) {
    const recipeHTML = `
  <h4>The recipe name is: ${event.recipe[i].name}</h4>
  <h6>This is the recipe ID: ${event.recipe[i]._id}</h6>
  <h6>The recipe name is: ${event.recipe[i].name}</h6>
  <h6>The category of food is:  ${event.recipe[i].category}</h6>
  <h6>The type of cuisine is: ${event.recipe[i].cuisine}</h6>
  <h6>The ingredients are: ${event.recipe[i].ingredients}</h6>
  <h6>The prep time for this meal is: ${event.recipe[i].prepTime}</h6>
`
    $('#display-recipe').append(recipeHTML)
  }
}

const onDeleteRecipeSuccess = function (event) {
  $('#message2').text('You have deleted the requested recipe')
  $('form').trigger('reset')
  $('#display-recipe').hide()
}
module.exports = {
  onError,
  onCreateRecipeSuccess,
  onEditRecipeSuccess,
  onViewRecipeSuccess,
  onGetRecipesSuccess,
  onDeleteRecipeSuccess
}
