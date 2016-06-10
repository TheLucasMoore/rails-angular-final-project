function UserChartController($scope, $stateParams, BackEndService, LastfmService) {

  var ctrl = this;

  var userId = $stateParams.id
  var names = [];
  var listens = [];

  BackEndService
    .getUserArtists(userId)
    .then(function(response) {
      var data = response.data;
      ctrl.username = data.name;
      for(i = 0; i < data.artists.length; i++) {
        var name = data.artists[i].name
        names.push(name)
        // Call LastFM API to grab listens for each artist
        LastfmService
        .getArtist(name)
        .then(function(resp) {
          var playcount = resp.data.artist.stats.playcount
          console.log(resp, playcount)
          listens.push(playcount * 0.007)
        })
      };
    })

  $scope.labels = names;
  $scope.data = [
    listens
  ];
}


angular
  .module('app')
  .controller('UserChartController', UserChartController)
  .config(function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#57c54e']
    });
  })