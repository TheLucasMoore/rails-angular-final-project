function UserChartController($scope, $stateParams, BackEndService, LastfmService) {

  var ctrl = this;
  var userId = $stateParams.id
  var chartLimit = 5;

  function Artist(name, streams) {
    this.name = name;
    this.streams = streams;
  }
  // these arrays will keep everything neat and tidy
  var artists = new Array();
  var names = new Array();
  var earnings = new Array();

  BackEndService
    .getUserArtists(userId)
    .then(function(response) {
      // Spotify Username of User
      ctrl.username = response.data.name;
      // Set all variable equal to array of all a user's top artists
      ctrl.all = response.data.artists
      console.log(response)

      // Loop through artists names
      for(i = 0; i < chartLimit; i++) {
        var name = response.data.artists[i].name;
        getListens(name);
      }
    });

  function getListens(name) {
    //Call LastFM API to grab listens for each artist
    //Doing this in the front end allows them to by dynamically updated
    LastfmService
    .getArtist(name)
    .then(function(resp) {
      playcount = parseInt(resp.data.artist.stats.playcount)
      var artist = new Artist(name, playcount)
      artists.push(artist);
      if (artists.length >= chartLimit) {
        populateArrays(artists);
        }
    });
  }

  // Pull out names and listens into arrays for ChartJS
  function populateArrays(artists) {
    for(i = 0; i < artists.length; i++) {
        names[i] = artists[i].name
        earnings[i] = (artists[i].streams * 0.007)
      }
    }

  // variables to populate ChartJS with arrays of artists and money
  $scope.labels = names;
  $scope.data = [
    earnings
  ];
}

UserChartController.$inject = ['$scope', '$stateParams', 'BackEndService', 'LastfmService']

angular
  .module('app')
  .controller('UserChartController', UserChartController)
  .config(function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#57c54e']
    });
  })