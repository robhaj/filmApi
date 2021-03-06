var app = angular.module("app", ["ngRoute"]);
//
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/search.html",
    controller: "SearchController"
  })
  .when("/recommend", {
    templateUrl: "./views/recommend.html",
    controller: "SearchController"
  })
  .when("/library", {
    templateUrl: "./views/library.html",
    controller: "SearchController"
  })
  .when("/watchlist", {
    templateUrl: "./views/watchlist.html",
    controller: "SearchController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
