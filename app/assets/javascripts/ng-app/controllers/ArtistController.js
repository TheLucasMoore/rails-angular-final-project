function ArtistController($scope, $stateParams, BackEndService) {
  var ctrl = this;
  ctrl.id = $stateParams.id

  var init = function() {
    BackEndService
      .getArtist(ctrl.id)
      .then(function(response) {
        var artist = (response.data)
        ctrl.name = artist.name 
        ctrl.image = artist.image
        ctrl.link = artist.link
        ctrl.uri = artist.uri
        ctrl.genres = artist.genres
      })
  };

  init()

};

ArtistController.$inject = ['$scope', '$stateParams', 'BackEndService'];

angular
  .module('app')
  .controller('ArtistController', ArtistController)