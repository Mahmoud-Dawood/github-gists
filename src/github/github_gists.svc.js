'use strict';
angular.module('github')
.service('GithubGistsSvc', function ($http) {
  this.fetch = function () {
    return $http.jsonp('https://api.github.com/gists?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }

  this.search = function (q) {
    return $http.jsonp('https://api.github.com/gists/' + q + '&callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data.items
    })
  }

  this.find = function (login) {
    return $http.jsonp('http://api.github.com/gists/' + login + '?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }
})
