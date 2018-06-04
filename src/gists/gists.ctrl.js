angular.module('gists')
  .controller('GistsCtrl', function ($scope, GithubGistsSvc) {
    GithubGistsSvc.fetch().then(function (gists) {
      $scope.gists = gists
    })

    $scope.search = function (q) {
      GithubGistsSvc.search(q).then(function (gists) {
        $scope.gists = gists
      })
    }
  })