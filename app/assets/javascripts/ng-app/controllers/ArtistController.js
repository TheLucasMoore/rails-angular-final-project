function ArtistController($scope, $stateParams, BackEndService, LastfmService, $http) {
  var ctrl = this;
  ctrl.id = $stateParams.id;

  var Genre = function(name) {
    this.name = name
  }

  var init = function() {

    BackEndService
      .getArtist(ctrl.id)
      .then(function(response) {
        var artist = (response.data)
        var name = artist.name.replace(' ','%20')
        ctrl.name = artist.name 
        ctrl.image = artist.image
        ctrl.link = artist.link
        ctrl.streams = artist.streams
        ctrl.earnings = (artist.streams * 0.007).toLocaleString()
        ctrl.uri = artist.uri
        ctrl.genres = artist.genres

      LastfmService
          .getArtist(name)
          .then(function(response) {
            console.log(response)
            ctrl.bio = response.data.artist.bio.summary
      })
    })
  };

  $scope.sendGenre = function() {
    var data = JSON.stringify({id: ctrl.id, genre: $scope.newGenre})
    var temp = new Genre($scope.newGenre)
    ctrl.genres.push(temp)
    console.log(ctrl.genres)
    BackEndService
      .postGenre(data)
  }

  init()

};

ArtistController.$inject = ['$scope', '$stateParams', 'BackEndService', 'LastfmService'];

angular
  .module('app')
  .controller('ArtistController', ArtistController)