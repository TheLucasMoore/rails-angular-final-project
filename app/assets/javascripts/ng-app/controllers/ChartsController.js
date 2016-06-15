function ChartsController($scope) {
  $scope.labels = ['Teebs', 'Damu the Fudgemunk', 'RJD2', 'Andrew Bird', 'Theivery Corporation'];
  $scope.data = [
    [29970, 11924, 185599, 324086, 301220]
  ];
}

ChartsController.$inject = ['$scope'];

angular
  .module('app')
  .controller('ChartsController', ChartsController)
  .config(function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#57c54e']
    });
  })