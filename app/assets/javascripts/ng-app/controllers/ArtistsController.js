function ArtistsController(BackEndService) {
  var ctrl = this;
  var artists = []

  var init = function() {
    BackEndService
      .getArtists()
      .then(function(response) {
        ctrl.all = response.data
      })
  };

  init()

};

ArtistsController.$inject = ['BackEndService'];

angular
  .module('app')
  .controller('ArtistsController', ArtistsController)