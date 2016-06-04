function GenresController(BackEndService) {
  var ctrl = this;
  var artists = []

  var init = function() {
    BackEndService
      .getGenres()
      .then(function(response) {
        ctrl.all = response.data
        console.log(ctrl.all)
      })
  };

  init()

};

angular
  .module('app')
  .controller('GenresController', GenresController)