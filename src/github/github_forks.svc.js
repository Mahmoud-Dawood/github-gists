'use strict';
angular.module('github')
.service('GithubForksSvc', function ($http) {
  this.fetch = function () {
    return $http.jsonp('https://api.github.com/forks?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }
 
  this.search = function (q) {
    return $http.jsonp('https://api.github.com/gists/' + q + '/forks&callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data.items
    })
  }

  this.find = function (login) {
    return $http.jsonp('http://api.github.com/gists/' + login + '/forks?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }
})
