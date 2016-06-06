function BackEndService($http) {

  this.getArtists = function() {
    return $http.get('http://localhost:3000/artists')
  };

  this.getGenres = function() {
    return $http.get('http://localhost:3000/genres')
  };

  this.getUserArtists = function(id) {
    return $http.get('http://localhost:3000/users/' + id)
  }
}

angular
  .module('app')
  .service('BackEndService', BackEndService)