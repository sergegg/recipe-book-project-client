'use strict'

let apiUrl
const apiUrls = {
  production: 'https://sergeys-recipe-book-project.herokuapp.com',
  development: 'https://sergeys-recipe-book-project.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
