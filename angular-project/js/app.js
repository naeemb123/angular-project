var app = angular.module('SuggestionBoxApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: './views/home.html'
  })
  .when('/comments/:id', {
    controller: 'CommentController',
    templateUrl: './views/commentPage.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})
