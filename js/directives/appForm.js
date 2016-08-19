app.directive('appForm', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/formTemplate.html'
  };
});
