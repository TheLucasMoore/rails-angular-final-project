function GenresController(BackEndService) {
  var ctrl = this;
  var artists = []

  var init = function() {
    BackEndService
      .getGenres()
      .then(function(response) {
        ctrl.all = response.data
      })
  };

  init()
};

GenresController.$inject = ['BackEndService'];

angular
  .module('app')
  .controller('GenresController', GenresController)