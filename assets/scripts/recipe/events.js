'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createRecipe(data)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onError)
}
const onEditRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editRecipe(data)
    .then(ui.onEditRecipeSuccess)
    .catch(ui.onError)
}
const onViewRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.viewRecipe(data)
    .then(ui.onViewRecipeSuccess)
    .catch(ui.onError)
}
const onGetRecipes = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetRecipesSuccess)
    .catch(ui.onError)
}
const onDeleteRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteOne(data)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateRecipe,
  onEditRecipe,
  onViewRecipe,
  onGetRecipes,
  onDeleteRecipe
}
