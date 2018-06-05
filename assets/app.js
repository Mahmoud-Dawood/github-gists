angular.module("github", []),

angular.module("app", ["ngRoute", "users", "forks", "gists"]), 

angular.module("users", ["github"]), 

angular.module("forks", ["github"]), 

angular.module("gists", ["github"]), 

angular.module("app").config(["$routeProvider", "$locationProvider", function (t, e) {
    e.html5Mode(!0), t.when("/", {
        templateUrl: "/templates/home.html"
    }).when("/users", {
        controller: "UsersCtrl",
        templateUrl: "/templates/users.html"
    }).when("/users/:login", {
        controller: "ShowUserCtrl",
        templateUrl: "/templates/show_user.html"
    }).when("/forks", {
        controller: "ForksCtrl",
        templateUrl: "/templates/forks.html"
    }).when("/gists", {
        controller: "GistsCtrl",
        templateUrl: "/templates/gists.html"
    })
}]), 

angular.module("github").service("GithubRepoSvc", ["$http", function (t) {
    this.fetchByUser = function (e) {
        return t.jsonp("https://api.github.com/users/" + e + "/repos?sort=updated&callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }
}]), 

angular.module("github").service("GithubUserSvc", ["$http", function (t) {
    this.fetch = function () {
        return t.jsonp("https://api.github.com/users?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }, this.search = function (e) {
        return t.jsonp("https://api.github.com/search/users?q=" + e + "&callback=JSON_CALLBACK").then(function (t) {
            return t.data.data.items
        })
    }, this.find = function (e) {
        return t.jsonp("http://api.github.com/users/" + e + "?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }
}]), 

angular.module("github").service("GithubForksSvc", ["$http", function (t) {
    this.fetch = function () {
        return t.jsonp("https://api.github.com/gists?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }, this.search = function (e) {
        return t.jsonp("https://api.github.com/search/gists?q=" + e + "&callback=JSON_CALLBACK").then(function (t) {
            return t.data.data.items
        })
    }, this.find = function (e) {
        return t.jsonp("http://api.github.com/gists/" + e + "?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }
}]), 

angular.module("github").service("GithubGistsSvc", ["$http", function (t) {
    this.fetch = function () {
        return t.jsonp("https://api.github.com/gists?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }, this.search = function (e) {
        return t.jsonp("https://api.github.com/search/gists?q=" + e + "&callback=JSON_CALLBACK").then(function (t) {
            return t.data.data.items
        })
    }, this.find = function (e) {
        return t.jsonp("http://api.github.com/gists/" + e + "?callback=JSON_CALLBACK").then(function (t) {
            return t.data.data
        })
    }
}]), 

angular.module("users").controller("ShowUserCtrl", ["$scope", "$routeParams", "GithubUserSvc", "GithubRepoSvc", function (t, e, n, r) {
    n.find(e.login).then(function (e) {
        t.user = e
    }), r.fetchByUser(e.login).then(function (e) {
        t.repos = e
    })
}]), 

angular.module("users").controller("UsersCtrl", ["$scope", "GithubUserSvc", function (t, e) {
    e.fetch().then(function (e) {
        t.users = e
    }), t.search = function (n) {
        e.search(n).then(function (e) {
            t.users = e
        })
    }
}]),

angular.module("forks").controller("ForksCtrl", ["$scope", "GithubForksSvc", function (t, e) {
    e.fetch().then(function (e) {
        t.forks = e
    })
}]),

angular.module("gists").controller("GistsCtrl", ["$scope", "GithubGistsSvc", function (t, e) {
    e.fetch().then(function (e) {
        t.gists = e
    })
}]);