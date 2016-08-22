app.controller('CommentController', ['$scope', '$routeParams', 'data', function($scope, $routeParams, data){
  $scope.post = data.suggestions[$routeParams.id];
  $scope.currentPostIndex = parseInt($routeParams.id);


  $scope.emptyComments = "";
  if($scope.post.comments.length == 0) {
    $scope.emptyComments = "Make The First Comment !";
    console.log('running?');
  }
  else {
    $scope.emptyComments = "";
  }

}]);
