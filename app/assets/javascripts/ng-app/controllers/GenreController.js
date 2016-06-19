function GenreController($stateParams, BackEndService) {
  var ctrl = this;
  var id = $stateParams.id

  var init = function() {
    BackEndService
      .getGenre(id)
      .then(function(response) {
        console.log(response)
        ctrl.name = response.data.name
        ctrl.artists = response.data.artists
      });
  };

  init()
};

GenreController.$inject = ['$stateParams', 'BackEndService'];

angular
  .module('app')
  .controller('GenreController', GenreController)