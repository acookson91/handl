handlApp.controller('handlrsController', ['ipCookie','$scope', '$state', '$auth',
  function(ipCookie ,$scope, $state, $auth){

    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
          $state.go('handlr.deliveries');
        });

    };
}]);
