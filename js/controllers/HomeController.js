app.controller('HomeController', ['$scope', 'data', function($scope, data){
  $scope.helloWorld = "Hello, Naeem Rahman! You are using Anglular!";

  $scope.posts = data.suggestions;

  $scope.errorNameCheck = "Naeem";
  $scope.errorSuggestionCheck = "Rahmsn";

  $scope.addSuggestion = function(){
    console.log("bad feed");
    if ($scope.message == ''){
      $scope.errorSuggestionCheck = "Woops! You forgot to enter your suggestion!";
      return;
    };
    if ($scope.from == '') {
      $scope.errorNameCheck = "Woops! You forgot to enter yourn name";
      return;
    }

    $scope.posts.push({

    })
  }

}]);
