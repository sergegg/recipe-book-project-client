'use strict'
const config = require('./../config')
const store = require('./../store')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    data,
    headers: {
      authorization: 'Bearer ' + store.user.token
    }
  })
}
const editRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.recipe._id,
    method: 'PATCH',
    data,
    headers: {
      authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewRecipe = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.recipe._id,
    method: 'GET',
    data,
    headers: {
      authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    data,
    headers: {
      authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  editRecipe,
  viewRecipe,
  index
}
