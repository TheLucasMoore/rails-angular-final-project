function ArtistsController(BackEndService) {
  var ctrl = this;
  var artists = []

  var init = function() {
    BackEndService
      .getArtists()
      .then(function(response) {
        ctrl.all = response.data
        console.log(ctrl.all)
      })
  };

  init()

};

angular
  .module('app')
  .controller('ArtistsController', ArtistsController)