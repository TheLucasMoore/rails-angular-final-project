function BackEndService($http) {

  this.getArtists = function() {
    return $http.get('http://localhost:3000/artists')
  };
}

angular
  .module('app')
  .service('BackEndService', BackEndService)