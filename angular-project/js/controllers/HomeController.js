app.controller('HomeController', ['$scope', 'data', function($scope, data){
  $scope.helloWorld = "Hello, Naeem Rahman! You are using Anglular!";
  $scope.posts = data.suggestions;


  $scope.upVote = function(post){
    console.log("I AM RUNNING CONTROLLER");
    post.upvotes += 1;
  }


}]);
