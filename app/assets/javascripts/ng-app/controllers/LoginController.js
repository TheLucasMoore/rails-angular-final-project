function LoginController($scope) {
  LoginController.$inject = ['$scope'];

  // The Log In feature is on the backend
  $scope.labels = ['Beyonce', 'Drake', 'Ska to Catch Them All', 'Vanilla Sake', 'Andrew Bird'];
  $scope.data = [
    [1700000, 1193124, 185599, 324081, 321220]
  ];
}

angular
  .module('app')
  .controller('LoginController', LoginController)