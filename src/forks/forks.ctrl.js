angular.module('forks')
  .controller('ForksCtrl', function ($scope, GithubForksSvc) {
    GithubForksSvc.fetch().then(function (forks) {
      $scope.forks = forks
    })

    $scope.search = function (q) {
      GithubForksSvc.search(q).then(function (forks) {
        $scope.forks = forks
      })
    }

  })